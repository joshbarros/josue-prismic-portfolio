import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Solutions from "@/components/sections/Solutions";
import TechShowcase from "@/components/sections/TechShowcase";

export function generateMetadata(): Metadata {
  // Since this is a client-side language system, we'll use English as default
  // with comprehensive meta tags for SEO
  return {
    title: "Golden Glow IT Solutions - Digital Transformation Experts",
    description: "Transform your business with modern web development, ecommerce solutions, and mobile applications. Expert digital solutions that drive real results for your business growth.",
    keywords: ["web development", "desenvolvimento web", "desarrollo web", "ecommerce", "mobile apps", "digital solutions"],
    openGraph: {
      title: "Golden Glow IT Solutions - Digital Transformation Experts",
      description: "Transform your business with modern web development, ecommerce solutions, and mobile applications.",
      type: "website",
      locale: "en_US",
      alternateLocale: ["pt_BR", "es_ES"],
    },
    alternates: {
      languages: {
        "en": "/",
        "pt": "/",
        "es": "/",
      },
    },
  };
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Solutions />
      <TechShowcase />
    </main>
  );
}
