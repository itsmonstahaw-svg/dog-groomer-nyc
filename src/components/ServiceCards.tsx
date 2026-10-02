import { ArrowRight, CalendarCheck, Check, Footprints, GraduationCap, Home, Moon, Scissors, type LucideIcon } from "lucide-react";
import { SERVICES, servicePath } from "@/data/catalog";

const ICONS: Record<string, LucideIcon> = {
  "pet-grooming": Scissors,
  "pet-boarding": Moon,
  "home-boarding": Home,
  "dog-walking": Footprints,
  "training-behaviour": GraduationCap,
  "potty-training": CalendarCheck,
};

// The six services as cards: photo with icon badge, title, description, three key points and a "Learn more" link.
// Used on the home page, the /services hub and every service-area page.
export const ServiceCards = ({ place = "Queens, NY" }: { place?: string }) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {SERVICES.map((service) => {
      const Icon = ICONS[service.slug] ?? Check;
      return (
        <a
          key={service.slug}
          href={servicePath(service)}
          className="group flex flex-col rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-primary/40 transition-all duration-300"
        >
          <div className="relative">
            <div className="relative w-full aspect-square overflow-hidden bg-[#050b1f]">
              <img
                src={service.image}
                alt={`${service.title} in ${place}`}
                className="absolute inset-0 w-full h-full object-cover object-[50%_30%] transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050b1f]/50 via-transparent to-transparent"></div>
            </div>
            {/* Icon badge sits half over the photo edge, outside the clipped frame so it isn't cut off. */}
            <span className="absolute left-5 bottom-0 translate-y-1/2 z-10 w-12 h-12 rounded-xl bg-primary text-primary-foreground flex items-center justify-center shadow-lg ring-4 ring-white">
              <Icon className="w-5 h-5" />
            </span>
          </div>

          <div className="flex flex-col px-6 pt-9 pb-6 grow">
            <h3 className="text-xl font-black text-black leading-snug group-hover:text-primary transition-colors">{service.title}</h3>
            <p className="text-[13px] text-zinc-500 mt-2 leading-relaxed">{service.cardDesc}</p>

            <ul className="mt-5 space-y-2.5 grow">
              {service.bullets.slice(0, 3).map((bullet) => (
                <li key={bullet} className="flex items-start gap-2.5 text-[13px] text-zinc-700 leading-snug">
                  <span className="mt-0.5 w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-primary" strokeWidth={3} />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-5 border-t border-gray-100 flex items-center justify-between">
              <span className="text-[13px] font-bold text-primary">Learn more</span>
              <span className="w-8 h-8 rounded-full border border-primary/30 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </a>
      );
    })}
  </div>
);
