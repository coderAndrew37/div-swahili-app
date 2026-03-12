import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";

import { SITE } from "@/constants";
import "./globals.css";
import { Footer, Navbar } from "@/components/layout";
import { UrgencyBanner } from "@/components/ui/UrgencyBanner";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsapp";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description:
    "Expert online Swahili lessons for diaspora families, diplomats, foreign spouses, and curious learners worldwide. Taught by a seasoned academic from Nairobi.",
  keywords: [
    "Swahili lessons",
    "learn Swahili online",
    "Swahili teacher",
    "Nairobi",
    "diaspora",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-[#0a0a0a] font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <UrgencyBanner />
      </body>
    </html>
  );
}
