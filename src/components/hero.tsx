"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-charcoal overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,_rgba(212,136,58,0.12)_0%,_transparent_70%)]" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber/3 rounded-full blur-2xl" />

      <div className="relative z-10 text-center px-6 max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-amber tracking-[0.3em] text-sm mb-8"
        >
          TEPAM KEPAM
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-display text-cream text-5xl md:text-7xl lg:text-8xl leading-tight mb-8"
        >
          {t("headline")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-cream/50 text-xl md:text-2xl mb-14 tracking-wide"
        >
          {t("subheadline")}
        </motion.p>

        <motion.a
          href="#menu"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="inline-block bg-amber hover:bg-amber-dark text-charcoal px-8 py-4 text-lg font-semibold tracking-wide transition-colors"
        >
          {t("cta")}
        </motion.a>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-px h-16 bg-gradient-to-b from-cream/30 to-transparent" />
      </motion.div>
    </section>
  );
}
