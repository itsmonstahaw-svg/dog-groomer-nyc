import { useEffect } from "react";
import { ArrowRight, Check, MapPin } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Reviews } from "@/components/Reviews";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { ServiceHero } from "@/components/ServiceHero";
import { TrustPills } from "@/components/TrustPills";
import { ServiceFAQ } from "@/components/ServiceFAQ";
import { FindUs } from "@/components/FindUs";
import { NeedServiceCard } from "@/components/NeedServiceCard";
import { AREAS, SERVICES, areaPath, servicePath, type Service } from "@/data/catalog";

const cardLabel = "text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400 mb-5";

// One page per service (/services/<slug>): hero, description + sidebar card, what's included, photos, FAQ.
const ServiceDetail = ({ service }: { service: Service }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [service.slug]);

  const related = SERVICES.filter((s) => s.slug !== service.slug);
  const half = Math.ceil(service.bullets.length / 2);
  const bulletColumns = [service.bullets.slice(0, half), service.bullets.slice(half)];
  const [first, ...rest] = service.sections;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <ServiceHero
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Services", href: "/services" },
            { name: service.title, href: servicePath(service) },
          ]}
          eyebrow={service.title}
          title={service.h1}
          sub={service.heroSub}
          image={service.image}
          bullets={service.bullets.slice(0, 4)}
        />

        <TrustPills />

        {/* Content: description + sidebar card */}
        <section className="py-12 md:py-14 bg-white text-black">
          <div className="w-full max-w-[960px] mx-auto px-[12px] grid lg:grid-cols-[minmax(0,1fr)_240px] gap-8 lg:gap-10 items-start">
            <div className="min-w-0 space-y-10">
              <div className="space-y-5">
                {/* Portrait photo shown whole, over a blurred copy of itself that fills the wide frame. */}
                <div className="relative rounded-2xl overflow-hidden shadow-lg aspect-[16/9] bg-[#050b1f]">
                  <img src={service.image} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover scale-110 blur-2xl opacity-70" />
                  <img src={service.image} alt={`${service.title} in Queens, NY`} className="relative mx-auto h-full w-auto object-contain" />
                </div>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-black leading-tight">{first.heading}</h2>
                <div className="w-16 h-1 bg-primary"></div>
                <p className="text-[15px] text-zinc-600 leading-[1.75]">{first.text}</p>
              </div>

              {/* What's included */}
              <div>
                <h2 className="text-lg font-black tracking-tight text-black mb-5">What's Included</h2>
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                  {bulletColumns.map((column, i) => (
                    <ul key={i} className="space-y-4">
                      {column.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3 text-sm text-zinc-600 leading-relaxed">
                          <Check className="w-4 h-4 text-primary mt-1 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>

              {rest.map((section) => (
                <div key={section.heading} className="space-y-4">
                  <h2 className="text-xl md:text-2xl font-black tracking-tight text-black leading-tight">{section.heading}</h2>
                  <p className="text-[15px] text-zinc-600 leading-[1.75]">{section.text}</p>
                </div>
              ))}

              {service.photos.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {service.photos.map((photo, i) => (
                    <div key={photo} className="rounded-xl overflow-hidden aspect-[3/4] bg-[#050b1f] shadow-sm">
                      <img src={photo} alt={`${service.title} at Heart Of Love Pet Care, photo ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  ))}
                </div>
              )}

              {/* More services + service areas */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className={cardLabel}>More Services</h2>
                  <ul className="space-y-3 text-sm">
                    {related.map((s) => (
                      <li key={s.slug}>
                        <a href={servicePath(s)} className="flex items-center gap-3 text-zinc-700 hover:text-primary transition-colors">
                          <ArrowRight className="w-4 h-4 text-zinc-400 shrink-0" />
                          {s.title}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a href="/services" className="flex items-center gap-3 font-bold text-primary hover:underline">
                        <ArrowRight className="w-4 h-4 shrink-0" />
                        All services
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h2 className={cardLabel}>Service Areas</h2>
                  <ul className="space-y-3 text-sm">
                    {AREAS.map((a) => (
                      <li key={a.slug}>
                        <a href={areaPath(a)} className="flex items-center gap-2.5 text-zinc-700 hover:text-primary transition-colors">
                          <MapPin className="w-4 h-4 text-zinc-400 shrink-0" />
                          {a.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <aside className="lg:sticky lg:top-24 self-start">
              <NeedServiceCard />
            </aside>
          </div>
        </section>

        <ServiceFAQ
          heading={`${service.title} FAQ`}
          sub={`Common questions about ${service.title.toLowerCase()} in Queens, NY.`}
          faqs={service.faqs}
        />
        <Reviews />
        <FindUs />
        <CTA />
      </main>
      <Footer />
      <FloatingQuoteButton />
    </div>
  );
};

export default ServiceDetail;
