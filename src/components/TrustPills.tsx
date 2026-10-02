import { Check } from "lucide-react";
import { TRUST_POINTS } from "@/lib/site";

// Navy trust strip under the inner-page heroes: short statements on a single line (wraps only on narrow screens).
export const TrustPills = () => (
  <section className="border-b border-white/10 py-5" style={{ backgroundColor: "#050b1f" }}>
    <div className="w-full max-w-[1240px] mx-auto px-[12px]">
      <ul className="flex flex-wrap xl:flex-nowrap items-center justify-center gap-x-5 xl:gap-x-6 gap-y-2.5">
        {TRUST_POINTS.map((pill) => (
          <li key={pill} className="inline-flex items-center gap-2 whitespace-nowrap text-sm xl:text-[13px] font-bold text-white">
            <Check className="w-3.5 h-3.5 text-primary shrink-0" />
            {pill}
          </li>
        ))}
      </ul>
    </div>
  </section>
);
