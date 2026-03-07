import { UserCircle, Briefcase, Terminal } from 'lucide-react';

export const projects = [
    { id: 1, title: 'NovaScale Microservices', stack: 'Go • Kubernetes • AWS', img: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop' },
    { id: 2, title: 'Nexus Trading Engine', stack: 'Node.js • Redis • React', img: 'https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=2062&auto=format&fit=crop' },
    { id: 3, title: 'Aether Auth Protocol', stack: 'TypeScript • PostgreSQL', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop' },
    { id: 4, title: 'Vortex Data Pipeline', stack: 'Python • Apache Kafka', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop' },
];

export const faqs = [
    { q: "Do you integrate with existing legacy codebases?", a: "Yes. I specialize in modernizing legacy systems. I can incrementally migrate monolithic architectures to microservices or slowly adopt React/Next.js on the frontend without downtime." },
    { q: "What is your testing methodology?", a: "I enforce strict TDD (Test-Driven Development) where applicable. I use Jest/Vitest for unit testing, Playwright for end-to-end testing, and set up automated CI/CD pipelines via GitHub Actions." },
    { q: "How do you handle project handoffs and documentation?", a: "Every project includes comprehensive Swagger/OpenAPI documentation for APIs, Storybook for frontend components, and detailed Markdown READMEs for local setup and deployment procedures." },
];

export const articles = [
    { id: 1, title: 'Architecting Scalable Node.js Microservices using Docker & AWS', date: 'Oct 24, 2025', category: 'Backend', readTime: '8 min read', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop' },
    { id: 2, title: 'State Management in Next.js 15: A Comprehensive Developer Guide', date: 'Sep 12, 2025', category: 'Frontend', readTime: '6 min read', img: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop' },
    { id: 3, title: 'From Monolith to Serverless: Hard Lessons Learned in Production', date: 'Aug 05, 2025', category: 'Architecture', readTime: '12 min read', img: 'https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=2062&auto=format&fit=crop' },
];

export const personaContent = {
    founder: {
        label: "Founder / Client",
        icon: Briefcase,
        heroTitle: "Robust Engineering for Scalable Growth.",
        heroSub: "I architect and build high-performance web applications, resilient backend systems, and seamless digital experiences that drive revenue and don't break at scale."
    },
    recruiter: {
        label: "Tech Recruiter",
        icon: UserCircle,
        heroTitle: "A Senior Engineer You Can Actually Rely On.",
        heroSub: "Ready to hit the ground running. I bring 10+ years of clean code, agile delivery, robust CI/CD practices, and mentorship to your engineering team."
    },
    developer: {
        label: "Fellow Developer",
        icon: Terminal,
        heroTitle: "Building DX-First Scalable Architectures.",
        heroSub: "From containerized microservices to buttery-smooth React UIs. Let's talk system design, VIM setups, edge computing, and avoiding spaghetti codebases."
    }
};
