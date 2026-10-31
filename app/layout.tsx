import type { Metadata } from "next";
import { Lato } from "next/font/google";
import { siteUrl } from "@/lib/site";
import "./globals.css";

const latoSans = Lato({
  subsets: ["latin"],
  // Obavezno definiši težine jer Lato nema "variable" podršku
  variable: "--font-lato-sans",
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

const title = "Dejan Karavla | Full Stack Engineer & Co-founder of Cognios";
const description =
  "Portfolio of Dejan Karavla, Co-founder & CEO of Cognios and a Full Stack Engineer specializing in React, Next.js, Node.js, NestJS, and building scalable modern web, mobile, and AI-powered applications.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: {
    canonical: "/",
  },
  // Slika za preview dolazi iz app/opengraph-image.jpg
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Dejan Karavla",
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  keywords: [
    "Cognios",
    "AI Tutors",
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
      className={`${latoSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
