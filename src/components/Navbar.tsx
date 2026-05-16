import { Button } from "@/components/ui/button";
import { Phone, Menu, ChevronDown } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import { QuoteForm } from "./QuoteForm";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links: { name: string; href: string; subLinks?: { name: string; href: string }[] }[] = [
    { name: "Home", href: "/home" },
    { 
      name: "Services", 
      href: "/services/hvac-air-conditioning",
      subLinks: [
        { name: "HVAC & Air Conditioning", href: "/services/hvac-air-conditioning" },
        { name: "Commercial Refrigeration", href: "/services/commercial-refrigeration" },
        { name: "Residential Refrigeration", href: "/services/residential-refrigeration" },
        { name: "Walk-in Coolers & Freezers", href: "/services/walk-in-coolers" },
        { name: "Restaurant Equipment Repair", href: "/services/restaurant-equipment" },
        { name: "Ice Machine & EMS", href: "/services/ice-machine-ems" },
      ]
    },
    { name: "Gallery", href: "/gallery" },
    { 
      name: "Locations", 
      href: "/locations/houston-tx",
      subLinks: [
        { name: "Houston, TX", href: "/locations/houston-tx" },
        { name: "Katy, TX", href: "/locations/katy-tx" },
        { name: "Sugar Land, TX", href: "/locations/sugar-land-tx" },
        { name: "Pearland, TX", href: "/locations/pearland-tx" },
        { name: "The Woodlands, TX", href: "/locations/the-woodlands-tx" },
      ]
    },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-background shadow-sm border-b border-primary" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container max-w-[1400px] flex h-20 items-center justify-between gap-2 px-2 md:px-4">
        {/* Logo - Desktop Only */}
        <div className="hidden lg:flex flex-1 items-center justify-start">
          <a href="/home" className="flex items-center h-full py-2">
            <img 
              src="https://vibe.filesafe.space/1778436264577951505/attachments/4fb7f75e-1ef8-4de3-8897-b1440f5625aa.png" 
              alt="Tri Refrigeration & HVAC Logo" 
              className="h-14 md:h-16 w-auto object-contain mix-blend-lighten"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 justify-center items-center gap-4 xl:gap-6 text-sm font-bold uppercase tracking-wider">
          {links.map((link) => (
            <div key={link.name} className="relative group py-6">
              <a 
                href={link.href} 
                className={`whitespace-nowrap transition-colors duration-300 flex items-center gap-1 ${
                  isScrolled 
                    ? "text-foreground hover:text-primary" 
                    : "text-white hover:text-white/80"
                }`}
              >
                {link.name}
                {link.subLinks && (
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                )}
              </a>
              
              {link.subLinks && (
                <div className="absolute top-[80%] left-0 min-w-[260px] bg-white rounded shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-gray-100 overflow-hidden z-50">
                  <div className="flex flex-col py-2">
                    {link.subLinks.map((subLink) => (
                      <a
                        key={subLink.name}
                        href={subLink.href}
                        className="px-5 py-3 text-[13px] font-bold text-black uppercase tracking-wider hover:bg-primary hover:text-white transition-colors duration-200"
                      >
                        {subLink.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex flex-1 items-center justify-end gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" className="font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90">
                Get A Quote
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-black border border-white/10 p-6 sm:p-8 rounded-lg shadow-2xl max-w-md w-[95vw] sm:w-full [&>button]:text-white [&>button]:opacity-100 [&>button:hover]:opacity-80">
              <div className="flex justify-center mb-4">
                <img 
                  src="https://vibe.filesafe.space/1778436264577951505/attachments/1a1d7288-f458-45eb-9f31-db5f96aae826.png" 
                  alt="Tri Refrigeration & HVAC Logo" 
                  className="h-16 w-auto object-contain mix-blend-lighten"
                />
              </div>
              <DialogTitle className="text-3xl font-black uppercase text-center text-white mb-2 tracking-tight">
                GET A FREE QUOTE
              </DialogTitle>
              <DialogDescription className="text-center text-gray-400 mb-6">
                Fill out the form below and we'll get back to you shortly.
              </DialogDescription>
              <QuoteForm />
            </DialogContent>
          </Dialog>
          <Button variant="outline" className="font-bold border-primary bg-white text-primary hover:bg-white/90 hover:text-primary flex items-center gap-2" asChild>
                  <a href="tel:+17139097745">
                    <Phone className="h-4 w-4" />
                    (713) 909-7745
                  </a>
          </Button>
        </div>

        {/* Mobile Nav Top Row */}
        <div className="flex lg:hidden w-full items-center justify-between gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" className="flex-1 font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 text-[10px] sm:text-xs px-2 h-10">
                Get A Quote
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-black border border-white/10 p-6 sm:p-8 rounded-lg shadow-2xl max-w-md w-[95vw] sm:w-full [&>button]:text-white [&>button]:opacity-100 [&>button:hover]:opacity-80 z-[100]">
              <div className="flex justify-center mb-4">
                <img 
                  src="https://vibe.filesafe.space/1778436264577951505/attachments/1a1d7288-f458-45eb-9f31-db5f96aae826.png" 
                  alt="Tri Refrigeration & HVAC Logo" 
                  className="h-14 w-auto object-contain mix-blend-lighten"
                />
              </div>
              <DialogTitle className="text-3xl font-black uppercase text-center text-white mb-2 tracking-tight">
                GET A FREE QUOTE
              </DialogTitle>
              <DialogDescription className="text-center text-gray-400 mb-6">
                Fill out the form below and we'll get back to you shortly.
              </DialogDescription>
              <QuoteForm />
            </DialogContent>
          </Dialog>
          
          <Button variant="outline" className="flex-1 font-bold border-primary bg-white text-primary hover:bg-white/90 hover:text-primary flex items-center justify-center gap-1.5 text-[10px] sm:text-xs px-2 h-10" asChild>
            <a href="tel:+17139097745">
              <Phone className="h-3.5 w-3.5 shrink-0" />
              <span className="whitespace-nowrap">(713) 909-7745</span>
            </a>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={`shrink-0 transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-white"} hover:bg-transparent px-1`}>
                <Menu className="h-7 w-7 sm:h-8 sm:w-8" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background flex flex-col p-0">
              <div className="flex-1 overflow-y-auto p-6 pt-16 pb-12">
                <nav className="flex flex-col gap-6">
                  {links.map((link) => (
                    <div key={link.name} className="flex flex-col gap-4">
                      <a
                        href={link.href}
                        className="text-lg font-bold uppercase tracking-wider flex items-center gap-1"
                        onClick={() => !link.subLinks && setIsOpen(false)}
                      >
                        {link.name}
                        {link.subLinks && (
                          <ChevronDown className="h-5 w-5" />
                        )}
                      </a>
                      {link.subLinks && (
                        <div className="flex flex-col pl-4 gap-4 border-l-2 border-primary/20">
                          {link.subLinks.map((subLink) => (
                            <a
                              key={subLink.name}
                              href={subLink.href}
                              className="text-sm font-bold uppercase tracking-wider text-muted-foreground hover:text-primary"
                              onClick={() => setIsOpen(false)}
                            >
                              {subLink.name}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
