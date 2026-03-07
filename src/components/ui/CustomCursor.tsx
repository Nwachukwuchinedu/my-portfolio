import { Github, ArrowUpRight } from 'lucide-react';

export default function CustomCursor({ cursorPos, trailingCursorPos, activePill, isHoveringLink }: any) {
    return (
        <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
            {/* Core Dot */}
            <div
                className={`absolute top-0 left-0 w-2 h-2 bg-[#D4FF00] rounded-full mix-blend-difference transition-opacity duration-300 ${activePill || isHoveringLink ? 'opacity-0' : 'opacity-100'}`}
                style={{ transform: `translate3d(${cursorPos.x - 4}px, ${cursorPos.y - 4}px, 0)` }}
            />

            {/* Trailing Ring (Expands on hover) */}
            <div
                className={`absolute top-0 left-0 rounded-full border border-[#D4FF00] transition-all duration-300 ease-out flex items-center justify-center
            ${isHoveringLink ? 'w-12 h-12 bg-[#D4FF00]/10 mix-blend-normal' : 'w-8 h-8 bg-transparent mix-blend-difference'}
            ${activePill ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}
          `}
                style={{ transform: `translate3d(${trailingCursorPos.x - (isHoveringLink ? 24 : 16)}px, ${trailingCursorPos.y - (isHoveringLink ? 24 : 16)}px, 0)` }}
            />

            {/* Project/Article Specific Hover Pill */}
            <div
                className={`absolute top-0 left-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${activePill ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
                style={{ transform: `translate3d(${trailingCursorPos.x}px, ${trailingCursorPos.y}px, 0) translate(-50%, -50%)` }}
            >
                <div className="bg-[#D4FF00] text-black px-4 py-2 rounded-full font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(212,255,0,0.4)] backdrop-blur-md whitespace-nowrap">
                    {activePill === 'project' && <>View Source <Github size={16} /></>}
                    {activePill === 'article' && <>Read Article <ArrowUpRight size={16} /></>}
                </div>
            </div>
        </div>
    );
}
