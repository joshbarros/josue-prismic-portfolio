import type { Metadata } from "next";
import { Electrolize } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageModal from "@/components/LanguageModal";
import DynamicLang from "@/components/DynamicLang";

const electrolize = Electrolize({
  subsets: ["latin"], weight: ["400"]
});

// Enhanced SEO metadata with proper internationalization
export const metadata: Metadata = {
  title: "Golden Glow IT Solutions - Digital Transformation Experts",
  description: "Transform your business with modern web development, ecommerce solutions, and mobile applications. Expert digital solutions that drive real results.",
  keywords: [
    "web development", "desenvolvimento web", "desarrollo web",
    "ecommerce", "mobile apps", "digital solutions",
    "React", "Next.js", "full-stack development",
    "soluções digitais", "soluciones digitales",
    "desenvolvimento de aplicativos", "desarrollo de aplicaciones"
  ],
  authors: [{ name: "Golden Glow IT Solutions" }],
  creator: "Golden Glow IT Solutions",
  publisher: "Golden Glow IT Solutions",
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
    type: "website",
    locale: "en_US",
    alternateLocale: ["pt_BR", "es_ES"],
    title: "Golden Glow IT Solutions - Digital Transformation Experts",
    description: "Transform your business with modern web development, ecommerce solutions, and mobile applications.",
    siteName: "Golden Glow IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Golden Glow IT Solutions - Digital Transformation Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Golden Glow IT Solutions - Digital Transformation Experts",
    description: "Transform your business with modern web development, ecommerce solutions, and mobile applications.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
    languages: {
      "en": "/",
      "pt": "/pt",
      "es": "/es",
      "x-default": "/",
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="bg-gray-900 text-slate-100">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Hreflang tags for SEO */}
        <link rel="alternate" hrefLang="en" href="https://goldenglowitsolutions.com/" />
        <link rel="alternate" hrefLang="pt" href="https://goldenglowitsolutions.com/pt" />
        <link rel="alternate" hrefLang="es" href="https://goldenglowitsolutions.com/es" />
        <link rel="alternate" hrefLang="x-default" href="https://goldenglowitsolutions.com/" />

        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Golden Glow IT Solutions",
              "description": "Digital transformation experts specializing in web development, ecommerce, and mobile applications",
              "url": "https://goldenglowitsolutions.com",
              "logo": "https://goldenglowitsolutions.com/logo.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+55 22 98125-0144",
                "contactType": "customer service",
                "availableLanguage": ["English", "Portuguese", "Spanish"]
              },
              "sameAs": [
                "https://linkedin.com/company/golden-glow-it-solutions",
                "https://github.com/goldenglowitsolutions"
              ],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Worldwide",
                "addressCountry": "BR"
              }
            })
          }}
        />
      </head>
      <body className={electrolize.className}>
        <LanguageProvider>
          <DynamicLang />
          <Header />
          {children}
          <Footer />
          <LanguageModal />
        </LanguageProvider>
      </body>
    </html>
  );
}
