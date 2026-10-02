import { useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import { ServiceCards } from "./ServiceCards";
import { QuoteModal } from "./QuoteModal";
import { SITE } from "@/lib/site";

// Home page "Our Services": header with "View all services", the six service cards, then a help strip.
export const Services = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <section id="services" className="py-16 md:py-24 border-b border-border/40 bg-white">
      <div className="w-full max-w-[960px] mx-auto px-[12px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-primary text-[11px] font-black uppercase tracking-[0.2em]">Our services</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight leading-tight text-black">
              Dog Grooming, Boarding &amp; Training <span className="text-primary">in Queens, NY</span>
            </h2>
            <div className="w-16 h-1 bg-primary mt-5"></div>
            <p className="mt-5 text-[15px] text-zinc-600 leading-[1.8]">
              From a fresh groom to overnight stays and training, every dog gets the same gentle, owner-operated care we'd give our own.
            </p>
          </div>
          <a
            href="/services"
            className="inline-flex items-center justify-center gap-2 self-start md:self-auto shrink-0 rounded-md border border-gray-200 bg-white px-5 h-11 text-sm font-bold text-black hover:border-primary hover:text-primary transition-colors"
          >
            View all services <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-12">
          <ServiceCards />
        </div>

        {/* Help strip */}
        <div className="mt-10 rounded-2xl px-6 py-6 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-5" style={{ backgroundColor: "#050b1f" }}>
          <div>
            <p className="text-lg font-black text-white">Not sure which service your dog needs?</p>
            <p className="mt-1 text-sm text-gray-400">Tell us about your dog and we'll point you to the right fit.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsQuoteOpen(true)}
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-md h-11 px-6 transition-colors"
            >
              Get A Free Quote
            </button>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 border border-white/30 hover:bg-white/10 text-white font-bold rounded-md h-11 px-6 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      <QuoteModal open={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </section>
  );
};
