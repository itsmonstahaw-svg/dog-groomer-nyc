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

const ServiceAreaManhattan = () => {
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
              Your Dependable Manhattan, NY Pet Care Specialist
            </h1>
            <p className="text-base md:text-lg font-medium max-w-3xl mx-auto text-gray-300 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Upper East Side · Upper West Side · Harlem · Chelsea · Midtown · Hell's Kitchen · Greenwich Village · Tribeca
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
              <h2 className="text-3xl font-black uppercase tracking-tight text-primary">Pet Care & Dog Grooming Services In Manhattan NY</h2>
              <p className="leading-relaxed">
                In the heart of Manhattan NY, dog owners face unique challenges when it comes to providing the best care for their pets. From high-rise living to the fast-paced energy of the city, your dog needs a dedicated professional who understands the Manhattan NY lifestyle. Reliable, professional pet care and grooming are essential for maintaining your dog's health and happiness in the bustling environment of Manhattan NY. At Heart Of Love Pet Care, we offer specialized services that cater to the needs of Manhattan NY's most discerning pet parents. Whether your dog needs a relaxing grooming session or a safe place to stay, our services in Manhattan NY are designed to provide the highest level of comfort and care. We are committed to being the trusted partner for dog owners across Manhattan NY who want only the best for their furry companions. Our team is experienced in handling the diverse needs of Manhattan NY dogs, ensuring they feel safe and secure in the middle of the city.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-black uppercase tracking-tight text-primary">Here For All Your Pet Care Needs In Manhattan NY</h2>
              <p className="leading-relaxed">
                Heart Of Love Pet Care is proud to serve the Manhattan NY community with a full range of professional pet services. Our grooming experts ensure your dog stays healthy and clean, while our boarding and home boarding options provide a loving home away from home when you are away from Manhattan NY. For active city dogs, our dog walking services in Manhattan NY offer the exercise and stimulation they need to thrive in the city. We also specialize in training and behavior modification for dogs in Manhattan NY, helping them navigate the city's busy streets with ease. If you're starting fresh with a new puppy, our potty training programs in Manhattan NY offer the guidance and support you need for a successful transition. No matter what your pet requires, Heart Of Love Pet Care is here to provide exceptional care for the dogs of Manhattan NY. We serve neighborhoods from the Upper East Side to Tribeca, ensuring that quality pet care is always accessible for our Manhattan NY clients.
              </p>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-black uppercase tracking-tight text-primary">Why Choose Heart Of Love Pet Care In Manhattan NY</h2>
              <p className="leading-relaxed">
                Choosing Heart Of Love Pet Care in Manhattan NY means choosing a small, owner-operated business that treats your dog as an individual. We believe that every pet in Manhattan NY deserves genuine love and attention, which is why we focus on creating a stress-free environment for all our services. Our experienced team in Manhattan NY brings a wealth of knowledge and a compassionate touch to every interaction, ensuring your dog feels safe and happy. We pride ourselves on the relationships we build with our Manhattan NY clients, offering a personalized level of service that corporate facilities cannot match. Choosing us in Manhattan NY means joining a community of pet lovers who prioritize their dogs' well-being above all else. Our booking process is simple and designed with the busy Manhattan NY lifestyle in mind, making it easy to schedule the care your pet needs. Experience the difference of truly dedicated pet care in Manhattan NY by choosing Heart Of Love Pet Care. Shoot us a message or click Get Free Quote to get started today.
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

export default ServiceAreaManhattan;
