import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reviews } from "@/components/Reviews";
import { Process } from "@/components/Process";
import { FAQAndServiceAreas } from "@/components/FAQAndServiceAreas";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="https://vibe.filesafe.space/1777030353190232844/attachments/6fa75095-9ae4-4ef8-85f1-7ed0da3b386d.png" 
              alt="Thank you background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          
          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-6 [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              THANKS FOR REACHING OUT!
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-medium mb-12 [text-shadow:_0_1px_4px_rgba(0,0,0,0.3)]">
              We'll be in touch shortly. In the meantime, feel free to reach out directly.
            </p>
            <div className="flex flex-col items-center gap-2 animate-bounce">
              <ChevronDown className="w-8 h-8 text-white" />
              <ChevronDown className="w-8 h-8 text-white -mt-4 opacity-70" />
              <ChevronDown className="w-8 h-8 text-white -mt-4 opacity-40" />
            </div>
          </div>
        </section>

        {/* Confirmation Section */}
        <section className="relative py-24 bg-white text-black">
          {/* Wave Divider Top */}
          <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-background">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
          </div>

          <div className="w-full max-w-[1200px] mx-auto px-[12px] text-center relative z-10">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
              WE'LL GET BACK TO YOU AS SOON AS POSSIBLE!
            </h2>
            <p className="text-xl text-gray-600 font-medium mb-12 max-w-2xl mx-auto">
              Feel free to contact us directly in the meantime if it's urgent.
            </p>
            
            <div className="flex flex-col gap-4 max-w-2xl mx-auto">
              <Button 
                asChild
                className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-black text-xl uppercase tracking-wider rounded-none"
              >
                <a href="mailto:HEARTOFLOVEPETCARE@GMAIL.COM">
                  EMAIL: HEARTOFLOVEPETCARE@GMAIL.COM
                </a>
              </Button>
              <Button 
                asChild
                className="w-full h-16 bg-primary hover:bg-primary/90 text-white font-black text-xl uppercase tracking-wider rounded-none"
              >
                <a href="tel:+16469259123">
                  PHONE: (646) 925-9123
                </a>
              </Button>
            </div>
          </div>

          {/* Wave Divider Bottom */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[60px] fill-background">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
            </svg>
          </div>
        </section>

        {/* Existing Sections */}
        <Reviews />
        <Process />
        <FAQAndServiceAreas />
      </main>
      <Footer />
    </div>
  );
};

export default ThankYou;
