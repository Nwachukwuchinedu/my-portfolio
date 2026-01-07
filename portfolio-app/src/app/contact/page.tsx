"use client"
import { UnevenGridBackground } from "@/components/ui/background-grid";
import { Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="min-h-screen pt-32 px-4 pb-20 overflow-hidden">
            <UnevenGridBackground />
            <div className="max-w-4xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-20">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold font-display mb-6">Let's Talk</h1>
                    <p className="text-lg text-muted-foreground mb-10">
                        Interested in working together? I'm currently assessing new opportunities for Q3 2026.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-center gap-4 text-lg">
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <Mail className="w-5 h-5 text-cyan-400" />
                            </div>
                            <a href="mailto:hello@example.com" className="hover:text-cyan-400 transition-colors">
                                hello@example.com
                            </a>
                        </div>
                        <div className="flex items-center gap-4 text-lg">
                            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                                <MapPin className="w-5 h-5 text-violet-400" />
                            </div>
                            <span>San Francisco, CA (Open to Remote)</span>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <form className="space-y-6 p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium font-mono text-muted-foreground">NAME</label>
                        <input type="text" id="name" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:border-cyan-500 transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium font-mono text-muted-foreground">EMAIL</label>
                        <input type="email" id="email" className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:border-cyan-500 transition-colors" placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium font-mono text-muted-foreground">MESSAGE</label>
                        <textarea id="message" rows={4} className="w-full bg-black/20 border border-white/10 rounded-lg p-3 text-foreground focus:outline-none focus:border-cyan-500 transition-colors" placeholder="Tell me about your project..." />
                    </div>
                    <button type="submit" className="w-full py-4 rounded-lg bg-gradient-to-r from-violet-600 to-cyan-600 font-bold text-white hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                        <Send className="w-4 h-4" /> Send Message
                    </button>
                </form>
            </div>
        </main>
    )
}
