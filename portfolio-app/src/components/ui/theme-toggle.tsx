"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { cn } from "@/lib/utils"

export function ThemeToggle({ className }: { className?: string }) {
    const { setTheme, theme, resolvedTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <div className="w-10 h-10" /> // Placeholder to prevent layout shift
    }

    const toggleTheme = () => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark")
    }

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                "relative flex items-center justify-center",
                "w-10 h-10 rounded-full",
                "bg-white/10 dark:bg-black/20",
                "backdrop-blur-xl saturate-150",
                "border border-white/20 dark:border-white/10",
                "shadow-sm",
                "transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]",
                "hover:scale-105 active:scale-95",
                "group",
                className
            )}
            aria-label="Toggle theme"
        >
            <div className="relative w-full h-full flex items-center justify-center">
                <Sun className={cn(
                    "absolute w-4 h-4 text-cyan-500",
                    "transition-all duration-500 ease-out",
                    resolvedTheme === 'dark' ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                )} />
                <Moon className={cn(
                    "absolute w-4 h-4 text-cyan-400",
                    "transition-all duration-500 ease-out",
                    resolvedTheme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                )} />
            </div>
        </button>
    )
}
