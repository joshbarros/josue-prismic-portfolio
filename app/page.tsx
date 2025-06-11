import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Solutions from "@/components/sections/Solutions";
import TechShowcase from "@/components/sections/TechShowcase";

// Enhanced metadata with proper internationalization
export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = "https://goldenglowitsolutions.com";

  return {
    title: "Golden Glow IT Solutions - Digital Transformation Experts",
    description: "Transform your business with modern web development, ecommerce solutions, and mobile applications. Expert digital solutions that drive real results for your business growth.",
    keywords: [
      "web development", "desenvolvimento web", "desarrollo web",
      "ecommerce", "mobile apps", "digital solutions",
      "React", "Next.js", "full-stack development",
      "soluções digitais", "soluciones digitales",
      "desenvolvimento de aplicativos", "desarrollo de aplicaciones",
      "Golden Glow IT Solutions", "transformação digital", "transformación digital"
    ],
    authors: [{ name: "Golden Glow IT Solutions" }],
    creator: "Golden Glow IT Solutions",
    publisher: "Golden Glow IT Solutions",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(baseUrl),
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      alternateLocale: ["pt_BR", "es_ES"],
      title: "Golden Glow IT Solutions - Digital Transformation Experts",
      description: "Transform your business with modern web development, ecommerce solutions, and mobile applications. Expert digital solutions that drive real results.",
      siteName: "Golden Glow IT Solutions",
      url: baseUrl,
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: "Golden Glow IT Solutions - Digital Transformation Experts",
          type: "image/jpeg",
        },
        {
          url: "/og-image-square.jpg",
          width: 800,
          height: 800,
          alt: "Golden Glow IT Solutions - Digital Solutions",
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Golden Glow IT Solutions - Digital Transformation Experts",
      description: "Transform your business with modern web development, ecommerce solutions, and mobile applications.",
      images: ["/og-image.jpg"],
      creator: "@goldenglowit",
      site: "@goldenglowit",
    },
    alternates: {
      canonical: baseUrl,
      languages: {
        "en": baseUrl,
        "pt": `${baseUrl}/pt`,
        "es": `${baseUrl}/es`,
        "x-default": baseUrl,
      },
    },
    verification: {
      google: "your-google-verification-code", // Replace with actual verification code
      yandex: "your-yandex-verification-code", // Optional
      yahoo: "your-yahoo-verification-code", // Optional
    },
    category: "technology",
    classification: "Business Services",
    referrer: "origin-when-cross-origin",

    manifest: "/manifest.json",
    appleWebApp: {
      capable: true,
      title: "Golden Glow IT",
      statusBarStyle: "black-translucent",
    },
  };
}

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Solutions />
      <TechShowcase />
    </main>
  );
}
