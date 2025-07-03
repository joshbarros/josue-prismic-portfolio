"use client"

import React, { useEffect, useRef, lazy, Suspense } from "react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { useLanguage } from "@/contexts/LanguageContext";

// Dynamic import for GSAP to reduce initial bundle size
const loadGSAP = () => import('gsap').then(module => module.gsap);
const loadScrollTrigger = () => import('gsap/ScrollTrigger').then(module => module.ScrollTrigger);

// Optimized selection of key technologies for better animation performance
const technologies = [
  { name: "React", color: "#61DAFB" },
  { name: "Redux", color: "#764ABC" },
  { name: "React Native", color: "#61DAFB" },
  { name: "TypeScript", color: "#3178C6" },
  { name: "JavaScript", color: "#F7DF1E" },
  { name: "Java", color: "#ED8B00" },
  { name: "Spring Boot", color: "#6DB33F" },
  { name: "Python", color: "#3776AB" },
  { name: "Golang", color: "#00ADD8" },
  { name: "NodeJS", color: "#339933" },
  { name: "FastAPI", color: "#009688" },
  { name: "WordPress", color: "#21759B" },
  { name: "PHP", color: "#777BB4" },
  { name: "WooCommerce", color: "#96588A" },
  { name: "MongoDB", color: "#47A248" },
  { name: "PostgreSQL", color: "#4169E1" },
  { name: "Redis", color: "#DC382D" },
  { name: "AWS", color: "#FF9900" },
  { name: "Google Cloud", color: "#4285F4" },
  { name: "Azure", color: "#0078D4" },
  { name: "Docker", color: "#2496ED" },
  { name: "Kubernetes", color: "#326CE5" },
  { name: "Terraform", color: "#7B42BC" },
  { name: "CI/CD", color: "#FF6B6B" },
  { name: "Databricks", color: "#FF3621" },
  { name: "PySpark", color: "#E25A1C" },
  { name: "GraphQL", color: "#E10098" }
];

export default function TechShowcase() {
  const component = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    let gsapContext: any;
    
    // Load GSAP dynamically when component is in view
    const initializeAnimations = async () => {
      try {
        const [gsap, ScrollTrigger] = await Promise.all([
          loadGSAP(),
          loadScrollTrigger()
        ]);

        gsap.registerPlugin(ScrollTrigger);

        gsapContext = gsap.context(() => {
          // Clear any existing scroll triggers
          ScrollTrigger.getAll().forEach(trigger => trigger.kill());

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: component.current,
              start: "top bottom",
              end: "bottom top",
              scrub: 4,
              refreshPriority: -1
            }
          });

          // Animate each tech row individually
          gsap.utils.toArray(".tech-row").forEach((row, index) => {
            gsap.fromTo(row as gsap.TweenTarget, {
              x: index % 2 === 0 ? 600 : -600
            }, {
              x: index % 2 === 0 ? -600 : 600,
              ease: "none",
              scrollTrigger: {
                trigger: row as Element,
                start: "top bottom",
                end: "bottom top",
                scrub: 4
              }
            });
          });
        }, component);
      } catch (error) {
        console.warn('Failed to load GSAP animations:', error);
      }
    };

    // Use Intersection Observer to only load animations when needed
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            initializeAnimations();
            observer.disconnect();
          }
        });
      },
      { rootMargin: '50px' }
    );

    if (component.current) {
      observer.observe(component.current);
    }

    return () => {
      observer.disconnect();
      if (gsapContext) {
        gsapContext.revert();
      }
    };
  }, []);

  return (
    <section
      ref={component}
      className="py-20 overflow-hidden bg-slate-800/30"
    >
      <Bounded as="div">
        <div className="text-center mb-16">
          <Heading as="h2" size="xl" className="mb-4">
            {t('techShowcase.title')}{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              {t('techShowcase.titleHighlight')}
            </span>{" "}
            {t('techShowcase.titleEnd')}
          </Heading>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            {t('techShowcase.description')}
          </p>
        </div>
      </Bounded>

      {technologies.map((tech, index) => (
        <div
          key={index}
          className="tech-row mb-8 flex items-center justify-center gap-4 text-slate-400 whitespace-nowrap"
          aria-label={tech.name}
        >
          {Array.from({length: 15}, (_, repeatIndex) => (
            <React.Fragment key={repeatIndex}>
              <span
                className="tech-item text-6xl font-extrabold uppercase tracking-tighter md:text-8xl"
                style={{
                  color: repeatIndex === 7 ? tech.color : "inherit"
                }}
              >
                {tech.name}
              </span>
              <span className="text-3xl">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <circle cx="10" cy="10" r="2" />
                </svg>
              </span>
            </React.Fragment>
          ))}
        </div>
      ))}
    </section>
  );
}
