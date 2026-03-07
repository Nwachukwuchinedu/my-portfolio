import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, ArrowUpRight, ArrowDownRight, CheckCircle2, XCircle, 
  Terminal, Database, Cloud, Code2, Server, Cpu, ChevronDown, 
  Github, Linkedin, Twitter, Mail, Star, GitBranch, Shield, Layers, Zap,
  BookOpen, Calendar, MessageSquare, Send, X, UserCircle, Briefcase, Activity,
  LineChart, Bot, DollarSign
} from 'lucide-react';

// --- API CONFIGURATION ---
const apiKey = ""; // Environment provides this at runtime
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;

// --- MOCK DATA ---
const projects = [
  { id: 1, title: 'NovaScale Microservices', stack: 'Go • Kubernetes • AWS', img: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop' },
  { id: 2, title: 'Nexus Trading Engine', stack: 'Node.js • Redis • React', img: 'https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=2062&auto=format&fit=crop' },
  { id: 3, title: 'Aether Auth Protocol', stack: 'TypeScript • PostgreSQL', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=2070&auto=format&fit=crop' },
  { id: 4, title: 'Vortex Data Pipeline', stack: 'Python • Apache Kafka', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop' },
];

const faqs = [
  { q: "Do you integrate with existing legacy codebases?", a: "Yes. I specialize in modernizing legacy systems. I can incrementally migrate monolithic architectures to microservices or slowly adopt React/Next.js on the frontend without downtime." },
  { q: "What is your testing methodology?", a: "I enforce strict TDD (Test-Driven Development) where applicable. I use Jest/Vitest for unit testing, Playwright for end-to-end testing, and set up automated CI/CD pipelines via GitHub Actions." },
  { q: "How do you handle project handoffs and documentation?", a: "Every project includes comprehensive Swagger/OpenAPI documentation for APIs, Storybook for frontend components, and detailed Markdown READMEs for local setup and deployment procedures." },
];

const articles = [
  { id: 1, title: 'Architecting Scalable Node.js Microservices using Docker & AWS', date: 'Oct 24, 2025', category: 'Backend', readTime: '8 min read', img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop' },
  { id: 2, title: 'State Management in Next.js 15: A Comprehensive Developer Guide', date: 'Sep 12, 2025', category: 'Frontend', readTime: '6 min read', img: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=2070&auto=format&fit=crop' },
  { id: 3, title: 'From Monolith to Serverless: Hard Lessons Learned in Production', date: 'Aug 05, 2025', category: 'Architecture', readTime: '12 min read', img: 'https://images.unsplash.com/photo-1649180556628-9ba704115795?q=80&w=2062&auto=format&fit=crop' },
];

// --- PERSONA CONTENT MATRIX ---
const personaContent = {
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

// --- HELPER: API Retry Logic ---
const fetchWithBackoff = async (url, options, retries = 5, delay = 1000) => {
  try {
    const res = await fetch(url, options);
    if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
    return await res.json();
  } catch (error) {
    if (retries > 0) {
      await new Promise(r => setTimeout(r, delay));
      return fetchWithBackoff(url, options, retries - 1, delay * 2);
    }
    throw error;
  }
};

export default function App() {
  const [activeFaq, setActiveFaq] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visitorRole, setVisitorRole] = useState('founder');
  
  // Custom Cursor State
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [trailingCursorPos, setTrailingCursorPos] = useState({ x: 0, y: 0 });
  const [activePill, setActivePill] = useState(null); // 'project' | 'article' | null
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  // FAQ AI Animated Input State
  const [isFaqAiInputActive, setIsFaqAiInputActive] = useState(false);
  const [faqAiInput, setFaqAiInput] = useState("");
  const faqAiInputRef = useRef(null);

  // AI Chatbot State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([{ role: 'model', text: "Hi! I'm the AI assistant for SYS.DEV. Ask me anything about their experience, tech stack, or availability!" }]);
  const [chatInput, setChatInput] = useState("");
  const [isChatLoading, setIsChatLoading] = useState(false);
  const chatScrollRef = useRef(null);

  // AI Salary Negotiator State
  const [negotiatorInput, setNegotiatorInput] = useState("");
  const [negotiationChat, setNegotiationChat] = useState([{ role: 'model', text: "I'm always open to discussing mutually beneficial opportunities. What compensation range do you have in mind for this role?" }]);
  const [isNegotiating, setIsNegotiating] = useState(false);
  const negotiatorScrollRef = useRef(null);

  // GitHub AI Summary State
  const [githubSummary, setGithubSummary] = useState("");
  const [isGithubLoading, setIsGithubLoading] = useState(true);

  // Initialize Scroll, Cursor, & Fetch GitHub Summary
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Smooth trailing cursor animation loop
    let requestRef;
    let mouse = { x: 0, y: 0 };
    let trailingMouse = { x: 0, y: 0 };

    const handleMouseMove = (e) => {
      mouse = { x: e.clientX, y: e.clientY };
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      // Check if hovering an interactive element
      const target = e.target;
      const isClickable = target.closest('a, button, input, textarea, [role="button"]');
      setIsHoveringLink(!!isClickable);
    };

    const animateCursor = () => {
      // Lerp for smooth trailing effect
      trailingMouse.x += (mouse.x - trailingMouse.x) * 0.2;
      trailingMouse.y += (mouse.y - trailingMouse.y) * 0.2;
      setTrailingCursorPos({ x: trailingMouse.x, y: trailingMouse.y });
      requestRef = requestAnimationFrame(animateCursor);
    };

    window.addEventListener('mousemove', handleMouseMove);
    requestRef = requestAnimationFrame(animateCursor);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('animate-reveal');
      });
    }, { threshold: 0.1 });
    // Observe all the new animation classes
    document.querySelectorAll('.reveal-on-scroll, .reveal-blur, .reveal-scale').forEach((el) => observer.observe(el));

    // Fetch and Summarize GitHub Activity
    const generateGithubSummary = async () => {
      try {
        const ghRes = await fetch('https://api.github.com/users/gaearon/events/public');
        if (!ghRes.ok) throw new Error("GitHub API limit");
        const ghData = await ghRes.json();
        const commitMessages = ghData
          .filter(e => e.type === 'PushEvent')
          .slice(0, 3)
          .map(e => e.payload.commits.map(c => c.message).join('. '))
          .join('; ');

        const payload = {
          contents: [{ parts: [{ text: `You are summarizing a developer's recent git commits for their portfolio. Commits: "${commitMessages}". Write exactly one short, impressive, punchy sentence explaining what they have been building or fixing lately. Don't use quotes.` }] }],
        };

        const aiRes = await fetchWithBackoff(GEMINI_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
        });

        const summary = aiRes.candidates?.[0]?.content?.parts?.[0]?.text || "Recently pushed updates optimizing core application performance and streamlining CI/CD pipelines.";
        setGithubSummary(summary);
      } catch (err) {
        setGithubSummary("Consistently shipping production-ready code, optimizing architecture, and resolving edge-case bugs.");
      } finally {
        setIsGithubLoading(false);
      }
    };

    if (apiKey) generateGithubSummary();
    else {
      setGithubSummary("Actively pushing code: optimizing system architecture, refining UI components, and squashing bugs in production.");
      setIsGithubLoading(false);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(requestRef);
      observer.disconnect();
    };
  }, [isMenuOpen]);

  // Focus FAQ AI input when expanded
  useEffect(() => {
    if (isFaqAiInputActive && faqAiInputRef.current) {
      setTimeout(() => faqAiInputRef.current.focus(), 150);
    }
  }, [isFaqAiInputActive]);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [chatMessages]);

  // Auto-scroll negotiator chat
  useEffect(() => {
    if (negotiatorScrollRef.current) {
      negotiatorScrollRef.current.scrollTop = negotiatorScrollRef.current.scrollHeight;
    }
  }, [negotiationChat]);

  // Reusable core logic to send a message to the AI
  const sendMessageToAI = async (text) => {
    if (!text.trim() || isChatLoading) return;

    const userMessage = text.trim();
    setChatMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsChatLoading(true);

    try {
      const payload = {
        systemInstruction: {
          parts: [{ text: "You are the AI portfolio assistant for SYS.DEV, a Senior Software Engineer. You answer questions about their skills, experience, and projects concisely and professionally. Context: 10 years experience. Stack: React, Next.js, Node.js, Go, AWS, Docker. Projects: NovaScale Microservices, Nexus Trading, Aether Auth. Known for clean scalable architecture and timely delivery. If asked about hiring, say they are currently available for select freelance projects or senior full-time roles. Keep answers to 1-2 short sentences." }]
        },
        contents: [
          ...chatMessages.map(m => ({ role: m.role === 'model' ? 'model' : 'user', parts: [{ text: m.text }] })),
          { role: 'user', parts: [{ text: userMessage }] }
        ]
      };

      const aiRes = await fetchWithBackoff(GEMINI_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const responseText = aiRes.candidates?.[0]?.content?.parts?.[0]?.text || "I'm having trouble connecting to my knowledge base right now. Please email me directly!";
      setChatMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (err) {
      setChatMessages(prev => [...prev, { role: 'model', text: "Error connecting to AI. Please try again later or reach out via email." }]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const handleChatSubmit = async (e) => {
    e.preventDefault();
    const text = chatInput;
    setChatInput("");
    await sendMessageToAI(text);
  };

  const handleFaqAiSubmit = async (e) => {
    e.preventDefault();
    const text = faqAiInput;
    setFaqAiInput("");
    setIsFaqAiInputActive(false);
    setIsChatOpen(true);
    // Slight delay to allow the chat window to open before sending
    setTimeout(() => sendMessageToAI(text), 300);
  };

  // Handle Salary Negotiator AI Submit
  const handleNegotiationSubmit = async (e) => {
    e.preventDefault();
    if (!negotiatorInput.trim() || isNegotiating) return;

    const userOffer = negotiatorInput.trim();
    setNegotiatorInput("");
    setNegotiationChat(prev => [...prev, { role: 'user', text: userOffer }]);
    setIsNegotiating(true);

    try {
      const payload = {
        systemInstruction: {
          parts: [{ text: "You are the AI proxy for SYS.DEV, a highly skilled Senior Software Engineer with 10 years of experience. The user is a recruiter or client making a salary or project budget offer. Your goal is to negotiate professionally, confidently, and creatively. If the offer is below market rate (e.g., under $130k/year, $80/hr, or $10k per project), politely but firmly counter-offer, highlighting your specific value (scalable architecture, reliable delivery, React/Node/AWS). If the offer is fair or high, express strong interest while remaining professional. Keep responses to 1-3 short sentences. You know your worth and communicate exceptionally well. End your response politely." }]
        },
        contents: [
          ...negotiationChat.map(m => ({ role: m.role === 'model' ? 'model' : 'user', parts: [{ text: m.text }] })),
          { role: 'user', parts: [{ text: userOffer }] }
        ]
      };

      const aiRes = await fetchWithBackoff(GEMINI_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const responseText = aiRes.candidates?.[0]?.content?.parts?.[0]?.text || "Let's move this to a live call. I'd love to discuss how I can bring massive value to your team.";
      setNegotiationChat(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (err) {
      setNegotiationChat(prev => [...prev, { role: 'model', text: "Error connecting to my negotiation logic. Let's just say I know my worth! Email me to chat for real." }]);
    } finally {
      setIsNegotiating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-[#FAFAFA] overflow-x-hidden selection:bg-[#D4FF00] selection:text-black font-sans relative">
      
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&family=Inter:wght@300;400;500;600&family=Syne:wght@600;700;800&display=swap');
        
        h1, h2, h3, h4, h5, h6, .font-display { font-family: 'Syne', sans-serif; }
        body { font-family: 'Inter', sans-serif; }
        .font-mono { font-family: 'Fira Code', monospace; }

        /* Hide default cursor on desktop to use custom animated cursor */
        @media (pointer: fine) {
          body, a, button, input, textarea, [role="button"] { cursor: none !important; }
        }

        .noise-bg {
          position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
          pointer-events: none; z-index: 9999; opacity: 0.02;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
        }

        .hero-grid {
          background-size: 50px 50px;
          background-image: linear-gradient(to right, rgba(212, 255, 0, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(212, 255, 0, 0.03) 1px, transparent 1px);
          mask-image: radial-gradient(ellipse 80% 80% at 50% 0%, black 30%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 0%, black 30%, transparent 100%);
          animation: panGrid 20s linear infinite;
        }
        @keyframes panGrid { 0% { background-position: 0px 0px; } 100% { background-position: 50px 50px; } }

        .glass-card { background: rgba(18, 18, 21, 0.7); backdrop-filter: blur(12px); border: 1px solid #27272A; }
        
        /* SCROLL ANIMATION SUITE */
        .reveal-on-scroll, .reveal-blur, .reveal-scale {
          transition-property: opacity, transform, filter; 
          transition-duration: 0.9s; 
          transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        .reveal-on-scroll { opacity: 0; transform: translateY(40px); }
        .reveal-blur { opacity: 0; filter: blur(15px); transform: translateY(30px) scale(0.95); }
        .reveal-scale { opacity: 0; transform: scale(0.85); }

        .animate-reveal { opacity: 1 !important; transform: translateY(0) scale(1) !important; filter: blur(0) !important; }

        .project-card:hover, .article-card:hover { cursor: none !important; }

        /* Marquee Animation */
        .marquee { display: flex; overflow: hidden; user-select: none; gap: 1rem; }
        .marquee-content {
          flex-shrink: 0; display: flex; justify-content: space-around;
          min-width: 100%; gap: 1rem; animation: scroll 35s linear infinite;
        }
        .marquee-reverse .marquee-content {
          animation: scroll-reverse 35s linear infinite;
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(calc(-100% - 1rem)); }
        }
        @keyframes scroll-reverse {
          from { transform: translateX(calc(-100% - 1rem)); }
          to { transform: translateX(0); }
        }

        /* Novel Mobile Menu Clip Path */
        .menu-clip-closed { clip-path: circle(0px at calc(100% - 48px) 48px); }
        .menu-clip-open { clip-path: circle(150% at calc(100% - 48px) 48px); }
      `}} />

      <div className="noise-bg"></div>

      {/* NEW: CINEMATIC BOTTOM MASK */}
      <div className="fixed bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#09090B] via-[#09090B]/80 to-transparent pointer-events-none z-40 hidden md:block"></div>

      {/* NEW: CUSTOM ANIMATED CURSOR */}
      <div className="hidden md:block pointer-events-none fixed inset-0 z-[9999]">
        {/* Core Dot */}
        <div 
          className={`absolute top-0 left-0 w-2 h-2 bg-[#D4FF00] rounded-full mix-blend-difference transition-opacity duration-300 ${activePill || isHoveringLink ? 'opacity-0' : 'opacity-100'}`}
          style={{ transform: `translate3d(${cursorPos.x - 4}px, ${cursorPos.y - 4}px, 0)` }}
        />
        
        {/* Trailing Ring (Expands on hover) */}
        <div 
          className={`absolute top-0 left-0 rounded-full border border-[#D4FF00] transition-all duration-300 ease-out flex items-center justify-center
            ${isHoveringLink ? 'w-12 h-12 bg-[#D4FF00]/10 mix-blend-normal' : 'w-8 h-8 bg-transparent mix-blend-difference'}
            ${activePill ? 'opacity-0 scale-50' : 'opacity-100 scale-100'}
          `}
          style={{ transform: `translate3d(${trailingCursorPos.x - (isHoveringLink ? 24 : 16)}px, ${trailingCursorPos.y - (isHoveringLink ? 24 : 16)}px, 0)` }}
        />

        {/* Project/Article Specific Hover Pill */}
        <div 
          className={`absolute top-0 left-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${activePill ? 'opacity-100 scale-100' : 'opacity-0 scale-50'}`}
          style={{ transform: `translate3d(${trailingCursorPos.x}px, ${trailingCursorPos.y}px, 0) translate(-50%, -50%)` }}
        >
          <div className="bg-[#D4FF00] text-black px-4 py-2 rounded-full font-bold flex items-center gap-2 shadow-[0_0_20px_rgba(212,255,0,0.4)] backdrop-blur-md whitespace-nowrap">
            {activePill === 'project' && <>View Source <Github size={16} /></>}
            {activePill === 'article' && <>Read Article <ArrowUpRight size={16} /></>}
          </div>
        </div>
      </div>

      {/* NAVBAR */}
      <nav className={`fixed top-0 left-0 right-0 z-[70] transition-all duration-300 ${scrolled || isMenuOpen ? 'py-4 bg-[#09090B]/80 backdrop-blur-md border-b border-[#27272A]' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className={`font-display font-bold text-xl tracking-tight flex items-center gap-2 relative z-[80] transition-colors duration-300 ${isMenuOpen ? 'text-white' : ''}`}>
            <Terminal className="text-[#D4FF00]" size={24} /> SYS<span className="text-[#D4FF00]">.</span>DEV
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#A1A1AA] glass-card px-8 py-3 rounded-full shadow-lg">
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#stack" className="hover:text-white transition-colors">Stack</a>
            <a href="#process" className="hover:text-white transition-colors">Process</a>
            <a href="#blog" className="hover:text-white transition-colors">Blog</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>

          <button className="hidden md:flex bg-white text-black px-6 py-2.5 rounded-full font-semibold text-sm hover:bg-[#D4FF00] transition-colors duration-300 items-center gap-2">
            Hire Me <ArrowRight size={16} />
          </button>

          {/* Mobile Animated Hamburger Toggle */}
          <button 
            className="md:hidden relative z-[80] w-12 h-12 flex flex-col justify-center items-center gap-1.5 glass-card rounded-full border border-[#27272A] bg-[#121215]/80"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ease-out origin-center ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}></span>
            <span className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ease-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-[2px] bg-white rounded-full transition-all duration-300 ease-out origin-center ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* NOVEL FULL-SCREEN MOBILE MENU */}
      <div 
        className={`fixed inset-0 bg-[#09090B]/98 backdrop-blur-2xl z-[60] transition-all duration-700 ease-in-out flex flex-col justify-center px-6 md:hidden ${isMenuOpen ? 'menu-clip-open pointer-events-auto opacity-100' : 'menu-clip-closed pointer-events-none opacity-0'}`}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#D4FF00] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="flex flex-col gap-8 text-center relative z-10 mt-12">
          {['Work', 'Stack', 'Process', 'Blog', 'FAQ'].map((item, i) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="font-display text-5xl font-black uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500 hover:from-[#D4FF00] hover:to-green-400 transition-all duration-300 inline-block w-max mx-auto"
              style={{
                transform: isMenuOpen ? 'translateY(0)' : 'translateY(40px)',
                opacity: isMenuOpen ? 1 : 0,
                transitionDelay: `${isMenuOpen ? (i * 100) + 200 : 0}ms`,
                transitionDuration: '500ms'
              }}
            >
              {item}
            </a>
          ))}
        </div>

        <div 
          className="absolute bottom-12 left-0 right-0 px-6 flex flex-col items-center gap-8"
          style={{
            transform: isMenuOpen ? 'translateY(0)' : 'translateY(40px)',
            opacity: isMenuOpen ? 1 : 0,
            transitionDelay: `${isMenuOpen ? 700 : 0}ms`,
            transitionDuration: '500ms'
          }}
        >
          <button className="w-full max-w-[280px] bg-[#D4FF00] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors flex items-center justify-center gap-2">
            Hire Me <ArrowRight size={20} />
          </button>
          <div className="flex space-x-8 text-[#A1A1AA]">
            <a href="#" className="hover:text-white transition-colors"><Github size={24} /></a>
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-white transition-colors"><Twitter size={24} /></a>
          </div>
        </div>
      </div>

      {/* HERO SECTION with PERSONA SELECTOR */}
      <section className="relative min-h-screen flex items-center justify-center pt-28 overflow-hidden px-6">
        <div className="absolute inset-0 z-0 hero-grid pointer-events-none"></div>
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-[#D4FF00] rounded-full mix-blend-screen filter blur-[150px] opacity-10 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#2563EB] rounded-full mix-blend-screen filter blur-[150px] opacity-20"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center reveal-on-scroll animate-reveal">
          
          <div className="mb-10 flex flex-col items-center">
            <span className="text-xs font-mono text-[#A1A1AA] mb-3 uppercase tracking-widest">Select your profile</span>
            <div className="flex gap-2 p-1.5 glass-card rounded-full shadow-2xl">
              {Object.entries(personaContent).map(([key, data]) => {
                const Icon = data.icon;
                const isActive = visitorRole === key;
                return (
                  <button 
                    key={key}
                    onClick={() => setVisitorRole(key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${isActive ? 'bg-[#D4FF00] text-black shadow-md' : 'text-[#A1A1AA] hover:text-white hover:bg-[#27272A]'}`}
                  >
                    <Icon size={16} /> <span className="hidden sm:inline">{data.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
          
          <h1 
            key={visitorRole + 'title'} 
            className="text-5xl md:text-7xl lg:text-[6rem] font-bold leading-[1.05] tracking-tight mb-8 animate-[fadeInUp_0.5s_ease-out]"
          >
            {personaContent[visitorRole].heroTitle.split(' ').map((word, i) => (
              word.toLowerCase() === 'scalable' || word.toLowerCase() === 'rely' ? 
              <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#2563EB]"> {word} </span> : 
              <span key={i}> {word} </span>
            ))}
          </h1>
          
          <p key={visitorRole + 'sub'} className="text-lg md:text-xl text-[#A1A1AA] max-w-3xl mb-12 leading-relaxed animate-[fadeInUp_0.7s_ease-out]">
            {personaContent[visitorRole].heroSub}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-[fadeInUp_0.9s_ease-out]">
            <button className="bg-[#D4FF00] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-colors flex items-center justify-center gap-2">
              View Repositories <Github size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* RESTORED: DUAL-ROW ADVANCED MARQUEE */}
      <div className="py-12 border-y border-[#27272A] bg-[#09090B] relative z-20 overflow-hidden flex flex-col gap-4">
        <div className="marquee">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="marquee-content flex items-center">
              <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#27272A] bg-[#121215] text-[#E4E4E7] transition-all hover:border-[#D4FF00] hover:text-white cursor-default">
                <Code2 size={18} className="text-[#A1A1AA]" />
                <span className="font-medium text-sm whitespace-nowrap">Frontend Architecture</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#27272A] bg-[#121215] text-[#E4E4E7] transition-all hover:border-[#D4FF00] hover:text-white cursor-default">
                <Server size={18} className="text-[#A1A1AA]" />
                <span className="font-medium text-sm whitespace-nowrap">Backend Systems</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#27272A] bg-[#121215] text-[#E4E4E7] transition-all hover:border-[#D4FF00] hover:text-white cursor-default">
                <Cloud size={18} className="text-[#A1A1AA]" />
                <span className="font-medium text-sm whitespace-nowrap">Cloud Infrastructure</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#27272A] bg-[#121215] text-[#E4E4E7] transition-all hover:border-[#D4FF00] hover:text-white cursor-default">
                <Database size={18} className="text-[#A1A1AA]" />
                <span className="font-medium text-sm whitespace-nowrap">Database Optimization</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#27272A] bg-[#121215] text-[#E4E4E7] transition-all hover:border-[#D4FF00] hover:text-white cursor-default">
                <Terminal size={18} className="text-[#A1A1AA]" />
                <span className="font-medium text-sm whitespace-nowrap">API Design</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#27272A] bg-[#121215] text-[#E4E4E7] transition-all hover:border-[#D4FF00] hover:text-white cursor-default">
                <GitBranch size={18} className="text-[#A1A1AA]" />
                <span className="font-medium text-sm whitespace-nowrap">CI/CD Pipelines</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="marquee marquee-reverse">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="marquee-content flex items-center">
              <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#27272A] bg-[#121215] text-[#E4E4E7] transition-all hover:border-[#D4FF00] hover:text-white cursor-default">
                <Cpu size={18} className="text-[#A1A1AA]" />
                <span className="font-medium text-sm whitespace-nowrap">System Architecture</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#27272A] bg-[#121215] text-[#E4E4E7] transition-all hover:border-[#D4FF00] hover:text-white cursor-default">
                <Shield size={18} className="text-[#A1A1AA]" />
                <span className="font-medium text-sm whitespace-nowrap">Security Implementation</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#27272A] bg-[#121215] text-[#E4E4E7] transition-all hover:border-[#D4FF00] hover:text-white cursor-default">
                <Layers size={18} className="text-[#A1A1AA]" />
                <span className="font-medium text-sm whitespace-nowrap">Microservices</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#27272A] bg-[#121215] text-[#E4E4E7] transition-all hover:border-[#D4FF00] hover:text-white cursor-default">
                <Zap size={18} className="text-[#A1A1AA]" />
                <span className="font-medium text-sm whitespace-nowrap">Performance Tuning</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#27272A] bg-[#121215] text-[#E4E4E7] transition-all hover:border-[#D4FF00] hover:text-white cursor-default">
                <Code2 size={18} className="text-[#A1A1AA]" />
                <span className="font-medium text-sm whitespace-nowrap">Automated Testing</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-[#27272A] bg-[#121215] text-[#E4E4E7] transition-all hover:border-[#D4FF00] hover:text-white cursor-default">
                <Database size={18} className="text-[#A1A1AA]" />
                <span className="font-medium text-sm whitespace-nowrap">Data Migration</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SELECTED WORKS (Projects Grid) */}
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

      {/* RESTORED: WHY ME MATRIX (Developer Edge - Grid Layout) */}
      <section id="process" className="py-32 bg-[#0d0d0f] border-y border-[#27272A] relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 reveal-on-scroll">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">The Developer Edge</h2>
            <p className="text-[#A1A1AA] max-w-xl mx-auto">Why technical founders trust me over massive agencies or inexperienced freelancers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="glass-card p-8 rounded-3xl reveal-blur group hover:border-[#D4FF00]/50 transition-colors">
              <CheckCircle2 className="text-[#D4FF00] mb-6 transition-transform group-hover:scale-110" size={32} />
              <h3 className="text-xl font-bold mb-3 font-display">Clean Architecture</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">Writing maintainable code designed to scale. No spaghetti code, just solid engineering.</p>
            </div>
            <div className="glass-card p-8 rounded-3xl reveal-blur delay-100 group hover:border-[#D4FF00]/50 transition-colors" style={{ transitionDelay: '100ms' }}>
              <CheckCircle2 className="text-[#D4FF00] mb-6 transition-transform group-hover:scale-110" size={32} />
              <h3 className="text-xl font-bold mb-3 font-display">Agile Delivery</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">Strict adherence to sprint timelines, robust CI/CD pipelines, and regular updates.</p>
            </div>
            <div className="glass-card p-8 rounded-3xl reveal-blur delay-200 group hover:border-[#D4FF00]/50 transition-colors lg:row-span-2 flex flex-col justify-between bg-gradient-to-br from-[#121215] to-[#2563EB]/10" style={{ transitionDelay: '200ms' }}>
              <div>
                <CheckCircle2 className="text-[#2563EB] mb-6 transition-transform group-hover:scale-110" size={32} />
                <h3 className="text-2xl font-bold mb-3 font-display">Full-Cycle Ownership</h3>
                <p className="text-[#A1A1AA] leading-relaxed mb-6">From database schema design and infrastructure provisioning to responsive frontend UI deployment, I handle the complete technical lifecycle natively.</p>
              </div>
              <div className="font-mono text-xs text-[#2563EB] opacity-70">system.process(lifecycle.FULL);</div>
            </div>
            <div className="glass-card p-8 rounded-3xl reveal-blur delay-300 border-[#27272A] opacity-80 hover:opacity-100 transition-opacity" style={{ transitionDelay: '300ms' }}>
              <XCircle className="text-red-500 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-3 font-display text-gray-300">Spaghetti Codebases</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">Inexperienced developers leave behind technical debt that costs thousands to refactor later.</p>
            </div>
            <div className="glass-card p-8 rounded-3xl reveal-blur delay-400 border-[#27272A] opacity-80 hover:opacity-100 transition-opacity" style={{ transitionDelay: '400ms' }}>
              <XCircle className="text-red-500 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-3 font-display text-gray-300">Unreliable Builds</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed">Missed deadlines and zero automated testing leading to broken production environments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK & SERVICES & GITHUB AI (Bento Grid) */}
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
              {isGithubLoading ? <span className="animate-pulse text-[#A1A1AA]">&gt; Fetching and analyzing git history...</span> : <p>&gt; <span className="text-[#D4FF00]">System.out.print(</span>"{githubSummary}"<span className="text-[#D4FF00]">);</span></p>}
            </div>
          </div>
          
          {/* NEW: LIVE GITHUB STATS CARD */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col group hover:bg-[#18181B] transition-colors reveal-blur md:col-span-3 lg:col-span-1 border border-[#27272A] hover:border-[#D4FF00]/50 relative overflow-hidden" style={{ transitionDelay: '150ms' }}>
            <div className="absolute top-0 right-0 p-6 opacity-30 group-hover:opacity-100 transition-opacity"><LineChart size={20} className="text-[#D4FF00]" /></div>
            <div className="w-14 h-14 rounded-2xl bg-[#27272A] flex items-center justify-center text-white mb-6 border border-[#3F3F46] group-hover:bg-[#D4FF00] group-hover:text-black transition-colors"><Github size={24} /></div>
            <h3 className="text-xl font-bold font-display mb-2 text-white">Live Activity</h3>
            <p className="text-[#A1A1AA] text-sm mb-6">Real-time GitHub contributions and most used languages.</p>
            
            <div className="mt-auto flex flex-col gap-4">
              {/* Note: 'leerob' is used as a placeholder github profile to ensure stats load beautifully */}
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

      {/* RESTORED: HARD PROOF & STATS */}
      <section className="py-24 border-y border-[#27272A] bg-[#121215]/50 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 text-center">
            <div className="reveal-scale" style={{ transitionDelay: '0ms' }}>
              <div className="text-4xl md:text-5xl font-black font-display mb-2 text-white">99.9<span className="text-[#D4FF00]">%</span></div>
              <div className="font-mono text-xs text-[#A1A1AA]">UPTIME_MAINTAINED</div>
            </div>
            <div className="reveal-scale" style={{ transitionDelay: '100ms' }}>
              <div className="text-4xl md:text-5xl font-black font-display mb-2 text-white">50<span className="text-[#D4FF00]">+</span></div>
              <div className="font-mono text-xs text-[#A1A1AA]">REPOSITORIES</div>
            </div>
            <div className="reveal-scale" style={{ transitionDelay: '200ms' }}>
              <div className="text-4xl md:text-5xl font-black font-display mb-2 text-white">10<span className="text-[#D4FF00]">k+</span></div>
              <div className="font-mono text-xs text-[#A1A1AA]">COMMITS_PUSHED</div>
            </div>
            <div className="reveal-scale" style={{ transitionDelay: '300ms' }}>
              <div className="text-4xl md:text-5xl font-black font-display mb-2 text-white">0</div>
              <div className="font-mono text-xs text-[#A1A1AA]">DATA_BREACHES</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "David Chen", role: "CTO, FintechOps", text: "The cleanest, most well-documented React codebase I've ever inherited. Setting up CI/CD with him was flawless." },
              { name: "Sarah Miller", role: "Founder, ScaleSaaS", text: "Not just a coder, but an actual engineer. He architected our entire AWS backend to handle a 500% spike in traffic without a sweat." },
              { name: "James Holden", role: "VP Engineering", text: "Hiring him was the best technical decision we made this year. He refactored our legacy monolithic API into blazing fast microservices." }
            ].map((test, idx) => (
              <div key={idx} className="glass-card p-8 rounded-3xl reveal-on-scroll" style={{ transitionDelay: `${idx * 150}ms` }}>
                <div className="flex text-[#D4FF00] mb-6 gap-1">{[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}</div>
                <p className="text-sm leading-relaxed mb-8 text-[#E4E4E7]">"{test.text}"</p>
                <div className="flex items-center gap-4 border-t border-[#27272A] pt-6">
                  <div className="w-10 h-10 rounded-full bg-[#27272A] flex items-center justify-center font-bold text-xs">{test.name.charAt(0)}</div>
                  <div><div className="font-bold font-display text-sm">{test.name}</div><div className="text-[#A1A1AA] text-xs font-mono">{test.role}</div></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESTORED: BLOG / ARTICLES SECTION */}
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

      {/* RESTORED: FAQ SECTION */}
      <section id="faq" className="py-32 max-w-3xl mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center font-display reveal-on-scroll">Technical FAQ</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="glass-card rounded-2xl overflow-hidden transition-all duration-300 reveal-on-scroll" style={{ transitionDelay: `${index * 150}ms` }}>
              <button className="w-full text-left p-6 flex justify-between items-center focus:outline-none" onClick={() => setActiveFaq(activeFaq === index ? null : index)}>
                <span className="font-bold text-lg pr-8">{faq.q}</span>
                <ChevronDown className={`transform transition-transform duration-300 text-[#D4FF00] ${activeFaq === index ? 'rotate-180' : ''}`} />
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out bg-[#09090B] ${activeFaq === index ? 'max-h-40 py-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-[#A1A1AA] text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        {/* NEW: AI Assistant CTA for unanswered questions */}
        <div 
          className="mt-12 glass-card p-8 rounded-3xl reveal-on-scroll border-[#D4FF00]/30 hover:border-[#D4FF00] transition-colors flex flex-col sm:flex-row items-center justify-between gap-6 relative overflow-hidden" 
          style={{ transitionDelay: `${faqs.length * 150}ms` }}
        >
          {/* Subtle background glow for the card */}
          <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-[#D4FF00] opacity-10 blur-[50px] rounded-full pointer-events-none"></div>
          
          <div className="text-center sm:text-left relative z-10">
            <h3 className="text-xl font-bold font-display text-white mb-2 flex items-center justify-center sm:justify-start gap-2">
              <Terminal size={20} className="text-[#D4FF00]" /> Didn't find your answer?
            </h3>
            <p className="text-[#A1A1AA] text-sm max-w-md">
              Ask my personalized AI assistant anything about my engineering experience, tech stack, or availability.
            </p>
          </div>
          
          {/* ANIMATED AI INPUT SLIDE-IN */}
          <div 
            className={`relative flex h-[48px] rounded-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-20 ${isFaqAiInputActive ? 'w-full sm:w-[350px] bg-[#09090B] border border-[#D4FF00] shadow-[0_0_15px_rgba(212,255,0,0.15)]' : 'w-full sm:w-[180px] bg-[#D4FF00] border border-[#D4FF00] hover:bg-white cursor-pointer shadow-[0_0_20px_rgba(212,255,0,0.2)] shrink-0'}`}
            onClick={() => { if(!isFaqAiInputActive) setIsFaqAiInputActive(true) }}
          >
            {/* Unexpanded State (Button) */}
            <div className={`absolute inset-0 flex items-center justify-center gap-2 text-sm text-black font-bold transition-all duration-300 ${isFaqAiInputActive ? 'opacity-0 -translate-x-4 pointer-events-none' : 'opacity-100 translate-x-0 pointer-events-auto'}`}>
              <MessageSquare size={16} /> Ask AI Assistant
            </div>
            
            {/* Expanded State (Form) */}
            <form 
              className={`flex w-full h-full transition-all duration-500 delay-100 ${isFaqAiInputActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8 pointer-events-none'}`}
              onSubmit={handleFaqAiSubmit}
            >
              <input 
                ref={faqAiInputRef}
                type="text" 
                value={faqAiInput}
                onChange={(e) => setFaqAiInput(e.target.value)}
                placeholder="e.g. Have you used AWS?" 
                className="bg-transparent text-sm text-white px-5 h-full w-full focus:outline-none" 
                required 
                onBlur={(e) => { if(!e.target.value) setIsFaqAiInputActive(false) }}
              />
              <button type="submit" className="bg-[#D4FF00] hover:bg-white text-black transition-colors px-5 flex items-center justify-center shrink-0">
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* NEW: AI SALARY NEGOTIATOR SIMULATOR */}
      <section id="negotiator" className="py-32 bg-[#121215]/30 border-t border-[#27272A] relative z-10 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#D4FF00] rounded-full mix-blend-screen filter blur-[150px] opacity-5 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Negotiator Context */}
          <div className="reveal-on-scroll">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#D4FF00]/30 bg-[#D4FF00]/10 text-xs text-[#D4FF00] font-mono mb-6 shadow-[0_0_15px_rgba(212,255,0,0.1)]">
              <Bot size={14} /> Interactive Simulation
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 font-display">AI Salary Negotiator</h2>
            <p className="text-[#A1A1AA] text-lg leading-relaxed mb-6">
              Curious how I handle business discussions? Try lowballing me. Type a mock salary or project budget, and my AI proxy will negotiate with you in real-time.
            </p>
            <ul className="space-y-4 text-sm text-[#E4E4E7]">
              <li className="flex items-start gap-3"><CheckCircle2 className="text-[#D4FF00] shrink-0 mt-0.5" size={18} /> Demonstrates my professional communication.</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-[#D4FF00] shrink-0 mt-0.5" size={18} /> Proves I understand my market value.</li>
              <li className="flex items-start gap-3"><CheckCircle2 className="text-[#D4FF00] shrink-0 mt-0.5" size={18} /> Shows technical creativity and confidence.</li>
            </ul>
          </div>

          {/* Chat Interface */}
          <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col h-[450px] reveal-on-scroll relative overflow-hidden shadow-[0_0_30px_rgba(212,255,0,0.05)] border border-[#27272A] hover:border-[#D4FF00]/50 transition-colors delay-100">
            {/* Header */}
            <div className="flex items-center gap-3 pb-4 border-b border-[#27272A] mb-4">
              <div className="w-10 h-10 rounded-full bg-[#18181B] border border-[#27272A] flex items-center justify-center text-[#D4FF00]">
                <DollarSign size={20} />
              </div>
              <div>
                <h4 className="font-bold text-sm text-white font-display">SYS.DEV Negotiator</h4>
                <p className="text-[10px] text-[#A1A1AA] font-mono flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span> Standing firm
                </p>
              </div>
            </div>

            {/* Messages */}
            <div ref={negotiatorScrollRef} className="flex-1 overflow-y-auto flex flex-col gap-4 mb-4 pr-2">
              {negotiationChat.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${msg.role === 'user' ? 'bg-[#2563EB] text-white rounded-br-none shadow-lg' : 'bg-[#18181B] border border-[#27272A] text-[#E4E4E7] rounded-bl-none'}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isNegotiating && (
                <div className="flex justify-start">
                  <div className="bg-[#18181B] border border-[#27272A] rounded-2xl rounded-bl-none px-4 py-3 flex gap-1 items-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-bounce"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-bounce delay-100"></span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-bounce delay-200"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <form onSubmit={handleNegotiationSubmit} className="relative mt-auto flex items-center">
              <input 
                type="text" 
                value={negotiatorInput}
                onChange={(e) => setNegotiatorInput(e.target.value)}
                placeholder="e.g., $90,000/yr base + equity..." 
                className="w-full bg-[#09090B] border border-[#27272A] rounded-full pl-5 pr-14 py-3.5 text-sm text-white focus:outline-none focus:border-[#D4FF00] transition-colors"
              />
              <button 
                type="submit" 
                disabled={isNegotiating || !negotiatorInput.trim()}
                className="absolute right-1.5 w-10 h-10 rounded-full bg-[#D4FF00] text-black flex items-center justify-center hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ENHANCED PROFESSIONAL FOOTER */}
      <footer className="relative pt-24 pb-12 border-t border-[#27272A] z-10 bg-[#050505] overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#D4FF00] opacity-5 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
          {/* Top part: Brand & Columns */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8 mb-16">
            
            {/* Brand & Info Column */}
            <div className="md:col-span-5 lg:col-span-4 flex flex-col items-start reveal-on-scroll">
              <div className="font-display font-bold text-2xl tracking-tight flex items-center gap-2 mb-6 text-white">
                <Terminal className="text-[#D4FF00]" size={28} /> SYS<span className="text-[#D4FF00]">.</span>DEV
              </div>
              <p className="text-[#A1A1AA] text-sm leading-relaxed mb-8 max-w-sm">
                Architecting and building high-performance web applications and resilient backend systems designed for scale.
              </p>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#27272A] bg-[#121215] text-xs text-[#E4E4E7] font-mono shadow-inner">
                <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse"></span>
                Status: Accepting new projects
              </div>
            </div>

            {/* Links Columns */}
            <div className="md:col-span-7 lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div className="reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
                <h4 className="text-white font-bold mb-6 font-display">Navigation</h4>
                <ul className="space-y-4 text-sm text-[#A1A1AA]">
                  <li><a href="#work" className="hover:text-[#D4FF00] transition-colors">Selected Work</a></li>
                  <li><a href="#stack" className="hover:text-[#D4FF00] transition-colors">Tech Arsenal</a></li>
                  <li><a href="#process" className="hover:text-[#D4FF00] transition-colors">The Developer Edge</a></li>
                  <li><a href="#blog" className="hover:text-[#D4FF00] transition-colors">Technical Writing</a></li>
                </ul>
              </div>
              
              <div className="reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
                <h4 className="text-white font-bold mb-6 font-display">Connect</h4>
                <ul className="space-y-4 text-sm text-[#A1A1AA]">
                  <li><a href="#" className="hover:text-[#D4FF00] transition-colors flex items-center gap-2"><Github size={16}/> GitHub</a></li>
                  <li><a href="#" className="hover:text-[#D4FF00] transition-colors flex items-center gap-2"><Linkedin size={16}/> LinkedIn</a></li>
                  <li><a href="#" className="hover:text-[#D4FF00] transition-colors flex items-center gap-2"><Twitter size={16}/> X (Twitter)</a></li>
                  <li><a href="#" className="hover:text-[#D4FF00] transition-colors flex items-center gap-2"><Mail size={16}/> Email Me</a></li>
                </ul>
              </div>
              
              <div className="col-span-2 sm:col-span-1 reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
                <h4 className="text-white font-bold mb-6 font-display">Newsletter</h4>
                <p className="text-sm text-[#A1A1AA] mb-4 leading-relaxed">Get my latest technical articles and architecture breakdowns straight to your inbox.</p>
                
                {/* Standard Static Newsletter Input */}
                <form className="flex border border-[#27272A] rounded-full overflow-hidden focus-within:border-[#D4FF00] transition-colors bg-[#09090B]">
                  <input type="email" placeholder="dev@email.com" className="bg-transparent text-sm text-white px-4 py-3 w-full focus:outline-none" required />
                  <button type="submit" className="bg-[#18181B] hover:bg-[#D4FF00] hover:text-black transition-colors px-5 flex items-center justify-center text-[#A1A1AA] border-l border-[#27272A]">
                    <ArrowRight size={16} />
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Copyright Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center border-t border-[#27272A]/50 pt-8 mt-8 text-[#A1A1AA] text-xs font-mono reveal-on-scroll" style={{ transitionDelay: '400ms' }}>
            <p>© {new Date().getFullYear()} SYS.DEV. Crafted with precision.</p>
            <p className="mt-4 md:mt-0 flex items-center gap-2">
              Designed & Built using <Code2 size={14} className="text-[#D4FF00]"/>
            </p>
          </div>
        </div>
      </footer>

      {/* AI CHATBOT WIDGET */}
      <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end">
        <div className={`mb-4 w-[340px] sm:w-[380px] bg-[#121215] border border-[#27272A] rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-bottom-right ${isChatOpen ? 'scale-100 opacity-100 pointer-events-auto' : 'scale-90 opacity-0 pointer-events-none'}`}>
          <div className="bg-[#18181B] p-4 flex justify-between items-center border-b border-[#27272A]">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-[#D4FF00] flex items-center justify-center text-black"><Terminal size={16} /></div>
              <div>
                <h4 className="font-bold text-sm">SYS.DEV AI</h4>
                <p className="text-[10px] text-[#A1A1AA] flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online</p>
              </div>
            </div>
            <button onClick={() => setIsChatOpen(false)} className="text-[#A1A1AA] hover:text-white"><X size={20} /></button>
          </div>
          <div ref={chatScrollRef} className="h-[300px] overflow-y-auto p-4 flex flex-col gap-4 bg-[#09090B]">
            {chatMessages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${msg.role === 'user' ? 'bg-[#2563EB] text-white rounded-br-none' : 'glass-card text-[#E4E4E7] rounded-bl-none'}`}>{msg.text}</div>
              </div>
            ))}
            {isChatLoading && (
              <div className="flex justify-start">
                <div className="glass-card rounded-2xl rounded-bl-none px-4 py-3 flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-bounce"></span><span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-bounce delay-100"></span><span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-bounce delay-200"></span>
                </div>
              </div>
            )}
          </div>
          <form onSubmit={handleChatSubmit} className="p-3 bg-[#18181B] border-t border-[#27272A] flex gap-2">
            <input type="text" value={chatInput} onChange={(e) => setChatInput(e.target.value)} placeholder="Ask about my experience..." className="flex-1 bg-[#09090B] border border-[#27272A] rounded-full px-4 py-2 text-sm text-white focus:outline-none focus:border-[#D4FF00]" />
            <button type="submit" disabled={isChatLoading || !chatInput.trim()} className="w-10 h-10 rounded-full bg-[#D4FF00] text-black flex items-center justify-center hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"><Send size={16} /></button>
          </form>
        </div>
        <button onClick={() => setIsChatOpen(!isChatOpen)} className={`w-14 h-14 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(212,255,0,0.3)] transition-transform duration-300 hover:scale-110 ${isChatOpen ? 'bg-[#27272A] text-white' : 'bg-[#D4FF00] text-black'}`}>
          {isChatOpen ? <X size={24} /> : <MessageSquare size={24} />}
        </button>
      </div>
    </div>
  );
}