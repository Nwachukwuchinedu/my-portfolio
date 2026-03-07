import { Code2, Server, Cloud, Database, Terminal, GitBranch, Cpu, Shield, Layers, Zap } from 'lucide-react';

export default function Marquee() {
    return (
        <div className="py-12 border-y border-[#27272A] bg-[#09090B] relative z-20 overflow-hidden flex flex-col gap-4">
            <div className="marquee">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="marquee-content flex items-center">
                        <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#27272A] bg-[#121215] text-[#E4E4E7] transition-all hover:border-[#D4FF00] hover:text-white cursor-default">
                            <Code2 size={18} className="text-[#A1A1AA]" />
                            <span className="font-medium text-sm whitespace-nowrap">Frontend Architecture</span>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#27272A] bg-[#121215] text-[#E4E4E7] transition-all hover:border-[#D4FF00] hover:text-white cursor-default">
                            <Server size={18} className="text-[#A1A1AA]" />
                            <span className="font-medium text-sm whitespace-nowrap">Backend Systems</span>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#27272A] bg-[#121215] text-[#E4E4E7] transition-all hover:border-[#D4FF00] hover:text-white cursor-default">
                            <Cloud size={18} className="text-[#A1A1AA]" />
                            <span className="font-medium text-sm whitespace-nowrap">Cloud Infrastructure</span>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#27272A] bg-[#121215] text-[#E4E4E7] transition-all hover:border-[#D4FF00] hover:text-white cursor-default">
                            <Database size={18} className="text-[#A1A1AA]" />
                            <span className="font-medium text-sm whitespace-nowrap">Database Optimization</span>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#27272A] bg-[#121215] text-[#E4E4E7] transition-all hover:border-[#D4FF00] hover:text-white cursor-default">
                            <Terminal size={18} className="text-[#A1A1AA]" />
                            <span className="font-medium text-sm whitespace-nowrap">API Design</span>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#27272A] bg-[#121215] text-[#E4E4E7] transition-all hover:border-[#D4FF00] hover:text-white cursor-default">
                            <GitBranch size={18} className="text-[#A1A1AA]" />
                            <span className="font-medium text-sm whitespace-nowrap">CI/CD Pipelines</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="marquee marquee-reverse">
                {[...Array(3)].map((_, i) => (
                    <div key={i} className="marquee-content flex items-center">
                        <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#27272A] bg-[#121215] text-[#E4E4E7] transition-all hover:border-[#D4FF00] hover:text-white cursor-default">
                            <Cpu size={18} className="text-[#A1A1AA]" />
                            <span className="font-medium text-sm whitespace-nowrap">System Architecture</span>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#27272A] bg-[#121215] text-[#E4E4E7] transition-all hover:border-[#D4FF00] hover:text-white cursor-default">
                            <Shield size={18} className="text-[#A1A1AA]" />
                            <span className="font-medium text-sm whitespace-nowrap">Security Implementation</span>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#27272A] bg-[#121215] text-[#E4E4E7] transition-all hover:border-[#D4FF00] hover:text-white cursor-default">
                            <Layers size={18} className="text-[#A1A1AA]" />
                            <span className="font-medium text-sm whitespace-nowrap">Microservices</span>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#27272A] bg-[#121215] text-[#E4E4E7] transition-all hover:border-[#D4FF00] hover:text-white cursor-default">
                            <Zap size={18} className="text-[#A1A1AA]" />
                            <span className="font-medium text-sm whitespace-nowrap">Performance Tuning</span>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#27272A] bg-[#121215] text-[#E4E4E7] transition-all hover:border-[#D4FF00] hover:text-white cursor-default">
                            <Code2 size={18} className="text-[#A1A1AA]" />
                            <span className="font-medium text-sm whitespace-nowrap">Automated Testing</span>
                        </div>
                        <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#27272A] bg-[#121215] text-[#E4E4E7] transition-all hover:border-[#D4FF00] hover:text-white cursor-default">
                            <Database size={18} className="text-[#A1A1AA]" />
                            <span className="font-medium text-sm whitespace-nowrap">Data Migration</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
