import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Navbar from "@/components/Navbar";
import ScrollToTop from "@/components/ScrollToTop";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ToolVerse - Free Online Tools",
    template: "%s | ToolVerse",
  },
  description:
    "Free online calculators, finance tools, student tools, health tools and utilities.",
  keywords: [
    "online tools",
    "calculator",
    "student tools",
    "finance tools",
    "GST calculator",
    "EMI calculator",
    "BMI calculator",
    "password generator",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
     <body className="min-h-full flex flex-col">
      <GoogleAnalytics />
  <ScrollToTop />
  <Navbar />

  <main className="flex-1">
    {children}
  </main>

  <Footer />
</body>
    </html>
  );
}