import { UnevenGridBackground } from "@/components/ui/background-grid";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Server, Layout, Box, Code } from "lucide-react";

export default function AboutPage() {
    return (
        <main className="min-h-screen pt-32 px-4 pb-20 overflow-hidden">
            <UnevenGridBackground />
            <div className="max-w-6xl mx-auto relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold font-display mb-10 text-center">Master Craftsman</h1>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                    <div className="col-span-1 md:col-span-2 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md">
                        <h2 className="text-2xl font-bold mb-4 font-display">Philosophy</h2>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I believe that great software is born at the intersection of rigorous engineering and intuitive design.
                            My approach is deeply rooted in the "First Principles" of computer science, ensuring that every
                            abstraction is necessary and every line of code serves a purpose.
                        </p>
                        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                            In an era of AI-generated code, text-book solutions, and rapid commoditization,
                            I focus on **craftsmanship**—building systems that are not just functional, but resilient,
                            maintainable, and delightful to use.
                        </p>
                    </div>
                    <div className="col-span-1 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md flex flex-col justify-center items-center text-center">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 mb-6 flex items-center justify-center text-3xl font-bold text-white">
                            8+
                        </div>
                        <h3 className="text-xl font-bold">Years Experience</h3>
                        <p className="text-sm text-muted-foreground mt-2">Delivering production-grade software for startups and enterprises.</p>
                    </div>
                </div>

                <h2 className="text-3xl font-bold font-display mb-8">Career Timeline</h2>
                <div className="space-y-8 pl-8 md:pl-0 border-l md:border-l-0 border-white/10 md:space-y-0 md:grid md:grid-cols-1">
                    {/* Timeline Items */}
                    {[
                        { year: "2023 - Present", role: "Senior Engineer", company: "TechCorp Inc.", desc: "Leading platform team, migrated legacy monolith to microservices." },
                        { year: "2020 - 2023", role: "Full Stack Engineer", company: "StartUp.io", desc: "Employee #5. Built core product from 0 to 1M users." },
                        { year: "2018 - 2020", role: "Frontend Developer", company: "Creative Agency", desc: "Award-winning interactive websites for Fortune 500 clients." }
                    ].map((item, i) => (
                        <div key={i} className="relative md:flex md:gap-10 md:items-start group">
                            <div className="hidden md:block w-32 text-right pt-1 text-sm text-muted-foreground font-mono">{item.year}</div>
                            {/* Dot */}
                            <div className="absolute -left-[37px] top-1 md:relative md:left-0 md:top-1.5 w-4 h-4 rounded-full border-2 border-cyan-500 bg-background z-20 group-hover:bg-cyan-500 transition-colors" />

                            <div className="pb-10 md:pb-0 md:mb-10 flex-1">
                                <div className="md:hidden text-xs font-mono text-cyan-500 mb-1">{item.year}</div>
                                <h3 className="text-xl font-bold">{item.role} <span className="text-muted-foreground">@ {item.company}</span></h3>
                                <p className="mt-2 text-muted-foreground">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    )
}
