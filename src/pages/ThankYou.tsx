import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reviews } from "@/components/Reviews";
import { Process } from "@/components/Process";
import { FAQAndServiceAreas } from "@/components/FAQAndServiceAreas";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";

const ThankYou = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full min-h-[70vh] flex items-center justify-center pt-32 pb-12 overflow-hidden">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("https://vibe.filesafe.space/1778436264577951505/attachments/bae4b4f5-17dc-4e41-a45e-97b195687224.png")' }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="w-full max-w-[1200px] mx-auto px-[12px] relative z-10 flex flex-col items-center text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.1] mb-6 tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
                THANKS FOR CONTACTING US
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-medium mb-12 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
                We'll be in touch shortly. In the meantime, feel free to reach out directly.
              </p>
              <div className="flex flex-col items-center gap-2 animate-bounce">
                <ChevronDown className="w-8 h-8 text-white" />
                <ChevronDown className="w-8 h-8 text-white -mt-4 opacity-70" />
                <ChevronDown className="w-8 h-8 text-white -mt-4 opacity-40" />
              </div>
            </motion.div>
          </div>

          {/* Bottom Wave */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px]">
              <path d="M0 120 L0 60 C 150 -20 250 140 450 70 C 650 0 750 120 900 80 C 1050 40 1150 20 1200 50 L 1200 120 Z" className="fill-white"></path>
            </svg>
          </div>
        </section>

        {/* Confirmation Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="w-full max-w-[1200px] mx-auto px-[12px] relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase text-black mb-6 tracking-tight leading-tight">
              WE'LL GET BACK TO YOU AS SOON AS POSSIBLE!
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-12 font-medium">
              Feel free to contact us directly in the meantime if it's urgent.
            </p>
            
            <div className="flex flex-col gap-4 max-w-2xl mx-auto">
              <Button 
                asChild
                className="w-full h-16 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xl uppercase tracking-wider rounded-sm shadow-xl"
              >
                <a href="mailto:trivietpy@gmail.com">EMAIL: trivietpy@gmail.com</a>
              </Button>
              <Button 
                asChild
                className="w-full h-16 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xl uppercase tracking-wider rounded-sm shadow-xl"
              >
                <a href="tel:+17139097745">PHONE: (713) 909-7745</a>
              </Button>
            </div>
          </div>

          {/* Bottom Wave (Black) */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] md:h-[100px]">
              <path d="M0 120 L0 60 C 150 -20 250 140 450 70 C 650 0 750 120 900 80 C 1050 40 1150 20 1200 50 L 1200 120 Z" className="fill-black"></path>
            </svg>
          </div>
        </section>

        {/* Reused Sections */}
        <Reviews topWaveColor="black" />
        <Process />
        <FAQAndServiceAreas />
      </main>
      <Footer />
      <FloatingQuoteButton />
    </div>
  );
};

export default ThankYou;
