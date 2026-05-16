import { Navbar } from "@/components/Navbar";
import { Reviews } from "@/components/Reviews";
import { Process } from "@/components/Process";
import { ServiceAreas } from "@/components/ServiceAreas";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { QuoteForm } from "@/components/QuoteForm";

const ServiceWalkInCoolers = () => {
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
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="w-full max-w-[1000px] mx-auto px-[12px] relative z-20 space-y-6 text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              WALK-IN COOLERS & FREEZERS
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-gray-200 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Professional installation, repair, and maintenance of commercial and residential walk-in coolers and freezers in Houston.
            </p>
            
            <div className="pt-8">
              <Button size="lg" onClick={() => setIsModalOpen(true)} className="h-16 px-12 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xl uppercase tracking-wider rounded-sm shadow-2xl">
                Get Free Quote
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

        {/* About This Service Section */}
        <section className="py-16 md:py-24 bg-white text-black">
          <div className="w-full max-w-[1200px] mx-auto px-[12px]">
            <div className="max-w-3xl mx-auto space-y-10 text-lg text-zinc-800 text-left mb-16">
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Walk-In Cooler & Freezer Services</h3>
                <p className="leading-relaxed">
                  Walk-in coolers and freezers are the heart of many commercial food operations and large residential setups. When these massive systems fail, the financial loss can be devastating. We provide specialized services for walk-in units, addressing everything from sudden temperature drops to complete compressor failures. Our technicians understand the complex interplay of evaporator coils, defrost timers, and heavy-duty insulation required to keep these large spaces at exact temperatures. We work swiftly to restore function and protect your valuable inventory.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Why Choose Our Walk-In Experts?</h3>
                <p className="leading-relaxed">
                  Servicing a walk-in cooler or freezer requires specialized tools and deep industry knowledge. We are fully insured and experienced in handling the massive loads and specific refrigerants used in these systems. We know that a broken door seal or a failing fan motor can cause your system to work overtime, leading to premature failure and sky-high energy bills. Our team identifies these hidden issues, providing robust repairs that stand up to constant opening and closing.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Walk-In Installation & Maintenance</h3>
                <p className="leading-relaxed">
                  If you are building a new facility or upgrading an old system, we offer complete walk-in cooler and freezer installation. We ensure proper sizing, optimal placement of condenser units, and flawless panel assembly to prevent thermal leaks. For existing units, our maintenance program is essential. We regularly check refrigerant charges, clear drain lines to prevent ice buildup, and inspect all electrical connections. With our proactive care, your walk-in units will run efficiently and reliably for years to come.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img 
                src="https://vibe.filesafe.space/1778436264577951505/attachments/313af329-52b1-4bd0-bdb5-18478eb1317f.png" 
                alt="Service image 1" 
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img 
                src="https://vibe.filesafe.space/1778436264577951505/attachments/a7a3f002-ccd7-4930-b9d0-04bc341451b7.png" 
                alt="Service image 2" 
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img 
                src="https://vibe.filesafe.space/1778436264577951505/attachments/44b5245f-5e7a-4ac8-af4a-6516d74fd711.png" 
                alt="Service image 3" 
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
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

export default ServiceWalkInCoolers;
