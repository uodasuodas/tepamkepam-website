"use client";

import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="bg-charcoal py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="font-display text-cream text-xl tracking-wide">
            TEPAM KEPAM
          </span>
          <p className="text-cream/40 text-sm">
            &copy; {new Date().getFullYear()} MB Tepam kepam. {t("rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
