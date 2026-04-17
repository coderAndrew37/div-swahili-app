import type { Metadata } from "next";
import ResourcesClient from "./ResourcesClient";

export const metadata: Metadata = {
  title: "Learning Resources — Lugha Studio",
  description:
    "Free Swahili study guides, cultural playlists, and student portals. Access PDF phrasebooks, verb cheat sheets, and cultural immersion tools.",
  openGraph: {
    title: "Swahili Learning Hub | Free Resources & Portals",
    description: "Master Swahili between lessons with our curated study guides and cultural immersion playlists.",
    images: [{ url: "/assets/og-resources.jpg" }],
  },
  alternates: {
    canonical: "https://lughastudio.com/resources",
  },
};

export default function ResourcesPage() {
  return <ResourcesClient />;
}