import { HeroSection } from "@/components/sections/hero";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { UnevenGridBackground } from "@/components/ui/background-grid";
import { BlogPreviewSection } from "@/components/sections/blog-preview";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <UnevenGridBackground />
      <HeroSection />

      {/* Case Studies Preview with "View All" link */}
      <ScrollReveal className="relative w-full">
        <CaseStudiesSection />
        <div className="absolute bottom-10 left-0 w-full flex justify-center z-20 pointer-events-none">
          {/* We want the button to be clickable, so pointer-events-auto */}
          <Link href="/work" className="pointer-events-auto px-6 py-2 rounded-full border border-white/10 dark:border-white/10 bg-zinc-900 dark:bg-white/10 text-white backdrop-blur-md flex items-center gap-2 hover:scale-105 transition-all shadow-lg text-sm font-medium">
            View Full Portfolio <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </ScrollReveal>

      <ScrollReveal className="w-full">
        <AboutSection />
      </ScrollReveal>

      <ScrollReveal className="w-full">
        <BlogPreviewSection />
      </ScrollReveal>

      <ScrollReveal className="w-full">
        <ContactSection />
      </ScrollReveal>

      {/* Simple Footer */}
      <footer className="w-full py-8 border-t border-white/10 text-center text-sm text-muted-foreground relative z-10 bg-background/50 backdrop-blur-md">
        <p>© {new Date().getFullYear()} Senior Developer Portfolio. Built with Next.js & Tailwind.</p>
      </footer>
    </main>
  );
}
