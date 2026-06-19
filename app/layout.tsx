import type { Metadata } from "next";
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next'
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FixedBackground from "./fixed_background";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marcus Wright",
  description: "Personal Website for Marcus Wright",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      > 
        <FixedBackground />
        <Navbar />
        {children}
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
