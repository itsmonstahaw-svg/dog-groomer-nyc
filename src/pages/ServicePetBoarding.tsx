import { Navbar } from "@/components/Navbar";
import { Reviews } from "@/components/Reviews";
import { Process } from "@/components/Process";
import { ServiceAreas } from "@/components/ServiceAreas";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { QuoteForm } from "@/components/QuoteForm";
import { useEffect } from "react";

const ServiceHomeBoarding = () => {
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
            style={{ backgroundImage: 'url("https://vibe.filesafe.space/1777030353190232844/attachments/b368c911-7f25-4632-acad-64db52f092c2.png")' }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="w-full max-w-[1000px] mx-auto px-[12px] relative z-20 space-y-6 text-white">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              Home Boarding
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-gray-200 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              A warm, cage-free alternative to traditional kennels. Your dog stays in a real home environment, receiving one-on-one love and care just like they're used to.
            </p>
            
            <div className="pt-8">
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" className="h-16 px-12 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-xl uppercase tracking-wider rounded-sm shadow-2xl">
                    Get Free Quote
                  </Button>
                </DialogTrigger>
                <DialogContent className="bg-black border border-white/10 p-6 sm:p-8 rounded-lg shadow-2xl max-w-md w-[95vw] sm:w-full [&>button]:text-white [&>button]:opacity-100 [&>button:hover]:opacity-80">
                  <div className="flex justify-center -mb-2">
                    <img 
                      src="https://vibe.filesafe.space/1777030353190232844/attachments/c896108d-a195-4a99-9db4-723af21b2087.png" 
                      alt="NYC Hearts of Love Pet Care" 
                      className="h-32 w-auto object-contain"
                    />
                  </div>
                  <DialogTitle className="text-3xl font-black uppercase text-center text-white mb-0 tracking-tight">
                    Get A Free Quote
                  </DialogTitle>
                  <DialogDescription className="text-center text-gray-400 mb-6">
                    Fill out the form below and we'll get back to you shortly.
                  </DialogDescription>
                  <QuoteForm />
                </DialogContent>
              </Dialog>
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
                className="fill-background"
              />
            </svg>
          </div>
        </section>

        {/* About This Service Section */}
        <section className="py-16 md:py-24 bg-white text-black">
          <div className="w-full max-w-[1200px] mx-auto px-[12px]">
            <div className="max-w-4xl mx-auto space-y-12 text-lg text-zinc-800 text-left mb-16">
              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary">What Is Home Boarding?</h3>
                <p className="leading-relaxed">
                  Home boarding at Heart Of Love Pet Care is a specialized, cage-free alternative to traditional kennels, specifically tailored for the discerning dog owners of Queens and New York City. This service allows your dog to stay in a real home environment, where they are treated as part of the family rather than just another number in a facility. At Heart Of Love Pet Care, our home boarding in Queens focuses on maintaining the comforts and routines your dog is used to, from lounging on real furniture to enjoying personalized playtime in a familiar setting. We understand that NYC dogs often have unique needs, and our owner-operated approach ensures that every guest receives the highest level of care. Heart Of Love Pet Care provides a sanctuary for your pet within the heart of New York City, offering a level of intimacy and attention that larger commercial operations simply cannot match. Every dog in our home boarding program in Queens receives round-the-clock supervision and all the love they would get at their own home.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary">Why Is Home Boarding Important?</h3>
                <p className="leading-relaxed">
                  For many dogs in Queens / New York City, the transition from a quiet home to a noisy, high-traffic kennel can be incredibly stressful and detrimental to their health. Heart Of Love Pet Care offers home boarding as a way to eliminate that stress, providing a calm and loving atmosphere that mimics your dog's own life in NYC. By choosing Heart Of Love Pet Care, you are ensuring that your pet receives consistent companionship and emotional support, which is vital for preventing separation anxiety while you are away. Our home boarding in Queens is particularly beneficial for senior dogs, puppies, or those with nervous temperaments who require a gentler touch. Heart Of Love Pet Care believes that every dog in New York City deserves to feel safe and loved, and our home boarding service is the ultimate expression of that commitment to the well-being of your furry family member. This personalized care helps maintain their emotional balance and overall happiness in the heart of New York.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary">When Should You Consider Home Boarding?</h3>
                <p className="leading-relaxed">
                  You should consider home boarding with Heart Of Love Pet Care whenever you want the absolute best, most personalized care for your dog while you are traveling away from Queens or New York City. If your dog has struggled with traditional boarding in the past or if you simply prefer a more intimate, family-style setting in NYC, Heart Of Love Pet Care is the ideal choice. Many of our Queens clients choose home boarding for extended stays, knowing that their pet will be integrated into a loving household routine rather than being left in a stall. Whether you are planning a long vacation or a short trip out of New York City, Heart Of Love Pet Care provides the peace of mind you need. If you want your dog to experience a true home away from home in Queens, don't wait to get in touch. Shoot us a message today or click Get Free Quote to learn more about home boarding with Heart Of Love Pet Care. Our Jamaica, Queens location is perfectly situated for NYC residents looking for high-quality, local pet care.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img 
                src="https://vibe.filesafe.space/1777030353190232844/attachments/2945c0b4-1ff0-4798-a563-9ccd86920434.png" 
                alt="Service image 1" 
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img 
                src="https://vibe.filesafe.space/1777030353190232844/attachments/0f446e67-1cf2-4bf7-b5f5-6fdbec831afe.png" 
                alt="Service image 2" 
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img 
                src="https://vibe.filesafe.space/1777030353190232844/attachments/922e6561-45b7-4671-9430-0c012eba99e2.png" 
                alt="Service image 3" 
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
            </div>
          </div>
        </section>

        <Reviews />
        <Process />
        <ServiceAreas />
        <CTA />
      </main>
      <Footer />
      <FloatingQuoteButton />
    </div>
  );
};

export default ServiceHomeBoarding;
