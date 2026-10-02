import { useEffect, useState } from "react";
import { Heart, Home, MapPin, PawPrint, ShieldCheck, Smile, Instagram, Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Reviews, GoogleG } from "@/components/Reviews";
import { FindUs } from "@/components/FindUs";
import { QuoteFormPanel } from "@/components/QuoteFormPanel";
import { QuoteModal } from "@/components/QuoteModal";
import { SITE } from "@/lib/site";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "6", label: "Services Offered" },
  { value: `${SITE.rating}★`, label: "Google Rating" },
];

// Only what the site already states about the business.
const values = [
  { icon: Heart, title: "Treated Like Family", text: "Every dog is treated like family, not a number, with gentle, patient handling at their own pace." },
  { icon: Smile, title: "Owner-Operated", text: "A small, family business. You deal with the people who actually care for your dog." },
  { icon: ShieldCheck, title: "Licensed & Fully Insured", text: "Peace of mind that your dog is in safe, professional hands." },
  { icon: MapPin, title: "100% Local", text: "Based in Jamaica, Queens and serving Queens, Brooklyn, Manhattan and beyond." },
  { icon: Home, title: "Cage-Free Home Boarding", text: "A real home environment for dogs who do better away from noisy kennels." },
  { icon: PawPrint, title: "All Sizes and Breeds", text: "We welcome dogs of every size and breed. Just tell us about any anxieties ahead of time." },
];

const AboutUs = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        {/* Hero */}
        <section className="relative w-full pt-28 pb-14 md:pb-16 overflow-hidden" style={{ backgroundColor: "#050b1f" }}>
          <div className="w-full max-w-[960px] mx-auto px-[12px] relative z-10 text-white">
            <div className="max-w-2xl">
              <Breadcrumbs
                items={[
                  { name: "Home", href: "/" },
                  { name: "About", href: "/about" },
                ]}
              />
              <h1 className="mt-10 text-4xl md:text-5xl font-black leading-[1.1] tracking-tight">
                Owner-Operated Pet Care Built on Love for Dogs
              </h1>
              <p className="mt-5 text-lg text-gray-200 leading-relaxed">
                Heart Of Love Pet Care is a family business in Jamaica, Queens, offering grooming, boarding, home boarding, dog walking and training for dogs across New York City.
              </p>

              <ul className="mt-7 grid grid-cols-3 gap-3 max-w-md">
                {stats.map((stat) => (
                  <li key={stat.label} className="rounded-lg border border-white/15 px-3 py-3 text-center" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
                    <p className="text-2xl font-black text-primary leading-none">{stat.value}</p>
                    <p className="mt-2 text-[10px] font-bold uppercase tracking-wide text-gray-300 leading-tight">{stat.label}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded h-12 px-6 transition-colors"
                >
                  Get A Free Quote
                </button>
                <a
                  href={SITE.phoneHref}
                  className="inline-flex items-center justify-center gap-2 border border-white/60 hover:bg-white/10 text-white font-bold rounded h-12 px-6 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  Call {SITE.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Our story */}
        <section className="py-14 md:py-16 bg-white text-black">
          <div className="w-full max-w-[960px] mx-auto px-[12px] grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] gap-12 lg:gap-16 items-center">
            <div className="w-full max-w-[440px] mx-auto lg:mx-0">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4]">
                  <img
                    src="/images/our-story.webp"
                    alt="Heart Of Love Pet Care owner holding a happy dog"
                    className="w-full h-full object-cover object-[50%_35%]"
                  />
                </div>
                <div className="absolute -bottom-5 -right-3 sm:-right-8 rounded-xl bg-[#050b1f] px-6 py-4 shadow-xl">
                  <p className="text-4xl font-black text-white leading-none">10+</p>
                  <p className="mt-2 text-[11px] font-semibold leading-snug text-sky-200">
                    Years Caring<br />
                    For NYC Dogs
                  </p>
                </div>
              </div>

              <div className="mt-10">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400 mb-4">Find us on</p>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={SITE.googleUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-zinc-700 shadow-sm hover:border-primary hover:text-primary transition-colors"
                  >
                    <GoogleG className="w-5 h-5" />
                    Google
                  </a>
                  <a
                    href={SITE.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-bold text-zinc-700 shadow-sm hover:border-primary hover:text-primary transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="text-primary text-xs font-black uppercase tracking-[0.2em] mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-tight max-w-2xl">
                Built on Love,<br />
                <span className="italic text-primary">Driven by Care</span>
              </h2>
              <div className="w-16 h-1 bg-primary mt-5 mb-7"></div>
              <div className="space-y-5 text-[15px] text-zinc-600 leading-[1.8] max-w-3xl">
                <p>
                  We started with a passion for pets and a commitment to their well-being. Today, we're Jamaica's go-to team for professional pet boarding and training, giving every dog a safe, comfortable, and loving environment while you're away.
                </p>
                <p>
                  Heart Of Love Pet Care is a small, owner-operated business. That means the people who meet you at drop-off are the same people who care for your dog, and every dog gets personal attention and compassionate handling.
                </p>
                <p>
                  We offer professional grooming, overnight pet boarding, cage-free home boarding, dog walking, training and behaviour, and potty training, all from our home base in Jamaica, Queens.
                </p>
                <p>
                  We serve dog owners across Queens, Brooklyn, Manhattan and the wider New York area, and we're an easy stop for anyone heading to JFK.
                </p>
                <p>
                  Call us today at <a href={SITE.phoneHref} className="font-bold text-primary hover:underline">{SITE.phone}</a> or email{" "}
                  <a href={`mailto:${SITE.email}`} className="font-bold text-primary hover:underline">{SITE.email}</a> to get your free quote.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* What you can count on */}
        <section className="py-14 md:py-16 border-t border-gray-200" style={{ backgroundColor: "#F4F6F9" }}>
          <div className="w-full max-w-[960px] mx-auto px-[12px]">
            <p className="text-primary text-xs font-black uppercase tracking-[0.2em] mb-3">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-black leading-tight">What You Can Count On</h2>
            <div className="w-16 h-1 bg-primary mt-5 mb-8"></div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {values.map((value) => (
                <li key={value.title} className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-black text-black leading-snug">{value.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{value.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <Reviews />
        <FindUs />

        {/* Closing CTA with form */}
        <section className="py-14 md:py-16 bg-white border-t border-gray-200">
          <div className="w-full max-w-[960px] mx-auto px-[12px] grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-primary text-xs font-black uppercase tracking-[0.2em] mb-3">Get Started</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-black leading-tight">Ready to Join the Heart Of Love Family?</h2>
              <p className="mt-4 text-zinc-600 leading-relaxed">
                Call us directly or send us a message. Free quote, no obligation.
              </p>
              <a
                href={SITE.phoneHref}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-primary bg-primary/5 px-6 py-3 text-lg font-black text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                {SITE.phone}
              </a>
            </div>
            <div className="bg-black border border-white/10 rounded-lg p-5 shadow-2xl w-full max-w-[420px] mx-auto lg:mx-0 lg:ml-auto">
              <QuoteFormPanel />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingQuoteButton />
      <QuoteModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default AboutUs;
