"use client";

import { usePathname } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';

interface SEOHeadProps {
  pageKey: 'home' | 'about' | 'services' | 'contact';
  customTitle?: string;
  customDescription?: string;
  image?: string;
}

export default function SEOHead({
  pageKey,
  customTitle,
  customDescription,
  image = '/og-image.jpg'
}: SEOHeadProps) {
  const { language, t } = useLanguage();
  const pathname = usePathname();

  const baseUrl = 'https://goldenglowitsolutions.com';

  // Get SEO metadata from translations
  const title = customTitle || t(`seo.${pageKey}.title`);
  const description = customDescription || t(`seo.${pageKey}.description`);

  // Generate URLs for all languages
  const urls = {
    en: `${baseUrl}${pathname === '/' ? '' : pathname}`,
    pt: `${baseUrl}/pt${pathname === '/' ? '' : pathname}`,
    es: `${baseUrl}/es${pathname === '/' ? '' : pathname}`,
  };

  // Language-specific locale codes
  const locales = {
    en: 'en_US',
    pt: 'pt_BR',
    es: 'es_ES',
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": pageKey === 'home' ? "Organization" : "WebPage",
    "name": pageKey === 'home' ? "Golden Glow IT Solutions" : title,
    "description": description,
    "url": urls[language],
    "inLanguage": language,
    ...(pageKey === 'home' && {
      "logo": `${baseUrl}/logo.png`,
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
    }),
    ...(pageKey !== 'home' && {
      "isPartOf": {
        "@type": "WebSite",
        "name": "Golden Glow IT Solutions",
        "url": baseUrl
      }
    })
  };

  return (
    <>
      {/* This component doesn't render visible content but injects meta tags */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
    </>
  );
}
