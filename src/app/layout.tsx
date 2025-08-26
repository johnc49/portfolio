import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from './components/Navbar';
import Footer from './components/Footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Chisowa",
  description: "Portfolio built with Next.js 15, Tailwind, and Framer Motion",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* Single Favicon */}
        <link rel="icon" href="/fav.png" />
      </head>
      <body className="antialiased bg-gray-950 text-white">
        <Navbar />
        <main className="max-w-5xl mx-auto p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
