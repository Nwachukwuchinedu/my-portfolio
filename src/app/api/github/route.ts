import { Octokit } from 'octokit';
import { NextResponse } from 'next/server';

const getOctokit = () => {
    return new Octokit({ auth: process.env.GITHUB_TOKEN });
};

async function fetchGitHubData(username: string) {
    if (!process.env.GITHUB_TOKEN) {
        console.error("GITHUB_TOKEN is not defined in environment variables");
        return NextResponse.json({ error: 'GitHub authentication token missing' }, { status: 500 });
    }

    const octokit = getOctokit();
    try {
        // Verify authentication
        const { data: viewer } = await octokit.request('GET /user');
        console.log(`Authenticated as: ${viewer.login}`);

        const eventsRes = await octokit.request('GET /users/{username}/events', {
            username,
            per_page: 30
        });

        // Defensive check for data existence and type
        const events = Array.isArray(eventsRes.data) ? eventsRes.data : [];

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const commitMessages = events
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .filter((e: any) => e.type === 'PushEvent' && e.payload?.commits)
            .slice(0, 3)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((e: any) => e.payload.commits.map((c: any) => c.message).join('. ') || "")
            .filter((msg: string) => msg !== "")
            .join('; ');

        // 2. Fetch Top Languages
        // Use /user/repos to include private repositories for the authenticated user
        const reposRes = await octokit.request('GET /user/repos', {
            type: 'owner',
            sort: 'updated',
            per_page: 50
        });

        const languageCounts: Record<string, number> = {};

        // Fetch language stats for each repo asynchronously
        await Promise.all(
            reposRes.data.map(async (repo) => {
                // Skip forks to only analyze original code
                if (repo.fork) return;

                if (repo.language) {
                    try {
                        const langs = await octokit.request('GET /repos/{owner}/{repo}/languages', {
                            owner: username,
                            repo: repo.name
                        });

                        Object.entries(langs.data).forEach(([lang, bytes]) => {
                            // eslint-disable-next-line @typescript-eslint/no-explicit-any
                            languageCounts[lang] = (languageCounts[lang] || 0) + (bytes as any);
                        });
                    } catch {
                        // Ignore individual repo language fetch failures silently to prevent crashing
                    }
                }
            })
        );

        // Sort and get top 5
        const topLanguages = Object.entries(languageCounts)
            .sort(([, a], [, b]) => b - a)
            .slice(0, 5)
            .map(([lang, bytes]) => {
                return { name: lang, value: bytes };
            });

        // Calculate total bytes for percentage
        const totalTopBytes = topLanguages.reduce((sum, lang) => sum + lang.value, 0);

        const languagesWithPercentages = topLanguages.map(lang => ({
            name: lang.name,
            percentage: totalTopBytes > 0 ? (lang.value / totalTopBytes) * 100 : 0
        }));


        return NextResponse.json({
            commitMessages,
            topLanguages: languagesWithPercentages
        });

    } catch (error) {
        console.error("Error fetching GitHub data:", error);
        return NextResponse.json({ error: 'Failed to fetch GitHub data' }, { status: 500 });
    }
}

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url)
    const username = searchParams.get('username')

    if (!username) {
        return NextResponse.json({ error: 'Username is required' }, { status: 400 });
    }

    return await fetchGitHubData(username);
}
