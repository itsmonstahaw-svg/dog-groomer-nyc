import { useState, type ReactNode } from "react";
import { Check, Phone } from "lucide-react";
import { Breadcrumbs, type Crumb } from "./Breadcrumbs";
import { QuoteModal } from "./QuoteModal";
import { SITE } from "@/lib/site";

type Props = {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  sub: string;
  image?: string;
  bullets?: string[];
  // Custom right-hand content (e.g. service-area info cards).
  asideNode?: ReactNode;
  // Full-width content under the hero columns.
  belowNode?: ReactNode;
  noButtons?: boolean;
};

// Left-aligned navy hero used on the inner pages (services, about, service areas, reviews, contact).
export const ServiceHero = ({ crumbs, eyebrow, title, sub, image, bullets, asideNode, belowNode, noButtons }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="relative w-full pt-28 lg:pt-40 pb-14 md:pb-16 overflow-hidden" style={{ backgroundColor: "#050b1f" }}>
      {image && (
        <div className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url("${image}")` }}>
          <div className="absolute inset-0" style={{ backgroundColor: "rgba(5, 11, 31, 0.86)" }}></div>
        </div>
      )}

      <div
        className={`w-full max-w-[960px] mx-auto px-[12px] relative z-10 text-white ${
          asideNode ? "grid lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)] gap-10 lg:gap-14 items-start" : ""
        }`}
      >
        <div>
          <Breadcrumbs items={crumbs} />

          <p className="mt-10 text-primary text-xs font-black uppercase tracking-[0.2em]">{eyebrow}</p>
          <h1 className="mt-3 text-4xl md:text-5xl font-black leading-[1.1] tracking-tight max-w-3xl">{title}</h1>
          <p className="mt-5 text-lg text-gray-200 max-w-2xl leading-relaxed">{sub}</p>

          {!noButtons && (
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded h-12 px-6 transition-colors"
              >
                Get A Free Quote
              </button>
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center justify-center gap-2 border border-white/60 hover:bg-white/10 text-white font-bold rounded h-12 px-6 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call {SITE.phone}
              </a>
            </div>
          )}

          {bullets && bullets.length > 0 && (
            <ul className="mt-8 space-y-3 max-w-3xl">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-[15px] text-gray-200 leading-snug">
                  <Check className="w-4 h-4 text-white mt-1 shrink-0" />
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>

        {asideNode}

        {belowNode && <div className="lg:col-span-2">{belowNode}</div>}
      </div>

      <QuoteModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
