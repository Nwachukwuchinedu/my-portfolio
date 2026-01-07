"use client"
import { UnevenGridBackground } from "@/components/ui/background-grid";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Server, Terminal, Users } from "lucide-react";
import Image from "next/image";

export default function WorkPage() {
    const items = [
        {
            title: "Latency Optimization Engine",
            description: "Reduced API response latency by 43% for a financial trading platform processing 50,000+ transactions per minute.",
            header: (
                <div className="relative w-full h-32 rounded-xl overflow-hidden">
                    <Image
                        src="/images/latency_engine.png"
                        alt="Latency Optimization"
                        fill
                        className="object-cover transition-transform duration-500 group-hover/bento:scale-105"
                    />
                </div>
            ),
            icon: <Server className="h-4 w-4 text-cyan-500" />,
            className: "md:col-span-2",
        },
        {
            title: "Developer Platform Infrastructure",
            description: "Built internal developer platform serving 200+ engineers, reducing deployment time from 45m to 4m.",
            header: (
                <div className="relative w-full h-32 rounded-xl overflow-hidden">
                    <Image
                        src="/images/dev_platform.png"
                        alt="Dev Platform"
                        fill
                        className="object-cover transition-transform duration-500 group-hover/bento:scale-105"
                    />
                </div>
            ),
            icon: <Terminal className="h-4 w-4 text-violet-500" />,
            className: "md:col-span-1",
        },
        {
            title: "Real-Time Collaboration System",
            description: "Architected WebSocket-based collaboration engine supporting 10,000+ concurrent users with sub-100ms synchronization.",
            header: (
                <div className="relative w-full h-32 rounded-xl overflow-hidden">
                    <Image
                        src="/images/realtime_collab.png"
                        alt="Realtime Collab"
                        fill
                        className="object-cover transition-transform duration-500 group-hover/bento:scale-105"
                    />
                </div>
            ),
            icon: <Users className="h-4 w-4 text-cyan-400" />,
            className: "md:col-span-1",
        },
    ];

    return (
        <main className="min-h-screen pt-32 px-4 pb-20 overflow-hidden">
            <UnevenGridBackground />
            <div className="max-w-6xl mx-auto relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold font-display mb-4 text-center">Selected Work</h1>
                <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-20 text-lg">
                    A collection of projects that define my journey as a developer.
                    From infrastructure scaling to pixel-perfect product design.
                </p>

                <BentoGrid className="max-w-5xl mx-auto">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={item.className}
                        />
                    ))}
                </BentoGrid>

                {/* Additional "Other Projects" list */}
                <div className="mt-32">
                    <h2 className="text-3xl font-bold font-display mb-10 text-center md:text-left">Other Experiments</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3, 4, 5, 6].map((i) => (
                            <div key={i} className="p-6 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group backdrop-blur-md">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors font-display">Project Alpha {i}</h3>
                                <p className="text-sm text-muted-foreground mb-4">An experimental exploration of WebGL and React.</p>
                                <div className="flex gap-2 text-xs font-mono text-violet-400">
                                    <span>TypeScript</span>
                                    <span>Three.js</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    )
}
