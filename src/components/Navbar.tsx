import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  ArrowRight,
  CalendarCheck,
  ChevronDown,
  Clock,
  Footprints,
  GraduationCap,
  Home,
  MapPin,
  Menu,
  Moon,
  Phone,
  Scissors,
  Star,
  X,
  type LucideIcon,
} from "lucide-react";
import { QuoteModal } from "./QuoteModal";
import { SITE } from "@/lib/site";
import { AREAS, SERVICES, areaPath, servicePath } from "@/data/catalog";

const NAV_PHONE = "(646) 925-9123";
const NAV_PHONE_HREF = "tel:+16469259123";

const SERVICE_ICONS: Record<string, LucideIcon> = {
  "pet-grooming": Scissors,
  "pet-boarding": Moon,
  "home-boarding": Home,
  "dog-walking": Footprints,
  "training-behaviour": GraduationCap,
  "potty-training": CalendarCheck,
};

type NavItem = { name: string; href: string; menu?: "services" | "areas" };

const links: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", menu: "services" },
  { name: "About", href: "/about" },
  { name: "Service Areas", href: "/service-areas", menu: "areas" },
  { name: "Gallery", href: "/gallery" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

const isActive = (path: string, href: string) =>
  href === "/" ? path === "/" || path === "/home" : path === href || path.startsWith(`${href}/`);

export const Navbar = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openSection, setOpenSection] = useState<string | null>(null);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setOpenSection(null);
  };

  return (
    <>
      <header className="fixed top-0 z-50 w-full">
        {/* Utility bar (desktop): hours, location, rating. Collapses once the page is scrolled. */}
        <div
          className={`hidden lg:block overflow-hidden transition-all duration-300 bg-[#030817] border-b border-white/10 ${
            isScrolled ? "max-h-0 opacity-0 border-transparent" : "max-h-10 opacity-100"
          }`}
        >
          <div className="w-full max-w-[1240px] mx-auto px-6 h-9 flex items-center justify-between text-[12px] text-gray-400">
            <div className="flex items-center gap-6">
              <span className="inline-flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-primary" /> Mon – Fri 8am – 5pm · Sat 8am – 2pm
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-primary" /> Jamaica, Queens · Serving all of NYC
              </span>
            </div>
            <a href={SITE.googleUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors">
              <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-white">{SITE.rating}</span> on Google · {SITE.reviewCount} reviews
            </a>
          </div>
        </div>

        {/* Main bar */}
        <div
          className={`transition-all duration-300 border-b ${
            isScrolled
              ? "bg-[#050b1f]/95 backdrop-blur-md border-white/10 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.6)]"
              : "bg-gradient-to-b from-black/50 to-transparent border-transparent"
          }`}
        >
          <div className={`w-full max-w-[1240px] 2xl:max-w-[1400px] mx-auto px-4 lg:px-6 flex items-center justify-between gap-4 transition-all duration-300 ${isScrolled ? "h-16" : "h-20"}`}>
            {/* Logo + name */}
            <a href="/" className="flex items-center gap-3 shrink-0" aria-label={`${SITE.name} home`}>
              <img
                src={SITE.logo}
                alt=""
                className={`w-auto object-contain transition-all duration-300 ${isScrolled ? "h-11" : "h-14"}`}
              />
              <span className="hidden sm:block lg:hidden 2xl:block leading-tight">
                <span className="block text-white font-black text-[17px] tracking-tight">Heart Of Love</span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Pet Care · Queens, NY</span>
              </span>
            </a>

            {/* Desktop links */}
            <nav className="hidden lg:flex items-center gap-1 text-[14px] font-semibold" aria-label="Main">
              {links.map((link) => {
                const active = isActive(pathname, link.href);
                return (
                  <div key={link.name} className={`group ${link.menu === "services" ? "" : "relative"}`}>
                    <a
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`relative flex items-center gap-1 px-2.5 xl:px-3 py-2 whitespace-nowrap transition-colors ${
                        active ? "text-white" : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {link.name}
                      {link.menu && <ChevronDown className="h-3.5 w-3.5 opacity-70 transition-transform duration-200 group-hover:rotate-180" />}
                      <span
                        className={`absolute left-3 right-3 -bottom-0.5 h-0.5 rounded-full bg-primary transition-transform duration-200 origin-left ${
                          active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      ></span>
                    </a>

                    {/* Services mega menu */}
                    {link.menu === "services" && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[min(640px,92vw)] opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                        <div className="rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden">
                          <div className="grid grid-cols-2 gap-1 p-3">
                            {SERVICES.map((s) => {
                              const Icon = SERVICE_ICONS[s.slug] ?? Scissors;
                              return (
                                <a key={s.slug} href={servicePath(s)} className="group/item flex items-start gap-3 rounded-xl p-3 hover:bg-[#F4F6F9] transition-colors">
                                  <span className="w-9 h-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0 group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                                    <Icon className="w-4 h-4" />
                                  </span>
                                  <span>
                                    <span className="block text-sm font-bold text-black">{s.title}</span>
                                    <span className="block mt-0.5 text-xs font-normal text-zinc-500 leading-snug line-clamp-2">{s.cardDesc}</span>
                                  </span>
                                </a>
                              );
                            })}
                          </div>
                          <div className="flex items-center justify-between gap-4 px-6 py-3 border-t border-gray-200 bg-[#F4F6F9] text-xs">
                            <span className="text-zinc-500 font-normal">Not sure what your dog needs? We'll help you choose.</span>
                            <a href="/services" className="inline-flex items-center gap-1 font-bold text-primary hover:gap-2 transition-all whitespace-nowrap">
                              All services <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Service areas dropdown */}
                    {link.menu === "areas" && (
                      <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[260px] opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                        <div className="rounded-2xl bg-white shadow-2xl border border-gray-200 p-2">
                          {AREAS.map((a) => (
                            <a key={a.slug} href={areaPath(a)} className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-zinc-700 hover:bg-[#F4F6F9] hover:text-primary transition-colors">
                              <MapPin className="w-4 h-4 text-zinc-400 shrink-0" />
                              {a.label}
                            </a>
                          ))}
                          <a href="/service-areas" className="mt-1 flex items-center gap-1 border-t border-gray-200 px-3 pt-3 pb-1.5 text-sm font-bold text-primary hover:gap-2 transition-all">
                            All service areas <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* Desktop actions */}
            <div className="hidden lg:flex items-center gap-4 shrink-0">
              <a href={NAV_PHONE_HREF} className="flex items-center gap-2.5 group/phone">
                <span className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-primary group-hover/phone:bg-primary group-hover/phone:text-white group-hover/phone:border-primary transition-colors">
                  <Phone className="w-4 h-4" />
                </span>
                <span className="hidden xl:block leading-tight">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.16em] text-gray-400">Call us</span>
                  <span className="block text-sm font-bold text-white">{NAV_PHONE}</span>
                </span>
              </a>
              <button
                type="button"
                onClick={() => setIsQuoteOpen(true)}
                className="group/btn inline-flex items-center gap-2 rounded-md bg-primary hover:bg-primary/90 px-5 h-11 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-colors"
              >
                Get A Free Quote
                <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5" />
              </button>
            </div>

            {/* Mobile actions */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={NAV_PHONE_HREF}
                aria-label={`Call ${NAV_PHONE}`}
                className="w-10 h-10 rounded-full border border-white/25 text-white flex items-center justify-center"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                type="button"
                onClick={() => setIsQuoteOpen(true)}
                className="rounded-md bg-primary px-3.5 h-10 text-xs font-bold text-primary-foreground"
              >
                Free Quote
              </button>
              <button
                type="button"
                aria-label="Open menu"
                onClick={() => setIsOpen(true)}
                className="w-10 h-10 rounded-full flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-[9998] lg:hidden">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={closeMenu} />
          <div className="absolute right-0 top-0 h-full w-[320px] max-w-[88vw] flex flex-col border-l border-white/10" style={{ backgroundColor: "#050b1f" }}>
            <div className="flex items-center justify-between px-5 h-16 border-b border-white/10">
              <span className="flex items-center gap-2.5">
                <img src={SITE.logo} alt="" className="h-9 w-auto object-contain" />
                <span className="text-white font-black text-sm">Heart Of Love Pet Care</span>
              </span>
              <button type="button" onClick={closeMenu} aria-label="Close menu" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/15 text-white flex items-center justify-center">
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-3 py-4" aria-label="Mobile">
              {links.map((link) => {
                const active = isActive(pathname, link.href);
                const sub =
                  link.menu === "services"
                    ? SERVICES.map((s) => ({ name: s.title, href: servicePath(s) }))
                    : link.menu === "areas"
                      ? AREAS.map((a) => ({ name: a.label, href: areaPath(a) }))
                      : null;
                const expanded = openSection === link.name;
                return (
                  <div key={link.name} className="border-b border-white/5 last:border-0">
                    <div className="flex items-center">
                      <a
                        href={link.href}
                        onClick={closeMenu}
                        className={`flex-1 px-3 py-3.5 text-[15px] font-semibold ${active ? "text-primary" : "text-white"}`}
                      >
                        {link.name}
                      </a>
                      {sub && (
                        <button
                          type="button"
                          onClick={() => setOpenSection(expanded ? null : link.name)}
                          aria-label={`${expanded ? "Hide" : "Show"} ${link.name}`}
                          aria-expanded={expanded}
                          className="w-10 h-10 rounded-full text-gray-300 hover:bg-white/5 flex items-center justify-center"
                        >
                          <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? "rotate-180" : ""}`} />
                        </button>
                      )}
                    </div>
                    {sub && expanded && (
                      <div className="pb-3 pl-3 space-y-0.5">
                        {sub.map((s) => (
                          <a key={s.href} href={s.href} onClick={closeMenu} className="block rounded-lg px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-white/5">
                            {s.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            <div className="p-5 border-t border-white/10 space-y-2.5">
              <button
                type="button"
                onClick={() => {
                  closeMenu();
                  setIsQuoteOpen(true);
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary h-12 text-sm font-bold text-primary-foreground"
              >
                Get A Free Quote <ArrowRight className="w-4 h-4" />
              </button>
              <a href={NAV_PHONE_HREF} className="w-full inline-flex items-center justify-center gap-2 rounded-md border border-white/20 h-12 text-sm font-bold text-white">
                <Phone className="w-4 h-4" /> {NAV_PHONE}
              </a>
            </div>
          </div>
        </div>
      )}

      <QuoteModal open={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </>
  );
};
