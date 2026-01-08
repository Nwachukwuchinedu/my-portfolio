"use client"
import { motion } from "framer-motion";

export function ScrollReveal({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px" }} // Trigger every time it enters/leaves
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }} // Premium ease
            className={className}
        >
            {children}
        </motion.div>
    );
}
