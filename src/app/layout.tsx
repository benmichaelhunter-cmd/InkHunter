import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "InkHunter — Environmental Public Art | Patrick Hunter",
    template: "%s | InkHunter",
  },
  description:
    "InkHunter is the practice of Patrick Hunter — environmental and community-based mural artist creating large-scale public art that transforms spaces and connects communities to nature, culture, and each other.",
  keywords: [
    "environmental mural artist Sydney",
    "large scale mural artist NSW",
    "community mural artist Australia",
    "public art commission NSW",
    "council mural artist",
    "placemaking public art",
    "Patrick Hunter artist",
  ],
  authors: [{ name: "Patrick Hunter" }],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "InkHunter",
    title: "InkHunter — Environmental Public Art | Patrick Hunter",
    description:
      "Large-scale public art that transforms communities. Environmental murals, community engagement, and placemaking by Patrick Hunter.",
  },
  twitter: {
    card: "summary_large_image",
    title: "InkHunter — Environmental Public Art",
    description:
      "Large-scale public art that transforms communities.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfairDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-background text-foreground">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
