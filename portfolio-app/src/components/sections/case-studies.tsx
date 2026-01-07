"use client"
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import { Server, Terminal, Users } from "lucide-react";
import Image from "next/image";

export function CaseStudiesSection() {
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
        <section id="work" className="py-20 w-full px-4 scroll-mt-20">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-muted-foreground">
                Selected Work
            </h2>
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
        </section>
    )
}
