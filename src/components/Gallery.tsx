import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Expand, X } from "lucide-react";

// HD photos in public/images/photos (web-optimized copies of the originals in public/images).
const images = [
  "d4a232dc",
  "e42dacde",
  "4715caff",
  "d1c037c9",
  "bb4a3711",
  "3af6786c",
  "ab24a6da",
  "619d4f07",
].map((id, i) => ({ src: `/images/photos/${id}.webp`, alt: `Heart Of Love Pet Care photo ${i + 1}` }));

// Every photo is portrait (about 3:4), so tiles use the same shape and nothing gets cropped awkwardly.

// Home page "See Our Work": portrait photo grid with a click-to-enlarge lightbox.
export const Gallery = ({ showButton = true }: { showButton?: boolean }) => {
  const [active, setActive] = useState<number | null>(null);

  const close = useCallback(() => setActive(null), []);
  const step = useCallback((dir: number) => setActive((i) => (i === null ? i : (i + dir + images.length) % images.length)), []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, close, step]);

  return (
    <section id="gallery" className="py-16 md:py-24 border-b border-gray-200" style={{ backgroundColor: "#F4F6F9" }}>
      <div className="w-full max-w-[960px] mx-auto px-[12px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-primary text-xs font-black uppercase tracking-[0.2em]">See Why Our Customers Love Us</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight leading-tight text-black">See Our Work</h2>
            <div className="w-16 h-1 bg-primary mt-5"></div>
            <p className="mt-5 text-[15px] text-zinc-600 leading-[1.8]">
              Fresh grooms, happy stays and well-behaved pups. A few of the dogs we've had the pleasure of caring for.
            </p>
          </div>
          {showButton && (
            <a
              href="/gallery"
              className="inline-flex items-center justify-center gap-2 self-start md:self-auto shrink-0 rounded-md border border-gray-200 bg-white px-5 h-11 text-sm font-bold text-black hover:border-primary hover:text-primary transition-colors"
            >
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </a>
          )}
        </div>

        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {images.map((photo, i) => (
            <motion.button
              key={photo.src}
              type="button"
              onClick={() => setActive(i)}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              aria-label={`Enlarge ${photo.alt}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-[#050b1f]"
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <span className="absolute inset-0 bg-[#050b1f]/0 group-hover:bg-[#050b1f]/35 transition-colors duration-300"></span>
              <span className="absolute right-3 bottom-3 w-9 h-9 rounded-full bg-white/95 text-black flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                <Expand className="w-4 h-4" />
              </span>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {active !== null && (
        <div className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={close}>
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(-1);
            }}
            aria-label="Previous photo"
            className="absolute left-3 sm:left-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <img
            src={images[active].src}
            alt={images[active].alt}
            className="max-h-[85vh] max-w-[90vw] rounded-xl shadow-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              step(1);
            }}
            aria-label="Next photo"
            className="absolute right-3 sm:right-6 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
          <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs text-white/70">
            {active + 1} / {images.length}
          </p>
        </div>
      )}
    </section>
  );
};
