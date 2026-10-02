import { Button } from "@/components/ui/button";
import { Phone, Menu, ChevronDown, X, ArrowRight, MapPin, PawPrint } from "lucide-react";
import { createElement, useState, useEffect } from "react";
import { QuoteModal } from "./QuoteModal";
import { SITE } from "@/lib/site";
import { AREAS, SERVICES, areaPath, servicePath } from "@/data/catalog";

const NAV_PHONE = "(646) 925-9123";
const NAV_PHONE_HREF = "tel:+16469259123";

type SubLink = { name: string; href: string };
type NavLink = { name: string; href: string; subLinks?: SubLink[]; icon?: typeof MapPin; allLabel?: string; allHref?: string };

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const links: NavLink[] = [
    { name: "Home", href: "/home" },
    {
      name: "Services",
      href: "/services",
      icon: PawPrint,
      allLabel: "See all services",
      allHref: "/services",
      subLinks: SERVICES.map((s) => ({ name: s.title, href: servicePath(s) })),
    },
    { name: "About", href: "/about" },
    {
      name: "Service Areas",
      href: "/service-areas",
      icon: MapPin,
      allLabel: "See all service areas",
      allHref: "/service-areas",
      subLinks: AREAS.map((a) => ({ name: a.label, href: areaPath(a) })),
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Reviews", href: "/reviews" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
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
              <img src={SITE.logo} alt="NYC Hearts of Love Pet Care" className="h-12 md:h-14 w-auto object-contain" />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex flex-1 justify-center items-center gap-0.5 xl:gap-1.5 text-[15px] font-semibold">
            {links.map((link) => (
              <div key={link.name} className="relative group py-6">
                <a
                  href={link.href}
                  className={`whitespace-nowrap transition-colors duration-200 flex items-center gap-1 rounded-lg px-3 py-1.5 ${
                    isScrolled
                      ? "text-foreground hover:text-primary group-hover:bg-primary/15 group-hover:text-primary"
                      : "text-white hover:text-white group-hover:bg-white/15"
                  }`}
                >
                  {link.name}
                  {link.subLinks && (
                    <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                  )}
                </a>

                {link.subLinks && link.icon && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%-4px)] w-[270px] bg-white rounded-2xl shadow-2xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 p-2 normal-case tracking-normal font-normal">
                    <ul>
                      {link.subLinks.map((subLink) => (
                        <li key={subLink.name}>
                          <a
                            href={subLink.href}
                            className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm text-zinc-700 hover:bg-[#F4F6F9] hover:text-primary transition-colors"
                          >
                            {createElement(link.icon ?? MapPin, { className: "w-4 h-4 mt-0.5 text-zinc-400 shrink-0" })}
                            <span>{subLink.name}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-1 border-t border-gray-200 px-3 pt-3 pb-2">
                      <a href={link.allHref} className="flex items-center gap-1 text-sm font-bold text-primary hover:gap-2 transition-all">
                        {link.allLabel} <ArrowRight className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex flex-1 items-center justify-end gap-4">
            <Button
              variant="default"
              onClick={() => setIsQuoteOpen(true)}
              className="font-bold bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Get A Free Quote
            </Button>
            <Button variant="outline" className="font-bold border-primary bg-white text-primary hover:bg-white/90 hover:text-primary flex items-center gap-2" asChild>
              <a href={NAV_PHONE_HREF}>
                <Phone className="h-4 w-4" />
                {NAV_PHONE}
              </a>
            </Button>
          </div>

          {/* Mobile Nav Top Row */}
          <div className="flex lg:hidden w-full items-center justify-between gap-2">
            <Button
              variant="default"
              onClick={() => setIsQuoteOpen(true)}
              className="flex-1 font-bold bg-primary text-primary-foreground hover:bg-primary/90 text-xs sm:text-sm px-2 h-10"
            >
              Get A Free Quote
            </Button>

            <Button variant="outline" className="flex-1 font-bold border-primary bg-white text-primary hover:bg-white/90 hover:text-primary flex items-center justify-center gap-1.5 text-[10px] sm:text-xs px-2 h-10" asChild>
              <a href={NAV_PHONE_HREF}>
                <Phone className="h-3.5 w-3.5 shrink-0" />
                <span className="whitespace-nowrap">{NAV_PHONE}</span>
              </a>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              aria-label="Open menu"
              onClick={() => setIsOpen(true)}
              className={`shrink-0 transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-white"} hover:bg-transparent px-1`}
            >
              <Menu className="h-7 w-7 sm:h-8 sm:w-8" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile menu (plain useState — no Radix) */}
      {isOpen && (
        <div className="fixed inset-0 z-[9998] lg:hidden">
          <div className="absolute inset-0 bg-black/70" onClick={() => setIsOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[300px] max-w-[85vw] bg-background border-l border-border flex flex-col">
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
              className="absolute top-4 right-4 text-white opacity-80 hover:opacity-100 transition-opacity"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex-1 overflow-y-auto p-6 pt-16 pb-12">
              <nav className="flex flex-col gap-6">
                {links.map((link) => (
                  <div key={link.name} className="flex flex-col gap-4">
                    <a
                      href={link.href}
                      className="text-lg font-semibold flex items-center gap-1"
                      onClick={() => !link.subLinks && setIsOpen(false)}
                    >
                      {link.name}
                      {link.subLinks && <ChevronDown className="h-5 w-5" />}
                    </a>
                    {link.subLinks && (
                      <div className="flex flex-col pl-4 gap-4 border-l-2 border-primary/30">
                        {link.subLinks.map((subLink) => (
                          <a
                            key={subLink.name}
                            href={subLink.href}
                            className="text-sm font-semibold text-muted-foreground hover:text-primary"
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
          </div>
        </div>
      )}

      <QuoteModal open={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
};
