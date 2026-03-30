"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function Contact() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const data = new FormData(e.currentTarget);

    try {
      const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("success");
        e.currentTarget.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-cream-dark border border-charcoal/10 px-4 py-3 text-charcoal placeholder:text-charcoal/40 focus:outline-none focus:border-amber transition-colors";

  return (
    <section id="contact" className="py-24 md:py-32 bg-cream">
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

        <div className="grid md:grid-cols-2 gap-16">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            <input
              type="text"
              name="name"
              placeholder={t("form.name")}
              required
              className={inputClass}
            />
            <input
              type="email"
              name="email"
              placeholder={t("form.email")}
              required
              className={inputClass}
            />
            <input
              type="tel"
              name="phone"
              placeholder={t("form.phone")}
              className={inputClass}
            />
            <textarea
              name="message"
              placeholder={t("form.message")}
              required
              rows={5}
              className={`${inputClass} resize-none`}
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="bg-amber hover:bg-amber-dark text-charcoal px-8 py-3 font-semibold tracking-wide transition-colors disabled:opacity-50"
            >
              {status === "sending" ? "..." : t("form.submit")}
            </button>

            {status === "success" && (
              <p className="text-green-700 text-sm">{t("form.success")}</p>
            )}
            {status === "error" && (
              <p className="text-red-600 text-sm">{t("form.error")}</p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-display text-2xl text-charcoal mb-6">
              {t("info.company")}
            </h3>
            <div className="space-y-3 text-charcoal/70 text-lg">
              <p>{t("info.code")}</p>
              <p>{t("info.address")}</p>
              <p>
                <a
                  href={`tel:${t("info.phone").replace(/\s/g, "")}`}
                  className="hover:text-amber transition-colors"
                >
                  {t("info.phone")}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${t("info.email")}`}
                  className="hover:text-amber transition-colors"
                >
                  {t("info.email")}
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
