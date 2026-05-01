import { projects } from '@/constants/data';

export default function Projects() {
    return (
        <section id="work" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 reveal-on-scroll">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Selected Builds</h2>
                    <p className="text-[#A1A1AA] max-w-md">Production-ready applications built with performance and maintainability in mind.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {projects.map((project, idx) => (
                    <a
                        key={project.id}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`project-card group block relative rounded-3xl overflow-hidden glass-card p-2 reveal-scale`}
                        style={{ transitionDelay: `${idx * 150}ms` }}
                        data-cursor-pill="project"
                    >
                        <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-[#18181B]">
                            <img src={project.img} alt={project.title} className="w-full h-full object-cover object-top opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-80"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 p-8 w-full pointer-events-none">
                            <div className="flex justify-between items-end">
                                <div>
                                    <h3 className="text-3xl font-bold font-display text-white mb-3">{project.title}</h3>
                                    <div className="font-mono text-xs text-[#D4FF00] bg-[#121215]/80 backdrop-blur-md px-3 py-1.5 rounded-md inline-block border border-[#27272A]">
                                        {project.stack}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
