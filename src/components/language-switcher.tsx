"use client";

import { useLocale } from "next-intl";

export function LanguageSwitcher() {
  const locale = useLocale();

  return (
    <div className="flex items-center gap-2 text-sm">
      <a
        href="/lt/"
        className={`transition-colors ${
          locale === "lt"
            ? "text-amber font-semibold"
            : "text-cream/60 hover:text-cream"
        }`}
      >
        LT
      </a>
      <span className="text-cream/30">|</span>
      <a
        href="/en/"
        className={`transition-colors ${
          locale === "en"
            ? "text-amber font-semibold"
            : "text-cream/60 hover:text-cream"
        }`}
      >
        EN
      </a>
    </div>
  );
}
