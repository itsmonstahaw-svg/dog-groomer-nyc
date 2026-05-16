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

const ServiceAreaQueens = () => {
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
              Your Dependable Queens, NY Pet Care Specialist
            </h1>
            <p className="text-base md:text-lg font-medium max-w-3xl mx-auto text-gray-300 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Astoria · Long Island City · Forest Hills · Jamaica · Flushing · Bayside · Ridgewood · Sunnyside
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
              <h2 className="text-3xl font-black uppercase tracking-tight text-primary">Pet Care & Dog Grooming Services In Queens NY</h2>
              <p className="leading-relaxed">
                Dog owners in Queens NY understand the importance of finding a reliable, professional pet care provider that treats their furry friends like family. In a borough as diverse and busy as Queens NY, your dog needs a safe haven and expert grooming to stay healthy and happy. Whether you are navigating the streets of Astoria or enjoying the parks in Forest Hills, professional pet care and grooming are essential for maintaining your dog's well-being. At Heart Of Love Pet Care, we provide a dedicated service tailored to the unique needs of Queens NY pets. Our team is committed to ensuring every dog in Queens NY receives the highest standard of care in a stress-free environment. Reliable pet care in Queens NY means peace of mind for you and a joyful experience for your pet. We take pride in being the go-to choice for discerning dog owners across Queens NY who value quality and compassion. From routine baths to specialized treatments, our services in Queens NY are designed to make your dog feel loved and pampered.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-black uppercase tracking-tight text-primary">Here For All Your Pet Care Needs In Queens NY</h2>
              <p className="leading-relaxed">
                Heart Of Love Pet Care is proud to offer a comprehensive suite of services to meet every need of the Queens NY dog community. Our professional grooming ensures your pet stays clean and healthy, while our boarding and home boarding options provide a safe, loving environment when you are away from Queens NY. For active dogs, our dog walking services in Queens NY provide the exercise and mental stimulation they need to thrive in the city. We also specialize in expert training and behavior modification for dogs in Queens NY, helping them become well-adjusted members of your household. If you have recently welcomed a new puppy, our potty training programs in Queens NY offer the perfect start for a lifetime of good habits. Whatever your pet requires, Heart Of Love Pet Care is here to serve the dog owners of Queens NY with excellence and heart. We serve all neighborhoods throughout Queens NY, ensuring that top-tier pet care is always accessible to our local clients.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-black uppercase tracking-tight text-primary">Why Choose Heart Of Love Pet Care In Queens NY</h2>
              <p className="leading-relaxed">
                Choosing Heart Of Love Pet Care in Queens NY means choosing a small, owner-operated business that prioritizes genuine care over corporate numbers. We believe that every dog in Queens NY deserves to be treated like family, which is why we provide a personalized and stress-free environment for all our services. Our experienced team in Queens NY brings a deep love for animals to everything we do, from grooming to walking and beyond. We are dedicated to building lasting relationships with the pet parents of Queens NY, offering a level of trust and transparency that is hard to find. Choosing us in Queens NY means your dog will benefit from a calm, nurturing atmosphere where their well-being is always the top priority. Our booking process is simple and efficient, making it easy for busy Queens NY residents to schedule the care their pets deserve. Experience the difference that true passion makes for pet care in Queens NY. Shoot us a message or click Get Free Quote to join the Heart Of Love Pet Care family today.
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

export default ServiceAreaQueens;
