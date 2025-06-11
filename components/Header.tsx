"use client";

import React from "react";
import NavBar from "./NavBar";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Header() {
  const { t } = useLanguage();

  // Static navigation data with translation support
  const staticSettings = {
    data: {
      name: t('company.name', 'Golden Glow IT Solutions'),
      nav_item: [
        { label: t('nav.home', 'Home'), link: "/" },
        { label: t('nav.about', 'About'), link: "/about" },
        { label: t('nav.services', 'Services'), link: "/services" },
        { label: t('nav.contact', 'Contact'), link: "/contact" }
      ],
      cta_label: t('nav.getStarted', 'Get Started'),
      cta_link: "/services"
    }
  };

  return (
    <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
      <NavBar settings={staticSettings} />
    </header>
  )
}
