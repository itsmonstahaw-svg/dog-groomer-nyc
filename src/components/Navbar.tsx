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

  const links = [
    { name: "Home", href: "/home" },
    { 
      name: "Services", 
      href: "#services",
      subLinks: [
        { name: "Pet Boarding", href: "/services/pet-boarding" },
        { name: "Home Boarding", href: "/services/home-boarding" },
        { name: "Training & Behaviour", href: "/services/training-behaviour" },
        { name: "Potty Training", href: "/services/potty-training" },
        { name: "Dog Walking", href: "/services/dog-walking" },
        { name: "Pet Grooming", href: "/services/pet-grooming" },
      ]
    },
    { name: "Gallery", href: "/gallery" },
    {
      name: "Service Areas",
      href: "#areas",
      subLinks: [
        { name: "Queens, NY", href: "/service-areas/queens-ny" },
        { name: "Brooklyn, NY", href: "/service-areas/brooklyn-ny" },
        { name: "Manhattan, NY", href: "/service-areas/manhattan-ny" },
        { name: "New York (Statewide)", href: "/service-areas/new-york" },
      ],
    },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const businessName = "Heart Of Love Pet Care";
  const initials = "HOL";

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-background shadow-sm border-b border-primary" 
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container max-w-[1200px] flex h-20 items-center gap-12 px-4 md:px-6">
        {/* Logo - Desktop Only */}
        <div className="hidden lg:flex items-center shrink-0">
          <a href="/home" className="block">
            <img 
              src="https://vibe.filesafe.space/1777030353190232844/attachments/c896108d-a195-4a99-9db4-723af21b2087.png" 
              alt="NYC Hearts of Love Pet Care" 
              className="h-14 w-auto object-contain"
            />
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 items-center justify-center pr-20 gap-6 xl:gap-8 text-sm font-bold uppercase tracking-wider">
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

        <div className="hidden lg:flex items-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" className="font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 px-6">
                Custom Orders
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-black border border-white/10 p-6 sm:p-8 rounded-lg shadow-2xl max-w-md w-[95vw] sm:w-full [&>button]:text-white [&>button]:opacity-100 [&>button:hover]:opacity-80">
              <div className="flex justify-center mb-0">
                <img 
                  src="https://vibe.filesafe.space/1777030353190232844/attachments/c896108d-a195-4a99-9db4-723af21b2087.png" 
                  alt="NYC Hearts of Love Pet Care" 
                  className="h-32 w-auto object-contain"
                />
              </div>
              <DialogTitle className="text-3xl font-black uppercase text-center text-white mb-2 tracking-tight">
                Get A Free Quote
              </DialogTitle>
              <DialogDescription className="text-center text-gray-400 mb-6">
                Fill out the form below and we'll get back to you shortly.
              </DialogDescription>
              <QuoteForm />
            </DialogContent>
          </Dialog>
          <Button variant="outline" className="font-bold border-primary bg-white text-primary hover:bg-white/90 hover:text-primary flex items-center gap-2 px-6" asChild>
            <a href="tel:+16469259123">
              <Phone className="h-4 w-4" />
              (646) 925-9123
            </a>
          </Button>
        </div>

        {/* Mobile Nav Top Row */}
        <div className="flex lg:hidden w-full items-center justify-between gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" className="flex-1 font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 text-[10px] sm:text-xs px-2 h-10">
                Custom Orders
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-black border border-white/10 p-6 sm:p-8 rounded-lg shadow-2xl max-w-md w-[95vw] sm:w-full [&>button]:text-white [&>button]:opacity-100 [&>button:hover]:opacity-80 z-[100]">
              <div className="flex justify-center mb-0">
                <img 
                  src="https://vibe.filesafe.space/1777030353190232844/attachments/c896108d-a195-4a99-9db4-723af21b2087.png" 
                  alt="NYC Hearts of Love Pet Care" 
                  className="h-32 w-auto object-contain"
                />
              </div>
              <DialogTitle className="text-3xl font-black uppercase text-center text-white mb-2 tracking-tight">
                Get A Free Quote
              </DialogTitle>
              <DialogDescription className="text-center text-gray-400 mb-6">
                Fill out the form below and we'll get back to you shortly.
              </DialogDescription>
              <QuoteForm />
            </DialogContent>
          </Dialog>
          
          <Button variant="outline" className="flex-1 font-bold border-primary bg-white text-primary hover:bg-white/90 hover:text-primary flex items-center justify-center gap-1.5 text-[10px] sm:text-xs px-2 h-10" asChild>
            <a href="tel:+16469259123">
              <Phone className="h-3.5 w-3.5 shrink-0" />
              <span className="whitespace-nowrap">(646) 925-9123</span>
            </a>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className={`shrink-0 transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-white"} hover:bg-transparent px-1`}>
                <Menu className="h-7 w-7 sm:h-8 sm:w-8" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-background overflow-y-auto overflow-x-hidden pb-20">
              <nav className="flex flex-col gap-6 mt-10">
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
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};
