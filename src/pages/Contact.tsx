import { useEffect } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { QuoteFormPanel } from "@/components/QuoteFormPanel";
import { ServiceHero } from "@/components/ServiceHero";
import { HOURS, SITE } from "@/lib/site";
import { AREAS, areaPath } from "@/data/catalog";

// No response times or scheduling promises beyond what the site already states.
const steps = [
  {
    title: "Send Us Your Request",
    when: "Right now",
    text: "Fill out the form with your name, phone number and a short note about your dog and the service you need.",
  },
  {
    title: "We Reach Out",
    when: "Once we have your request",
    text: "We'll get back to you to talk through your dog's needs and answer any questions.",
  },
  {
    title: "We Book Your Visit",
    when: "At a time that works for you",
    text: "We confirm a time for grooming, boarding, walking or training that fits your schedule.",
  },
  {
    title: "Your Dog Is Treated Like Family",
    when: "Every visit",
    text: "Gentle, patient, owner-operated care, and our direct line for any questions.",
  },
];

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const details = [
    { icon: Phone, label: "Phone", value: SITE.phone, href: SITE.phoneHref, note: "Best way to reach us. You talk to the owner directly." },
    { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}`, note: "Write to us and we'll get back to you." },
    { icon: MapPin, label: "Location", value: SITE.address, href: "", note: "Serving Queens, Brooklyn, Manhattan and beyond" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      <main className="flex-grow">
        <ServiceHero
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Contact", href: "/contact" },
          ]}
          eyebrow="Get in Touch"
          title="Get a Free Quote"
          sub="Tell us about your dog and the service you need. We serve Queens, Brooklyn, Manhattan and pet owners across New York, and you deal directly with the owner."
          image={SITE.heroImage}
          noButtons
        />

        <section className="py-14 md:py-16 bg-white text-black">
          <div className="w-full max-w-[960px] mx-auto px-[12px] grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            {/* Left: how to reach us */}
            <div>
              <h2 className="text-2xl font-black tracking-tight">How to Reach Us</h2>

              <ul className="mt-6 space-y-5">
                {details.map(({ icon: Icon, label, value, href, note }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-primary" />
                    </span>
                    <div>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400">{label}</p>
                      {href ? (
                        <a href={href} className="text-[15px] font-bold text-black hover:text-primary transition-colors break-all">{value}</a>
                      ) : (
                        <p className="text-[15px] font-bold text-black">{value}</p>
                      )}
                      <p className="text-xs text-zinc-500 mt-0.5">{note}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400">Business hours</p>
                <ul className="mt-4 space-y-2">
                  {HOURS.map((h) => (
                    <li key={h.day} className="flex items-center justify-between text-sm text-zinc-600">
                      <span>{h.day}</span>
                      <span className="font-medium text-zinc-800">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-zinc-400">Areas we serve</p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {AREAS.map((a) => (
                    <li key={a.slug}>
                      <a
                        href={areaPath(a)}
                        className="inline-flex items-center rounded-full border border-gray-200 bg-white px-2.5 py-1.5 text-xs whitespace-nowrap text-zinc-600 hover:bg-primary hover:text-white hover:border-primary transition-colors"
                      >
                        {a.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: form card */}
            <div className="bg-black border border-white/10 rounded-lg p-5 shadow-2xl w-full max-w-[420px] mx-auto lg:mx-0 lg:ml-auto">
              <QuoteFormPanel />
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16 border-t border-gray-200" style={{ backgroundColor: "#F4F6F9" }}>
          <div className="w-full max-w-[960px] mx-auto px-[12px]">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-black">What Happens After You Submit</h2>

            <ol className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {steps.map((step, i) => (
                <li key={step.title} className="flex flex-col rounded-3xl border border-gray-200 bg-white p-5 shadow-sm">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-primary text-primary-foreground text-base font-black">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-base font-black text-black leading-snug">{step.title}</h3>
                  <span className="mt-3 self-start rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[11px] font-bold text-primary">
                    {step.when}
                  </span>
                  <p className="mt-4 text-sm text-zinc-600 leading-relaxed">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingQuoteButton />
    </div>
  );
};

export default Contact;
