import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { SITE } from "@/constants";
import "./globals.css";
import { Footer, Navbar } from "@/components/layout";
import { UrgencyBanner } from "@/components/ui/UrgencyBanner";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsapp";
import { CookieConsent } from "@/components/ui/CookieConsent";

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
  metadataBase: new URL("https://lughastudio.com"),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s | ${SITE.name}`,
  },
  description: "Expert online Swahili lessons for diaspora families, diplomats, foreign spouses, and curious learners worldwide. Taught by a seasoned academic from Nairobi.",
  keywords: ["Swahili lessons", "learn Swahili online", "Swahili teacher", "Nairobi", "diaspora"],
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://lughastudio.com",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: "Expert online Swahili lessons for diaspora families, diplomats, and learners worldwide.",
    siteName: SITE.name,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `${SITE.name} — ${SITE.tagline}` }],
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Check for consent cookie on the server
  const cookieStore = await cookies();
  const hasConsent =  cookieStore.get("cookie-consent")?.value === "granted";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: SITE.name,
    url: "https://lughastudio.com",
    logo: "https://lughastudio.com/logo.png",
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
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Conditional Tracking Scripts */}
        {hasConsent && (
          <>
            {/* Google Analytics */}
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-XXXXXXXXXX');
                `,
              }}
            />

            {/* Meta Pixel */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', 'YOUR_PIXEL_ID');
                  fbq('track', 'PageView');
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="bg-primary font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
        <UrgencyBanner />
        {!hasConsent && <CookieConsent />}
      </body>
    </html>
  );
}