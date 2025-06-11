"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
  showLanguageModal: boolean;
  setShowLanguageModal: (show: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionaries - only translate what you want, keep English as fallback
const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.contact': 'Contact',
    'nav.getStarted': 'Get Started',

    // Language Modal
    'modal.title': 'Choose Your Language',
    'modal.subtitle': 'Select your preferred language for the best experience',
    'modal.english': 'English',
    'modal.portuguese': 'Português (Brasil)',
    'modal.continue': 'Continue',

    // Company Name
    'company.name': 'Golden Glow IT Solutions',
  },
  pt: {
    // Navigation
    'nav.home': 'Início',
    'nav.about': 'Sobre',
    'nav.services': 'Serviços',
    'nav.contact': 'Contato',
    'nav.getStarted': 'Começar',

    // Language Modal
    'modal.title': 'Escolha Seu Idioma',
    'modal.subtitle': 'Selecione seu idioma preferido para a melhor experiência',
    'modal.english': 'English',
    'modal.portuguese': 'Português (Brasil)',
    'modal.continue': 'Continuar',

    // Company Name
    'company.name': 'Golden Glow IT Solutions',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('en');
  const [showLanguageModal, setShowLanguageModal] = useState(false);

  useEffect(() => {
    // Check if user has a saved language preference
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    const hasVisited = localStorage.getItem('has-visited');

    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'pt')) {
      setLanguageState(savedLanguage);
    } else if (!hasVisited) {
      // First visit - show language modal
      setShowLanguageModal(true);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('preferred-language', lang);
    localStorage.setItem('has-visited', 'true');
    setShowLanguageModal(false);
  };

  const t = (key: string, fallback?: string): string => {
    const translation = translations[language][key as keyof typeof translations['en']];
    return translation || fallback || key;
  };

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      t,
      showLanguageModal,
      setShowLanguageModal
    }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export { translations };