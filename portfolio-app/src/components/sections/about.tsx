"use client"
import { motion } from "framer-motion";

export function AboutSection() {
    return (
        <section id="about" className="relative z-10 py-20 w-full px-4 bg-muted/30 scroll-mt-20">
            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-6">Master Craftsman</h2>
                    <div className="prose dark:prose-invert">
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            I build software systems that scale.
                        </p>
                        <p className="mt-4 leading-relaxed text-muted-foreground">
                            Over the past 8 years, I&apos;ve specialized in architecting full-stack applications for high-growth companies where performance, reliability, and developer velocity are non-negotiable. My work spans infrastructure optimization, real-time systems, and developer tooling—areas where precision engineering directly impacts business outcomes.
                        </p>
                        <p className="mt-4 leading-relaxed text-muted-foreground">
                            I approach software development as a craft. Every system I design balances technical rigor with pragmatic delivery. Whether optimizing database queries to handle millions of transactions, building developer platforms that accelerate team velocity, or architecting APIs that serve as the foundation for product growth, I prioritize solutions that compound value over time.
                        </p>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        {["Rust", "Go", "TypeScript", "Kubernetes", "AWS", "Terraform"].map((tech) => (
                            <span key={tech} className="px-3 py-1 rounded-md text-sm font-medium bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                                {tech}
                            </span>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="relative h-[500px] w-full bg-gradient-to-br from-violet-500/10 to-cyan-500/10 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center p-8"
                >
                    {/* Abstract visual representation of systems */}
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
                    <div className="relative z-10 p-6 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 max-w-sm">
                        <div className="flex space-x-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <code className="text-sm font-mono text-cyan-300">
                            <span className="text-violet-400">func</span> <span className="text-yellow-300">ScaleSystem</span>(load <span className="text-cyan-300">Load</span>) <span className="text-violet-400">Result</span> {"{"}<br />
                            &nbsp;&nbsp;<span className="text-muted-foreground">// optimizing critical path</span><br />
                            &nbsp;&nbsp;<span className="text-violet-400">if</span> load.IsHigh() {"{"}<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;ShardDatabase()<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;EnableFuzzyCaching()<br />
                            &nbsp;&nbsp;{"}"}<br />
                            {"}"}
                        </code>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
