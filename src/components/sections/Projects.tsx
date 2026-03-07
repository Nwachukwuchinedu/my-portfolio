import { projects } from '@/constants/data';

export default function Projects({ setActivePill }: any) {
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
                    <div
                        key={project.id}
                        className={`project-card group relative rounded-3xl overflow-hidden glass-card p-2 reveal-scale ${idx === 0 || idx === 3 ? 'md:col-span-1 md:row-span-2' : ''}`}
                        style={{ transitionDelay: `${idx * 150}ms` }}
                        onMouseEnter={() => setActivePill('project')}
                        onMouseLeave={() => setActivePill(null)}
                    >
                        <div className="relative h-[400px] md:h-full min-h-[400px] w-full rounded-2xl overflow-hidden bg-[#18181B]">
                            <img src={project.img} alt={project.title} className="w-full h-full object-cover opacity-80 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal" />
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
                    </div>
                ))}
            </div>
        </section>
    );
}
