"use client";
import { Github, ArrowUpRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

export default function CustomCursor() {
    const cursorDotRef = useRef<HTMLDivElement>(null);
    const cursorRingRef = useRef<HTMLDivElement>(null);
    const cursorPillRef = useRef<HTMLDivElement>(null);

    const [activePill, setActivePill] = useState<string | null>(null);
    const [isHoveringLink, setIsHoveringLink] = useState(false);

    useEffect(() => {
        let requestRef: number;
        let mouse = { x: 0, y: 0 };
        const trailingMouse = { x: 0, y: 0 };

        let linkHovered = false;
        let pillActive: string | null = null;

        const handleMouseMove = (e: MouseEvent) => {
            mouse = { x: e.clientX, y: e.clientY };

            const target = e.target as HTMLElement;
            const isClickable = target.closest('a, button, input, textarea, [role="button"]');
            if (linkHovered !== !!isClickable) {
                linkHovered = !!isClickable;
                setIsHoveringLink(linkHovered);
            }

            // Look for custom pill markers
            const projectCard = target.closest('[data-cursor-pill="project"]');
            const articleCard = target.closest('[data-cursor-pill="article"]');

            let currentPill = null;
            if (projectCard) currentPill = 'project';
            else if (articleCard) currentPill = 'article';

            if (pillActive !== currentPill) {
                pillActive = currentPill;
                setActivePill(currentPill);
            }
        };

        const animateCursor = () => {
            trailingMouse.x += (mouse.x - trailingMouse.x) * 0.2;
            trailingMouse.y += (mouse.y - trailingMouse.y) * 0.2;

            if (cursorDotRef.current) {
                cursorDotRef.current.style.transform = `translate3d(${mouse.x - 4}px, ${mouse.y - 4}px, 0)`;
            }
            if (cursorRingRef.current) {
                const offset = linkHovered ? 24 : 16;
                cursorRingRef.current.style.transform = `translate3d(${trailingMouse.x - offset}px, ${trailingMouse.y - offset}px, 0)`;
            }
            if (cursorPillRef.current) {
                cursorPillRef.current.style.transform = `translate3d(${trailingMouse.x}px, ${trailingMouse.y}px, 0) translate(-50%, -50%)`;
            }

            requestRef = requestAnimationFrame(animateCursor);
        };

        window.addEventListener('mousemove', handleMouseMove);
        requestRef = requestAnimationFrame(animateCursor);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(requestRef);
        };
    }, []);

    return (
        <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
            {/* Core Dot */}
            <div
                ref={cursorDotRef}
                className={`absolute top-0 left-0 w-2 h-2 bg-[#D4FF00] rounded-full mix-blend-difference transition-opacity duration-300 ${activePill || isHoveringLink ? 'opacity-0' : 'opacity-100'}`}
                style={{ transform: `translate3d(-10px, -10px, 0)` }}
            />

            {/* Trailing Ring (Expands on hover) */}
            <div
                ref={cursorRingRef}
                className={`absolute top-0 left-0 rounded-full border border-[#D4FF00] transition-all duration-300 ease-out flex items-center justify-center
            ${isHoveringLink ? 'w-12 h-12 bg-[#D4FF00]/10 mix-blend-normal' : 'w-8 h-8 bg-transparent mix-blend-difference'}
            ${activePill ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}
          `}
                style={{ transform: `translate3d(-10px, -10px, 0)` }}
            />

            {/* Project/Article Specific Hover Pill */}
            <div
                ref={cursorPillRef}
                className={`absolute top-0 left-0 transition-opacity duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${activePill ? 'opacity-100' : 'opacity-0'}`}
                style={{ transform: `translate3d(-10px, -10px, 0)` }}
            >
                <div className={`transition-transform duration-300 ${activePill ? 'scale-100' : 'scale-50'} bg-[#D4FF00] text-black px-4 py-2 rounded-full font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(212,255,0,0.4)] backdrop-blur-md whitespace-nowrap`}>
                    {activePill === 'project' && <>View Source <Github size={16} /></>}
                    {activePill === 'article' && <>Read Article <ArrowUpRight size={16} /></>}
                </div>
            </div>
        </div>
    );
}
