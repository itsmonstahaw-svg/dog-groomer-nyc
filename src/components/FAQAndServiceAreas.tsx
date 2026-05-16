import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { MapPin } from "lucide-react";


export const FAQAndServiceAreas = () => {
  const faqs = [
    {
      question: "Do you service commercial ovens?",
      answer: "Yes, we repair commercial ovens, fryers, and all cooking equipment."
    },
    {
      question: "What areas do you serve?",
      answer: "We serve Houston, Katy, Sugar Land, Pearland, The Woodlands, and Pasadena."
    },
    {
      question: "Do you offer maintenance plans?",
      answer: "Yes, preventative maintenance is available to keep your equipment running."
    }
  ];



  return (
    <section id="faq-areas" className="py-20 bg-black text-white border-b border-border/40">
      <div className="w-full max-w-[1200px] mx-auto px-[12px] space-y-24">
        
        {/* Top Section: FAQ + Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* FAQ Left */}
          <div className="flex flex-col justify-start">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-[#849b36]/40 border-b-2">
                  <AccordionTrigger className="text-left text-lg md:text-xl font-bold hover:text-[#849b36] hover:no-underline transition-colors py-6 flex-row-reverse justify-end gap-4 [&[data-state=open]>svg]:text-[#849b36]">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-400 text-base leading-relaxed pb-6 pl-8">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          {/* Image Right */}
          <div className="relative rounded-lg overflow-hidden h-[400px] lg:h-[450px]">
            <img 
              src="https://vibe.filesafe.space/1778436264577951505/attachments/a4a881a6-2b74-4ee1-bed7-e7b3008b86d9.png" 
              alt="Tri Refrigeration Services" 
              className="object-cover w-full h-full absolute inset-0"
            />
          </div>
        </div>

        {/* Bottom Section: Service Areas */}
        <div className="pt-10 mt-10 border-t border-white/10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Map */}
            <div className="bg-black border border-white/10 rounded-lg shadow-2xl aspect-square md:aspect-[4/3] relative overflow-hidden">
              <iframe 
                src="https://maps.google.com/maps?q=4610%20Cashel%20Glen%20Dr,%20Houston,%20TX%2077069&t=&z=13&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>

            {/* Service Areas List */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter text-white">
                  WHERE TO FIND US
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  "Houston, TX",
                  "Katy, TX",
                  "Sugar Land, TX",
                  "Pearland, TX",
                  "The Woodlands, TX",
                  "Pasadena, TX"
                ].map((area, index) => (
                  <div key={index} className="flex items-center gap-3 bg-black p-4 rounded-lg border border-white/10 shadow-sm text-white">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-bold text-lg">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};