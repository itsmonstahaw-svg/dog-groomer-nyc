import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Star, ArrowRight } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export const Reviews = () => {
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
<section className="relative py-8 bg-card overflow-hidden border-b border-border/40">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: 'url("https://vibe.filesafe.space/1777030353190232844/assets/5dbd1929-8c4c-454f-b006-fd4679ef0067.png")' }}
      >
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-[12px] relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-6 gap-4">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter">
              Reviews
            </h2>
            <div className="w-24 h-1 bg-primary mt-4"></div>
          </div>
          <Button variant="outline" className="font-bold uppercase tracking-wider bg-white text-black hover:bg-gray-200 border-0 h-9 px-4 py-2 text-sm flex items-center gap-2">
            Contact Us Now
            <ArrowRight className="w-4 h-4 text-primary" />
          </Button>
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
              "They did an amazing job with my golden retriever! He came out smelling fantastic, perfectly trimmed, and so happy. The staff is incredibly gentle and caring."
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="font-bold text-sm">Finn Russell</span>
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
              "My rescue dog is usually terrified of the groomer, but the team here was so patient and sweet with her. She looks beautiful and wasn't stressed at all!"
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="font-bold text-sm">Sarah Jenkins</span>
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
              "Best grooming salon in town. They always listen to exactly how I want my poodle cut, and their blueberry facial leaves him smelling great for weeks."
            </p>
            <div className="flex items-center justify-between mt-auto">
              <span className="font-bold text-sm">Michael Thompson</span>
              <img src="https://storage.googleapis.com/revex-reputation-production/assets/google-icon.svg" alt="Google" className="w-5 h-5" />
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
                  src="https://api.leadconnectorhq.com/widget/survey/bVJmpV7IwCk5H0Trl0UN" 
                  style={{ border: "none", width: "100%", height: "600px" }} 
                  scrolling="no" 
                  id="bVJmpV7IwCk5H0Trl0UN" 
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
