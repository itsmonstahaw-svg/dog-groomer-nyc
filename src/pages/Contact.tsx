import { Navbar } from "@/components/Navbar";
import { Reviews } from "@/components/Reviews";
import { Process } from "@/components/Process";
import { ServiceAreas } from "@/components/ServiceAreas";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { QuoteForm } from "@/components/QuoteForm";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://vibe.filesafe.space/1778436264577951505/attachments/bae4b4f5-17dc-4e41-a45e-97b195687224.png")',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
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
              className="fill-white"
            />
          </svg>
        </div>

        <div className="relative z-20 flex flex-col items-center text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white [text-shadow:_0_2px_12px_rgba(0,0,0,0.5)] mb-4">
            CONTACT US
          </h1>
          <p className="text-lg md:text-xl text-white font-bold mb-8 [text-shadow:_0_1px_4px_rgba(0,0,0,0.5)] max-w-2xl mx-auto">
            Get in touch with any questions or comments and we'll be happy to help.
          </p>
          {/* Three downward arrows */}
          <div className="flex items-center gap-2 mt-4">
            {[0, 1, 2].map((i) => (
              <svg
                key={i}
                width="52"
                height="68"
                viewBox="0 0 52 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-90"
              >
                <path
                  d="M26 4 L26 56 M10 40 L26 58 L42 40"
                  stroke="white"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-white text-black">
        <div className="w-full max-w-[1200px] mx-auto px-[12px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
            
            {/* Left side */}
            <div className="flex flex-col gap-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tight leading-[1.1]">
                CONTACT US FOR A FREE QUOTE
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Contact us by filling in the form or by using any of the methods below and we'll get back to you within 24 hours
              </p>
              
              <div className="flex flex-col gap-4 w-full max-w-md">
                <Button 
                  asChild 
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg uppercase tracking-wider rounded-sm"
                >
                  <a href="mailto:trivietpy@gmail.com">
                    EMAIL: trivietpy@gmail.com
                  </a>
                </Button>
                <Button 
                  asChild 
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg uppercase tracking-wider rounded-sm"
                >
                  <a href="tel:+17139097745">
                    PHONE: (713) 909-7745
                  </a>
                </Button>
              </div>
            </div>

            {/* Right side */}
            <div className="bg-black p-6 md:p-8 rounded-lg shadow-2xl border border-white/10 max-w-md mx-auto w-full">
              <div className="flex justify-center mb-6">
                <img 
                  src="https://vibe.filesafe.space/1778436264577951505/attachments/1a1d7288-f458-45eb-9f31-db5f96aae826.png" 
                  alt="Tri Refrigeration & HVAC Logo" 
                  className="h-16 w-auto object-contain mix-blend-lighten"
                />
              </div>
              <h3 className="text-2xl md:text-3xl font-black uppercase text-white mb-6 text-center tracking-tight">
                GET A FREE QUOTE
              </h3>
              <QuoteForm />
            </div>

          </div>
        </div>
      </section>

      <main>
        <Reviews topWaveColor="white" />
        <Process />
        <ServiceAreas />
        <CTA />
      </main>

      <Footer />
      <FloatingQuoteButton />
    </div>
  );
};

export default Contact;
