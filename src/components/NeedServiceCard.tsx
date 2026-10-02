import { useState } from "react";
import { QuoteModal } from "./QuoteModal";
import { SITE } from "@/lib/site";

// Sidebar call-to-action shown next to the service description.
export const NeedServiceCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl p-5 shadow-xl border border-white/10" style={{ backgroundColor: "#050b1f" }}>
      <p className="text-primary text-[11px] font-black uppercase tracking-[0.2em]">Need this service?</p>
      <p className="mt-3 text-lg font-black text-white leading-snug">Tell us about your dog and get a free quote.</p>
      <div className="mt-5 flex flex-col gap-3">
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded h-11 px-5 transition-colors"
        >
          Get A Free Quote
        </button>
        <a
          href={SITE.phoneHref}
          className="inline-flex items-center justify-center border border-white/30 hover:bg-white/10 text-white font-bold rounded h-11 px-5 transition-colors"
        >
          Call Now
        </a>
      </div>
      <QuoteModal open={open} onClose={() => setOpen(false)} />
    </div>
  );
};
