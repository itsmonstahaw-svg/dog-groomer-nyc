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

const ServiceDogWalking = () => {
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
              Dog Walking
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-gray-200 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Reliable, energetic, and fun walks for your furry friend. We keep your dog active, socialised, and happy while you&apos;re busy at work or away.
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
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary">What Is Dog Walking?</h3>
                <p className="leading-relaxed">
                  Dog walking at Heart Of Love Pet Care is more than just a quick trip outside; it is a professional, high-energy service designed to keep the dogs of Queens and New York City active, socialized, and mentally stimulated. We understand that NYC dogs often spend long hours indoors, and our mission at Heart Of Love Pet Care is to provide the physical exercise they need to thrive in an urban environment. Our dog walking in Queens is tailored to your pet's specific energy levels and temperament, ensuring they get the most out of every outing. Heart Of Love Pet Care provides reliable, one-on-one attention, practicing basic leash manners and positive reinforcement throughout the walk. Whether your dog enjoys a brisk pace through the streets of NYC or a leisurely stroll in a local Queens park, Heart Of Love Pet Care ensures they return home happy, tired, and content. We are proud to be the trusted walking partner for busy pet owners across New York City, offering consistency and care in every step we take.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary">Why Is Dog Walking Important?</h3>
                <p className="leading-relaxed">
                  For dog owners in Queens / New York City, regular professional walking is essential for preventing the destructive behaviours and anxiety that can stem from boredom and lack of exercise. Heart Of Love Pet Care provides a vital outlet for your dog's energy, which is especially important in the confined spaces of NYC apartments. By choosing Heart Of Love Pet Care, you are ensuring that your pet receives consistent social stimulation and physical activity, which are crucial for their long-term health and well-being. Our dog walking in Queens helps maintain a healthy weight and improves cardiovascular health, keeping your furry friend in peak condition for life in New York City. Heart Of Love Pet Care understands that a tired dog is a well-behaved dog, and our service is a key component of a happy, balanced life for any NYC pet. We are dedicated to providing the highest level of care for every dog we walk in Queens and beyond, ensuring they get the engagement they need in the city's unique environment.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary">When Should You Consider Dog Walking?</h3>
                <p className="leading-relaxed">
                  You should consider dog walking services with Heart Of Love Pet Care whenever your busy schedule in Queens or New York City prevents you from giving your pet the exercise they need. If you find yourself working long hours in Manhattan or have a high-energy dog that requires more activity than you can provide, Heart Of Love Pet Care is the perfect solution for your NYC home. Many of our Queens clients book walking services when they notice their dogs becoming restless or exhibiting anxious behaviours during the day. Heart Of Love Pet Care offers flexible scheduling to fit your life in New York City, providing you with the peace of mind that your pet is being cared for by experienced professionals. Whether it's a daily midday break or occasional support when you're tied up, Heart Of Love Pet Care is here to help. If you want the best for your dog in Queens, don't hesitate to reach out. Shoot us a message today or click Get Free Quote to schedule your first walk with Heart Of Love Pet Care. Our Jamaica, Queens team is ready to hit the pavement with your pet.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img 
                src="https://vibe.filesafe.space/1777030353190232844/attachments/1b0dc273-bfbd-41ff-887e-921631f0a656.png" 
                alt="Service image 1" 
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img 
                src="https://vibe.filesafe.space/1777030353190232844/attachments/c8d426d4-fd41-4902-b01c-983af1ce9137.png" 
                alt="Service image 2" 
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img 
                src="https://vibe.filesafe.space/1777030353190232844/attachments/d668750a-2ddd-4914-b27b-cdb2254c329f.png" 
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

export default ServiceDogWalking;
