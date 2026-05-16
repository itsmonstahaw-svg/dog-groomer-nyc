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

const ServiceResidentialRefrigeration = () => {
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
              RESIDENTIAL REFRIGERATION
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-gray-200 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Professional repair and maintenance for residential refrigerators and freezers in the Houston area.
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
                <h3 className="text-2xl font-bold text-black mb-3">Residential Refrigeration Repair</h3>
                <p className="leading-relaxed">
                  A broken refrigerator can disrupt your entire household and lead to costly food spoilage. We bring our commercial-grade expertise directly to your home, offering fast, reliable repair services for all major residential refrigerator and freezer brands. Whether your fridge isn't cooling properly, is making strange noises, or has a faulty ice maker, our experienced technicians diagnose the problem quickly and accurately to get your kitchen back to normal.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Why Choose Us for Your Home?</h3>
                <p className="leading-relaxed">
                  We are a fully insured, owner-operated business that values honesty, transparency, and doing the job right the first time. Unlike standard appliance repair services, our deep background in heavy-duty commercial refrigeration means we understand the intricate mechanics of cooling systems better than anyone. We treat your home with respect, offer transparent pricing without hidden fees, and stand behind the quality of our work.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Preventative Maintenance for Your Fridge</h3>
                <p className="leading-relaxed">
                  Just like commercial systems, high-end residential refrigerators benefit greatly from routine maintenance. We offer preventative services that include cleaning condenser coils, checking door seals, and ensuring your compressor is running efficiently. Proper maintenance not only extends the lifespan of your appliance but also helps keep your energy bills low. Trust us to keep your family's food safe and your refrigerator running at peak performance.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img 
                src="https://vibe.filesafe.space/1778436264577951505/attachments/50840071-8c3e-49d7-887f-4d816e97ce81.png" 
                alt="Service image 1" 
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img 
                src="https://vibe.filesafe.space/1778436264577951505/attachments/dbce6618-f302-4f7b-b169-680309246b07.png" 
                alt="Service image 2" 
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img 
                src="https://vibe.filesafe.space/1778436264577951505/attachments/d10284c9-b899-433c-bb20-32ae6a9a7c38.png" 
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

export default ServiceResidentialRefrigeration;
