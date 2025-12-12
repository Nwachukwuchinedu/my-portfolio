import { motion } from "framer-motion";

export const BackgroundGrid = () => {
    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Straight Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 opacity-30"
                style={{
                    backgroundImage: `linear-gradient(#9CA3AF 1px, transparent 1px), linear-gradient(90deg, #9CA3AF 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />

            {/* Fading Masks using CSS Gradients */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/80" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white/80" />

            {/* Animated Blobs for "Effects" */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-200/30 rounded-full blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.1, 0.3, 0.1],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2,
                }}
                className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-200/20 rounded-full blur-3xl"
            />
        </div>
    );
};
