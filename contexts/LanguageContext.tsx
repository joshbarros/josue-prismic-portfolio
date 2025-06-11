"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, type Language, type TranslationPath, getNestedTranslation } from '@/translations';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: TranslationPath, fallback?: string) => string;
  showLanguageModal: boolean;
  setShowLanguageModal: (show: boolean) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

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

    if (savedLanguage && savedLanguage in translations) {
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

  const t = (key: TranslationPath, fallback?: string): string => {
    const currentTranslations = translations[language];
    return getNestedTranslation(currentTranslations, key, fallback);
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

// Re-export for convenience
export { translations };
