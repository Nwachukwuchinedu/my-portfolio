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

export const experiences = [
    {
        id: 1,
        company: "Shop24mart",
        role: "Software Developer",
        period: "2026",
        location: "Edo State, Nigeria",
        description: "Developed and scaled a production-ready e-commerce system with a strong focus on performance, reliability, and real-world business logic. Built secure and efficient RESTful APIs for products, cart, orders, and inventory, including advanced stock management with variants and a centralized inventory ledger. Integrated payment systems with webhook handling for real-time transaction updates, and optimized backend performance to reduce latency and improve scalability. Additionally, engineered a desktop application that runs locally in the background, seamlessly communicating with the server and receipt printers to automatically process and print customer purchase receipts bridging online systems with physical retail operations.",
        stack: ["Nodejs", "vuejs", "typescript", "Docker", "Desktop App Integration", "mongodb", "CI/CD Pipelines"]
    },
    {
        id: 2,
        company: "SBM Forex Academy",
        role: "Software Developer",
        period: "2026",
        location: "Edo State, Nigeria",
        description: "Designed and developed a high-converting fintech platform for a forex mentorship program, engineered to maximize user acquisition, engagement, and revenue. Built a responsive, production-grade interface that clearly communicates complex trading concepts and program value, while integrating secure payment processing (HitchPay) for seamless enrollment. Implemented advanced user analytics and tracking systems to capture and analyze visitor behavior across links/URLs, enabling data-driven optimization of conversion funnels and marketing performance. Focused on delivering a fast, intuitive user experience with scalable architecture capable of handling high traffic and time-sensitive enrollment campaigns.",
        stack: ["Nextjs", "typescript", "Hitchpay", "AWS", "Docker", "CI/CD Pipelines"]
    },
    {
        id: 3,
        company: "Diviva Ltd",
        role: "Backend Developer & Backend Team Lead",
        period: "2025",
        location: "Remote (Lagos, Nigeria)",
        description: "Led the backend team at Diviva Ltd, architecting and developing robust RESTful APIs for multiple platforms, including a recruitment platform and a real estate solution. Oversaw the implementation of advanced features such as Applicant Tracking Systems (ATS) and an AI-powered chat application for automated user engagement. Utilized Node.js, Python, and MongoDB to deliver scalable, high-performance backend services. Collaborated cross-functionally to ensure seamless integration and deployment of backend solutions in a remote-first environment.",
        stack: ["Node.js", "Python", "MongoDB", "AI-Chat Integration"]
    },
    {
        id: 4,
        company: "Achilles Drill",
        role: "Frontend Web Developer",
        period: "2024 - Present",
        location: "Lagos State, Nigeria",
        description: "Collaborated with the Achilles Drill team to develop a responsive and user-friendly website using Vue.js. Designed and implemented the user interface, integrated REST APIs, and implemented authentication. Ensured cross-browser compatibility and optimized application performance. Built a certificate and birthday generator.",
        stack: ["Vue.js", "REST APIs", "Authentication", "Performance Optimization"]
    },
    {
        id: 5,
        company: "SPE UNIBEN Chapter",
        role: "Full Stack Developer",
        period: "2019 - 2021",
        location: "Edo State, Nigeria",
        description: "Developed and maintained the SPE UNIBEN voting website using Vue.js, CSS3, JavaScript, Chart.js, Node.js, and MongoDB. Implemented responsive design principles for cross-device compatibility. Utilized Chart.js for data visualization and Node.js with MongoDB for backend functionality.",
        stack: ["Vue.js", "Node.js", "MongoDB", "Chart.js"]
    }
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
