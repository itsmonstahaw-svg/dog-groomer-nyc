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

const ServicePetBoarding = () => {
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
              Pet Boarding
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-gray-200 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Safe, comfortable, and loving overnight care for your dog. We provide a stress-free environment with plenty of attention and playtime while you're away.
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
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary">What Is Pet Boarding?</h3>
                <p className="leading-relaxed">
                  Pet boarding at Heart Of Love Pet Care is a premium overnight care service designed specifically for dog owners in Queens and throughout New York City who need a reliable second home for their furry companions. Unlike traditional large-scale facilities, our pet boarding in Queens focuses on providing a personalized, low-stress environment where your dog is treated as a guest in our own home. Heart Of Love Pet Care ensures that every pet receives individual attention, customized feeding schedules, and plenty of supervised interaction in a safe, secure setting. We pride ourselves on being a small, owner-operated business that understands the unique needs of NYC dogs, from high-energy pups to those who just want a quiet place to rest. When you choose Heart Of Love Pet Care for pet boarding in New York City, you are choosing a team that prioritizes safety, comfort, and genuine affection above all else. Our facility is designed to mimic the warmth of a real home, ensuring that your dog feels relaxed and happy throughout their entire stay in Jamaica, Queens.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary">Why Is Pet Boarding Important?</h3>
                <p className="leading-relaxed">
                  For many pet parents in Queens / New York City, finding high-quality pet boarding is essential for maintaining their dog's mental and physical health during travel or busy periods. Heart Of Love Pet Care provides a vital service by offering a structured environment that prevents the separation anxiety often associated with industrial kennels. By choosing Heart Of Love Pet Care, your dog benefits from consistent routines and social stimulation that are crucial for their well-being in a bustling city like New York. Our professional pet boarding in Queens ensures that your dog remains active and engaged, reducing the risk of destructive behaviors that can occur when pets are left alone for too long. We understand that NYC life is fast-paced, and our mission at Heart Of Love Pet Care is to provide a sanctuary where your pet can thrive while you handle your responsibilities with total peace of mind. Regular boarding also helps with socialization, making your dog more confident when navigating the busy streets and parks of New York City.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary">When Should You Consider Pet Boarding?</h3>
                <p className="leading-relaxed">
                  You should consider pet boarding with Heart Of Love Pet Care whenever you have upcoming travel, home renovations, or family events in Queens or the wider New York City area that might be stressful for your dog. If you find yourself working long hours in Manhattan or planning a weekend getaway from NYC, Heart Of Love Pet Care offers the perfect solution to ensure your pet isn't left lonely or neglected. Many of our Queens clients book pet boarding when they want their dogs to have a "vacation" of their own, filled with love and professional care. Whether it is a last-minute business trip or a long-planned holiday, Heart Of Love Pet Care is ready to welcome your pet into our family. If you're looking for the most trusted pet boarding in New York City, now is the time to reach out. Shoot us a message today or click Get Free Quote to secure your dog's spot with Heart Of Love Pet Care. We are conveniently located in Jamaica, Queens, making us an easy stop for anyone heading to JFK or traveling through the New York City area.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img 
                src="https://vibe.filesafe.space/1777030353190232844/attachments/11eed622-c248-43b3-90cd-22a6a793ff7a.png" 
                alt="Service image 1" 
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img 
                src="https://vibe.filesafe.space/1777030353190232844/attachments/8ff84408-4ab9-4039-a467-73df907d890f.png" 
                alt="Service image 2" 
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img 
                src="https://vibe.filesafe.space/1777030353190232844/attachments/494622de-c0b5-40cb-a8f1-5e25fb0a8c3c.png" 
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

export default ServicePetBoarding;
