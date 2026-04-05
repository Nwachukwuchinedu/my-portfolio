import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react';

export default function MobileMenu({ isMenuOpen, setIsMenuOpen }: any) {
    return (
        <div
            className={`fixed inset-0 bg-[#09090B]/98 backdrop-blur-2xl z-[60] transition-all duration-700 ease-in-out flex flex-col justify-center px-6 md:hidden ${isMenuOpen ? 'menu-clip-open pointer-events-auto opacity-100' : 'menu-clip-closed pointer-events-none opacity-0'}`}
        >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#D4FF00] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>

            <div className="flex flex-col gap-8 text-center relative z-10 mt-12">
                {['Work', 'Stack', 'Process', 'Blog', 'FAQ'].map((item, i) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setIsMenuOpen(false)}
                        className="font-display text-5xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 hover:from-[#D4FF00] hover:to-green-400 transition-all duration-300 inline-block w-max mx-auto"
                        style={{
                            transform: isMenuOpen ? 'translateY(0)' : 'translateY(40px)',
                            opacity: isMenuOpen ? 1 : 0,
                            transitionDelay: `${isMenuOpen ? (i * 100) + 200 : 0}ms`,
                            transitionDuration: '500ms'
                        }}
                    >
                        {item}
                    </a>
                ))}
            </div>

            <div
                className="absolute bottom-12 left-0 right-0 px-6 flex flex-col items-center gap-8"
                style={{
                    transform: isMenuOpen ? 'translateY(0)' : 'translateY(40px)',
                    opacity: isMenuOpen ? 1 : 0,
                    transitionDelay: `${isMenuOpen ? 700 : 0}ms`,
                    transitionDuration: '500ms'
                }}
            >
                <button className="w-full max-w-[280px] bg-[#D4FF00] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors flex items-center justify-center gap-2">
                    Hire Me <ArrowRight size={20} />
                </button>
                <div className="flex space-x-8 text-[#A1A1AA]">
                    <a href="#" className="hover:text-white transition-colors"><Github size={24} /></a>
                    <a href="#" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
                    <a href="#" className="hover:text-white transition-colors"><Twitter size={24} /></a>
                </div>
            </div>
        </div>
    );
}
