"use client"
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

export function ContactSection() {
    return (
        <section className="py-20 w-full px-4 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-violet-900/10 to-transparent pointer-events-none" />

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-5xl font-bold mb-6"
                >
                    Ready to Build Scalable Systems?
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="text-xl text-muted-foreground mb-10"
                >
                    I&apos;m currently open to opportunities in platform engineering and distributed systems.
                    Let&apos;s discuss how I can help your team ship faster.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    <a href="mailto:hello@example.com" className="px-8 py-4 rounded-full bg-cyan-600 hover:bg-cyan-500 text-white font-medium transition-colors flex items-center gap-2 group">
                        <Mail className="w-5 h-5" />
                        <span>Send me an email</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <div className="flex gap-4">
                        <button className="p-4 rounded-full border border-border hover:bg-muted transition-colors" aria-label="GitHub">
                            <Github className="w-5 h-5" />
                        </button>
                        <button className="p-4 rounded-full border border-border hover:bg-muted transition-colors" aria-label="LinkedIn">
                            <Linkedin className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
