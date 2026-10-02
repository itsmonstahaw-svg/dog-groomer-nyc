import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reviews } from "@/components/Reviews";
import { Process } from "@/components/Process";
import { ServiceAreas } from "@/components/FAQAndServiceAreas";
import { CTA } from "@/components/CTA";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { QuoteForm } from "@/components/QuoteForm";

const Gallery = () => {
  const gridImages = [
    "/images/photos/619d4f07.webp",
    "/images/photos/26e570d1.webp",
    "/images/photos/d47242a4.webp",
    "/images/photos/1ed3d0f9.webp",
    "/images/photos/52d90623.webp",
    "/images/photos/9da25676.webp",
    "/images/photos/b11dab6d.webp",
    "/images/photos/b1247b1a.webp",
    "/images/photos/442e1b22.webp",
    "/images/photos/cf0e9f6e.webp",
    "/images/photos/66034426.webp",
    "/images/photos/0e335a8e.webp",
    "/images/photos/bb4a3711.webp",
    "/images/photos/70924e9c.webp",
    "/images/photos/d1c037c9.webp",
    "/images/photos/d4a232dc.webp"
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center pt-20">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("https://vibe.filesafe.space/1777030353190232844/attachments/b368c911-7f25-4632-acad-64db52f092c2.png")' }}
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

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              className="relative block w-full h-[80px] md:h-[120px]"
            >
              <path
                fill="currentColor"
                className="text-black"
                d="M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,149.3C672,139,768,149,864,170.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>
        </section>

        {/* Photo Grid Section */}
        <section className="py-16 md:py-24 bg-white">
          <div className="w-full max-w-[1200px] mx-auto px-4 md:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {gridImages.map((src, index) => (
                <div key={index} className="aspect-[3/4] overflow-hidden rounded-md relative group bg-zinc-900">
                  <img 
                    src={src} 
                    alt={`Gallery image ${index + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300"></div>
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
