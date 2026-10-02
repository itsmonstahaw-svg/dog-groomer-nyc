import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { ServiceHero } from "@/components/ServiceHero";
import { AreaInfoCards, AreaPills } from "@/components/AreaInfoCards";
import { IntroBlock } from "@/components/IntroBlock";
import { TrustPills } from "@/components/TrustPills";
import { ServiceCards } from "@/components/ServiceCards";
import { FAQ, ServiceAreas } from "@/components/FAQAndServiceAreas";
import { Reviews } from "@/components/Reviews";
import { FindUs } from "@/components/FindUs";
import { CTA } from "@/components/CTA";
import { SITE } from "@/lib/site";
import { AREAS, SERVICES, areaPath, type Area } from "@/data/catalog";

// One page per service area (/service-areas/<slug>).
const LocationPage = ({ area }: { area: Area }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [area.slug]);

  const [intro, ...more] = area.sections;
  const isStatewide = area.slug === "new-york";

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <ServiceHero
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Service Areas", href: "/service-areas" },
            { name: area.label, href: areaPath(area) },
          ]}
          eyebrow="Service Area"
          title={area.h1}
          sub={area.heroSub}
          image={SITE.heroImage}
          asideNode={
            <AreaInfoCards
              heading={area.label}
              subline={isStatewide ? "Based in Jamaica, Queens" : "New York City Service Area"}
              glanceTitle={`${area.name} at a glance`}
              stats={[
                { value: String(SERVICES.length), label: `Services available in ${area.name}` },
                { value: String(area.areas.length), label: isStatewide ? "Regions we serve across New York" : `Neighborhoods we serve in ${area.name}` },
              ]}
            />
          }
          belowNode={<AreaPills title={isStatewide ? "Regions we serve" : "Neighborhoods we serve"} pills={area.areas.map((a) => ({ text: a }))} />}
        />

        <TrustPills />

        <IntroBlock
          image="/images/our-story.webp"
          imageAlt={`Heart Of Love Pet Care, serving dogs in ${area.label}`}
          caption={{ title: area.label, sub: "Free quote, no obligation" }}
          eyebrow={`Heart Of Love Pet Care in ${area.label}`}
          heading={intro.heading}
          primaryLabel={`Get A Free Quote in ${area.name}`}
          pillsLabel="Other areas we serve"
          pills={AREAS.filter((a) => a.slug !== area.slug).map((a) => ({ text: a.label, href: areaPath(a) }))}
        >
          <p>{intro.text}</p>
        </IntroBlock>

        <section className="py-14 md:py-16 bg-white text-black border-t border-gray-200">
          <div className="w-full max-w-[960px] mx-auto px-[12px]">
            <p className="text-primary text-[11px] font-black uppercase tracking-[0.2em]">Our services in {area.label}</p>
            <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight leading-tight">Every Service, Available in {area.name}</h2>
            <p className="mt-4 max-w-2xl text-[15px] text-zinc-600 leading-[1.8]">
              Every service we offer is available to dog owners in {area.label}. Choose a service to see what's included.
            </p>
            <div className="mt-8">
              <ServiceCards place={area.label} />
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16 border-t border-gray-200" style={{ backgroundColor: "#F4F6F9" }}>
          <div className="w-full max-w-[960px] mx-auto px-[12px] grid md:grid-cols-2 gap-6">
            {more.map((section) => (
              <div key={section.heading} className="rounded-2xl border border-gray-200 bg-white p-6 md:p-7 shadow-sm">
                <h2 className="text-xl font-black tracking-tight text-black leading-snug">{section.heading}</h2>
                <div className="w-12 h-1 bg-primary mt-4 mb-4"></div>
                <p className="text-sm text-zinc-600 leading-[1.8]">{section.text}</p>
              </div>
            ))}
          </div>
        </section>

        <Reviews />
        <FAQ place={area.label} />
        <ServiceAreas />
        <FindUs />
        <CTA />
      </main>
      <Footer />
      <FloatingQuoteButton />
    </div>
  );
};

export default LocationPage;
