import { Star } from "lucide-react";
import { GoogleG } from "./Reviews";
import { SITE } from "@/lib/site";

// Trust stats card directly under the home page landing section: white rounded card, stats split by dividers.
const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Local & Family Owned" },
  { value: "Fully", label: "Licensed & Insured" },
];

export const ServiceBadges = () => (
  <section className="py-10 md:py-12" style={{ backgroundColor: "#F4F6F9" }}>
    <div className="w-full max-w-[960px] mx-auto px-[12px]">
      <div className="bg-white rounded-2xl shadow-[0_12px_40px_-12px_rgba(4,11,28,0.18)] px-6 py-7 md:px-8 grid grid-cols-2 md:grid-cols-5 gap-y-7 md:gap-y-0 items-center md:divide-x divide-gray-200">
        {/* Rating */}
        <a href={SITE.googleUrl} target="_blank" rel="noopener noreferrer" className="col-span-2 md:col-span-1 flex flex-col items-center text-center px-4">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <div className="mt-1.5 flex items-baseline gap-2">
            <span className="text-4xl font-black text-black leading-none">{SITE.rating}</span>
            <span className="text-sm text-zinc-500">{SITE.reviewCount} reviews</span>
          </div>
        </a>

        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center text-center px-4">
            <span className="text-3xl md:text-[34px] font-black text-black leading-none tracking-tight">{stat.value}</span>
            <span className="mt-2 text-sm text-zinc-500">{stat.label}</span>
          </div>
        ))}

        {/* Google */}
        <a href={SITE.googleUrl} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2.5 px-4 hover:opacity-80 transition-opacity">
          <GoogleG className="w-6 h-6 shrink-0" />
          <span className="text-sm font-bold text-black whitespace-nowrap">Google Reviews</span>
        </a>
      </div>
    </div>
  </section>
);
