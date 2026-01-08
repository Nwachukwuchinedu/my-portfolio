import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google"; // Keep Inter/Geist from Google
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/ui/navbar";
import { SmoothScroll } from "@/components/smooth-scroll";
import { BottomBlur } from "@/components/ui/bottom-blur";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dev Portfolio | Modern Architecture",
  description: "Senior Software Developer Portfolio",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-background text-foreground bg-cyan-500/5 selection:bg-cyan-500/30 selection:text-cyan-200 font-sans`} // Added font-sans default
        suppressHydrationWarning
      >
        <SmoothScroll>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <BottomBlur />
          </ThemeProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
