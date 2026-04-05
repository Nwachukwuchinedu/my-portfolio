import { experiences } from '@/constants/data';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';

export default function Experience() {
    return (
        <section id="experience" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 reveal-on-scroll">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Professional Journey</h2>
                    <p className="text-[#A1A1AA] max-w-md">A timeline of my growth, leadership, and technical contributions in the software industry.</p>
                </div>
            </div>

            <div className="space-y-8">
                {experiences.map((exp, idx) => (
                    <div
                        key={exp.id}
                        className="group relative glass-card rounded-3xl p-8 transition-all duration-500 hover:border-[#D4FF00]/50 reveal-blur"
                        style={{ transitionDelay: `${idx * 100}ms` }}
                    >
                        <div className="flex flex-col lg:flex-row gap-8">
                            {/* Left Side: Meta Info */}
                            <div className="lg:w-1/3">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 rounded-2xl bg-[#27272A] border border-[#3F3F46] flex items-center justify-center text-[#D4FF00] group-hover:bg-[#D4FF00] group-hover:text-black transition-colors duration-500">
                                        <Briefcase size={20} />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold font-display text-white group-hover:text-[#D4FF00] transition-colors">{exp.company}</h3>
                                        <p className="text-[#D4FF00] font-mono text-xs uppercase tracking-widest">{exp.role}</p>
                                    </div>
                                </div>

                                <div className="space-y-2 mt-6">
                                    <div className="flex items-center gap-2 text-[#A1A1AA] text-sm">
                                        <Calendar size={14} className="text-[#D4FF00]" />
                                        <span>{exp.period}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-[#A1A1AA] text-sm">
                                        <MapPin size={14} className="text-[#D4FF00]" />
                                        <span>{exp.location}</span>
                                    </div>
                                </div>

                                {/* Stack Tags */}
                                <div className="flex flex-wrap gap-2 mt-8">
                                    {exp.stack.map((tech) => (
                                        <span 
                                            key={tech} 
                                            className="text-[10px] font-mono px-3 py-1.5 rounded-full border border-[#27272A] bg-[#09090B] text-[#E4E4E7] group-hover:border-[#D4FF00]/30 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Right Side: Description */}
                            <div className="lg:w-2/3">
                                <div className="relative">
                                    <p className="text-[#A1A1AA] leading-relaxed text-base lg:text-lg">
                                        {exp.description}
                                    </p>
                                    
                                    {/* Decorative Element */}
                                    <div className="absolute -left-8 top-0 bottom-0 w-px bg-gradient-to-b from-[#D4FF00]/20 via-[#27272A] to-transparent hidden lg:block"></div>
                                </div>
                            </div>
                        </div>

                        {/* Hover Gradient Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#D4FF00]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl"></div>
                    </div>
                ))}
            </div>
        </section>
    );
}
