"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const zapiekankaKeys = ["classic", "meaty", "veggie", "bbq"] as const;
const sideKeys = ["fries", "onion_rings"] as const;
const drinkKeys = ["water", "lemonade"] as const;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function MenuSection() {
  const t = useTranslations("menu");

  return (
    <section id="menu" className="py-24 md:py-32 bg-cream-dark">
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

        <div className="mb-16">
          <h3 className="font-display text-2xl text-charcoal mb-8">
            {t("zapiekanki")}
          </h3>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid md:grid-cols-2 gap-6"
          >
            {zapiekankaKeys.map((key) => (
              <motion.div
                key={key}
                variants={fadeUp}
                className="bg-cream p-6 flex justify-between items-start hover:shadow-md transition-shadow"
              >
                <div>
                  <h4 className="text-lg font-semibold text-charcoal mb-1">
                    {t(`items.${key}.name`)}
                  </h4>
                  <p className="text-charcoal/50 text-sm">
                    {t(`items.${key}.description`)}
                  </p>
                </div>
                <span className="text-amber font-display text-2xl ml-4 shrink-0">
                  {t(`items.${key}.price`)}€
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-display text-2xl text-charcoal mb-6">
              {t("sides")}
            </h3>
            <div className="space-y-4">
              {sideKeys.map((key) => (
                <div
                  key={key}
                  className="flex justify-between items-center border-b border-charcoal/10 pb-3"
                >
                  <span className="text-charcoal">
                    {t(`side_items.${key}.name`)}
                  </span>
                  <span className="text-amber font-display text-xl">
                    {t(`side_items.${key}.price`)}€
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-display text-2xl text-charcoal mb-6">
              {t("drinks")}
            </h3>
            <div className="space-y-4">
              {drinkKeys.map((key) => (
                <div
                  key={key}
                  className="flex justify-between items-center border-b border-charcoal/10 pb-3"
                >
                  <span className="text-charcoal">
                    {t(`drink_items.${key}.name`)}
                  </span>
                  <span className="text-amber font-display text-xl">
                    {t(`drink_items.${key}.price`)}€
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
