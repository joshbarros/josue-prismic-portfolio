"use client";

import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { useLanguage } from "@/contexts/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-slate-800/50">
      <Bounded as="div">
        <div className="grid gap-y-8 lg:grid-cols-[1fr,2fr] lg:gap-x-12">
          <div>
            <Heading as="h2" size="lg" className="text-yellow-300">
              {t('about.title')}
            </Heading>
          </div>

          <div className="space-y-6">
            <div className="prose prose-lg prose-slate prose-invert">
              <p>
                {t('about.description1')}
              </p>

              <p>
                {t('about.description2')}
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-lg bg-slate-700/50 p-6">
                <h3 className="text-xl font-bold text-yellow-300 mb-3">
                  {t('about.cards.technical.title')}
                </h3>
                <p className="text-slate-300">
                  {t('about.cards.technical.description')}
                </p>
              </div>

              <div className="rounded-lg bg-slate-700/50 p-6">
                <h3 className="text-xl font-bold text-yellow-300 mb-3">
                  {t('about.cards.results.title')}
                </h3>
                <p className="text-slate-300">
                  {t('about.cards.results.description')}
                </p>
              </div>

              <div className="rounded-lg bg-slate-700/50 p-6">
                <h3 className="text-xl font-bold text-yellow-300 mb-3">
                  {t('about.cards.collaborative.title')}
                </h3>
                <p className="text-slate-300">
                  {t('about.cards.collaborative.description')}
                </p>
              </div>

              <div className="rounded-lg bg-slate-700/50 p-6">
                <h3 className="text-xl font-bold text-yellow-300 mb-3">
                  {t('about.cards.future.title')}
                </h3>
                <p className="text-slate-300">
                  {t('about.cards.future.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Bounded>
    </section>
  );
}
