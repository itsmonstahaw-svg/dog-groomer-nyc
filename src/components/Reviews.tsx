import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const Reviews = ({ topWaveColor = "black" }: { topWaveColor?: "black" | "white" }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section className="relative pt-32 pb-32 md:pt-48 md:pb-48 bg-card overflow-hidden border-b border-border/40">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://vibe.filesafe.space/1778436264577951505/attachments/71f05754-1b7c-496a-97d5-7de6b8943cf9.png")' }}
      >
      </div>
      {/* Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-black/50"></div>

      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] md:h-[180px]">
          <path d="M0 120 L0 60 C 150 -20 250 140 450 70 C 650 0 750 120 900 80 C 1050 40 1150 20 1200 50 L 1200 120 Z" className={topWaveColor === "white" ? "fill-white" : "fill-black"}></path>
        </svg>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] md:h-[180px]">
          <path d="M0 120 L0 60 C 150 -20 250 140 450 70 C 650 0 750 120 900 80 C 1050 40 1150 20 1200 50 L 1200 120 Z" className="fill-black"></path>
        </svg>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-[12px] relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div className="flex-grow w-full md:w-auto">
            <div className="inline-block bg-black px-4 py-1.5 mb-4 border border-white/10">
              <span className="text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em]">
                DISCOVER WHAT OUR CUSTOMERS HAVE TO SAY ABOUT US
              </span>
            </div>
            <div className="flex items-center gap-6">
              <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white leading-none">
                Reviews
              </h2>
              <div className="flex-grow h-[2px] bg-primary mt-2"></div>
            </div>
          </div>
          <div className="flex-shrink-0 mb-1">
            <Button variant="outline" className="font-bold uppercase tracking-wider bg-white text-black hover:bg-gray-200 border-0 h-12 px-6 py-2 text-sm flex items-center gap-2 shadow-xl">
              Contact Us Now
              <ArrowRight className="w-4 h-4 text-primary" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Review Card 1 */}
          <div className="bg-white text-black border border-border p-5 rounded-lg shadow-md relative flex flex-col">
            <div className="flex items-center text-yellow-500 mb-3 gap-1.5">
              <span className="font-bold text-lg leading-none">5</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-4 leading-snug">
              "Tri Refrigeration saved our restaurant's walk-in cooler on a Friday night. Fast, professional, and knew exactly what to do."
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="font-bold text-sm">Jordan M.</span>
              <img src="https://storage.googleapis.com/revex-reputation-production/assets/google-icon.svg" alt="Google" className="w-5 h-5" />
            </div>
          </div>
          
          {/* Review Card 2 */}
          <div className="bg-white text-black border border-border p-5 rounded-lg shadow-md relative flex flex-col">
            <div className="flex items-center text-yellow-500 mb-3 gap-1.5">
              <span className="font-bold text-lg leading-none">5</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-4 leading-snug">
              "We rely on them for all our supermarket refrigeration maintenance. Highly recommend their preventative plans."
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="font-bold text-sm">Dana K.</span>
              <img src="https://storage.googleapis.com/revex-reputation-production/assets/google-icon.svg" alt="Google" className="w-5 h-5" />
            </div>
          </div>

          {/* Review Card 3 */}
          <div className="bg-white text-black border border-border p-5 rounded-lg shadow-md relative flex flex-col">
            <div className="flex items-center text-yellow-500 mb-3 gap-1.5">
              <span className="font-bold text-lg leading-none">5</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
            </div>
            <p className="text-sm text-gray-700 mb-4 leading-snug">
              "Fixed our commercial oven in no time. Great communication and fair pricing."
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="font-bold text-sm">Chris B.</span>
            </div>
          </div>
        </div>

        <div className="mt-8 w-full flex justify-center">
          <div className="bg-black text-white border border-white p-6 rounded-lg text-center w-full max-w-lg shadow-md">
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase mb-3">Review us on Google</h3>
            <div className="flex justify-center text-yellow-500 mb-6">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-6 h-6 fill-current" />)}
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase h-12 px-4 py-2 text-base">
                  Leave us a review
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[600px] p-0 bg-transparent border-none shadow-none">
                <iframe 
                  src="https://api.leadconnectorhq.com/widget/survey/S7cNKNChxMYfpTUIAXdf" 
                  style={{ border: "none", width: "100%", height: "600px" }} 
                  scrolling="no" 
                  id="S7cNKNChxMYfpTUIAXdf" 
                  title="survey"
                />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </section>
  );
};
