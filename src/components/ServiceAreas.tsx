import { MapPin } from "lucide-react";

export const ServiceAreas = () => {
  return (
    <section className="py-16 md:py-24 bg-black text-white border-b border-border/40" id="areas">
      <div className="w-full max-w-[1200px] mx-auto px-[12px]">
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
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tighter">
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
                  <span className="font-bold text-sm sm:text-base leading-tight">{area}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
