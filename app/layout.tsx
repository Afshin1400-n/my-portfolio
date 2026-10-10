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
  title: "Afshin Norouzi — Frontend Developer",
  description:
    "Frontend developer specializing in React and Next.js. I build clean, fast, and beautiful user interfaces.",
  keywords: [
    "Afshin Norouzi",
    "Frontend Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
  ],
  authors: [{ name: "Afshin Norouzi" }],
  creator: "Afshin Norouzi",
  openGraph: {
    title: "Afshin Norouzi — Frontend Developer",
    description:
      "Frontend developer specializing in React and Next.js. I build clean, fast, and beautiful user interfaces.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afshin Norouzi — Frontend Developer",
    description:
      "Frontend developer specializing in React and Next.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#fafaf7] text-neutral-900">
        {children}
      </body>
    </html>
  );
}