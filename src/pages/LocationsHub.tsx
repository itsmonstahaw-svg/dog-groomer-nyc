import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { ServiceHero } from "@/components/ServiceHero";
import { AreaInfoCards, AreaPills } from "@/components/AreaInfoCards";
import { IntroBlock } from "@/components/IntroBlock";
import { TrustPills } from "@/components/TrustPills";
import { ServiceAreas } from "@/components/FAQAndServiceAreas";
import { Reviews } from "@/components/Reviews";
import { FindUs } from "@/components/FindUs";
import { CTA } from "@/components/CTA";
import { SITE } from "@/lib/site";
import { AREAS, SERVICES, areaPath } from "@/data/catalog";

const LocationsHub = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <ServiceHero
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Service Areas", href: "/service-areas" },
          ]}
          eyebrow="Service Areas"
          title="Dog Grooming, Boarding & Training Across New York City"
          sub="Based in Jamaica, Queens and serving Queens, Brooklyn, Manhattan and pet owners across New York. Free quote, no obligation."
          image={SITE.heroImage}
          asideNode={
            <AreaInfoCards
              heading="New York City, NY"
              subline="Based in Jamaica, Queens"
              glanceTitle="New York City at a glance"
              stats={[
                { value: String(AREAS.length), label: "Service areas across New York" },
                { value: String(SERVICES.length), label: "Services available in every area" },
              ]}
            />
          }
          belowNode={<AreaPills title="Areas we serve" pills={AREAS.map((a) => ({ text: a.label, href: areaPath(a) }))} />}
        />

        <TrustPills />

        <IntroBlock
          image="/images/our-story.webp"
          imageAlt="Heart Of Love Pet Care owner holding a happy dog in Queens, NY"
          caption={{ title: "Jamaica, Queens, NY", sub: "Free quote, no obligation" }}
          eyebrow="Heart Of Love Pet Care in New York City"
          heading="Pet Care Across New York City"
          primaryLabel="Get A Free Quote"
        >
          <p>
            Heart Of Love Pet Care is an owner-operated pet care business based in Jamaica, Queens. We serve dog owners in Queens, Brooklyn, Manhattan and across New York with grooming, pet boarding, home boarding, dog walking, training and potty training.
          </p>
          <p>
            Choose your area below to see local details. Not sure whether we cover your neighborhood? Call{" "}
            <a href={SITE.phoneHref} className="font-bold text-primary hover:underline">{SITE.phone}</a> and ask.
          </p>
        </IntroBlock>

        <ServiceAreas />
        <Reviews />
        <FindUs />
        <CTA />
      </main>
      <Footer />
      <FloatingQuoteButton />
    </div>
  );
};

export default LocationsHub;
