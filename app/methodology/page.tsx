import type { Metadata } from "next";
import MethodologyClient from "./MethodologyClient";

export const metadata: Metadata = {
  title: "Our Methodology — Lugha Studio",
  description: "Learn Swahili through our unique Heart-to-Heart approach. Academic rigor meets cultural connection for children and professionals alike.",
  openGraph: {
    title: "How We Teach Swahili | The Heart-to-Heart Method",
    description: "Discover a methodology that goes beyond grammar. Expert Swahili instruction for the global community.",
    images: [{ url: "/assets/og-image.jpeg" }],
  },
};

export default function MethodologyPage() {
  return <MethodologyClient />;
}