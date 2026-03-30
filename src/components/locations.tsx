"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const channels = ["events", "offices", "neighborhoods"] as const;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Locations() {
  const t = useTranslations("locations");

  return (
    <section id="locations" className="py-24 md:py-32 bg-cream-dark">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
            {t("title")}
          </h2>
          <p className="text-charcoal/60 text-lg">{t("subtitle")}</p>
          <div className="w-16 h-0.5 bg-amber mx-auto mt-6" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {channels.map((channel) => (
            <motion.div
              key={channel}
              variants={fadeUp}
              className="bg-cream p-8 hover:shadow-md transition-shadow"
            >
              <h3 className="font-display text-2xl text-charcoal mb-4">
                {t(`${channel}.title`)}
              </h3>
              <p className="text-charcoal/60 leading-relaxed">
                {t(`${channel}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
