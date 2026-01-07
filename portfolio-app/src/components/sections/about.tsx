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
                    <h2 className="text-3xl font-bold mb-6 font-display">Master Craftsman</h2>
                    <div className="prose dark:prose-invert">
                        <p className="text-lg leading-relaxed text-muted-foreground">
                            I build software systems that scale. With over 8 years of experience, I specialize in architecting resilient full-stack applications where performance and developer velocity are paramount.
                        </p>
                        <p className="mt-4 leading-relaxed text-muted-foreground">
                            My philosophy is simple: Technical rigor meets pragmatic delivery. Every line of code should serve a purpose and compound value over time.
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
                    className="relative h-[400px] w-full bg-gradient-to-br from-violet-500/10 to-cyan-500/10 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center p-8"
                >
                    <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px]" />
                    <div className="relative z-10 p-6 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 max-w-sm w-full shadow-2xl">
                        <div className="flex space-x-2 mb-4">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <div className="text-sm font-mono text-cyan-300 min-h-[120px]">
                            <TypewriterCode />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

function TypewriterCode() {
    const codeString = `async function scaleSystem(load: Load): Promise<Result> {
  // optimizing critical path
  if (load.isHigh()) {
    await shardDatabase();
    await enableFuzzyCaching();
  }
  return { status: "optimized" };
}`;

    // Simple tokenizer for syntax highlighting
    const getHighlightClass = (word: string) => {
        if (["async", "function", "if", "return", "await"].includes(word)) return "text-violet-400";
        if (["Load", "Promise", "Result"].includes(word)) return "text-yellow-300";
        if (["scaleSystem", "shardDatabase", "enableFuzzyCaching", "isHigh"].includes(word)) return "text-cyan-300";
        if (word.startsWith("//")) return "text-muted-foreground"; // content handles comments logic better below
        if (word.startsWith('"')) return "text-green-400";
        return "text-white";
    };

    // We split by segments to preserve colors, but animate chars
    // Actually, easiest way for React + Framer "Typewriter" with colors:
    // Render the full colored tree, but mask it with a revealing motion div?
    // OR animate opacity of each character.
    // Let's do char-by-char.

    // Custom splitting logic to handle highlighted segments
    // This is a simplified "manual" highlight approach for clarity/performance
    const tokens = [
        { text: "async", color: "text-violet-400" },
        { text: " ", color: "text-white" },
        { text: "function", color: "text-violet-400" },
        { text: " ", color: "text-white" },
        { text: "scaleSystem", color: "text-cyan-300" },
        { text: "(", color: "text-white" },
        { text: "load", color: "text-foreground" },
        { text: ": ", color: "text-white" },
        { text: "Load", color: "text-yellow-300" },
        { text: ")", color: "text-white" },
        { text: ": ", color: "text-white" },
        { text: "Promise", color: "text-yellow-300" },
        { text: "<", color: "text-white" },
        { text: "Result", color: "text-yellow-300" },
        { text: "> ", color: "text-white" },
        { text: "{", color: "text-white" },
        { text: "\n  ", color: "text-white" },
        { text: "// optimizing critical path", color: "text-muted-foreground italic" },
        { text: "\n  ", color: "text-white" },
        { text: "if", color: "text-violet-400" },
        { text: " ", color: "text-white" },
        { text: "(", color: "text-white" },
        { text: "load", color: "text-foreground" },
        { text: ".", color: "text-white" },
        { text: "isHigh", color: "text-cyan-300" },
        { text: "()", color: "text-white" },
        { text: ") ", color: "text-white" },
        { text: "{", color: "text-white" },
        { text: "\n    ", color: "text-white" },
        { text: "await", color: "text-violet-400" },
        { text: " ", color: "text-white" },
        { text: "shardDatabase", color: "text-cyan-300" },
        { text: "();", color: "text-white" },
        { text: "\n    ", color: "text-white" },
        { text: "await", color: "text-violet-400" },
        { text: " ", color: "text-white" },
        { text: "enableFuzzyCaching", color: "text-cyan-300" },
        { text: "();", color: "text-white" },
        { text: "\n  ", color: "text-white" },
        { text: "}", color: "text-white" },
        { text: "\n}", color: "text-white" },
    ];

    /* 
       To animate char by char, we flatten tokens into an array of characters with metadata 
    */
    const chars = tokens.flatMap(token =>
        token.text.split("").map(char => ({ char, color: token.color }))
    );

    return (
        <div className="font-mono text-xs md:text-sm leading-relaxed whitespace-pre-wrap">
            {chars.map((item, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.01, delay: i * 0.03 }} // Fast typing speed
                    className={item.color}
                >
                    {item.char}
                </motion.span>
            ))}
            <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                className="inline-block w-2 h-4 bg-cyan-400 ml-1 align-middle"
            />
        </div>
    );
}
