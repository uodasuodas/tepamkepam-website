"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { LanguageSwitcher } from "./language-switcher";

const navLinks = [
  { href: "#about", key: "about" },
  { href: "#menu", key: "menu" },
  { href: "#locations", key: "locations" },
  { href: "#rental", key: "rental" },
  { href: "#contact", key: "contact" },
] as const;

export function Header() {
  const t = useTranslations("nav");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-charcoal/95 backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-display text-cream text-2xl tracking-wide"
        >
          TEPAM KEPAM
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-cream/80 hover:text-amber text-sm tracking-wide transition-colors"
            >
              {t(link.key)}
            </a>
          ))}
          <LanguageSwitcher />
        </div>

        <button
          className="md:hidden text-cream p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span
              className={`block h-0.5 bg-cream transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-cream transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 bg-cream transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-charcoal/95 backdrop-blur-sm border-t border-cream/10">
          <div className="px-6 py-6 flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-cream/80 hover:text-amber text-lg transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {t(link.key)}
              </a>
            ))}
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </header>
  );
}
