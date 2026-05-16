import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section className="relative py-32 md:py-48 flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://vibe.filesafe.space/1778436264577951505/attachments/ca8b6994-e5cc-4984-9c9c-83a4359702ee.png")' }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Top Wave */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-10 rotate-180">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] md:h-[180px]">
          <path d="M0 120 L0 60 C 150 -20 250 140 450 70 C 650 0 750 120 900 80 C 1050 40 1150 20 1200 50 L 1200 120 Z" className="fill-background"></path>
        </svg>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[100px] md:h-[180px]">
          <path d="M0 120 L0 60 C 150 -20 250 140 450 70 C 650 0 750 120 900 80 C 1050 40 1150 20 1200 50 L 1200 120 Z" className="fill-background"></path>
        </svg>
      </div>

      <div className="w-full max-w-[1200px] mx-auto px-[12px] relative z-20 space-y-4 text-white">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
          READY TO TAKE THE NEXT STEP?
        </h2>
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase text-white tracking-tighter [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
          GET A FREE QUOTE TODAY!
        </h3>
        
        <div className="pt-8">
          <Button size="lg" className="h-16 px-12 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xl uppercase tracking-wider rounded-sm shadow-2xl">
            Get A Free Quote
          </Button>
        </div>
      </div>
    </section>
  );
};
