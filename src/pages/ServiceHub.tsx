import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Reviews } from "@/components/Reviews";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { ServiceHero } from "@/components/ServiceHero";
import { TrustPills } from "@/components/TrustPills";
import { FindUs } from "@/components/FindUs";
import { ServiceCards } from "@/components/ServiceCards";
import { SITE } from "@/lib/site";

const ServiceHub = () => {
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
            { name: "Services", href: "/services" },
          ]}
          eyebrow={SITE.name}
          title="Dog Grooming, Boarding & Training Services in Queens, NY"
          sub="Grooming, pet boarding, home boarding, dog walking, training and potty training from an owner-operated team that treats every dog like family, not a number."
          image={SITE.heroImage}
        />

        <TrustPills />

        <section className="py-16 md:py-20 bg-white text-black">
          <div className="w-full max-w-[960px] mx-auto px-[12px]">
            <div className="max-w-3xl mb-10 space-y-4">
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-black">What We Do</h2>
              <div className="w-24 h-1 bg-primary"></div>
              <p className="text-lg text-zinc-800 leading-relaxed">
                From a fresh groom to overnight stays and training, every dog gets the same gentle, owner-operated care we'd give our own. Choose a service to see what's included.
              </p>
            </div>

            <ServiceCards />
          </div>
        </section>

        <Reviews />
        <FindUs />
        <CTA />
      </main>
      <Footer />
      <FloatingQuoteButton />
    </div>
  );
};

export default ServiceHub;
