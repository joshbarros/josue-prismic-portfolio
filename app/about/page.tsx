"use client";

import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();

  const expertiseAreas = [
    {
      key: 'frontend',
      icon: '🎨'
    },
    {
      key: 'backend',
      icon: '⚙️'
    },
    {
      key: 'devops',
      icon: '🚀'
    }
  ] as const;

  const approachSteps = [
    {
      key: 'discovery',
      icon: '🔍'
    },
    {
      key: 'design',
      icon: '✨'
    },
    {
      key: 'testing',
      icon: '🧪'
    },
    {
      key: 'launch',
      icon: '🚀'
    }
  ] as const;

  return (
    <main className="py-20">
      <Bounded as="div">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <Heading as="h1" size="xl" className="mb-8">
            {t('aboutPage.hero.title')}{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              {t('aboutPage.hero.titleHighlight')}
            </span>
          </Heading>

          <div className="prose prose-xl prose-slate prose-invert mx-auto max-w-4xl">
            <p>
              {t('aboutPage.hero.description1')}
            </p>
            <p>
              {t('aboutPage.hero.description2')}
            </p>
          </div>
        </div>

        {/* Core Expertise */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Heading as="h2" size="lg" className="text-yellow-300">
              {t('aboutPage.expertise.title')}
            </Heading>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {expertiseAreas.map((area, index) => (
              <div key={index} className="rounded-xl bg-slate-800/50 p-8 text-center">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-bold text-yellow-300 mb-4">
                  {t(`aboutPage.expertise.${area.key}.title`)}
                </h3>
                <p className="text-slate-300 mb-6">
                  {t(`aboutPage.expertise.${area.key}.description`)}
                </p>
                <div className="text-sm text-slate-400 font-mono">
                  {t(`aboutPage.expertise.${area.key}.tech`)}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Approach */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Heading as="h2" size="lg" className="text-yellow-300">
              {t('aboutPage.approach.title')}
            </Heading>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {approachSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-yellow-300/10 flex items-center justify-center text-2xl">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-100 mb-3">
                  {t(`aboutPage.approach.${step.key}.title`)}
                </h3>
                <p className="text-slate-400 text-sm">
                  {t(`aboutPage.approach.${step.key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Heading as="h2" size="lg" className="mb-6">
            {t('aboutPage.cta.title')}
          </Heading>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            {t('aboutPage.cta.subtitle')}
          </p>
          <div className="flex gap-4 justify-center">
            <Button href="/services" label={t('aboutPage.cta.primary')} showIcon />
            <Button
              href="/contact"
              label={t('aboutPage.cta.secondary')}
              className="border-slate-500 bg-transparent text-slate-100 hover:bg-slate-800"
            />
          </div>
        </div>
      </Bounded>
    </main>
  );
}
