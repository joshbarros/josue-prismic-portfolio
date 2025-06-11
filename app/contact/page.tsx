import { Metadata } from "next";
import ContactPageClient from "./ContactPageClient";

// Enhanced SEO metadata for Contact page
export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = "https://goldenglowitsolutions.com";

  return {
    title: "Contact Us - Get Your Project Started Today | Golden Glow IT Solutions",
    description: "Ready to transform your digital presence? Contact Golden Glow IT Solutions for a free consultation. Professional development services worldwide. Get in touch today!",
    keywords: [
      "contact golden glow", "get quote", "free consultation", "project estimate",
      "web development contact", "hire developers", "digital transformation consultation",
      "start project", "development services contact", "custom software quote",
      "contato golden glow", "orçamento gratuito", "consulta gratuita",
      "contacto golden glow", "cotización gratuita", "consulta gratuita"
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
      title: "Contact Us - Get Your Project Started Today | Golden Glow IT Solutions",
      description: "Ready to transform your digital presence? Contact Golden Glow IT Solutions for a free consultation. Professional development services worldwide.",
      siteName: "Golden Glow IT Solutions",
      url: `${baseUrl}/contact`,
      images: [
        {
          url: "/og-contact.jpg",
          width: 1200,
          height: 630,
          alt: "Contact Golden Glow IT Solutions - Start Your Digital Project Today",
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact Us - Get Your Project Started Today | Golden Glow IT Solutions",
      description: "Ready to transform your digital presence? Contact Golden Glow IT Solutions for a free consultation.",
      images: ["/og-contact.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/contact`,
      languages: {
        "en": `${baseUrl}/contact`,
        "pt": `${baseUrl}/pt/contact`,
        "es": `${baseUrl}/es/contact`,
        "x-default": `${baseUrl}/contact`,
      },
    },
    category: "technology",
  };
}

export default function ContactPage() {
  return <ContactPageClient />;
}
