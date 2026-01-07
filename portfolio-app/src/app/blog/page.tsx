import { UnevenGridBackground } from "@/components/ui/background-grid";
import { ArrowRight } from "lucide-react";

export default function BlogPage() {
    const posts = [
        {
            title: "Scaling WebSocket Connections to 10k+",
            excerpt: "Lessons learned from building a real-time collaboration engine using Go and Redis.",
            date: "Oct 12, 2025",
            readTime: "8 min read",
            tag: "System Design"
        },
        {
            title: "The Case for Vanilla CSS in 2026",
            excerpt: "Why we might be swinging back from utility-first frameworks to semantic CSS with modern browser features.",
            date: "Sep 28, 2025",
            readTime: "5 min read",
            tag: "Frontend"
        },
        {
            title: "Optimizing Next.js for Core Web Vitals",
            excerpt: "A deep dive into hydration strategies, image optimization, and font loading.",
            date: "Aug 15, 2025",
            readTime: "12 min read",
            tag: "Performance"
        },
        // ...
    ];

    return (
        <main className="min-h-screen pt-32 px-4 pb-20 overflow-hidden">
            <UnevenGridBackground />
            <div className="max-w-4xl mx-auto relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold font-display mb-4">Engineering Log</h1>
                <p className="text-muted-foreground text-lg mb-20">Thoughts on software architecture, design systems, and the future of web.</p>

                <div className="space-y-12">
                    {posts.map((post, i) => (
                        <article key={i} className="group cursor-pointer border-b border-white/10 pb-12 last:border-0">
                            <div className="flex items-center gap-4 text-xs font-mono text-cyan-500 mb-3">
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                                <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300">{post.tag}</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold font-display mb-3 group-hover:text-violet-400 transition-colors">
                                {post.title}
                            </h2>
                            <p className="text-muted-foreground text-lg mb-4">
                                {post.excerpt}
                            </p>
                            <div className="flex items-center text-sm font-bold text-foreground group-hover:translate-x-2 transition-transform">
                                Read Article <ArrowRight className="w-4 h-4 ml-1" />
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </main>
    )
}
