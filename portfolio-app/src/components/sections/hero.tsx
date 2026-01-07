"use client"

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function HeroSection() {
    return (
        <section id="hero" className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden pt-20">
            {/* Background Elements managed by global grid, but we keep hero glow */}

            <div className="z-10 text-center px-4 max-w-5xl mx-auto">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-4xl md:text-7xl font-bold font-display tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/70 pb-2"
                >
                    Engineering High-Performance <br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-cyan-400">
                        Digital Products
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="mt-6 text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto"
                >
                    Senior Software Developer specializing in full-stack architecture,
                    performance optimization, and developer experience.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="mt-10 flex gap-4 justify-center"
                >
                    <a href="#work" className="px-8 py-3 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-transform">
                        View Work
                    </a>
                    <a href="#contact" className="px-8 py-3 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:scale-105 transition-transform">
                        Contact Me
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                        className="w-1.5 h-1.5 bg-cyan-400 rounded-full"
                    />
                </div>
            </motion.div>
        </section>
    );
}
