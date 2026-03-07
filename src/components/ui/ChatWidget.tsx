import { Terminal, X, MessageSquare, Send } from 'lucide-react';

export default function ChatWidget({
    isChatOpen, setIsChatOpen, chatMessages, isChatLoading, chatScrollRef, chatInput, setChatInput, handleChatSubmit
}: any) {
    return (
        <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
            <div className={`mb-4 w-[340px] sm:w-[380px] bg-[#121215] border border-[#27272A] rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right ${isChatOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-90 opacity-0 pointer-events-none'}`}>
                <div className="bg-[#18181B] p-4 flex justify-between items-center border-b border-[#27272A]">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#D4FF00] flex items-center justify-center text-black"><Terminal size={16} /></div>
                        <div>
                            <h4 className="font-bold text-sm">SYS.DEV AI</h4>
                            <p className="text-[10px] text-[#A1A1AA] flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online</p>
                        </div>
                    </div>
                    <button onClick={() => setIsChatOpen(false)} className="text-[#A1A1AA] hover:text-white"><X size={20} /></button>
                </div>
                <div ref={chatScrollRef} className="h-[300px] overflow-y-auto p-4 flex flex-col gap-4 bg-[#09090B]">
                    {chatMessages.map((msg: any, i: number) => (
                        <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${msg.role === 'user' ? 'bg-[#2563EB] text-white rounded-br-none' : 'glass-card text-[#E4E4E7] rounded-bl-none'}`}>{msg.text}</div>
                        </div>
                    ))}
                    {isChatLoading && (
                        <div className="flex justify-start">
                            <div className="glass-card rounded-2xl rounded-bl-none px-4 py-3 flex gap-1 items-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-bounce"></span><span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-bounce delay-100"></span><span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-bounce delay-200"></span>
                            </div>
                        </div>
                    )}
                </div>
                <form onSubmit={handleChatSubmit} className="p-3 bg-[#18181B] border-t border-[#27272A] flex gap-2">
                    <input type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Ask about my experience..." className="flex-1 bg-[#09090B] border border-[#27272A] rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-[#D4FF00]" />
                    <button type="submit" disabled={isChatLoading || !chatInput.trim()} className="w-10 h-10 rounded-full bg-[#D4FF00] text-black flex items-center justify-center hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"><Send size={16} /></button>
                </form>
            </div>
            <button onClick={() => setIsChatOpen(!isChatOpen)} className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(212,255,0,0.3)] transition-transform duration-300 hover:scale-110 ${isChatOpen ? 'bg-[#27272A] text-white' : 'bg-[#D4FF00] text-black'}`}>
                {isChatOpen ? <X size={24} /> : <MessageSquare size={24} />}
            </button>
        </div>
    );
}
