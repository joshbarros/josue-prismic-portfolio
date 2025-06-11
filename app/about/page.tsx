import { Metadata } from "next";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import AboutPageClient from "./AboutPageClient";

// Enhanced SEO metadata for About page
export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = "https://goldenglowitsolutions.com";

  return {
    title: "About Us - Golden Glow IT Solutions | Full-Stack Development Experts",
    description: "Learn about Golden Glow IT Solutions. Full-stack expertise in React, Python, AWS, and modern development technologies. Building digital solutions that matter for businesses worldwide.",
    keywords: [
      "about golden glow", "full-stack development", "React experts",
      "Python development", "AWS cloud", "digital transformation",
      "web development team", "software engineering", "tech expertise",
      "sobre golden glow", "desenvolvimento full-stack", "especialistas React",
      "acerca de golden glow", "desarrollo full-stack", "expertos React"
    ],
    authors: [{ name: "Golden Glow IT Solutions" }],
    creator: "Golden Glow IT Solutions",
    publisher: "Golden Glow IT Solutions",
    metadataBase: new URL(baseUrl),
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      alternateLocale: ["pt_BR", "es_ES"],
      title: "About Us - Golden Glow IT Solutions | Full-Stack Development Experts",
      description: "Learn about Golden Glow IT Solutions. Full-stack expertise in React, Python, AWS, and modern development technologies.",
      siteName: "Golden Glow IT Solutions",
      url: `${baseUrl}/about`,
      images: [
        {
          url: "/og-about.jpg",
          width: 1200,
          height: 630,
          alt: "About Golden Glow IT Solutions - Our Team and Expertise",
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "About Us - Golden Glow IT Solutions | Full-Stack Development Experts",
      description: "Learn about Golden Glow IT Solutions. Full-stack expertise in React, Python, AWS, and modern development technologies.",
      images: ["/og-about.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/about`,
      languages: {
        "en": `${baseUrl}/about`,
        "pt": `${baseUrl}/pt/about`,
        "es": `${baseUrl}/es/about`,
        "x-default": `${baseUrl}/about`,
      },
    },
    category: "technology",
  };
}

export default function AboutPage() {
  return <AboutPageClient />;
}
