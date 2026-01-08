"use client"
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function BlogPreviewSection() {
    const posts = [
        {
            title: "Scaling WebSocket Connections to 10k+",
            date: "Oct 12, 2025",
            tag: "System Design"
        },
        {
            title: "The Case for Vanilla CSS in 2026",
            date: "Sep 28, 2025",
            tag: "Frontend"
        },
        {
            title: "Optimizing Next.js for Core Web Vitals",
            date: "Aug 15, 2025",
            tag: "Performance"
        }
    ];

    return (
        <section className="relative z-10 py-20 w-full px-4 border-t border-white/5">
            <div className="max-w-5xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <h2 className="text-3xl font-bold font-display mb-2">Engineering Log</h2>
                        <p className="text-muted-foreground">Recent thoughts on software and systems.</p>
                    </div>
                    <Link href="/blog" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium group">
                        View all articles <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {posts.map((post, i) => (
                        <motion.a
                            href="/blog"
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-6 rounded-xl border border-border/10 bg-white dark:bg-white/5 shadow-lg dark:shadow-none hover:shadow-xl dark:hover:bg-white/10 hover:-translate-y-1 transition-all group cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-xs font-mono text-muted-foreground">{post.date}</span>
                                <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs border border-cyan-500/20">{post.tag}</span>
                            </div>
                            <h3 className="text-xl font-bold font-display mb-2 group-hover:text-cyan-200 transition-colors line-clamp-2">
                                {post.title}
                            </h3>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
