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

const ServiceTrainingBehaviour = () => {
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
              Training & Behaviour
            </h1>
            <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto text-gray-200 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              Transform your dog&apos;s behaviour with positive, effective training. From basic obedience to solving complex behavioural issues, we help build a stronger bond between you and your pet.
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
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary">What Is Training & Behaviour?</h3>
                <p className="leading-relaxed">
                  Training and behaviour services at Heart Of Love Pet Care are designed to help dog owners in Queens and New York City navigate the unique challenges of raising a well-adjusted pet in an urban environment. Our approach at Heart Of Love Pet Care focuses on positive reinforcement and clear communication, addressing everything from basic obedience to complex behavioural issues like leash reactivity or separation anxiety. We understand that life in NYC can be overstimulating for many dogs, and our training in Queens is specifically tailored to help them remain calm and focused amidst the city's hustle and bustle. Heart Of Love Pet Care provides personalized sessions that empower owners with the tools they need to build a lifelong bond with their pets. Whether you're in Astoria, Long Island City, or anywhere in New York City, Heart Of Love Pet Care is your partner in creating a harmonious relationship with your canine companion. Our training methods are proven to work in the real-world settings of NYC parks and busy sidewalks.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary">Why Is Training & Behaviour Important?</h3>
                <p className="leading-relaxed">
                  For dog owners in Queens / New York City, proper training is not just about tricks; it is about safety and quality of life in a dense urban setting. Heart Of Love Pet Care believes that a well-trained dog is a happy dog, and our services are essential for preventing the common behavioural problems that can lead to stress for both the pet and the owner. By choosing Heart Of Love Pet Care, you are investing in your dog's ability to navigate the parks, streets, and subways of NYC with confidence and ease. Our training in Queens helps reduce the risk of incidents and ensures that your dog can be a welcome guest in any New York City environment. Heart Of Love Pet Care focuses on building a foundation of trust, which is the most important element of any successful training program. We are dedicated to helping NYC dogs and their owners thrive together through expert guidance and compassionate care. A well-behaved dog opens up a world of possibilities for exploration in the vibrant neighborhoods of Queens and Manhattan.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-black uppercase tracking-tight text-primary">When Should You Consider Training & Behaviour?</h3>
                <p className="leading-relaxed">
                  You should consider training and behaviour services with Heart Of Love Pet Care as soon as you notice any habits that make life in Queens or New York City difficult for you or your dog. Whether it is a new puppy needing a head start or an adult dog struggling with the distractions of NYC, Heart Of Love Pet Care is here to help at any stage of your pet's life. If you find yourself avoiding certain parks in Queens or feeling stressed during walks in New York City, it is the perfect time to reach out for professional support. Heart Of Love Pet Care offers the expertise needed to transform your dog's behaviour and restore peace to your household. Don't wait for small issues to become major problems in your NYC home. Heart Of Love Pet Care is ready to help you achieve the results you've been looking for. Shoot us a message today or click Get Free Quote to start your journey with Heart Of Love Pet Care. Our Jamaica, Queens team is passionate about helping every New York City dog reach their full potential.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <img 
                src="https://vibe.filesafe.space/1777030353190232844/attachments/5c5de5be-ad2a-4598-b7ed-6084e83162ee.png" 
                alt="Service image 1" 
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img 
                src="https://vibe.filesafe.space/1777030353190232844/attachments/18fca5e5-280d-450d-a972-f5826c1a1a48.png" 
                alt="Service image 2" 
                className="w-full h-64 object-cover rounded-lg shadow-md border border-border"
              />
              <img 
                src="https://vibe.filesafe.space/1777030353190232844/attachments/a6e6fbb8-3f83-470a-9496-f6749dcb17a9.png" 
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

export default ServiceTrainingBehaviour;
