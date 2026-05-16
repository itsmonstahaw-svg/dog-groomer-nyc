import { MapPin } from "lucide-react";

export const ServiceAreas = () => {
  return (
    <section className="py-16 md:py-24 bg-muted border-b border-border/40" id="areas">
      <div className="w-full max-w-[1200px] mx-auto px-[12px]">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Map */}
          <div className="bg-zinc-950 border border-zinc-800 rounded-lg shadow-2xl aspect-square md:aspect-[4/3] relative overflow-hidden">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.2977755869623!2d-73.7744318845957!3d40.66736207933618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c266a2f32724f7%3A0xc3f8e5f1f9ec33f4!2s166-09%20144th%20Ave%2C%20Jamaica%2C%20NY%2011434!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
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
                PROUDLY SERVING THESE AREAS
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                "Queens, NY",
                "Brooklyn, NY",
                "Manhattan, NY",
                "New York (Statewide)"
              ].map((area, index) => (
                <div key={index} className="flex items-center gap-3 bg-zinc-950 p-4 rounded-lg border border-zinc-800 shadow-sm text-white">
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
    </section>
  );
};
