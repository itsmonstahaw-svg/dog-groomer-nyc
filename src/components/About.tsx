import { ArrowRight, Heart, MapPin, ShieldCheck, Star, Users } from "lucide-react";
import { GoogleG } from "./Reviews";
import { SITE, reviewCountLabel } from "@/lib/site";

// Only things the site already states about the business.
const highlights = [
  { icon: Heart, title: "Treated like family", text: "Gentle, patient care at every dog's own pace." },
  { icon: Users, title: "Owner-operated", text: "You deal with the people who care for your dog." },
  { icon: ShieldCheck, title: "Licensed & insured", text: "Safe, professional hands, every visit." },
  { icon: MapPin, title: "100% local", text: "Based in Jamaica, Queens, serving all of NYC." },
];

const stats = [
  { value: "10+", label: "Years experience" },
  { value: "6", label: "Services offered" },
  { value: `${SITE.rating}★`, label: "Google rating" },
];

// Home page "Our Story".
export const About = () => {
  return (
    <section className="py-16 md:py-24 border-b border-gray-200 overflow-hidden" style={{ backgroundColor: "#F4F6F9" }}>
      <div className="w-full max-w-[960px] mx-auto px-[12px] grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-14 lg:gap-16 items-center">
        {/* Photo */}
        <div className="relative w-full max-w-[380px] mx-auto lg:mx-0">
          <div className="absolute -top-4 -left-4 w-2/3 h-2/3 rounded-2xl bg-primary/10" aria-hidden="true"></div>
          <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[4/5]">
            <img
              src="/images/our-story.webp"
              alt="Heart Of Love Pet Care owner holding a happy dog"
              className="w-full h-full object-cover object-[50%_35%]"
            />
          </div>

          {/* Google rating card */}
          <a
            href={SITE.googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-6 -right-4 sm:-right-10 rounded-xl bg-white px-4 py-3 shadow-xl border border-gray-100 hover:border-primary/40 transition-colors"
          >
            <div className="flex items-center gap-2">
              <GoogleG className="w-5 h-5" />
              <span className="text-lg font-black text-black leading-none">{SITE.rating}</span>
              <span className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </span>
            </div>
            <p className="mt-1 text-[11px] text-zinc-500">{reviewCountLabel}</p>
          </a>

          {/* Years badge */}
          <div className="absolute -bottom-6 -left-2 sm:-left-8 rounded-xl px-5 py-4 shadow-xl" style={{ backgroundColor: "#050b1f" }}>
            <p className="text-4xl font-black text-white leading-none">10+</p>
            <p className="mt-2 text-[11px] font-semibold leading-snug text-sky-200">
              Years caring<br />
              for NYC dogs
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-primary text-xs font-black uppercase tracking-[0.2em]">Our Story</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight leading-tight text-black">
            Built on Love,
            <br />
            <span className="italic text-primary">Driven by Care</span>
          </h2>
          <div className="w-16 h-1 bg-primary mt-5"></div>

          <p className="mt-6 text-[15px] text-zinc-600 leading-[1.8]">
            We started with a passion for pets and a commitment to their well-being. Today, we're Jamaica's go-to team for professional pet boarding and training, giving every dog a safe, comfortable, and loving environment while you're away.
          </p>

          <ul className="mt-8 grid sm:grid-cols-2 gap-x-6 gap-y-5">
            {highlights.map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </span>
                <div>
                  <p className="font-black text-black text-[15px] leading-snug">{item.title}</p>
                  <p className="mt-0.5 text-[13px] text-zinc-500 leading-relaxed">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 grid grid-cols-3 rounded-xl border border-gray-200 divide-x divide-gray-200 bg-white shadow-sm">
            {stats.map((stat) => (
              <div key={stat.label} className="px-3 py-4 text-center">
                <p className="text-2xl font-black text-black leading-none">{stat.value}</p>
                <p className="mt-1.5 text-[11px] text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 h-12 text-sm font-bold uppercase tracking-wider text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Our Full Story <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-md border border-gray-200 px-6 h-12 text-sm font-bold uppercase tracking-wider text-black hover:border-primary hover:text-primary transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
