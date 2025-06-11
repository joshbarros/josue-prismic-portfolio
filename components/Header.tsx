import React from "react";
import NavBar from "./NavBar";

// Static navigation data to replace Prismic settings
const staticSettings = {
  data: {
    name: "Josh Barros",
    nav_item: [
      { label: "Home", link: "/" },
      { label: "About", link: "/about" },
      { label: "Services", link: "/services" },
      { label: "Contact", link: "/contact" }
    ],
    cta_label: "Get Started",
    cta_link: "/services"
  }
};

export default function Header() {
  return (
    <header className="top-0 z-50 mx-auto max-w-7xl md:sticky md:top-4">
      <NavBar settings={staticSettings} />
    </header>
  )
}
