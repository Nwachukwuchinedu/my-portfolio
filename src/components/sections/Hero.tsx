import { Github } from 'lucide-react';
import { personaContent } from '@/constants/data';

export default function Hero({ visitorRole, setVisitorRole }: any) {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-28 overflow-hidden px-6">
            <div className="absolute inset-0 z-0 hero-grid pointer-events-none"></div>
            <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#D4FF00] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>

            <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center reveal-on-scroll animate-reveal">

                <div className="mb-10 flex flex-col items-center">
                    <span className="text-xs font-mono text-[#A1A1AA] mb-3 uppercase tracking-widest">Select your profile</span>
                    <div className="flex gap-2 p-1.5 glass-card rounded-full shadow-2xl">
                        {Object.entries(personaContent).map(([key, data]) => {
                            const Icon = data.icon;
                            const isActive = visitorRole === key;
                            return (
                                <button
                                    key={key}
                                    onClick={() => setVisitorRole(key)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? 'bg-[#D4FF00] text-black shadow-md' : 'text-[#A1A1AA] hover:text-white hover:bg-[#27272A]'}`}
                                >
                                    <Icon size={16} /> <span className="hidden sm:inline">{data.label}</span>
                                </button>
                            )
                        })}
                    </div>
                </div>

                <h1
                    key={visitorRole + 'title'}
                    className="text-5xl md:text-7xl lg:text-[6rem] font-bold leading-[1.05] tracking-tight mb-8 animate-[fadeInUp_0.5s_ease-out]"
                >
                    {(personaContent as any)[visitorRole].heroTitle.split(' ').map((word: string, i: number) => (
                        word.toLowerCase() === 'scalable' || word.toLowerCase() === 'rely' ?
                            <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#2563EB]"> {word} </span> :
                            <span key={i}> {word} </span>
                    ))}
                </h1>

                <p key={visitorRole + 'sub'} className="text-lg md:text-xl text-[#A1A1AA] max-w-3xl mb-12 leading-relaxed animate-[fadeInUp_0.7s_ease-out]">
                    {(personaContent as any)[visitorRole].heroSub}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-[fadeInUp_0.9s_ease-out]">
                    <button className="bg-[#D4FF00] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors flex items-center justify-center gap-2">
                        View Repositories <Github size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
}
