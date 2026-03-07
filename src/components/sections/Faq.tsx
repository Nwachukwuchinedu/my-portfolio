import { ChevronDown, Terminal, MessageSquare, Send } from 'lucide-react';
import { faqs } from '@/constants/data';

export default function Faq({
    activeFaq, setActiveFaq, isFaqAiInputActive, setIsFaqAiInputActive, faqAiInput, setFaqAiInput, faqAiInputRef, handleFaqAiSubmit
}: any) {
    return (
        <section id="faq" className="py-32 max-w-3xl mx-auto px-6 relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-display reveal-on-scroll">Technical FAQ</h2>
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div key={index} className="glass-card rounded-2xl overflow-hidden transition-all duration-300 reveal-on-scroll" style={{ transitionDelay: `${index * 150}ms` }}>
                        <button className="w-full text-left p-6 flex justify-between items-center focus:outline-none" onClick={() => setActiveFaq(activeFaq === index ? null : index)}>
                            <span className="font-bold text-lg pr-8">{faq.q}</span>
                            <ChevronDown className={`transform transition-transform duration-300 text-[#D4FF00] ${activeFaq === index ? 'rotate-180' : ''}`} />
                        </button>
                        <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out bg-[#09090B] ${activeFaq === index ? 'max-h-40 py-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                            <p className="text-[#A1A1AA] text-sm leading-relaxed">{faq.a}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div
                className="mt-12 glass-card p-8 rounded-3xl reveal-on-scroll border-[#D4FF00]/30 hover:border-[#D4FF00] transition-colors flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden"
                style={{ transitionDelay: `${faqs.length * 150}ms` }}
            >
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#D4FF00] opacity-10 blur-[50px] rounded-full pointer-events-none"></div>

                <div className="text-center sm:text-left relative z-10">
                    <h3 className="text-xl font-bold font-display text-white mb-2 flex items-center justify-center sm:justify-start gap-2">
                        <Terminal size={20} className="text-[#D4FF00]" /> Didn&apos;t find your answer?
                    </h3>
                    <p className="text-[#A1A1AA] text-sm max-w-md">
                        Ask my personalized AI assistant anything about my engineering experience, tech stack, or availability.
                    </p>
                </div>

                <div
                    className={`relative flex h-[48px] rounded-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-20 ${isFaqAiInputActive ? 'w-full sm:w-[350px] bg-[#09090B] border border-[#D4FF00] shadow-[0_0_15px_rgba(212,255,0,0.15)]' : 'w-full sm:w-[180px] bg-[#D4FF00] border border-[#D4FF00] hover:bg-white cursor-pointer shadow-[0_0_20px_rgba(212,255,0,0.2)] shrink-0'}`}
                    onClick={() => { if (!isFaqAiInputActive) setIsFaqAiInputActive(true) }}
                >
                    <div className={`absolute inset-0 flex items-center justify-center gap-2 text-sm text-black font-bold transition-all duration-300 ${isFaqAiInputActive ? 'opacity-0 -translate-x-4 pointer-events-none' : 'opacity-100 translate-x-0 pointer-events-auto'}`}>
                        <MessageSquare size={16} /> Ask AI Assistant
                    </div>

                    <form
                        className={`flex w-full h-full transition-all duration-500 delay-100 ${isFaqAiInputActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'}`}
                        onSubmit={handleFaqAiSubmit}
                    >
                        <input
                            ref={faqAiInputRef}
                            type="text"
                            value={faqAiInput}
                            onChange={(e) => setFaqAiInput(e.target.value)}
                            placeholder="e.g. Have you used AWS?"
                            className="bg-transparent text-sm text-white px-5 h-full w-full focus:outline-none"
                            required
                            onBlur={(e) => { if (!e.target.value) setIsFaqAiInputActive(false) }}
                        />
                        <button type="submit" className="bg-[#D4FF00] hover:bg-white text-black transition-colors px-5 flex items-center justify-center shrink-0">
                            <Send size={16} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
