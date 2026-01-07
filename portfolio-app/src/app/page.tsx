import { HeroSection } from "@/components/sections/hero";
import { CaseStudiesSection } from "@/components/sections/case-studies";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-background overflow-x-hidden selection:bg-cyan-500/30 selection:text-cyan-200">
      <HeroSection />
      <CaseStudiesSection />
      <AboutSection />
      <ContactSection />

      {/* Simple Footer */}
      <footer className="w-full py-8 border-t border-white/10 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Senior Developer Portfolio. Built with Next.js & Tailwind.</p>
      </footer>
    </main>
  );
}
