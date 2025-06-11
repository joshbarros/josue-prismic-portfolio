"use client";

import { useLanguage } from "@/contexts/LanguageContext";

export default function LanguageModal() {
  const { language, setLanguage, showLanguageModal, setShowLanguageModal, t } = useLanguage();

  if (!showLanguageModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="bg-slate-800 rounded-xl p-8 max-w-md w-full mx-4 border border-slate-700 shadow-2xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-2">
            {t('modal.title')}
          </h2>
          <p className="text-slate-300 mb-8">
            {t('modal.subtitle')}
          </p>

          <div className="space-y-4">
            <button
              onClick={() => setLanguage('en')}
              className="w-full flex items-center justify-center space-x-3 p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors border border-slate-600"
            >
              <span className="text-2xl">🇺🇸</span>
              <span className="text-white font-medium">{t('modal.english')}</span>
            </button>

            <button
              onClick={() => setLanguage('pt')}
              className="w-full flex items-center justify-center space-x-3 p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors border border-slate-600"
            >
              <span className="text-2xl">🇧🇷</span>
              <span className="text-white font-medium">{t('modal.portuguese')}</span>
            </button>

            <button
              onClick={() => setLanguage('es')}
              className="w-full flex items-center justify-center space-x-3 p-4 rounded-lg bg-slate-700 hover:bg-slate-600 transition-colors border border-slate-600"
            >
              <span className="text-2xl">🇪🇸</span>
              <span className="text-white font-medium">{t('modal.spanish')}</span>
            </button>
          </div>

          <p className="text-sm text-slate-400 mt-6">
            {t('modal.footer')}
          </p>
        </div>
      </div>
    </div>
  );
}
