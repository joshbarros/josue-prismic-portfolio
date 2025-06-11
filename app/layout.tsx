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

// Dynamic metadata will be handled by individual pages
// This is just the base fallback metadata
export const metadata: Metadata = {
  title: "Golden Glow IT Solutions",
  description: "Digital Solutions That Drive Results",
  keywords: ["web development", "desenvolvimento web", "desarrollo web", "ecommerce", "mobile apps", "digital solutions"],
  openGraph: {
    title: "Golden Glow IT Solutions - Digital Transformation Experts",
    description: "Digital Solutions That Drive Results",
    type: "website",
    locale: "en_US",
    alternateLocale: ["pt_BR", "es_ES"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-gray-900 text-slate-100">
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
