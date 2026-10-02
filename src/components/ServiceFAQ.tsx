import { useState, type ReactNode } from "react";
import { Minus, Phone, Plus } from "lucide-react";
import { SITE } from "@/lib/site";

type Props = {
  heading: string;
  sub: string;
  faqs: [string, string][];
  // Optional content under the intro text in the left column. Defaults to the FAQ photo.
  aside?: ReactNode;
};

// Every FAQ shows the same photo. Drop it in at public/images/faq.webp; until then the older photo shows instead.
const FAQ_IMAGE = "/images/faq.webp";
const FAQ_IMAGE_FALLBACK = "https://vibe.filesafe.space/1777030353190232844/attachments/4c20168e-1dfe-4e87-9b61-ff620aec6c7d.png";

const FaqPhoto = () => (
  <div className="relative mt-10 hidden lg:block w-full max-w-[300px]">
    <div className="absolute -top-3 -left-3 w-2/3 h-2/3 rounded-2xl bg-primary/10" aria-hidden="true"></div>
    <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-xl bg-[#050b1f]">
      <img
        src={FAQ_IMAGE}
        alt="Heart Of Love Pet Care owner holding a happy dog"
        className="w-full h-full object-cover object-[50%_30%]"
        loading="lazy"
        onError={(e) => {
          const img = e.currentTarget;
          if (!img.src.endsWith(FAQ_IMAGE_FALLBACK)) img.src = FAQ_IMAGE_FALLBACK;
        }}
      />
    </div>
  </div>
);

// Two-column FAQ: heading + photo on the left, card accordion on the right, "Still Have Questions?" card underneath.
export const ServiceFAQ = ({ heading, sub, faqs, aside = <FaqPhoto /> }: Props) => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-white border-t border-gray-200">
      <div className="w-full max-w-[960px] mx-auto px-[12px] grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.6fr)] gap-10 lg:gap-14 items-start">
        <div className="lg:sticky lg:top-28">
          <p className="text-primary text-xs font-black uppercase tracking-[0.2em]">FAQ</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight text-black leading-tight">{heading}</h2>
          <div className="w-16 h-1 bg-primary mt-5"></div>
          <p className="mt-5 text-[15px] text-zinc-600 leading-[1.8]">{sub}</p>
          {aside}
        </div>

        <div>
          <ul className="space-y-3">
            {faqs.map(([question, answer], i) => {
              const isOpen = open === i;
              return (
                <li
                  key={question}
                  className={`rounded-xl border transition-colors ${isOpen ? "border-primary/40 bg-primary/[0.04] shadow-sm" : "border-gray-200 bg-white hover:border-gray-300"}`}
                >
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="w-full flex items-center justify-between gap-6 px-5 py-4 text-left text-[15px] font-bold text-black"
                    >
                      <span className={isOpen ? "text-primary" : ""}>{question}</span>
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                          isOpen ? "bg-primary text-white" : "bg-[#F4F6F9] text-zinc-600"
                        }`}
                      >
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </span>
                    </button>
                  </h3>
                  {isOpen && <p className="px-5 pb-5 pr-14 text-sm text-zinc-600 leading-relaxed">{answer}</p>}
                </li>
              );
            })}
          </ul>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl px-6 py-5" style={{ backgroundColor: "#050b1f" }}>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-black text-white">Still Have Questions?</h3>
                <p className="text-sm text-gray-400">Call us directly. Real answers, no scripts.</p>
              </div>
            </div>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-md h-11 px-6 shrink-0 transition-colors"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
