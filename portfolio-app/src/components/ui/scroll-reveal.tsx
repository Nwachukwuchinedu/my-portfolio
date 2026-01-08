"use client"
import { motion } from "framer-motion";

export function ScrollReveal({ children, className }: { children: React.ReactNode; className?: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }} // Trigger when 100px into view
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }} // Premium ease
            className={className}
        >
            {children}
        </motion.div>
    );
}
