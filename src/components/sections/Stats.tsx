import { Star } from 'lucide-react';

export default function Stats() {
    return (
        <section className="py-24 border-y border-[#27272A] bg-[#121215]/50 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 text-center">
                    <div className="reveal-scale" style={{ transitionDelay: '0ms' }}>
                        <div className="text-4xl md:text-5xl font-black font-display mb-2 text-white">99.9<span className="text-[#D4FF00]">%</span></div>
                        <div className="font-mono text-xs text-[#A1A1AA]">UPTIME_MAINTAINED</div>
                    </div>
                    <div className="reveal-scale" style={{ transitionDelay: '100ms' }}>
                        <div className="text-4xl md:text-5xl font-black font-display mb-2 text-white">50<span className="text-[#D4FF00]">+</span></div>
                        <div className="font-mono text-xs text-[#A1A1AA]">REPOSITORIES</div>
                    </div>
                    <div className="reveal-scale" style={{ transitionDelay: '200ms' }}>
                        <div className="text-4xl md:text-5xl font-black font-display mb-2 text-white">10<span className="text-[#D4FF00]">k+</span></div>
                        <div className="font-mono text-xs text-[#A1A1AA]">COMMITS_PUSHED</div>
                    </div>
                    <div className="reveal-scale" style={{ transitionDelay: '300ms' }}>
                        <div className="text-4xl md:text-5xl font-black font-display mb-2 text-white">0</div>
                        <div className="font-mono text-xs text-[#A1A1AA]">DATA_BREACHES</div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { name: "David Chen", role: "CTO, FintechOps", text: "The cleanest, most well-documented React codebase I've ever inherited. Setting up CI/CD with him was flawless." },
                        { name: "Sarah Miller", role: "Founder, ScaleSaaS", text: "Not just a coder, but an actual engineer. He architected our entire AWS backend to handle a 500% spike in traffic without a sweat." },
                        { name: "James Holden", role: "VP Engineering", text: "Hiring him was the best technical decision we made this year. He refactored our legacy monolithic API into blazing fast microservices." }
                    ].map((test, idx) => (
                        <div key={idx} className="glass-card p-8 rounded-3xl reveal-on-scroll" style={{ transitionDelay: `${idx * 150}ms` }}>
                            <div className="flex text-[#D4FF00] mb-6 gap-1">{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
                            <p className="text-sm leading-relaxed mb-8 text-[#E4E4E7]">&quot;{test.text}&quot;</p>
                            <div className="flex items-center gap-4 border-t border-[#27272A] pt-6">
                                <div className="w-10 h-10 rounded-full bg-[#27272A] flex items-center justify-center font-bold text-xs">{test.name.charAt(0)}</div>
                                <div><div className="font-bold font-display text-sm">{test.name}</div><div className="text-[#A1A1AA] text-xs font-mono">{test.role}</div></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
