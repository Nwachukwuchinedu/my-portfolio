import { CheckCircle2, XCircle } from 'lucide-react';

export default function Process() {
    return (
        <section id="process" className="py-32 bg-[#0d0d0f] border-y border-[#27272A] relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20 reveal-on-scroll">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">The Developer Edge</h2>
                    <p className="text-[#A1A1AA] max-w-xl mx-auto">Why technical founders trust me over massive agencies or inexperienced freelancers.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="glass-card p-8 rounded-3xl reveal-blur group hover:border-[#D4FF00]/50 transition-colors">
                        <CheckCircle2 className="text-[#D4FF00] mb-6 transition-transform group-hover:scale-110" size={32} />
                        <h3 className="text-xl font-bold mb-3 font-display">Clean Architecture</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">Writing maintainable code designed to scale. No spaghetti code, just solid engineering.</p>
                    </div>
                    <div className="glass-card p-8 rounded-3xl reveal-blur delay-100 group hover:border-[#D4FF00]/50 transition-colors" style={{ transitionDelay: '100ms' }}>
                        <CheckCircle2 className="text-[#D4FF00] mb-6 transition-transform group-hover:scale-110" size={32} />
                        <h3 className="text-xl font-bold mb-3 font-display">Agile Delivery</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">Strict adherence to sprint timelines, robust CI/CD pipelines, and regular updates.</p>
                    </div>
                    <div className="glass-card p-8 rounded-3xl reveal-blur delay-200 group hover:border-[#D4FF00]/50 transition-colors lg:row-span-2 flex flex-col justify-between bg-gradient-to-br from-[#121215] to-[#2563EB]/10" style={{ transitionDelay: '200ms' }}>
                        <div>
                            <CheckCircle2 className="text-[#2563EB] mb-6 transition-transform group-hover:scale-110" size={32} />
                            <h3 className="text-2xl font-bold mb-3 font-display">Full-Cycle Ownership</h3>
                            <p className="text-[#A1A1AA] leading-relaxed mb-6">From database schema design and infrastructure provisioning to responsive frontend UI deployment, I handle the complete technical lifecycle natively.</p>
                        </div>
                        <div className="font-mono text-xs text-[#2563EB] opacity-70">system.process(lifecycle.FULL);</div>
                    </div>
                    <div className="glass-card p-8 rounded-3xl reveal-blur delay-300 border-[#27272A] opacity-80 hover:opacity-100 transition-opacity" style={{ transitionDelay: '300ms' }}>
                        <XCircle className="text-red-500 mb-6" size={32} />
                        <h3 className="text-xl font-bold mb-3 font-display text-gray-300">Spaghetti Codebases</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">Inexperienced developers leave behind technical debt that costs thousands to refactor later.</p>
                    </div>
                    <div className="glass-card p-8 rounded-3xl reveal-blur delay-400 border-[#27272A] opacity-80 hover:opacity-100 transition-opacity" style={{ transitionDelay: '400ms' }}>
                        <XCircle className="text-red-500 mb-6" size={32} />
                        <h3 className="text-xl font-bold mb-3 font-display text-gray-300">Unreliable Builds</h3>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed">Missed deadlines and zero automated testing leading to broken production environments.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
