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
    "https://vibe.filesafe.space/1777030353190232844/attachments/3c584b5d-4a51-41f5-9329-9478309dff52.png",
    "https://vibe.filesafe.space/1777030353190232844/attachments/c16bce43-a9cf-4496-b801-f97d13c6cf6f.png",
    "https://vibe.filesafe.space/1777030353190232844/attachments/fec95bf5-97e3-409e-bb6b-fb9ae4d88332.png",
    "https://vibe.filesafe.space/1777030353190232844/attachments/11eed622-c248-43b3-90cd-22a6a793ff7a.png",
    "https://vibe.filesafe.space/1777030353190232844/attachments/8ff84408-4ab9-4039-a467-73df907d890f.png",
    "https://vibe.filesafe.space/1777030353190232844/attachments/494622de-c0b5-40cb-a8f1-5e25fb0a8c3c.png",
    "https://vibe.filesafe.space/1777030353190232844/attachments/2945c0b4-1ff0-4798-a563-9ccd86920434.png",
    "https://vibe.filesafe.space/1777030353190232844/attachments/0f446e67-1cf2-4bf7-b5f5-6fdbec831afe.png",
    "https://vibe.filesafe.space/1777030353190232844/attachments/922e6561-45b7-4671-9430-0c012eba99e2.png",
    "https://vibe.filesafe.space/1777030353190232844/attachments/1b0dc273-bfbd-41ff-887e-921631f0a656.png",
    "https://vibe.filesafe.space/1777030353190232844/attachments/c8d426d4-fd41-4902-b01c-983af1ce9137.png",
    "https://vibe.filesafe.space/1777030353190232844/attachments/d668750a-2ddd-4914-b27b-cdb2254c329f.png",
    "https://vibe.filesafe.space/1777030353190232844/attachments/5c5de5be-ad2a-4598-b7ed-6084e83162ee.png",
    "https://vibe.filesafe.space/1777030353190232844/attachments/18fca5e5-280d-450d-a972-f5826c1a1a48.png",
    "https://vibe.filesafe.space/1777030353190232844/attachments/a6e6fbb8-3f83-470a-9496-f6749dcb17a9.png",
    "https://vibe.filesafe.space/1777030353190232844/attachments/41fd54f8-09cc-4f02-b5e5-eb13ca24e1bd.png"
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
                <div key={index} className="aspect-[4/3] overflow-hidden rounded-md relative group bg-zinc-900">
                  <img 
                    src={src} 
                    alt={`Gallery image ${index + 1}`} 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
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
