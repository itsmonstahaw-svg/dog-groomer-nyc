import { Check, MapPin } from "lucide-react";

export type AreaPill = { text: string; href?: string };

type Props = {
  heading: string; // e.g. "Queens, NY"
  subline: string; // e.g. "New York City Service Area"
  glanceTitle: string; // e.g. "Queens, NY at a glance"
  stats: { value: string; label: string }[]; // two rows
};

// Two stacked info cards used in the hero of the service-area pages.
export const AreaInfoCards = ({ heading, subline, glanceTitle, stats }: Props) => {
  const card = "rounded-2xl border border-white/15 p-5";
  const cardBg = { backgroundColor: "rgba(255,255,255,0.06)" };
  const label = "text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400";

  return (
    <div className="space-y-3 w-full max-w-[420px] lg:max-w-none mx-auto">
      <div className={card} style={cardBg}>
        <p className={`${label} flex items-center gap-2`}>
          <MapPin className="w-3.5 h-3.5 text-primary" /> Service Location
        </p>
        <p className="mt-3 text-3xl font-black text-white leading-tight">{heading}</p>
        <p className="mt-1 text-sm text-primary">{subline}</p>
        <p className="mt-4 pt-4 border-t border-white/10 text-sm text-gray-200 flex items-center gap-2">
          <Check className="w-4 h-4 text-primary shrink-0" /> Free quote, no obligation
        </p>
      </div>

      <div className={card} style={cardBg}>
        <p className={label}>{glanceTitle}</p>
        {stats.map((stat, i) => (
          <div key={stat.label} className={`flex items-center gap-4 ${i === 0 ? "mt-3 pb-3 border-b border-white/10" : "pt-3"}`}>
            <span className="text-2xl font-black text-white w-14 shrink-0">{stat.value}</span>
            <span className="text-sm text-gray-200">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Full-width pills card under the service-area hero.
export const AreaPills = ({ title, pills }: { title: string; pills: AreaPill[] }) => {
  const pillClass = "rounded-full border border-primary/40 px-2.5 py-1 text-[11px] font-medium text-sky-200 transition-colors whitespace-nowrap bg-primary/15";

  return (
    <div className="rounded-2xl border border-white/15 p-5" style={{ backgroundColor: "rgba(255,255,255,0.06)" }}>
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">{title}</p>
      <ul className="mt-3 flex flex-wrap gap-1.5">
        {pills.map((pill) => (
          <li key={pill.text}>
            {pill.href ? (
              <a href={pill.href} className={`${pillClass} inline-block hover:bg-primary hover:text-white hover:border-primary`}>
                {pill.text}
              </a>
            ) : (
              <span className={`${pillClass} inline-block`}>{pill.text}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
