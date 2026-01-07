"use client"
import React, { useState, useEffect } from "react";
import { ThemeToggle } from "./theme-toggle";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "#" },
        { name: "Work", href: "#work" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6 }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
                    scrolled ? "py-4" : "py-6"
                )}
            >
                <div className={cn(
                    "max-w-5xl mx-auto px-6 mx-4 md:mx-auto rounded-full flex items-center justify-between transition-all duration-300",
                    scrolled
                        ? "bg-white/10 dark:bg-black/40 backdrop-blur-xl border border-white/20 dark:border-white/10 shadow-lg py-3"
                        : "bg-transparent border-transparent py-2"
                )}>
                    {/* Logo */}
                    <a href="#" className="text-2xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-cyan-400">
                        Portfolio
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors hover:scale-105"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        {/* Mobile Menu Toggle */}
                        <button
                            className="md:hidden p-2 text-foreground"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-[90] bg-background/95 backdrop-blur-xl md:hidden flex flex-col items-center justify-center gap-8"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="text-2xl font-bold text-foreground hover:text-cyan-400 transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
