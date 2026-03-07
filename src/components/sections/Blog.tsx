import { ArrowRight, ArrowUpRight, Calendar, BookOpen } from 'lucide-react';
import { articles } from '@/constants/data';

export default function Blog({ setActivePill }: any) {
    return (
        <section id="blog" className="py-32 px-6 max-w-7xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 reveal-on-scroll">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">Technical Writing</h2>
                    <p className="text-[#A1A1AA] max-w-md">Thoughts, tutorials, and architectural deep dives from the trenches.</p>
                </div>
                <button className="hidden md:flex items-center gap-2 text-[#D4FF00] hover:text-white transition-colors font-mono text-sm mt-4 md:mt-0">
                    fetch_latest_posts() <ArrowRight size={16} />
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {articles.map((article, idx) => (
                    <a
                        key={article.id}
                        href="#"
                        className="article-card glass-card rounded-3xl overflow-hidden group hover:border-[#D4FF00]/50 transition-all duration-300 reveal-on-scroll flex flex-col"
                        style={{ transitionDelay: `${idx * 150}ms` }}
                        onMouseEnter={() => setActivePill('article')}
                        onMouseLeave={() => setActivePill(null)}
                    >
                        <div className="h-48 overflow-hidden relative border-b border-[#27272A]">
                            <img src={article.img} alt={article.title} className="w-full h-full object-cover opacity-70 group-hover:scale-105 group-hover:opacity-100 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-700" />
                            <div className="absolute top-4 left-4 bg-[#09090B]/80 backdrop-blur-md border border-[#27272A] px-3 py-1 rounded-full text-xs font-mono text-[#D4FF00]">{article.category}</div>
                        </div>
                        <div className="p-8 flex flex-col flex-grow">
                            <div className="flex items-center gap-4 text-xs font-mono text-[#A1A1AA] mb-4">
                                <span className="flex items-center gap-1.5"><Calendar size={14} /> {article.date}</span>
                                <span className="flex items-center gap-1.5"><BookOpen size={14} /> {article.readTime}</span>
                            </div>
                            <h3 className="text-xl font-bold font-display mb-6 group-hover:text-[#D4FF00] transition-colors line-clamp-3 leading-snug">{article.title}</h3>
                            <div className="mt-auto flex items-center gap-2 text-sm font-bold text-white group-hover:text-[#D4FF00] transition-colors">
                                Read Article <ArrowUpRight size={16} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
}
