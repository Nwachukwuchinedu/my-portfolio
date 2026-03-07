import { Terminal, ArrowRight } from 'lucide-react';

export default function Navbar({ scrolled, isMenuOpen, setIsMenuOpen }: any) {
    return (
        <nav className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 ${scrolled || isMenuOpen ? 'py-4 bg-[#09090B]/80 backdrop-blur-md border-b border-[#27272A]' : 'py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className={`font-display font-bold text-xl tracking-tight flex items-center gap-2 relative z-[80] transition-colors duration-300 ${isMenuOpen ? 'text-white' : ''}`}>
                    <Terminal className="text-[#D4FF00]" size={24} /> SYS<span className="text-[#D4FF00]">.</span>DEV
                </div>

                <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#A1A1AA] glass-card px-8 py-3 rounded-full shadow-lg">
                    <a href="#work" className="hover:text-white transition-colors">Work</a>
                    <a href="#stack" className="hover:text-white transition-colors">Stack</a>
                    <a href="#process" className="hover:text-white transition-colors">Process</a>
                    <a href="#blog" className="hover:text-white transition-colors">Blog</a>
                    <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
                </div>

                <button className="hidden md:flex bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#D4FF00] transition-colors duration-300 items-center gap-2">
                    Hire Me <ArrowRight size={16} />
                </button>

                <button
                    className="md:hidden relative z-[80] w-12 h-12 flex flex-col justify-center items-center gap-1.5 glass-card rounded-full border border-[#27272A] bg-[#121215]/80"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                >
                    <span className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ease-out origin-center ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
                    <span className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ease-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ease-out origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
                </button>
            </div>
        </nav>
    );
}
