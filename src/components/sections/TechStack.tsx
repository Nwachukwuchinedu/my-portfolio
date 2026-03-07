import { Activity, LineChart, Github, Server, Code2, Layers, GitBranch } from 'lucide-react';

export default function TechStack({ githubSummary, isGithubLoading }: any) {
    return (
        <section id="stack" className="py-32 max-w-7xl mx-auto px-6 relative z-10">
            <div className="mb-16 reveal-on-scroll">
                <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Technical Arsenal</h2>
                <p className="text-[#A1A1AA]">Tools, technologies, and real-time activity.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="glass-card rounded-3xl p-8 flex flex-col md:col-span-3 lg:col-span-2 group border-[#D4FF00]/30 hover:border-[#D4FF00] transition-colors reveal-blur relative overflow-hidden bg-gradient-to-br from-[#121215] to-[#1a2000]">
                    <div className="absolute top-0 right-0 p-6 flex gap-2 items-center opacity-50 font-mono text-xs text-[#D4FF00]">
                        <span className="relative flex h-3 w-3"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FF00] opacity-75"></span><span className="relative inline-flex rounded-full h-3 w-3 bg-[#D4FF00]"></span></span>
                        LIVE SYNC
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-[#D4FF00] flex items-center justify-center text-black mb-6"><Activity size={24} /></div>
                    <h3 className="text-2xl font-bold font-display mb-2 text-white">AI GitHub Analyst</h3>
                    <p className="text-[#A1A1AA] text-sm mb-4">Gemini AI analyzing my latest repository commits:</p>
                    <div className="bg-[#09090B] border border-[#27272A] rounded-2xl p-6 mt-auto font-mono text-sm leading-relaxed text-[#E4E4E7]">
                        {isGithubLoading ? <span className="animate-pulse text-[#A1A1AA]">&gt; Fetching and analyzing git history...</span> : <p>&gt; <span className="text-[#D4FF00]">System.out.print(</span>&quot;{githubSummary}&quot;<span className="text-[#D4FF00]">);</span></p>}
                    </div>
                </div>

                <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col group hover:bg-[#18181B] transition-colors reveal-blur md:col-span-3 lg:col-span-1 border border-[#27272A] hover:border-[#D4FF00]/50 relative overflow-hidden" style={{ transitionDelay: '150ms' }}>
                    <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 transition-opacity"><LineChart size={20} className="text-[#D4FF00]" /></div>
                    <div className="w-14 h-14 rounded-2xl bg-[#27272A] flex items-center justify-center text-white mb-6 border border-[#3F3F46] group-hover:bg-[#D4FF00] group-hover:text-black transition-colors"><Github size={24} /></div>
                    <h3 className="text-xl font-bold font-display mb-2 text-white">Live Activity</h3>
                    <p className="text-[#A1A1AA] text-sm mb-6">Real-time GitHub contributions and most used languages.</p>

                    <div className="mt-auto flex flex-col gap-4">
                        <div className="bg-[#09090B] rounded-xl border border-[#27272A] p-4 flex items-center justify-center group-hover:border-[#D4FF00]/30 transition-colors">
                            <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=leerob&layout=compact&theme=dark&hide_border=true&bg_color=09090B&title_color=D4FF00&text_color=A1A1AA" alt="Top Languages" className="w-full h-auto mix-blend-lighten" />
                        </div>
                        <div className="bg-[#09090B] rounded-xl border border-[#27272A] p-4 overflow-hidden group-hover:border-[#D4FF00]/30 transition-colors flex items-center justify-center">
                            <img src="https://ghchart.rshah.org/D4FF00/leerob" alt="Contribution Graph" className="w-[120%] h-auto max-w-none opacity-80 group-hover:opacity-100 transition-opacity mix-blend-screen" />
                        </div>
                    </div>
                </div>

                <div className="glass-card rounded-3xl p-8 flex flex-col group hover:bg-[#18181B] transition-colors reveal-on-scroll delay-200">
                    <div className="w-14 h-14 rounded-2xl bg-[#27272A] flex items-center justify-center text-white mb-6 border border-[#3F3F46]"><Server size={24} /></div>
                    <h3 className="text-xl font-bold font-display mb-2">Backend Systems</h3>
                    <p className="text-[#A1A1AA] text-sm mb-6">Designing secure, scalable APIs and microservices.</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {['Node.js', 'Python', 'PostgreSQL', 'GraphQL'].map(tech => <span key={tech} className="text-xs font-mono px-3 py-1.5 rounded-full border border-[#27272A] bg-[#09090B]">{tech}</span>)}
                    </div>
                </div>

                <div className="glass-card rounded-3xl p-8 flex flex-col group hover:bg-[#18181B] transition-colors reveal-on-scroll delay-200">
                    <div className="w-14 h-14 rounded-2xl bg-[#27272A] flex items-center justify-center text-white mb-6 border border-[#3F3F46]"><Code2 size={24} /></div>
                    <h3 className="text-xl font-bold font-display mb-2">Frontend Engineering</h3>
                    <p className="text-[#A1A1AA] text-sm mb-6">Building highly interactive, accessible, and performant user interfaces.</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {['React', 'Next.js', 'TypeScript', 'Tailwind'].map(tech => <span key={tech} className="text-xs font-mono px-3 py-1.5 rounded-full border border-[#27272A] bg-[#09090B]">{tech}</span>)}
                    </div>
                </div>

                <div className="glass-card rounded-3xl p-8 flex flex-col group hover:bg-[#18181B] transition-colors reveal-on-scroll delay-300">
                    <div className="w-14 h-14 rounded-2xl bg-[#27272A] flex items-center justify-center text-white mb-6 border border-[#3F3F46]"><Layers size={24} /></div>
                    <h3 className="text-xl font-bold font-display mb-2">Infrastructure as Code</h3>
                    <p className="text-[#A1A1AA] text-sm mb-6">Provisioning and managing immutable cloud environments globally.</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {['Terraform', 'AWS CDK', 'Ansible'].map(tech => <span key={tech} className="text-xs font-mono px-3 py-1.5 rounded-full border border-[#27272A] bg-[#09090B]">{tech}</span>)}
                    </div>
                </div>

                <div className="glass-card rounded-3xl p-8 flex flex-col group hover:bg-[#18181B] transition-colors reveal-on-scroll delay-400">
                    <div className="w-14 h-14 rounded-2xl bg-[#27272A] flex items-center justify-center text-white mb-6 border border-[#3F3F46]"><GitBranch size={24} /></div>
                    <h3 className="text-xl font-bold font-display mb-2">DevOps & CI/CD</h3>
                    <p className="text-[#A1A1AA] text-sm mb-6">Streamlining workflows and ensuring reliable, automated deployments.</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {['Docker', 'Kubernetes', 'GitHub Actions'].map(tech => <span key={tech} className="text-xs font-mono px-3 py-1.5 rounded-full border border-[#27272A] bg-[#09090B]">{tech}</span>)}
                    </div>
                </div>
            </div>
        </section>
    );
}
