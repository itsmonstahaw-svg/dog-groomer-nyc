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

const ServiceRestaurantEquipment = () => {
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
              RESTAURANT EQUIPMENT REPAIR
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-gray-200 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Expert repair and maintenance for commercial ovens, fryers, and cooking equipment in Houston's busiest kitchens.
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
                <h3 className="text-2xl font-bold text-black mb-3">Comprehensive Restaurant Equipment Repair</h3>
                <p className="leading-relaxed">
                  A malfunctioning oven or fryer can bring a commercial kitchen to a complete standstill. Whether you operate a high-volume bakery, a fine dining restaurant, or a fast-paced food service business, your cooking equipment must perform flawlessly. We specialize in the repair and maintenance of all commercial cooking equipment, including convection ovens, deck ovens, conveyor ovens, industrial fryers, and grills. Our technicians are trained to diagnose complex heating issues, gas flow problems, and electrical faults quickly, ensuring your kitchen gets back up to speed without losing a busy service.
                </p>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Why Trust Our Kitchen Equipment Experts?</h3>
                <p className="leading-relaxed">
                  Commercial cooking equipment involves complex combinations of gas, electricity, and precision controls. It requires a specialized, fully insured technician to service safely. We bring years of experience working with the top brands used in Houston's commercial kitchens. We understand that an uneven bake or a pilot light issue isn't just an inconvenience—it affects the quality of your food and your reputation. We carry a wide range of OEM parts to provide rapid, on-the-spot repairs, minimizing your downtime and protecting your bottom line.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-black mb-3">Proactive Equipment Maintenance</h3>
                <p className="leading-relaxed">
                  The intense heat and continuous use of commercial kitchen equipment mean that parts will inevitably wear out. Our proactive maintenance services are designed to catch these issues early. We calibrate thermostats, inspect and clean burners, test safety valves, and check gaskets to ensure maximum heat retention and energy efficiency. Regular maintenance not only extends the life of your expensive equipment but also guarantees consistent cooking temperatures, keeping your chefs happy and your customers coming back for more.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img 
                src="https://vibe.filesafe.space/1778436264577951505/attachments/fe150c60-b7e2-48dd-aefa-cdfb23bfb905.png" 
                alt="Service image 1" 
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img 
                src="https://vibe.filesafe.space/1778436264577951505/attachments/352a4031-8db1-4cb0-a0a9-a427b8fa0c0a.png" 
                alt="Service image 2" 
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img 
                src="https://vibe.filesafe.space/1778436264577951505/attachments/73ecc8f3-c01f-416c-a654-cc05e9fe24bc.png" 
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

export default ServiceRestaurantEquipment;
