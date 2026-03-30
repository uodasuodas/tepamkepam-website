"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const steps = ["step1", "step2", "step3"] as const;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function HowItWorks() {
  const t = useTranslations("howItWorks");

  return (
    <section className="py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-charcoal">
            {t("title")}
          </h2>
          <div className="w-16 h-0.5 bg-amber mx-auto mt-6" />
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-12"
        >
          {steps.map((step) => (
            <motion.div key={step} variants={fadeUp} className="text-center">
              <span className="font-display text-7xl text-amber/20 block mb-4">
                {t(`${step}.number`)}
              </span>
              <h3 className="text-xl font-semibold text-charcoal mb-3">
                {t(`${step}.title`)}
              </h3>
              <p className="text-charcoal/60 leading-relaxed">
                {t(`${step}.description`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
