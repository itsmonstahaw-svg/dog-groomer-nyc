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

const ServicePetGrooming = () => {
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
              Pet Grooming
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-gray-200 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Professional grooming tailored to your dog's breed, coat, and personality. We keep them clean, comfortable, and looking their best.
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
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary">What Is Pet Grooming?</h3>
                <p className="leading-relaxed">
                  Pet grooming at Heart Of Love Pet Care is a professional, high-end spa experience designed to keep the dogs of Queens and New York City looking and feeling their absolute best. We understand that every dog is unique, and our grooming in Queens is tailored to your pet's specific breed standards, coat type, and individual personality. Heart Of Love Pet Care provides a full range of services, from deep-cleansing baths and breed-specific haircuts to nail trimming, ear cleaning, and more. We use only premium, pet-safe products that are gentle on the skin and coat, ensuring a luxurious experience for every guest in our NYC facility. Our owner-operated approach at Heart Of Love Pet Care means that your dog receives personalized attention and compassionate handling, making the grooming process a positive and stress-free experience. Whether you're in Astoria, Long Island City, or anywhere in New York City, Heart Of Love Pet Care is your destination for expert pet grooming. We take pride in our attention to detail, ensuring that every dog leaves our Jamaica, Queens location feeling refreshed and revitalized.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary">Why Is Pet Grooming Important?</h3>
                <p className="leading-relaxed">
                  For dog owners in Queens / New York City, regular professional grooming is essential for maintaining your pet's overall health and well-being. Heart Of Love Pet Care believes that grooming is far more than just a cosmetic service; it is a vital part of preventative healthcare for NYC dogs. By choosing Heart Of Love Pet Care, you are ensuring that your pet's skin and coat are regularly checked for any issues, such as mats, parasites, or abnormalities that can easily go unnoticed. Our grooming in Queens helps reduce shedding and prevents the painful matting that can occur in many breeds, especially in the variable weather of New York City. Heart Of Love Pet Care focuses on the comfort and health of your pet, providing a thorough cleaning that removes the city grime and allergens that can accumulate on their fur. We are dedicated to providing the highest quality grooming services to keep your NYC dog healthy, happy, and smelling great year-round. Regular visits to Heart Of Love Pet Care in Queens can significantly improve your pet's quality of life.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary">When Should You Consider Pet Grooming?</h3>
                <p className="leading-relaxed">
                  You should consider pet grooming with Heart Of Love Pet Care whenever your dog's coat begins to lose its shine, if you notice excessive shedding in your Queens home, or if their nails are becoming uncomfortably long. Regular grooming sessions at Heart Of Love Pet Care should be a part of every NYC dog's routine, with the frequency depending on their breed and lifestyle in New York City. If your pet has been spending time in the parks of Queens or walking the streets of NYC, a deep-cleansing bath at Heart Of Love Pet Care is the perfect way to refresh them. Many of our Queens clients book grooming services before special events or simply when they want to treat their furry friend to a day of pampering. Heart Of Love Pet Care is ready to provide the expert care your pet deserves. If you want your dog to look their best in New York City, don't wait to book your appointment. Shoot us a message today or click Get Free Quote to see how Heart Of Love Pet Care can transform your pet's appearance. Our Jamaica, Queens team is excited to meet you and your pet.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img 
                src="https://vibe.filesafe.space/1777030353190232844/attachments/3c584b5d-4a51-41f5-9329-9478309dff52.png" 
                alt="Dog getting washed" 
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img 
                src="https://vibe.filesafe.space/1777030353190232844/attachments/c16bce43-a9cf-4496-b801-f97d13c6cf6f.png" 
                alt="Dog getting brushed" 
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img 
                src="https://vibe.filesafe.space/1777030353190232844/attachments/fec95bf5-97e3-409e-bb6b-fb9ae4d88332.png" 
                alt="Happy groomed dog" 
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

export default ServicePetGrooming;
