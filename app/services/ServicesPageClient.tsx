"use client";

import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import Button from "@/components/Button";
import { useLanguage } from "@/contexts/LanguageContext";
import { MdCheckCircle } from "react-icons/md";

export default function ServicesPageClient() {
  const { t, language } = useLanguage();

  const serviceKeys = ['website', 'ecommerce', 'mobile', 'custom'] as const;

  // Get features directly from local translation object
  const getFeatures = (serviceKey: string) => {
    const featuresTranslations = {
      en: {
        website: [
          'Custom React/Next.js applications',
          'Responsive design across all devices',
          'Performance optimization',
          'SEO implementation',
          'Content management integration',
          'Analytics and tracking setup',
          'Maintenance and support',
          'Cross-browser compatibility',
        ],
        ecommerce: [
          'Headless WooCommerce development',
          'Headless Shopify development',
          'Custom ecommerce platforms',
          'Payment gateway integration',
          'Inventory management systems',
          'Shopping cart optimization',
          'Product catalog management',
          'Order processing automation',
        ],
        mobile: [
          'React Native development',
          'iOS and Android compatibility',
          'Push notification systems',
          'Offline functionality',
          'API integration',
          'User authentication',
          'App store optimization',
          'Performance monitoring',
        ],
        custom: [
          'Business process automation',
          'Custom database solutions',
          'Third-party integrations',
          'Workflow optimization',
          'Data visualization dashboards',
          'API development',
          'System migrations',
          'Legacy system modernization',
        ],
      },
      pt: {
        website: [
          'Aplicações React/Next.js customizadas',
          'Design responsivo para todos os dispositivos',
          'Otimização de performance',
          'Implementação de SEO',
          'Integração de gerenciamento de conteúdo',
          'Configuração de analytics e tracking',
          'Manutenção e suporte',
          'Compatibilidade entre navegadores',
        ],
        ecommerce: [
          'Desenvolvimento WooCommerce headless',
          'Desenvolvimento Shopify headless',
          'Plataformas de ecommerce customizadas',
          'Integração de gateway de pagamento',
          'Sistemas de gestão de estoque',
          'Otimização de carrinho de compras',
          'Gerenciamento de catálogo de produtos',
          'Automação de processamento de pedidos',
        ],
        mobile: [
          'Desenvolvimento React Native',
          'Compatibilidade iOS e Android',
          'Sistemas de notificação push',
          'Funcionalidade offline',
          'Integração de API',
          'Autenticação de usuário',
          'Otimização para app stores',
          'Monitoramento de performance',
        ],
        custom: [
          'Automação de processos de negócio',
          'Soluções de banco de dados customizadas',
          'Integrações com terceiros',
          'Otimização de fluxo de trabalho',
          'Dashboards de visualização de dados',
          'Desenvolvimento de APIs',
          'Migrações de sistema',
          'Modernização de sistemas legados',
        ],
      },
      es: {
        website: [
          'Aplicaciones React/Next.js personalizadas',
          'Diseño responsivo en todos los dispositivos',
          'Optimización de rendimiento',
          'Implementación de SEO',
          'Integración de gestión de contenido',
          'Configuración de analytics y seguimiento',
          'Mantenimiento y soporte',
          'Compatibilidad entre navegadores',
        ],
        ecommerce: [
          'Desarrollo WooCommerce headless',
          'Desarrollo Shopify headless',
          'Plataformas de ecommerce personalizadas',
          'Integración de pasarela de pagos',
          'Sistemas de gestión de inventario',
          'Optimización del carrito de compras',
          'Gestión de catálogo de productos',
          'Automatización del procesamiento de pedidos',
        ],
        mobile: [
          'Desarrollo React Native',
          'Compatibilidad iOS y Android',
          'Sistemas de notificaciones push',
          'Funcionalidad offline',
          'Integración de API',
          'Autenticación de usuario',
          'Optimización para app stores',
          'Monitoreo de rendimiento',
        ],
        custom: [
          'Automatización de procesos comerciales',
          'Soluciones de base de datos personalizadas',
          'Integraciones con terceros',
          'Optimización de flujo de trabajo',
          'Dashboards de visualización de datos',
          'Desarrollo de APIs',
          'Migraciones de sistemas',
          'Modernización de sistemas legacy',
        ],
      },
    };

    return featuresTranslations[language][serviceKey as keyof typeof featuresTranslations['en']] || [];
  };

  return (
    <main className="py-20">
      <Bounded as="div">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <Heading as="h1" size="xl" className="mb-6">
            {t('servicesPage.hero.title')}{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              {t('servicesPage.hero.titleHighlight')}
            </span>
          </Heading>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            {t('servicesPage.hero.subtitle')}
          </p>
        </div>

        {/* Services Grid */}
        <div id="services" className="space-y-16">
          {serviceKeys.map((serviceKey, index) => {
            const features = getFeatures(serviceKey);

            return (
              <div key={index} className="rounded-2xl bg-slate-800/50 p-8 lg:p-12">
                <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
                  <div>
                    <div className="mb-6">
                      <Heading as="h2" size="lg" className="mb-4">
                        {t(`servicesPage.services.${serviceKey}.title`)}
                      </Heading>
                      <p className="text-xl text-slate-300 leading-relaxed">
                        {t(`servicesPage.services.${serviceKey}.description`)}
                      </p>
                    </div>

                    <div className="mb-8">
                      <h3 className="text-lg font-semibold text-yellow-300 mb-4">
                        {t('common.whatsIncluded')}
                      </h3>
                      <div className="grid gap-3 md:grid-cols-2">
                        {features.map((feature: string, featureIndex: number) => (
                          <div key={featureIndex} className="flex items-start gap-3">
                            <MdCheckCircle className="h-5 w-5 text-yellow-300 mt-0.5 flex-shrink-0" />
                            <span className="text-slate-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="text-slate-400">
                      <p className="mb-2">
                        <strong className="text-slate-300">{t('common.perfectFor')}</strong> {t(`servicesPage.services.${serviceKey}.ideal`)}
                      </p>
                    </div>
                  </div>

                  <div className="lg:pl-8 flex items-center justify-center">
                    <div className="rounded-xl bg-slate-700/50 p-6 text-center">
                      <h3 className="text-xl font-bold text-yellow-300 mb-4">
                        {t('servicesPage.card.title')}
                      </h3>
                      <p className="text-slate-400 mb-6">
                        {t('servicesPage.card.subtitle')}
                      </p>
                      <Button
                        href="/contact"
                        label={t('servicesPage.card.cta')}
                        showIcon
                        className="w-full justify-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center rounded-2xl bg-gradient-to-r from-yellow-300/10 to-yellow-500/10 p-12">
          <Heading as="h2" size="lg" className="mb-4">
            {t('servicesPage.cta.title')}
          </Heading>
          <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
            {t('servicesPage.cta.subtitle')}
          </p>
          <div className="flex gap-4 justify-center">
            <Button href="/contact" label={t('servicesPage.cta.primary')} showIcon />
            <Button
              href="/about"
              label={t('servicesPage.cta.secondary')}
              className="border-slate-500 bg-transparent text-slate-100 hover:bg-slate-800"
            />
          </div>
        </div>
      </Bounded>
    </main>
  );
}