import { ArrowRight, MapPin } from "lucide-react";
import { ServiceFAQ } from "./ServiceFAQ";
import { SITE } from "@/lib/site";
import { AREAS, areaPath } from "@/data/catalog";

const faqs: [string, string][] = [
  [
    "Do you require vaccination records?",
    "Yes, for the safety of all pets in our salon, we require proof of current Rabies, Distemper/Parvo, and Bordetella vaccinations before any grooming services.",
  ],
  [
    "How long does a grooming appointment take?",
    "A typical full groom takes between 2 to 4 hours depending on the breed, size, coat condition, and temperament of your dog. We will give you a call or text when they are ready for pickup.",
  ],
  [
    "Can I stay with my dog during the grooming?",
    "For safety reasons and to keep the dogs calm, we ask that owners do not stay in the grooming area. Dogs are usually much more cooperative and relaxed when their owners are not present.",
  ],
  [
    "Do you groom large breeds or difficult dogs?",
    "Yes! We welcome dogs of all sizes and breeds. Please let us know in advance if your dog has any behavioral issues or anxieties so we can schedule appropriate time and staff.",
  ],
];

// General FAQ used on the home page and the service-area pages.
export const FAQ = ({ place }: { place?: string }) => (
  <ServiceFAQ
    heading={place ? `${place} Pet Care FAQ` : "Frequently Asked Questions"}
    sub={`Common questions about dog grooming, boarding and training in ${place ?? "Queens, NY"}.`}
    faqs={faqs}
  />
);

// "Where We Work": Queens (home base) as a featured card with the map, other areas as compact cards.
export const ServiceAreas = () => {
  const [primary, ...others] = AREAS;

  return (
    <section id="areas" className="py-16 md:py-24 border-t border-gray-200" style={{ backgroundColor: "#F4F6F9" }}>
      <div className="w-full max-w-[960px] mx-auto px-[12px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="text-primary text-xs font-black uppercase tracking-[0.2em]">Where We Work</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight text-black leading-tight">Proudly Serving These Areas</h2>
            <div className="w-16 h-1 bg-primary mt-5"></div>
            <p className="mt-5 text-[15px] text-zinc-600 leading-[1.8]">
              Based in Jamaica, Queens and serving dogs and their families across New York City.
            </p>
          </div>
          <a
            href="/service-areas"
            className="inline-flex items-center justify-center gap-2 self-start md:self-auto shrink-0 rounded-md border border-gray-200 bg-white px-5 h-11 text-sm font-bold text-black hover:border-primary hover:text-primary transition-colors"
          >
            View all areas <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Primary area: navy info panel + map */}
        <div className="mt-12 rounded-3xl overflow-hidden border border-gray-200 shadow-xl grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] bg-white">
          <div className="p-7 md:p-9 text-white" style={{ backgroundColor: "#050b1f" }}>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/15 border border-primary/40 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-sky-300">
              <MapPin className="w-3 h-3" /> Home base
            </span>
            <h3 className="mt-5 text-3xl font-black tracking-tight">{primary.label}</h3>
            <p className="mt-3 text-sm text-gray-300 leading-relaxed">
              Queens is home base for Heart Of Love Pet Care. We're an owner-operated team treating every dog like family,
              with grooming, boarding, training and dog walking.
            </p>

            <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-gray-400">Neighborhoods we serve</p>
            <ul className="mt-3 flex flex-wrap gap-1.5">
              {primary.areas.map((a) => (
                <li key={a} className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] text-gray-200">
                  {a}
                </li>
              ))}
            </ul>

            <a
              href={areaPath(primary)}
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-primary px-5 h-11 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {primary.label} Services <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="relative min-h-[320px] bg-gray-100">
            <iframe
              src={`https://maps.google.com/maps?q=${SITE.mapQuery}&t=&z=12&ie=UTF8&iwloc=&output=embed`}
              title="Heart Of Love Pet Care location"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </div>
        </div>

        {/* Other areas */}
        <ul className="mt-5 grid sm:grid-cols-3 gap-4">
          {others.map((area) => (
            <li key={area.slug}>
              <a
                href={areaPath(area)}
                className="group flex flex-col h-full rounded-2xl border border-gray-200 bg-white p-5 shadow-sm hover:border-primary/40 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <ArrowRight className="w-4 h-4 text-zinc-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                </div>
                <p className="mt-4 text-base font-black text-black">{area.label}</p>
                <p className="mt-1 text-xs text-zinc-500 leading-relaxed">
                  {area.areas.slice(0, 3).join(", ")} and more
                </p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export const FAQAndServiceAreas = () => (
  <>
    <FAQ />
    <ServiceAreas />
  </>
);
