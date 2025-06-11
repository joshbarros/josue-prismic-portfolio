"use client";

import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LanguageModal() {
  const { showLanguageModal, setLanguage, t } = useLanguage();

  if (!showLanguageModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="mx-4 w-full max-w-md rounded-2xl bg-slate-800 p-8 shadow-2xl border border-slate-700">
        <div className="text-center">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-slate-100 mb-2">
              {t('modal.title', 'Choose Your Language')}
            </h2>
            <p className="text-slate-400">
              {t('modal.subtitle', 'Select your preferred language for the best experience')}
            </p>
          </div>

          <div className="space-y-4">
            <button
              onClick={() => setLanguage('en')}
              className="w-full rounded-lg bg-gradient-to-r from-yellow-300 to-yellow-500 px-6 py-4 text-slate-900 font-semibold transition-all hover:from-yellow-400 hover:to-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300/50"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="text-xl">🇺🇸</span>
                <span>{t('modal.english', 'English')}</span>
              </div>
            </button>

            <button
              onClick={() => setLanguage('pt')}
              className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-6 py-4 text-slate-100 font-semibold transition-all hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500/50"
            >
              <div className="flex items-center justify-center gap-3">
                <span className="text-xl">🇧🇷</span>
                <span>{t('modal.portuguese', 'Português (Brasil)')}</span>
              </div>
            </button>
          </div>

          <div className="mt-6 text-xs text-slate-500">
            You can change this later using the language selector in the navigation
          </div>
        </div>
      </div>
    </div>
  );
}
