import { useState, type ReactNode } from "react";
import { Check, Phone } from "lucide-react";
import { QuoteModal } from "./QuoteModal";
import { SITE, TRUST_POINTS } from "@/lib/site";

type Props = {
  image: string;
  imageAlt: string;
  caption: { title: string; sub: string };
  eyebrow: string;
  heading: string;
  children: ReactNode; // description paragraphs
  pillsLabel?: string;
  pills?: { text: string; href?: string }[];
  primaryLabel: string;
};

// Photo on the left; eyebrow, heading, description, "at a glance" card and buttons on the right.
export const IntroBlock = ({ image, imageAlt, caption, eyebrow, heading, children, pillsLabel, pills, primaryLabel }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <section className="py-14 md:py-16 bg-white text-black">
      <div className="w-full max-w-[960px] mx-auto px-[12px] grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-10 lg:gap-12 items-stretch">
        <div className="w-full max-w-[380px] mx-auto lg:mx-0 lg:h-full">
          <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[3/4] lg:aspect-auto lg:h-full bg-[#050b1f]">
            <img src={image} alt={imageAlt} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/85 to-transparent"></div>
            <div className="absolute bottom-4 left-5 right-5">
              <p className="text-lg font-black text-white">{caption.title}</p>
              <p className="text-xs text-gray-300">{caption.sub}</p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-primary text-[11px] font-black uppercase tracking-[0.2em]">{eyebrow}</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight leading-tight">{heading}</h2>
          <div className="w-16 h-1 bg-primary mt-5 mb-6"></div>
          <div className="space-y-4 text-[15px] text-zinc-600 leading-[1.8]">{children}</div>

          <div className="mt-7 rounded-2xl border border-gray-200 p-5 shadow-sm" style={{ backgroundColor: "#FAFAFA" }}>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400">At a glance</p>
            <ul className="mt-3 space-y-2.5">
              {TRUST_POINTS.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-600">
                  <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row sm:flex-nowrap gap-2">
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded h-12 px-4 transition-colors text-[13px] whitespace-nowrap"
            >
              {primaryLabel}
            </button>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white font-bold rounded h-12 px-4 transition-colors text-[13px] whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </div>
      {pills && pills.length > 0 && (
        <div className="w-full max-w-[960px] mx-auto px-[12px] mt-10">
          {pillsLabel && <p className="text-xs font-bold text-zinc-500">{pillsLabel}</p>}
          <ul className="mt-3 flex flex-wrap gap-2">
            {pills.map((pill) => (
              <li key={pill.text}>
                {pill.href ? (
                  <a
                    href={pill.href}
                    className="inline-block whitespace-nowrap rounded-full border border-gray-200 bg-[#F4F6F9] px-3 py-1 text-xs text-zinc-600 hover:bg-primary hover:text-white hover:border-primary transition-colors"
                  >
                    {pill.text}
                  </a>
                ) : (
                  <span className="inline-block whitespace-nowrap rounded-full border border-gray-200 bg-[#F4F6F9] px-3 py-1 text-xs text-zinc-600">{pill.text}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
      <QuoteModal open={open} onClose={() => setOpen(false)} />
    </section>
  );
};
