import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { useTranslations } from "next-intl";

const dir = path.join(process.cwd(), "public/images/gallery");

// Read at build time: any image dropped into public/images/gallery shows up
function getImages() {
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
    .sort();
}

export function Gallery() {
  const t = useTranslations("gallery");
  const images = getImages();

  return (
    <section id="gallery" className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-cream mb-4">
            {t("title")}
          </h2>
          <p className="text-cream/60 text-lg">{t("subtitle")}</p>
          <div className="w-16 h-0.5 bg-amber mx-auto mt-6" />
        </div>

        {!images.length && (
          <p className="text-center text-cream/40 tracking-wide">{t("soon")}</p>
        )}
        <div className="columns-2 md:columns-3 gap-4">
          {images.map((file) => (
            <div key={file} className="mb-4 break-inside-avoid overflow-hidden">
              <Image
                src={`/images/gallery/${encodeURIComponent(file)}`}
                alt={t("alt")}
                width={800}
                height={800}
                sizes="(min-width: 768px) 33vw, 50vw"
                className="w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
