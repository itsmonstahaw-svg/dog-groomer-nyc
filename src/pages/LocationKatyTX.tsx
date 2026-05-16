import { Navbar } from "@/components/Navbar";
import { Reviews } from "@/components/Reviews";
import { Process } from "@/components/Process";
import { ServiceAreas } from "@/components/ServiceAreas";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { Button } from "@/components/ui/button";
import { Phone, X } from "lucide-react";
import { useState, useEffect } from "react";
import { QuoteForm } from "@/components/QuoteForm";

const LocationKatyTX = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full min-h-[100vh] flex items-center justify-center text-center pt-32 pb-12 overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("https://vibe.filesafe.space/1778436264577951505/attachments/bae4b4f5-17dc-4e41-a45e-97b195687224.png")' }}
          >
            <div className="absolute inset-0 bg-black/65"></div>
          </div>

          <div className="w-full max-w-[1000px] mx-auto px-[12px] relative z-20 space-y-5 text-white">
            <span className="inline-block text-primary font-black uppercase tracking-[0.3em] text-sm border border-primary/50 px-4 py-1 rounded-sm">
              HVAC IN KATY TX
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              KATY TX HVAC & REFRIGERATION
            </h1>
            <p className="text-base md:text-lg font-medium max-w-3xl mx-auto text-gray-300 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Cinco Ranch · Cross Creek Ranch · Kelliwood · Seven Meadows · Elyson
            </p>

            <div className="pt-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-base uppercase tracking-wider rounded-sm shadow-2xl flex items-center gap-2" asChild>
                <a href="tel:+17139097745">
                  <Phone className="w-5 h-5" />
                  (713) 909-7745
                </a>
              </Button>
              <Button size="lg" variant="outline" onClick={() => setIsModalOpen(true)} className="h-14 px-10 border-white bg-white/10 text-white hover:bg-white hover:text-black font-black text-base uppercase tracking-wider rounded-sm shadow-2xl">
                Get A Free Quote
              </Button>
            </div>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block w-full h-[80px] md:h-[120px]"
            >
              <path
                d="M0 120 L0 60 C 150 -20 250 140 450 70 C 650 0 750 120 900 80 C 1050 40 1150 20 1200 50 L 1200 120 Z"
                className="fill-white"
              />
            </svg>
          </div>
        </section>

        {/* Body Copy Section */}
        <section className="py-16 md:py-24 bg-white text-black">
          <div className="w-full max-w-[900px] mx-auto px-[12px] space-y-12 text-lg text-zinc-800">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Commercial HVAC & Refrigeration Services In Katy</h2>
              <p>
                Operating a commercial business in Katy means dealing with intense Texas heat, making reliable commercial HVAC and refrigeration services in Katy absolutely essential. Whether you manage a busy restaurant, a large supermarket, or a food service facility, your daily operations depend on maintaining precise temperatures. A sudden equipment failure can lead to spoiled inventory and lost revenue, which is why having trusted commercial HVAC and refrigeration services in Katy is critical. The long summers push cooling systems to their limits, demanding robust equipment and proactive care. By investing in professional commercial HVAC and refrigeration services in Katy, local businesses can protect their investments and ensure smooth operations year-round.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Here For All Your Commercial HVAC Needs In Katy</h2>
              <p>
                Tri Refrigeration & HVAC is dedicated to providing comprehensive commercial HVAC needs in Katy, offering expert solutions tailored to your specific facility. We specialize in the installation, repair, and maintenance of walk-in coolers, freezers, commercial ovens, and ice units to support your commercial HVAC needs in Katy. Our team understands the unique demands of local food service businesses and supermarkets, delivering targeted strategies to keep your equipment running efficiently. When you rely on us for your commercial HVAC needs in Katy, you receive meticulous attention to detail and high-quality workmanship. We are proud to be the trusted partner for countless businesses requiring dependable commercial HVAC needs in Katy.
              </p>
            </div>
            <div className="space-y-4">
              <h2 className="text-2xl font-bold">Why Choose Tri Refrigeration & HVAC In Katy</h2>
              <p>
                When deciding who to trust, there are many reasons to choose Tri Refrigeration & HVAC in Katy for your facility's critical systems. We are a commercial-only, fully insured provider with extensive experience handling the heavy-duty equipment used by local supermarkets and restaurants. Business owners choose Tri Refrigeration & HVAC in Katy because we offer fast response times and have overtime available to handle emergencies whenever they strike. Additionally, we provide a 10% discount on services, making it even more cost-effective to choose Tri Refrigeration & HVAC in Katy. From our deep industry expertise to our commitment to minimizing your downtime, it's clear why so many local enterprises choose Tri Refrigeration & HVAC in Katy.
              </p>
            </div>
          </div>
        </section>

        <Reviews topWaveColor="white" />
        <Process />
        <ServiceAreas />
        <CTA />
      </main>
      <Footer />
      <FloatingQuoteButton />
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70" onClick={() => setIsModalOpen(false)} />
          <div className="relative bg-black border border-white/10 p-6 sm:p-8 rounded-lg shadow-2xl max-w-md w-full">
            <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 text-white opacity-70 hover:opacity-100 transition-opacity">
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-3xl font-black uppercase text-center text-white mb-2 tracking-tight">Get A Free Quote</h2>
            <p className="text-center text-gray-400 mb-6">Fill out the form below and we'll get back to you shortly.</p>
            <QuoteForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default LocationKatyTX;
