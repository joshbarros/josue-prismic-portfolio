"use client";

import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import { useLanguage } from "@/contexts/LanguageContext";
import { MdWeb, MdShoppingCart, MdPhoneIphone, MdSettings } from "react-icons/md";

export default function Solutions() {
  const { t, language } = useLanguage();

  const solutions = [
    {
      icon: MdWeb,
      key: 'website'
    },
    {
      icon: MdShoppingCart,
      key: 'ecommerce'
    },
    {
      icon: MdPhoneIphone,
      key: 'mobile'
    },
    {
      icon: MdSettings,
      key: 'custom'
    }
  ] as const;

  // Get translations directly from the translation object
  const getFeatures = (key: string) => {
    const translations = {
      en: {
        website: ['React & Next.js', 'Responsive Design', 'SEO Optimized', 'Performance Focused'],
        ecommerce: ['Headless WooCommerce', 'Headless Shopify', 'Payment Integration', 'Inventory Management'],
        mobile: ['React Native', 'iOS & Android', 'Push Notifications', 'Offline Support'],
        custom: ['Process Automation', 'API Integration', 'Custom Databases', 'System Migration']
      },
      pt: {
        website: ['React & Next.js', 'Design Responsivo', 'SEO Otimizado', 'Focado em Performance'],
        ecommerce: ['WooCommerce Headless', 'Shopify Headless', 'Integração de Pagamento', 'Gestão de Estoque'],
        mobile: ['React Native', 'iOS & Android', 'Notificações Push', 'Suporte Offline'],
        custom: ['Automação de Processos', 'Integração de APIs', 'Bancos de Dados Customizados', 'Migração de Sistemas']
      },
      es: {
        website: ['React & Next.js', 'Diseño Responsivo', 'SEO Optimizado', 'Enfocado en Rendimiento'],
        ecommerce: ['WooCommerce Headless', 'Shopify Headless', 'Integración de Pagos', 'Gestión de Inventario'],
        mobile: ['React Native', 'iOS & Android', 'Notificaciones Push', 'Soporte Offline'],
        custom: ['Automatización de Procesos', 'Integración de APIs', 'Bases de Datos Personalizadas', 'Migración de Sistemas']
      }
    };

    return translations[language][key as keyof typeof translations['en']] || [];
  };

  return (
    <section className="py-20">
      <Bounded as="div">
        <div className="text-center mb-16">
          <Heading as="h2" size="xl" className="mb-4">
            {t('solutions.title')}{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              {t('solutions.titleHighlight')}
            </span>{" "}
            {t('solutions.titleEnd')}
          </Heading>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t('solutions.subtitle')}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            const features = getFeatures(solution.key);

            return (
              <div key={index} className="group relative rounded-2xl bg-slate-800/50 p-8 transition-all hover:bg-slate-800/70">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-300/10 to-yellow-500/10 opacity-0 transition-opacity group-hover:opacity-100"></div>

                <div className="relative">
                  <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-yellow-300/10">
                    <Icon className="h-8 w-8 text-yellow-300" />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100 mb-4">
                    {t(`solutions.items.${solution.key}.title`)}
                  </h3>

                  <p className="text-slate-300 mb-6 leading-relaxed">
                    {t(`solutions.items.${solution.key}.description`)}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {features.map((feature: string, featureIndex: number) => (
                      <span
                        key={featureIndex}
                        className="inline-block rounded-full bg-yellow-300/10 px-3 py-1 text-sm text-yellow-300"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <Button href="/services" label={t('solutions.cta')} showIcon className="mx-auto" />
        </div>
      </Bounded>
    </section>
  );
}
