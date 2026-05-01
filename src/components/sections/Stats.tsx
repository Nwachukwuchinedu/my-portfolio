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
                        <div className="text-4xl md:text-5xl font-black font-display mb-2 text-white">70<span className="text-[#D4FF00]">+</span></div>
                        <div className="font-mono text-xs text-[#A1A1AA]">REPOSITORIES</div>
                    </div>
                    <div className="reveal-scale" style={{ transitionDelay: '200ms' }}>
                        <div className="text-4xl md:text-5xl font-black font-display mb-2 text-white">7<span className="text-[#D4FF00]">k+</span></div>
                        <div className="font-mono text-xs text-[#A1A1AA]">TOTAL_CONTRIBUTIONS</div>
                    </div>
                    <div className="reveal-scale" style={{ transitionDelay: '300ms' }}>
                        <div className="text-4xl md:text-5xl font-black font-display mb-2 text-white">0</div>
                        <div className="font-mono text-xs text-[#A1A1AA]">DATA_BREACHES</div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[
                        { name: "Samuel", role: "Founder, Shop24mart", text: "His ability to bridge the gap between our online e-commerce platform and physical store operations was impressive. The custom desktop integration for automatic receipt printing has completely transformed our workflow." },
                        { name: "Emmanuel", role: "Founder of Stafyn", text: "An exceptional engineer who doesn't just write code but understands business scaling. He built our core infrastructure from scratch, ensuring it was robust enough to handle our rapid user growth." },
                        { name: "David", role: "Software Developer", text: "Working with him was a masterclass in clean architecture. His implementation of TDD and CI/CD pipelines significantly improved our team's delivery speed and code reliability." }
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
