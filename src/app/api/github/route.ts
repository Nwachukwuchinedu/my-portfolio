import { Octokit } from 'octokit';
import { NextResponse } from 'next/server';

const getOctokit = () => {
    return new Octokit({ auth: process.env.GITHUB_TOKEN });
};

async function fetchGitHubData(username: string) {
    const octokit = getOctokit();
    try {
        // 1. Fetch Commit Events for the AI Summary logic
        const eventsRes = await octokit.request('GET /users/{username}/events/public', {
            username,
            per_page: 30
        });

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const commitMessages = eventsRes.data
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .filter((e: any) => e.type === 'PushEvent')
            .slice(0, 3)
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            .map((e: any) => e.payload.commits.map((c: any) => c.message).join('. '))
            .join('; ');

        // 2. Fetch Top Languages
        // We'll fetch the user's repos and aggregate language usage
        const reposRes = await octokit.request('GET /users/{username}/repos', {
            username,
            type: 'owner',
            sort: 'updated',
            per_page: 50 // Look at 50 most recently updated repos
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
