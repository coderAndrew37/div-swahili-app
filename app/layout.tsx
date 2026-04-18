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
  metadataBase: new URL("https://lughastudio.com"), // Update to your domain
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: "Expert online Swahili lessons for diaspora families, diplomats, foreign spouses, and curious learners worldwide. Taught by a seasoned academic from Nairobi.",
  keywords: ["Swahili lessons", "learn Swahili online", "Swahili teacher", "Nairobi", "diaspora"],
  // Fallback OpenGraph
 openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://lughastudio.com",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: "Expert online Swahili lessons for diaspora families, diplomats, and learners worldwide.",
    siteName: SITE.name,
    images: [
      {
        url: "/og-image.jpg", // This file must be in your /public folder
        width: 1200,
        height: 630,
        alt: `${SITE.name} — ${SITE.tagline}`,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Define JSON-LD Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE.name,
    url: "https://lughastudio.com",
    logo: "https://lughastudio.com/logo.png", // Ensure you have a logo file
    description: "Expert online Swahili lessons taught by a seasoned academic from Nairobi.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Nairobi",
      addressCountry: "KE",
    },
    founder: {
      "@type": "Person",
      name: "Divinar Nyang’arisa",
    },
  };

  return (
    <html lang="en" className={`${playfair.variable} ${dmSans.variable}`}>
      <head>
        {/* Inject JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-primary font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <UrgencyBanner />
      </body>
    </html>
  );
}