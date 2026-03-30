import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import { routing } from "@/i18n/routing";

const dmSerif = DM_Serif_Display({
  weight: "400",
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-serif",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  variable: "--font-dm-sans",
  display: "swap",
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const meta: Record<string, { title: string; description: string }> = {
    lt: {
      title: "Tepam Kepam – lenkiškos zapiekankos Vilniuje",
      description:
        "Mobilusis maisto furgonėlis Vilniuje. Tikros lenkiškos zapiekankos, kepamos profesionalioje orkaitėje. Renginiai, pietūs, nuoma.",
    },
    en: {
      title: "Tepam Kepam – authentic Polish zapiekanki in Vilnius",
      description:
        "Mobile food truck in Vilnius. Authentic Polish zapiekanki baked in a professional oven. Events, lunch service, truck rental.",
    },
  };
  return meta[locale] || meta.lt;
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${dmSerif.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body className="font-body bg-cream text-charcoal antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
