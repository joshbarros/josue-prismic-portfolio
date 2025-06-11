"use client";

import clsx from "clsx";
import React from "react";
import Link from "next/link";
import Bounded from "@/components/Bounded";
import { useLanguage } from "@/contexts/LanguageContext";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa6";

export default function Footer() {
  const { t } = useLanguage();

  // Static footer data with translation support
  const footerData = {
    name: t('company.name'),
    nav_item: [
      { label: t('nav.home'), link: "/" },
      { label: t('nav.about'), link: "/about" },
      { label: t('nav.services'), link: "/services" },
      { label: t('nav.contact'), link: "/contact" }
    ],
    github_link: "https://github.com/joshbarros",
    linkedin_link: "https://linkedin.com/in/joshbarros",
    whatsapp_link: "https://wa.me/5522981250144"
  };

  const currentYear = new Date().getFullYear();
  const copyright = t('footer.copyright')
    .replace('{year}', currentYear.toString())
    .replace('{company}', t('company.name'));

  return (
    <Bounded as="footer" className="text-slate-600">
      <div className="container mx-auto mt-20 flex flex-col items-center justify-between gap-6 py-8 sm:flex-row ">
        <div className="name flex flex-col items-center justify-center gap-x-4 gap-y-2 sm:flex-row sm:justify-self-start">
          <Link
            href="/"
            className="text-xl font-extrabold tracking-tighter text-slate-100 transition-colors duration-150 hover:text-yellow-400"
          >
            {footerData.name}
          </Link>
          <span
            className="hidden text-5xl font-extralight leading-[0] text-slate-400 sm:inline"
            aria-hidden={true}
          >
            /
          </span>
          <p className=" text-sm text-slate-300 ">
            {copyright}
          </p>
        </div>
        <nav className="navigation" aria-label="Footer Navigation">
          <ul className="flex items-center gap-1">
            {footerData.nav_item.map(({ link, label }, index) => (
              <React.Fragment key={label}>
                <li>
                  <Link
                    href={link}
                    className={clsx(
                      "group relative block overflow-hidden  rounded px-3 py-1 text-base font-bold text-slate-100 transition-colors duration-150 hover:hover:text-yellow-400",
                    )}
                  >
                    {label}
                  </Link>
                </li>
                {index < footerData.nav_item.length - 1 && (
                  <span
                    className="text-4xl font-thin leading-[0] text-slate-400"
                    aria-hidden="true"
                  >
                    /
                  </span>
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
        <div className="socials inline-flex justify-center sm:justify-end">
          {footerData.github_link && (
            <Link
              href={footerData.github_link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label={footerData.name + " on GitHub"}
            >
              <FaGithub />
            </Link>
          )}
          {footerData.linkedin_link && (
            <Link
              href={footerData.linkedin_link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label={footerData.name + " on LinkedIn"}
            >
              <FaLinkedin />
            </Link>
          )}
          {footerData.whatsapp_link && (
            <Link
              href={footerData.whatsapp_link}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
              aria-label={footerData.name + " on WhatsApp"}
            >
              <FaWhatsapp />
            </Link>
          )}
        </div>
      </div>
    </Bounded>
  );
}
