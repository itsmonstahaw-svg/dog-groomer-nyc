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

const ServicePottyTraining = () => {
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
              Potty Training
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-gray-200 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Expert guidance to help your puppy or adult dog master potty training quickly and positively. Say goodbye to indoor accidents and frustration.
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
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary">What Is Potty Training?</h3>
                <p className="leading-relaxed">
                  Potty training at Heart Of Love Pet Care is a comprehensive, results-driven service designed to help dog owners in Queens and New York City establish clean and consistent habits in their homes. We understand that living in an NYC apartment or a busy Queens neighborhood presents unique challenges for housebreaking, and Heart Of Love Pet Care is here to provide the expert guidance you need. Our potty training in Queens focuses on positive reinforcement, strict scheduling, and environmental management to ensure your dog understands exactly where it is appropriate to go. Heart Of Love Pet Care works with both new puppies and adult dogs who may be struggling with the transition to a new New York City environment. We take the guesswork out of the process, providing you with a clear roadmap to success that fits into your busy NYC lifestyle. Heart Of Love Pet Care is committed to helping you achieve a clean, stress-free home for you and your pet in Jamaica, Queens.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary">Why Is Potty Training Important?</h3>
                <p className="leading-relaxed">
                  For residents of Queens / New York City, successful potty training is essential for maintaining a healthy and hygienic living space, especially in close-quarters urban environments. Heart Of Love Pet Care believes that a solid foundation in housebreaking is the first step toward a happy life with your dog in NYC. Without proper guidance, potty training can become a source of immense frustration for many Queens pet owners, often leading to damaged floors and strained relationships with pets. By choosing Heart Of Love Pet Care, you are ensuring that your dog learns the right habits from the start, preventing the long-term behavioural issues that can arise from inconsistent training. Heart Of Love Pet Care provides the professional support needed to navigate the setbacks that often occur during the potty training journey in New York City. We are dedicated to helping you and your dog thrive together in your Queens home through patience, expertise, and proven techniques that respect your dog's natural instincts.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary">When Should You Consider Potty Training?</h3>
                <p className="leading-relaxed">
                  You should consider potty training services with Heart Of Love Pet Care as soon as you bring a new puppy home to Queens or if your adult dog is having frequent accidents in your New York City apartment. If you find yourself struggling to establish a routine or feeling overwhelmed by the challenges of housebreaking in NYC, Heart Of Love Pet Care is the perfect partner to help you get back on track. Many of our Queens clients reach out when they've tried other methods without success and need the professional insight that only Heart Of Love Pet Care can provide. Whether you're a first-time dog owner in New York City or an experienced pet parent facing a difficult case, Heart Of Love Pet Care is ready to support you. Don't let potty training accidents ruin your experience of owning a dog in Queens. Heart Of Love Pet Care is here to help you achieve a breakthrough. Shoot us a message today or click Get Free Quote to start your potty training journey with Heart Of Love Pet Care. Our Jamaica, Queens facility is ready to welcome you and your furry friend.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img 
                src="https://vibe.filesafe.space/1777030353190232844/attachments/41fd54f8-09cc-4f02-b5e5-eb13ca24e1bd.png" 
                alt="Service image 1" 
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img 
                src="https://vibe.filesafe.space/1777030353190232844/attachments/77147e8c-9e82-4d21-b0d5-99ede5adf757.png" 
                alt="Service image 2" 
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img 
                src="https://vibe.filesafe.space/1777030353190232844/attachments/3c584b5d-4a51-41f5-9329-9478309dff52.png" 
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

export default ServicePottyTraining;
