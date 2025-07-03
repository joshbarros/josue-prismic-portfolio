import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";
import LanguageModal from "@/components/LanguageModal";
import DynamicLang from "@/components/DynamicLang";
import { Suspense } from "react";
import WebVitalsReporter from "@/components/WebVitalsReporter";
import PrefetchLinks from "@/components/PrefetchLinks";
import ServiceWorkerRegistration from "@/components/ServiceWorkerRegistration";

// Using system fonts for better performance and reliability
const fontClass = "";

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
    <html className="bg-gray-900 text-slate-100" lang="en">
      <head>
        {/* Critical CSS inlined for LCP optimization */}
        <style dangerouslySetInnerHTML={{
          __html: `
            html{background-color:rgb(17 24 39);color:rgb(241 245 249)}
            body{margin:0;font-family:'Electrolize',system-ui,-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;font-weight:400;line-height:1.5;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}
            .hero-container{min-height:100vh;display:flex;align-items:center;padding:2rem 1rem}
            .hero-grid{display:grid;gap:1.5rem;grid-template-columns:1fr}
            @media(min-width:1024px){.hero-grid{grid-template-columns:2fr 1fr;gap:2rem}}
            .hero-title{font-size:3rem;font-weight:700;line-height:1.1;letter-spacing:-0.025em;margin:0 0 1rem 0}
            @media(min-width:768px){.hero-title{font-size:6rem}}
            .hero-gradient{background:linear-gradient(to right,rgb(253 224 71),rgb(251 191 36));-webkit-background-clip:text;background-clip:text;color:transparent}
            .hero-subtitle{font-size:1.5rem;font-weight:500;color:rgb(253 224 71);margin:1rem 0}
            @media(min-width:768px){.hero-subtitle{font-size:1.875rem}}
            .hero-description{font-size:1.125rem;color:rgb(148 163 184);max-width:32rem;margin:2rem 0;line-height:1.7}
            .hero-button{display:inline-flex;align-items:center;gap:0.5rem;padding:0.75rem 2rem;background:linear-gradient(to right,rgb(253 224 71),rgb(251 191 36));color:rgb(17 24 39);font-weight:600;border-radius:0.5rem;text-decoration:none;transition:transform 0.2s ease-in-out}
            .hero-button:hover{transform:scale(1.05)}
            *{box-sizing:border-box}
            img{max-width:100%;height:auto}
          `
        }} />
        
        {/* Font loading with fallback */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Electrolize:wght@400&display=swap" 
          rel="stylesheet"
        />
        
        {/* Resource hints for performance */}
        <link rel="dns-prefetch" href="https://api.resend.com" />
        
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
      <body className={fontClass}>
        <LanguageProvider>
          <WebVitalsReporter />
          <PrefetchLinks />
          <ServiceWorkerRegistration />
          <DynamicLang />
          <Suspense fallback={null}>
            <Header />
          </Suspense>
          <main>{children}</main>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
          <Suspense fallback={null}>
            <LanguageModal />
          </Suspense>
        </LanguageProvider>
      </body>
    </html>
  );
}
