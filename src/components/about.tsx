"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function About() {
  const t = useTranslations("about");

  return (
    <section id="about" className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-8">
              {t("title")}
            </h2>
            <div className="w-16 h-0.5 bg-amber" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6 text-charcoal/70 text-lg leading-relaxed"
          >
            <p>{t("p1")}</p>
            <p>{t("p2")}</p>
            <p>{t("p3")}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
