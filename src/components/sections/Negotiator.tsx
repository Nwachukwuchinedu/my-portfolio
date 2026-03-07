import { Bot, CheckCircle2, DollarSign, Send } from 'lucide-react';

export default function Negotiator({
    negotiationChat, isNegotiating, negotiatorInput, setNegotiatorInput, handleNegotiationSubmit, negotiatorScrollRef
}: any) {
    return (
        <section id="negotiator" className="py-32 bg-[#121215]/30 border-t border-[#27272A] relative z-10 overflow-hidden">
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#D4FF00] rounded-full mix-blend-screen filter blur-[150px] opacity-5 pointer-events-none"></div>
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                <div className="reveal-on-scroll">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4FF00]/30 bg-[#D4FF00]/10 text-xs text-[#D4FF00] font-mono mb-6 shadow-[0_0_15px_rgba(212,255,0,0.1)]">
                        <Bot size={14} /> Interactive Simulation
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">AI Salary Negotiator</h2>
                    <p className="text-[#A1A1AA] text-lg leading-relaxed mb-6">
                        Curious how I handle business discussions? Try lowballing me. Type a mock salary or project budget, and my AI proxy will negotiate with you in real-time.
                    </p>
                    <ul className="space-y-4 text-sm text-[#E4E4E7]">
                        <li className="flex items-start gap-3"><CheckCircle2 className="text-[#D4FF00] shrink-0 mt-0.5" size={18} /> Demonstrates my professional communication.</li>
                        <li className="flex items-start gap-3"><CheckCircle2 className="text-[#D4FF00] shrink-0 mt-0.5" size={18} /> Proves I understand my market value.</li>
                        <li className="flex items-start gap-3"><CheckCircle2 className="text-[#D4FF00] shrink-0 mt-0.5" size={18} /> Shows technical creativity and confidence.</li>
                    </ul>
                </div>

                <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col h-[450px] reveal-on-scroll relative overflow-hidden shadow-[0_0_30px_rgba(212,255,0,0.05)] border border-[#27272A] hover:border-[#D4FF00]/50 transition-colors delay-100">
                    <div className="flex items-center gap-3 pb-4 border-b border-[#27272A] mb-4">
                        <div className="w-10 h-10 rounded-full bg-[#18181B] border border-[#27272A] flex items-center justify-center text-[#D4FF00]">
                            <DollarSign size={20} />
                        </div>
                        <div>
                            <h4 className="font-bold text-sm text-white font-display">SYS.DEV Negotiator</h4>
                            <p className="text-[10px] text-[#A1A1AA] font-mono flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Standing firm
                            </p>
                        </div>
                    </div>

                    <div ref={negotiatorScrollRef} className="flex-1 overflow-y-auto flex flex-col gap-4 mb-4 pr-2">
                        {negotiationChat.map((msg: any, i: number) => (
                            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.role === 'user' ? 'bg-[#2563EB] text-white rounded-br-none shadow-lg' : 'bg-[#18181B] border border-[#27272A] text-[#E4E4E7] rounded-bl-none'}`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        {isNegotiating && (
                            <div className="flex justify-start">
                                <div className="bg-[#18181B] border border-[#27272A] rounded-2xl rounded-bl-none px-4 py-3 flex gap-1 items-center">
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-bounce delay-100"></span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-bounce delay-200"></span>
                                </div>
                            </div>
                        )}
                    </div>

                    <form onSubmit={handleNegotiationSubmit} className="relative mt-auto flex items-center">
                        <input
                            type="text"
                            value={negotiatorInput}
                            onChange={(e) => setNegotiatorInput(e.target.value)}
                            placeholder="e.g., $90,000/yr base + equity..."
                            className="w-full bg-[#09090B] border border-[#27272A] rounded-full pl-5 pr-14 py-3.5 text-sm text-white focus:outline-none focus:border-[#D4FF00] transition-colors"
                        />
                        <button
                            type="submit"
                            disabled={isNegotiating || !negotiatorInput.trim()}
                            className="absolute right-1.5 w-10 h-10 rounded-full bg-[#D4FF00] text-black flex items-center justify-center hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Send size={16} />
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
}
