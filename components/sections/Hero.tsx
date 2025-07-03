"use client"

import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import { useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

// Dynamic import for GSAP to reduce initial bundle size
const loadGSAP = () => import('gsap').then(module => module.gsap);

export default function Hero() {
  const component = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    let gsapContext: any;
    
    // Load GSAP dynamically and initialize animations
    const initializeAnimations = async () => {
      try {
        const gsap = await loadGSAP();
        
        gsapContext = gsap.context(() => {
          gsap.fromTo(
            ".hero-title",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
          );

          gsap.fromTo(
            ".hero-subtitle",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power3.out" }
          );

          gsap.fromTo(
            ".hero-description",
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power3.out" }
          );

          gsap.fromTo(
            ".hero-button",
            { opacity: 0, scale: 0.8 },
            { opacity: 1, scale: 1, duration: 0.8, delay: 0.9, ease: "back.out(1.7)" }
          );
        }, component);
      } catch (error) {
        console.warn('Failed to load GSAP animations:', error);
        // Fallback: show content without animations
        if (component.current) {
          const elements = (component.current as HTMLElement).querySelectorAll('.hero-title, .hero-subtitle, .hero-description, .hero-button');
          elements.forEach((el) => {
            (el as HTMLElement).style.opacity = '1';
            (el as HTMLElement).style.transform = 'none';
          });
        }
      }
    };

    // Initialize animations immediately for hero (above fold)
    initializeAnimations();

    return () => {
      if (gsapContext) {
        gsapContext.revert();
      }
    };
  }, []);

  return (
    <Bounded as="section" ref={component} className="min-h-screen flex items-center">
      <div className="grid gap-y-6 lg:grid-cols-[2fr,1fr] lg:gap-x-8">
        <div className="flex flex-col justify-center">
          <h1 className="hero-title text-6xl font-bold leading-tight tracking-tight text-slate-100 md:text-8xl">
            {t('hero.title')}{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              {t('hero.titleHighlight')}
            </span>{" "}
            {t('hero.titleEnd')}
          </h1>

          <p className="hero-subtitle text-2xl font-medium text-yellow-300 mt-4 md:text-3xl">
            {t('hero.subtitle')}
          </p>

          <p className="hero-description prose prose-xl prose-slate prose-invert mt-8 max-w-2xl">
            {t('hero.description')}
          </p>

          <div className="hero-button mt-8">
            <Button href="/services" label={t('hero.cta')} showIcon />
          </div>
        </div>

        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative">
            <div className="hero-visual h-96 w-96 rounded-full bg-gradient-to-br from-yellow-300/20 to-yellow-500/30 blur-2xl"></div>
            <div className="absolute inset-0 h-96 w-96 rounded-full bg-gradient-to-tr from-blue-500/10 to-purple-600/20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </Bounded>
  );
}
