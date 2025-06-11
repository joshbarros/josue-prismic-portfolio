import { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

// Enhanced SEO metadata for Services page
export async function generateMetadata(): Promise<Metadata> {
  const baseUrl = "https://goldenglowitsolutions.com";

  return {
    title: "Digital Services - Web Development & Ecommerce Solutions | Golden Glow IT",
    description: "Professional web development, ecommerce platforms, mobile apps, and custom digital solutions. Get a quote for your next project with Golden Glow IT Solutions today.",
    keywords: [
      "web development services", "ecommerce development", "mobile app development",
      "custom software solutions", "React development", "Next.js development",
      "WooCommerce headless", "Shopify headless", "digital transformation services",
      "serviços de desenvolvimento web", "desenvolvimento de ecommerce",
      "servicios de desarrollo web", "desarrollo de ecommerce",
      "desenvolvimento de aplicativos", "desarrollo de aplicaciones"
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
      title: "Digital Services - Web Development & Ecommerce Solutions | Golden Glow IT",
      description: "Professional web development, ecommerce platforms, mobile apps, and custom digital solutions. Get a quote for your next project today.",
      siteName: "Golden Glow IT Solutions",
      url: `${baseUrl}/services`,
      images: [
        {
          url: "/og-services.jpg",
          width: 1200,
          height: 630,
          alt: "Golden Glow IT Solutions - Digital Services and Development",
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Digital Services - Web Development & Ecommerce Solutions | Golden Glow IT",
      description: "Professional web development, ecommerce platforms, mobile apps, and custom digital solutions.",
      images: ["/og-services.jpg"],
    },
    alternates: {
      canonical: `${baseUrl}/services`,
      languages: {
        "en": `${baseUrl}/services`,
        "pt": `${baseUrl}/pt/services`,
        "es": `${baseUrl}/es/services`,
        "x-default": `${baseUrl}/services`,
      },
    },
    category: "technology",
  };
}

export default function ServicesPage() {
  return <ServicesPageClient />;
}
