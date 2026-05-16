import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reviews } from "@/components/Reviews";
import { Process } from "@/components/Process";
import { ServiceAreas } from "@/components/ServiceAreas";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { QuoteForm } from "@/components/QuoteForm";

const Gallery = () => {
  const gridImages = [
    "https://vibe.filesafe.space/1778436264577951505/attachments/44b5245f-5e7a-4ac8-af4a-6516d74fd711.png",
    "https://vibe.filesafe.space/1778436264577951505/attachments/50840071-8c3e-49d7-887f-4d816e97ce81.png",
    "https://vibe.filesafe.space/1778436264577951505/attachments/dbce6618-f302-4f7b-b169-680309246b07.png",
    "https://vibe.filesafe.space/1778436264577951505/attachments/d10284c9-b899-433c-bb20-32ae6a9a7c38.png",
    "https://vibe.filesafe.space/1778436264577951505/attachments/87d1531c-4c8e-498b-911e-ffd1599ecfc4.png",
    "https://vibe.filesafe.space/1778436264577951505/attachments/a7d4c1c6-fc20-4dab-a693-7a1c9bf920bc.png",
    "https://vibe.filesafe.space/1778436264577951505/attachments/313af329-52b1-4bd0-bdb5-18478eb1317f.png",
    "https://vibe.filesafe.space/1778436264577951505/attachments/a7a3f002-ccd7-4930-b9d0-04bc341451b7.png",
    "https://vibe.filesafe.space/1778436264577951505/attachments/213dc09f-031a-4c61-8f33-03d704f6f4f1.png",
    "https://vibe.filesafe.space/1778436264577951505/attachments/c1c15a3d-62b3-40cf-b980-e4e2fa0a3729.png",
    "https://vibe.filesafe.space/1778436264577951505/attachments/78d39b14-86b7-460b-86d1-6b81c1530112.png",
    "https://vibe.filesafe.space/1778436264577951505/attachments/78c2a408-8dee-43c4-af45-04dac0229bb8.png"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center pt-20">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("https://vibe.filesafe.space/1778436264577951505/attachments/bae4b4f5-17dc-4e41-a45e-97b195687224.png")' }}
          >
            <div className="absolute inset-0 bg-black/60"></div>
          </div>

          <div className="w-full max-w-[1200px] mx-auto px-[12px] relative z-10 text-center text-white flex flex-col items-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[1.1] mb-4 tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              OUR WORK
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto font-medium mb-8 [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
              See for yourself why our customers love us
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="h-14 px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg uppercase tracking-wider rounded-sm shadow-2xl">
                  Get Free Quote
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-black border border-white/10 p-6 sm:p-8 rounded-lg shadow-2xl max-w-md w-[95vw] sm:w-full [&>button]:text-white [&>button]:opacity-100 [&>button:hover]:opacity-80">
                <DialogTitle className="text-3xl font-black uppercase text-center text-white mb-2 tracking-tight">
                  Get A Free Quote
                </DialogTitle>
                <DialogDescription className="text-center text-gray-400 mb-6">
                  Fill out the form below and we'll get back to you shortly.
                </DialogDescription>
                <QuoteForm />
              </DialogContent>
            </Dialog>
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

        {/* Photo Grid Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="w-full max-w-[1200px] mx-auto px-0">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
              {gridImages.map((src, index) => (
                <div key={index} className="aspect-square overflow-hidden relative group">
                  <img 
                    src={src} 
                    alt={`Gallery image ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                </div>
              ))}
            </div>
          </div>
        </section>

        <Reviews />
        <Process />
        <ServiceAreas />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
