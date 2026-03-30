"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function Rental() {
  const t = useTranslations("rental");

  return (
    <section id="rental" className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-8">
            {t("title")}
          </h2>
          <p className="text-cream/60 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
            {t("description")}
          </p>
          <a
            href="#contact"
            className="inline-block bg-amber hover:bg-amber-dark text-charcoal px-8 py-4 text-lg font-semibold tracking-wide transition-colors"
          >
            {t("cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
