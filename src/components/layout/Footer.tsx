import { Terminal, Github, Linkedin, Twitter, Mail, ArrowRight, Code2 } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="relative pt-24 pb-12 border-t border-[#27272A] z-10 bg-[#050505] overflow-hidden">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4FF00] opacity-5 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">

                    <div className="md:col-span-5 lg:col-span-4 flex flex-col items-start reveal-on-scroll">
                        <div className="font-display font-bold text-2xl tracking-tight flex items-center gap-2 mb-6 text-white">
                            <Terminal className="text-[#D4FF00]" size={28} /> SYS<span className="text-[#D4FF00]">.</span>DEV
                        </div>
                        <p className="text-[#A1A1AA] text-sm leading-relaxed mb-8 max-w-sm">
                            Architecting and building high-performance web applications and resilient backend systems designed for scale.
                        </p>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#27272A] bg-[#121215] text-xs text-[#E4E4E7] font-mono shadow-inner">
                            <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse"></span>
                            Status: Accepting new projects
                        </div>
                    </div>

                    <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div className="reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
                            <h4 className="text-white font-bold mb-6 font-display">Navigation</h4>
                            <ul className="space-y-4 text-sm text-[#A1A1AA]">
                                <li><a href="#work" className="hover:text-[#D4FF00] transition-colors">Selected Work</a></li>
                                <li><a href="#stack" className="hover:text-[#D4FF00] transition-colors">Tech Arsenal</a></li>
                                <li><a href="#process" className="hover:text-[#D4FF00] transition-colors">The Developer Edge</a></li>
                                <li><a href="#blog" className="hover:text-[#D4FF00] transition-colors">Technical Writing</a></li>
                            </ul>
                        </div>

                        <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                            <h4 className="text-white font-bold mb-6 font-display">Connect</h4>
                            <ul className="space-y-4 text-sm text-[#A1A1AA]">
                                <li><a href="#" className="hover:text-[#D4FF00] transition-colors flex items-center gap-2"><Github size={16} /> GitHub</a></li>
                                <li><a href="#" className="hover:text-[#D4FF00] transition-colors flex items-center gap-2"><Linkedin size={16} /> LinkedIn</a></li>
                                <li><a href="#" className="hover:text-[#D4FF00] transition-colors flex items-center gap-2"><Twitter size={16} /> X (Twitter)</a></li>
                                <li><a href="#" className="hover:text-[#D4FF00] transition-colors flex items-center gap-2"><Mail size={16} /> Email Me</a></li>
                            </ul>
                        </div>

                        <div className="col-span-2 sm:col-span-1 reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
                            <h4 className="text-white font-bold mb-6 font-display">Newsletter</h4>
                            <p className="text-sm text-[#A1A1AA] mb-4 leading-relaxed">Get my latest technical articles and architecture breakdowns straight to your inbox.</p>

                            <form className="flex border border-[#27272A] rounded-full overflow-hidden focus-within:border-[#D4FF00] transition-colors bg-[#09090B]">
                                <input type="email" placeholder="dev@email.com" className="bg-transparent text-sm text-white px-4 py-3 w-full focus:outline-none" required />
                                <button type="submit" className="bg-[#18181B] hover:bg-[#D4FF00] hover:text-black transition-colors px-5 flex items-center justify-center text-[#A1A1AA] border-l border-[#27272A]">
                                    <ArrowRight size={16} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#27272A]/50 pt-8 mt-8 text-[#A1A1AA] text-xs font-mono reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
                    <p>© {new Date().getFullYear()} SYS.DEV. Crafted with precision.</p>
                    <p className="mt-4 md:mt-0 flex items-center gap-2">
                        Designed & Built using <Code2 size={14} className="text-[#D4FF00]" />
                    </p>
                </div>
            </div>
        </footer>
    );
}
