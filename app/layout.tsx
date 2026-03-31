import type { Metadata } from "next";
import { Geist, Geist_Mono, Lato } from "next/font/google";
import "./globals.css";

const latoSans = Lato({
  subsets: ["latin"],
  // Obavezno definiši težine jer Lato nema "variable" podršku
  variable: "--font-lato-sans",
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dejan Karavla | Full Stack Engineer",
  description:
    "Portfolio of Dejan Karavla, a Full Stack Engineer specializing in React, Next.js, Node.js, NestJS, and building scalable modern web and mobile applications.",
  keywords: [
    "Full Stack Engineer",
    "Full Stack Developer",
    "Front-End Developer",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "TypeScript",
    "Portfolio",
    "Dejan Karavla",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${latoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
