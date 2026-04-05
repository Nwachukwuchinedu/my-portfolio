import type { Metadata } from "next";
import "./globals.css";

const geistSans = {
  variable: "--font-geist-sans",
};

const geistMono = {
  variable: "--font-geist-mono",
};

export const metadata: Metadata = {
  title: {
    default: 'SIM.EON | Engineer',
    template: '%s | SIM.EON',
  },
  description: 'Engineer and Technologist with 5+ years of experience building scalable, high-performance systems and data-driven solutions.',
  keywords: [
    'Senior Software Engineer',
    'Full Stack Developer',
    'React Expert',
    'Next.js Developer',
    'Node.js Backend',
    'Cloud Architecture',
    'Freelance Web Developer',
    'SIM.EON Portfolio',
    'Web Performance Optimization',
    'Scalable Systems'
  ],
  openGraph: {
    title: 'SIM.EON',
    description: 'Explore the professional journey and technical arsenal of SIM.EON, a Senior Software Engineer specializing in scalable web architectures and performant digital experiences.',
    url: 'https://nwachukwu-simeon.vercel.app',
    siteName: 'SIM.EON',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'SIM.EON | Senior Software Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SIM.EON | Senior Software Engineer',
    description: 'Senior Software Engineer building the future of the web with React, Next.js, and Node.js.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
