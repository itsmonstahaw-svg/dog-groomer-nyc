import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { QuoteForm } from "./QuoteForm";

export const Hero = () => {
  return (
    <section className="relative w-full min-h-[100vh] flex items-center pt-32 pb-12">
      {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("https://vibe.filesafe.space/1778436264577951505/attachments/bae4b4f5-17dc-4e41-a45e-97b195687224.png")' }}
          >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-[12px] relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        
        {/* Left Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left text-white"
        >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-black uppercase leading-[1.1] mb-6 tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
        Tri Refrigeration & HVAC
      </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 font-medium [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
            Expert Commercial & Residential HVAC, Refrigeration, Walk-in Coolers, and Oven Repair in Houston, TX
          </p>
        </motion.div>

        {/* Right Form */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full max-w-md bg-black border border-white/10 p-8 rounded-lg shadow-2xl relative"
        >
          <div className="flex justify-center mb-6">
            <img 
              src="https://vibe.filesafe.space/1778436264577951505/attachments/1a1d7288-f458-45eb-9f31-db5f96aae826.png" 
              alt="Tri Refrigeration & HVAC Logo" 
              className="h-16 md:h-20 w-auto object-contain mix-blend-lighten"
            />
          </div>
          <h2 className="text-3xl font-black uppercase text-center text-white mb-2 tracking-tight">
            GET A FREE QUOTE
          </h2>
          <p className="text-center text-gray-300 mb-6 font-medium">Request a free quote today.</p>
          
          <QuoteForm />
        </motion.div>

      </div>
    </section>
  );
};
