import { motion } from "framer-motion";
import { Check, FileText, Phone } from "lucide-react";
import { SITE } from "@/lib/site";

// Full-width "Get Started Today" banner: dog photo behind a dark overlay, centered heading and buttons.
export const CTA = () => {
  const points = [
    "Owner-operated family business",
    "Licensed & fully insured",
    "Dogs of all sizes and breeds",
  ];

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://vibe.filesafe.space/1777030353190232844/assets/c4bd417e-d04a-4c8a-8cb3-a45643b8cb21.png")' }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-[960px] mx-auto px-[12px] text-center text-white"
      >
        <p className="text-primary text-sm font-black uppercase tracking-widest mb-3">Get Started Today</p>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-[1.02] [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
          Get Your Free Quote Today
        </h2>
        <p className="mt-5 text-lg text-gray-200 leading-relaxed max-w-2xl mx-auto [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
          Grooming, boarding, training and dog walking across Queens, Brooklyn and Manhattan. Every dog treated like family, not a number.
        </p>

        <ul className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2">
          {points.map((point) => (
            <li key={point} className="flex items-center gap-2 text-sm font-bold text-white">
              <Check className="w-4 h-4 text-primary shrink-0" />
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider rounded h-12 px-6 transition-colors"
          >
            <FileText className="w-4 h-4" />
            Get A Free Quote
          </a>
          <a
            href={SITE.phoneHref}
            className="inline-flex items-center justify-center gap-2 border border-primary bg-white text-primary hover:bg-white/90 font-bold rounded h-12 px-6 transition-colors"
          >
            <Phone className="w-4 h-4" />
            {SITE.phone}
          </a>
        </div>

        <p className="mt-5 text-xs text-gray-300 font-medium">Free quote &middot; No obligation</p>
      </motion.div>
    </section>
  );
};
