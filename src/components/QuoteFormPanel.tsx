import { QuoteForm } from "./QuoteForm";
import { SITE } from "@/lib/site";

// The one "Get A Free Quote" block used everywhere (hero, modal, contact, about): logo, heading, then the form.
// Put it inside a dark card (bg-black).
export const QuoteFormPanel = ({ compact = false }: { compact?: boolean }) => (
  <div className="text-center">
    <img src={SITE.logo} alt="NYC Hearts of Love Pet Care" className={`${compact ? "h-16" : "h-20"} w-auto object-contain mx-auto`} />

    <h2 className={`mt-3 ${compact ? "text-2xl" : "text-[28px]"} font-black uppercase text-white tracking-tight leading-none`}>
      Get A Free Quote
    </h2>

    <div className="my-5 h-px bg-white/10"></div>

    <QuoteForm />
  </div>
);
