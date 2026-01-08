"use client"
import React from 'react';
import { motion } from "framer-motion";

export function BackgroundGrid() {
    return (
        <div className="fixed inset-0 z-0 pointer-events-none">
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

            {/* Radial Mask for "Uneven/Shadowy" effect */}
            {/* We use a mask that makes the center visible and fades out towards edges, or vice versa. 
            User said "shadowy... showing on some parts".
            Let's make spots of visibility.
        */}
            <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,transparent_70%,black)]"></div>
            {/* Wait, standard approach is: Grid is everywhere, Mask hides it. 
            If I want grid to SHOW only in some parts (like a spotlight), I use black (visible) in mask.
            radial-gradient(black, transparent) -> Center visible, edges hidden.
        */}

            <div className="absolute inset-0 bg-background/90 [mask-image:radial-gradient(ellipse_80%_80%_at_50%_20%,transparent_20%,black)]">
                {/* This layer sits ON TOP of grid to fade it out? No. */}
            </div>
        </div>
    )
}

// Improved version based on "Uneven grid... on some parts"
// Improved version with Animated Lighting/Glows & Random "Lightning" Beams
export function UnevenGridBackground() {
    const [lightningPos, setLightningPos] = React.useState<Array<{ top: number, left: number, debug?: string }>>([]);

    React.useEffect(() => {
        // Generate 2 random positions for "Lightning" beams on mount (refresh)
        setLightningPos([
            { top: Math.random() * 80, left: Math.random() * 80 },
            { top: Math.random() * 80, left: Math.random() * 80 }
        ]);
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background dark:bg-black transition-colors duration-500">
            {/* Top Spotlight / Lightning Source */}
            <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-violet-500/20 dark:bg-violet-500/10 rounded-full blur-[100px] opacity-70" />

            {/* Base Grid with Mask */}
            <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)]"></div>

            {/* Random "Lightning" Beams */}
            {lightningPos.map((pos, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                        opacity: [0.4, 0.8, 0.4],
                        scale: [1, 1.2, 1],
                        rotate: [45, 40, 50, 45]
                    }}
                    transition={{ duration: 5 + i * 2, repeat: Infinity, ease: "easeInOut" }}
                    style={{
                        top: `${pos.top}%`,
                        left: `${pos.left}%`,
                    }}
                    className="absolute w-[2px] h-[400px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent blur-[2px] shadow-[0_0_30px_5px_rgba(34,211,238,0.4)] transform -rotate-45 origin-center"
                >
                    {/* Cross beam for flare effect */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[2px] bg-cyan-400/50 blur-[2px]" />
                </motion.div>
            ))}

            {/* Animated Ambient Glows */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.1, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        x: [0, -50, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-[-10%] right-[-10%] w-[800px] h-[800px] bg-violet-500/20 rounded-full blur-[120px]"
                />
                {/* Random smaller glow for depth */}
                <motion.div
                    animate={{ opacity: [0.1, 0.3, 0.1], scale: [1, 1.5, 1] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute top-[40%] right-[20%] w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px]"
                />
            </div>
        </div>
    )
}
