import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { MenuSection } from "@/components/menu-section";
import { Gallery } from "@/components/gallery";
import { HowItWorks } from "@/components/how-it-works";
import { Locations } from "@/components/locations";
import { Rental } from "@/components/rental";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <MenuSection />
        <Gallery />
        <HowItWorks />
        <Locations />
        <Rental />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
