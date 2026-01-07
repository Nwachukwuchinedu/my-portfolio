"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Scene3D } from "../ui/scene-3d";

export function HeroSection() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollY } = useScroll();

    // Parallax / Split transform values
    // As user scrolls from 0 to 300px:
    // Left part moves left (-100%)
    // Right part moves right (100%)
    // Content reveals the 3D scene behind

    const xLeft = useTransform(scrollY, [0, 500], [0, -400]);
    const xRight = useTransform(scrollY, [0, 500], [0, 400]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]); // Fade out text eventually
    const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

    // Reveal opacity for the 3D element (starts slightly hidden, becomes clearer? Or just sits there?)
    // User said "Revealing a 3D object". So maybe the object opacity increases?
    const objOpacity = useTransform(scrollY, [0, 300], [0.2, 1]);

    return (
        <section
            ref={containerRef}
            id="hero"
            className="relative h-[120vh] w-full flex flex-col items-center justify-start overflow-hidden pt-32"
        >
            {/* 3D Scene Background (Behind everything) */}
            <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none overflow-hidden">
                <motion.div style={{ opacity: objOpacity }} className="w-full h-full max-w-[800px] max-h-[800px]">
                    <Scene3D />
                </motion.div>
            </div>

            <div className="z-10 text-center px-4 max-w-7xl mx-auto w-full mt-20">

                {/* Split Heading */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-2 md:gap-6 perspective-1000">
                    <motion.div style={{ x: xLeft, opacity: scale }} className="md:text-right">
                        <h1 className="text-5xl md:text-8xl font-black font-display tracking-tighter leading-none">
                            ENGINEERING
                        </h1>
                        <h1 className="text-5xl md:text-8xl font-black font-display tracking-tighter leading-none text-muted-foreground/50">
                            HIGH PERF
                        </h1>
                    </motion.div>

                    <motion.div style={{ x: xRight, opacity: scale }} className="md:text-left">
                        <h1 className="text-5xl md:text-8xl font-black font-display tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-cyan-400">
                            DIGITAL
                        </h1>
                        <h1 className="text-5xl md:text-8xl font-black font-display tracking-tighter leading-none">
                            PRODUCTS
                        </h1>
                    </motion.div>
                </div>

                <motion.p
                    style={{
                        y: useTransform(scrollY, [0, 300], [0, 100]),
                        opacity: useTransform(scrollY, [0, 200], [1, 0])
                    }}
                    className="mt-12 text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto font-medium"
                >
                    Senior Software Developer <span className="text-cyan-400">•</span> Full Stack Architect
                </motion.p>

                <motion.div
                    style={{ opacity: useTransform(scrollY, [0, 100], [1, 0]) }}
                    className="mt-16 flex gap-6 justify-center"
                >
                    <a href="/work" className="px-8 py-4 rounded-full bg-foreground text-background font-bold text-lg hover:scale-105 transition-transform">
                        View Work
                    </a>
                    <a href="/contact" className="px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-md font-bold text-lg hover:scale-105 transition-transform">
                        Contact Me
                    </a>
                </motion.div>
            </div>

            {/* Scroll Hint */}
            <motion.div
                style={{ opacity: useTransform(scrollY, [0, 100], [1, 0]) }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block"
            >
                <p className="text-xs font-mono text-muted-foreground mb-2">SCROLL TO EXPLORE</p>
                <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-500 to-transparent mx-auto" />
            </motion.div>

        </section>
    );
}
