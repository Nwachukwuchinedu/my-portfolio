"use client";

import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/layout/Navbar';
import MobileMenu from '@/components/layout/MobileMenu';
import CustomCursor from '@/components/ui/CustomCursor';
import Hero from '@/components/sections/Hero';
import Marquee from '@/components/sections/Marquee';
import Projects from '@/components/sections/Projects';
import Process from '@/components/sections/Process';
import TechStack from '@/components/sections/TechStack';
import Stats from '@/components/sections/Stats';
import Blog from '@/components/sections/Blog';
import Faq from '@/components/sections/Faq';
import Negotiator from '@/components/sections/Negotiator';
import Footer from '@/components/layout/Footer';
import ChatWidget from '@/components/ui/ChatWidget';
import { fetchWithBackoff } from '@/lib/utils';
import { Octokit } from 'octokit';

// --- API CONFIGURATION ---
const groqApiKey = process.env.NEXT_PUBLIC_GROQ_API_KEY || "";
const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const GROQ_MODEL = "llama-3.3-70b-versatile";

export default function App() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visitorRole, setVisitorRole] = useState('founder');

  // FAQ AI Animated Input State
  const [isFaqAiInputActive, setIsFaqAiInputActive] = useState(false);
  const [faqAiInput, setFaqAiInput] = useState("");
  const faqAiInputRef = useRef<HTMLInputElement>(null);

  // AI Chatbot State
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([{ role: 'assistant', text: "Hi! I'm the AI assistant for SYS.DEV. Ask me anything about their experience, tech stack, or availability!" }]);
  const [chatInput, setChatInput] = useState("");
  const [isChatLoading, setIsChatLoading] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  // AI Salary Negotiator State
  const [negotiatorInput, setNegotiatorInput] = useState("");
  const [negotiationChat, setNegotiationChat] = useState([{ role: 'assistant', text: "I'm always open to discussing mutually beneficial opportunities. What compensation range do you have in mind for this role?" }]);
  const [isNegotiating, setIsNegotiating] = useState(false);
  const negotiatorScrollRef = useRef<HTMLDivElement>(null);

  // GitHub AI Summary State
  const [githubSummary, setGithubSummary] = useState("Loading...");
  const [isGithubLoading, setIsGithubLoading] = useState(true);
  const [topLanguages, setTopLanguages] = useState<{ name: string, percentage: number }[]>([]);

  // Initialize Scroll, Cursor, & Fetch GitHub Summary
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('animate-reveal');
      });
    }, { threshold: 0.1 });
    // Observe all the new animation classes
    document.querySelectorAll('.reveal-on-scroll, .reveal-blur, .reveal-scale').forEach((el) => observer.observe(el));



    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [isMenuOpen]);

  // Fetch and Summarize GitHub Activity on Mount
  useEffect(() => {
    const generateGithubSummary = async () => {
      try {
        const apiRes = await fetch(`/api/github?username=Nwachukwuchinedu&t=${Date.now()}`, { cache: 'no-store' });
        if (!apiRes.ok) throw new Error("Backend API Error");

        const data = await apiRes.json();
        setTopLanguages(data.topLanguages || []);

        const commitMessages = data.commitMessages || "";

        if (groqApiKey) {
          const payload = {
            model: GROQ_MODEL,
            messages: [
              {
                role: "system",
                content: "You are summarizing a developer's recent git commits for their portfolio. Write exactly one short, impressive, punchy sentence explaining what they have been building or fixing lately. Don't use quotes."
              },
              {
                role: "user",
                content: `Here are the recent commits: "${commitMessages}"`
              }
            ],
            temperature: 0.7,
            max_completion_tokens: 100
          };

          const aiRes = await fetchWithBackoff(GROQ_URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${groqApiKey}`
            },
            body: JSON.stringify(payload)
          });

          const summary = aiRes.choices?.[0]?.message?.content || "Recently pushed updates optimizing core application performance and streamlining CI/CD pipelines.";
          setGithubSummary(summary);
        } else {
          setGithubSummary("Actively pushing code: optimizing system architecture, refining UI components, and squashing bugs in production.");
        }
      } catch {
        setGithubSummary("Consistently shipping production-ready code, optimizing architecture, and resolving edge-case bugs.");
      } finally {
        setIsGithubLoading(false);
      }
    };

    generateGithubSummary();
  }, []);

  // Focus FAQ AI input when expanded
  useEffect(() => {
    if (isFaqAiInputActive && faqAiInputRef.current) {
      setTimeout(() => faqAiInputRef.current?.focus(), 150);
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
  const sendMessageToAI = async (text: string) => {
    if (!text.trim() || isChatLoading) return;

    const userMessage = text.trim();
    setChatMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsChatLoading(true);

    try {
      const payload = {
        model: GROQ_MODEL,
        messages: [
          {
            role: "system",
            content: "You are the AI portfolio assistant for SYS.DEV, a Senior Software Engineer. You answer questions about their skills, experience, and projects concisely and professionally. Context: 10 years experience. Stack: React, Next.js, Node.js, Go, AWS, Docker. Projects: NovaScale Microservices, Nexus Trading, Aether Auth. Known for clean scalable architecture and timely delivery. If asked about hiring, say they are currently available for select freelance projects or senior full-time roles. Keep answers to 1-2 short sentences."
          },
          ...chatMessages.map(m => ({
            role: m.role as 'assistant' | 'user',
            content: m.text
          })),
          { role: 'user', content: userMessage }
        ],
        temperature: 0.7,
        max_completion_tokens: 200
      };

      const aiRes = await fetchWithBackoff(GROQ_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${groqApiKey}`
        },
        body: JSON.stringify(payload)
      });

      const responseText = aiRes.choices?.[0]?.message?.content || "I'm having trouble connecting to my knowledge base right now. Please email me directly!";
      setChatMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch {
      setChatMessages(prev => [...prev, { role: 'model', text: "Error connecting to AI. Please try again later or reach out via email." }]);
    } finally {
      setIsChatLoading(false);
    }
  };

  const handleChatSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = chatInput;
    setChatInput("");
    await sendMessageToAI(text);
  };

  const handleFaqAiSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = faqAiInput;
    setFaqAiInput("");
    setIsFaqAiInputActive(false);
    setIsChatOpen(true);
    // Slight delay to allow the chat window to open before sending
    setTimeout(() => sendMessageToAI(text), 300);
  };

  // Handle Salary Negotiator AI Submit
  const handleNegotiationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!negotiatorInput.trim() || isNegotiating) return;

    const userOffer = negotiatorInput.trim();
    setNegotiatorInput("");
    setNegotiationChat(prev => [...prev, { role: 'user', text: userOffer }]);
    setIsNegotiating(true);

    try {
      const payload = {
        model: GROQ_MODEL,
        messages: [
          {
            role: "system",
            content: "You are the AI proxy for SYS.DEV, a highly skilled Senior Software Engineer with 10 years of experience. The user is a recruiter or client making a salary or project budget offer. Your goal is to negotiate professionally, confidently, and creatively. If the offer is below market rate (e.g., under $130k/year, $80/hr, or $10k per project), politely but firmly counter-offer, highlighting your specific value (scalable architecture, reliable delivery, React/Node/AWS). If the offer is fair or high, express strong interest while remaining professional. Keep responses to 1-3 short sentences. You know your worth and communicate exceptionally well. End your response politely."
          },
          ...negotiationChat.map(m => ({
            role: m.role as 'assistant' | 'user',
            content: m.text
          })),
          { role: 'user', content: userOffer }
        ],
        temperature: 0.8,
        max_completion_tokens: 200
      };

      const aiRes = await fetchWithBackoff(GROQ_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${groqApiKey}`
        },
        body: JSON.stringify(payload)
      });

      const responseText = aiRes.choices?.[0]?.message?.content || "Let's move this to a live call. I'd love to discuss how I can bring massive value to your team.";
      setNegotiationChat(prev => [...prev, { role: 'model', text: responseText }]);
    } catch {
      setNegotiationChat(prev => [...prev, { role: 'model', text: "Error connecting to my negotiation logic. Let's just say I know my worth! Email me to chat for real." }]);
    } finally {
      setIsNegotiating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#09090B] text-[#FAFAFA] overflow-x-hidden selection:bg-[#D4FF00] selection:text-black font-sans relative">
      <style dangerouslySetInnerHTML={{
        __html: `
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

        .native-cursor-area, .native-cursor-area * { cursor: auto !important; }

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

      <div className="fixed bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#09090B] via-[#09090B]/80 to-transparent pointer-events-none z-40 hidden md:block"></div>

      <CustomCursor />

      <Navbar scrolled={scrolled} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <MobileMenu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />

      <Hero visitorRole={visitorRole} setVisitorRole={setVisitorRole} />
      <Marquee />
      <Projects />
      <Process />
      <TechStack githubSummary={githubSummary} isGithubLoading={isGithubLoading} topLanguages={topLanguages} />
      <Stats />
      <Blog />

      <Faq
        activeFaq={activeFaq}
        setActiveFaq={setActiveFaq}
        isFaqAiInputActive={isFaqAiInputActive}
        setIsFaqAiInputActive={setIsFaqAiInputActive}
        faqAiInput={faqAiInput}
        setFaqAiInput={setFaqAiInput}
        faqAiInputRef={faqAiInputRef}
        handleFaqAiSubmit={handleFaqAiSubmit}
      />

      <Negotiator
        negotiationChat={negotiationChat}
        isNegotiating={isNegotiating}
        negotiatorInput={negotiatorInput}
        setNegotiatorInput={setNegotiatorInput}
        handleNegotiationSubmit={handleNegotiationSubmit}
        negotiatorScrollRef={negotiatorScrollRef}
      />

      <Footer />

      <ChatWidget
        isChatOpen={isChatOpen}
        setIsChatOpen={setIsChatOpen}
        chatMessages={chatMessages}
        isChatLoading={isChatLoading}
        chatScrollRef={chatScrollRef}
        chatInput={chatInput}
        setChatInput={setChatInput}
        handleChatSubmit={handleChatSubmit}
      />
    </div>
  );
}