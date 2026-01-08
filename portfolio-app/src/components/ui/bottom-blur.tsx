"use client"

import { motion, useScroll, useTransform } from "framer-motion";

export function BottomBlur() {
    const { scrollYProgress } = useScroll();

    // Hide the blur as we approach the very bottom (footer)
    // 0 to 0.9: Opacity 1
    // 0.9 to 1.0: Opacity 1 -> 0
    const opacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);
    const pointerEvents = useTransform(scrollYProgress, (v) => v > 0.9 ? "none" : "none"); // Always none anyway

    return (
        <motion.div
            style={{ opacity }}
            className="fixed bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-[50] pointer-events-none backdrop-blur-[2px]"
        />
    );
}
