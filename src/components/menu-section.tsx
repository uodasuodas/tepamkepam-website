"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const categories = [
  { key: "zapiekanki", items: ["classic", "chorizo", "bacon", "mexican"] },
  { key: "burgers", items: ["burger", "burger_fries"] },
] as const;
const extras = [
  { key: "sides", group: "side_items", items: ["fries", "onion_rings"] },
  { key: "drinks", group: "drink_items", items: ["water", "lemonade"] },
] as const;

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

        {categories.map(({ key, items }) => (
          <div key={key} className="mb-16">
            <div className="flex flex-wrap items-baseline justify-between gap-2 mb-8">
              <h3 className="font-display text-3xl text-charcoal">
                {t(`categories.${key}.title`)}
              </h3>
              {t.has(`categories.${key}.note`) && (
                <p className="text-charcoal/50 text-sm tracking-wide">
                  {t(`categories.${key}.note`)}
                </p>
              )}
            </div>
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="grid md:grid-cols-2 gap-6"
            >
              {items.map((item) => (
                <motion.article
                  key={item}
                  variants={fadeUp}
                  className="bg-cream p-7 border-l-2 border-amber hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-baseline gap-3 mb-3">
                    <h4 className="font-display text-2xl text-charcoal">
                      {t(`items.${item}.name`)}
                    </h4>
                    {t.has(`items.${item}.badge`) && (
                      <span className="bg-charcoal text-amber-light text-[11px] uppercase tracking-widest px-2 py-0.5">
                        {t(`items.${item}.badge`)}
                      </span>
                    )}
                    <span className="flex-1 border-b border-dotted border-charcoal/20" />
                    <span className="text-amber font-display text-2xl shrink-0">
                      {t(`items.${item}.price`)}€
                    </span>
                  </div>
                  <p className="text-charcoal/60 leading-relaxed">
                    {t(`items.${item}.description`)}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          </div>
        ))}

        <div className="grid md:grid-cols-2 gap-12">
          {extras.map(({ key, group, items }) => (
            <div key={key}>
              <h3 className="font-display text-2xl text-charcoal mb-6">
                {t(key)}
              </h3>
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item}
                    className="flex justify-between items-center border-b border-charcoal/10 pb-3"
                  >
                    <span className="text-charcoal">
                      {t(`${group}.${item}.name`)}
                    </span>
                    <span className="text-amber font-display text-xl">
                      {t(`${group}.${item}.price`)}€
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
