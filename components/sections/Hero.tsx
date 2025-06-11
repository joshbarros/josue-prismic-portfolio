"use client"

import Bounded from "@/components/Bounded";
import Button from "@/components/Button";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function Hero() {
  const component = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
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

    return () => ctx.revert();
  }, []);

  return (
    <Bounded as="section" ref={component} className="min-h-screen flex items-center">
      <div className="grid gap-y-6 lg:grid-cols-[2fr,1fr] lg:gap-x-8">
        <div className="flex flex-col justify-center">
          <h1 className="hero-title text-6xl font-bold leading-tight tracking-tight text-slate-100 md:text-8xl">
            Transform Your{" "}
            <span className="bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent">
              Vision
            </span>{" "}
            Into Reality
          </h1>

          <p className="hero-subtitle text-2xl font-medium text-yellow-300 mt-4 md:text-3xl">
            Digital Solutions That Drive Results
          </p>

          <p className="hero-description prose prose-xl prose-slate prose-invert mt-8 max-w-2xl">
            We craft modern web experiences, mobile applications, and custom digital solutions
            that transform how businesses connect with their customers. From concept to deployment,
            we turn complex challenges into elegant, powerful digital products.
          </p>

          <div className="hero-button mt-8">
            <Button href="/services" label="Start Your Project" showIcon />
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
