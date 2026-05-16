import { Navbar } from "@/components/Navbar";
import { Reviews } from "@/components/Reviews";
import { Process } from "@/components/Process";
import { ServiceAreas } from "@/components/ServiceAreas";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { QuoteForm } from "@/components/QuoteForm";
import { useEffect } from "react";

const ServiceAreaNewYork = () => {
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
            <div className="absolute inset-0 bg-black/65"></div>
          </div>

          <div className="w-full max-w-[1000px] mx-auto px-[12px] relative z-20 space-y-5 text-white">
            <span className="inline-block text-primary font-black uppercase tracking-[0.3em] text-sm border border-primary/50 px-4 py-1 rounded-sm">
              Service Areas
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              Proudly Serving Pet Owners Across New York
            </h1>
            <p className="text-base md:text-lg font-medium max-w-3xl mx-auto text-gray-300 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Queens · Brooklyn · Manhattan · The Bronx · Long Island · Westchester · Staten Island · Upstate NY
            </p>

            <div className="pt-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
              <Button size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-base uppercase tracking-wider rounded-sm shadow-2xl flex items-center gap-2" asChild>
                <a href="tel:+16469259123">
                  <Phone className="w-5 h-5" />
                  (646) 925-9123
                </a>
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button size="lg" variant="outline" className="h-14 px-10 border-white bg-white/10 text-white hover:bg-white hover:text-black font-black text-base uppercase tracking-wider rounded-sm shadow-2xl">
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

        {/* Body Copy Section */}
        <section className="py-16 md:py-24 bg-white text-black">
          <div className="w-full max-w-[900px] mx-auto px-[12px] space-y-16 text-lg text-zinc-800">
            <div className="space-y-6">
              <h2 className="text-3xl font-black uppercase tracking-tight text-primary">Pet Care & Dog Grooming Services In New York Statewide</h2>
              <p className="leading-relaxed">
                Dog owners across New York Statewide understand that finding high-quality pet care is essential for their furry companions' well-being. Whether you're in the heart of New York City or in the surrounding areas of New York Statewide, your pet deserves professional attention that is both reliable and compassionate. Professional pet care and grooming are vital for maintaining your dog's health and happiness throughout New York Statewide. At Heart Of Love Pet Care, we are dedicated to providing top-tier services that meet the needs of pet parents all over New York Statewide. From refreshing baths to full grooming sessions, our services in New York Statewide are designed to keep your dog looking and feeling their best. We are proud to be a trusted provider for families across New York Statewide who value expert care and a personal touch. Our team is committed to ensuring that every dog in New York Statewide receives the highest standard of care, regardless of their breed or age.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-black uppercase tracking-tight text-primary">Here For All Your Pet Care Needs In New York Statewide</h2>
              <p className="leading-relaxed">
                Heart Of Love Pet Care is proud to offer a comprehensive range of pet services to the communities of New York Statewide. Our professional grooming ensures your dog stays clean and healthy, while our boarding and home boarding options provide a safe and loving environment when you are away from New York Statewide. For dogs that need to stay active, our dog walking services in New York Statewide offer the exercise and mental stimulation they need to thrive in the city. We also specialize in training and behavior modification for dogs in New York Statewide, helping them become well-mannered companions. If you're welcoming a new puppy into your home in New York Statewide, our potty training programs offer the perfect foundation for success. No matter where you are in New York Statewide, Heart Of Love Pet Care is here to provide exceptional service and support for you and your pet. We are dedicated to serving dog owners across New York Statewide with professional expertise and genuine care.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-black uppercase tracking-tight text-primary">Why Choose Heart Of Love Pet Care In New York Statewide</h2>
              <p className="leading-relaxed">
                What sets Heart Of Love Pet Care apart in New York Statewide is our commitment to being a small, owner-operated business that treats every dog like family. We believe that pet care in New York Statewide should be personal and stress-free, which is why we focus on creating a nurturing environment for every service we provide. Our experienced team in New York Statewide brings a deep love for animals to everything we do, ensuring your dog feels safe and loved at all times. We pride ourselves on the relationships we build with our clients across New York Statewide, offering a level of care that larger corporate facilities simply cannot match. Choosing Heart Of Love Pet Care in New York Statewide means choosing a team that prioritizes your dog's well-being above all else. Our booking process is easy and straightforward, allowing busy pet parents in New York Statewide to schedule the care their pets need with confidence. Experience the difference of truly compassionate pet care in New York Statewide by choosing Heart Of Love Pet Care. Shoot us a message or click Get Free Quote to get started.
              </p>
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

export default ServiceAreaNewYork;
