import { useState } from "react";
import { ChevronRight, ClipboardList, Home, MessageSquare, Scissors, ShieldCheck } from "lucide-react";
import { QuoteModal } from "./QuoteModal";

const steps = [
  {
    icon: MessageSquare,
    title: "Book Appointment",
    description: "Call us or send the quick form and pick a time that works for you.",
  },
  {
    icon: ClipboardList,
    title: "Consultation & Check-in",
    description: "We go over your dog's needs, coat, temperament and any notes before we start.",
  },
  {
    icon: Scissors,
    title: "Spa & Grooming",
    description: "Gentle, patient care tailored to their breed and coat, finished with a final fluff.",
  },
  {
    icon: Home,
    title: "Pickup & Payment",
    description: "We'll call or text when your dog is ready. Pay at pickup and head home happy.",
  },
];

// Home page "How We Work": four numbered step cards with connectors, then a booking strip.
export const Process = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 border-b border-gray-200 bg-white">
      <div className="w-full max-w-[960px] mx-auto px-[12px]">
        <div className="max-w-2xl">
          <p className="text-primary text-xs font-black uppercase tracking-[0.2em]">How It Works</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight leading-tight text-black">How We Work</h2>
          <div className="w-16 h-1 bg-primary mt-5"></div>
          <p className="mt-5 text-[15px] text-zinc-600 leading-[1.8]">
            From your first call to pickup, we keep things simple and stress-free. Here's what to expect when you choose Heart Of Love Pet Care.
          </p>
        </div>

        <ol className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="group relative flex flex-col rounded-2xl border border-gray-200 bg-[#F9FAFB] p-6 shadow-sm hover:bg-white hover:shadow-lg hover:border-primary/40 transition-all duration-300"
            >
              <div className="flex items-start justify-between">
                <span className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  <step.icon className="w-5 h-5" />
                </span>
                <span className="text-4xl font-black text-gray-200 leading-none select-none group-hover:text-primary/20 transition-colors">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-6 text-[11px] font-bold uppercase tracking-[0.18em] text-primary">Step {index + 1}</p>
              <h3 className="mt-1.5 text-lg font-black text-black leading-snug">{step.title}</h3>
              <p className="mt-2 text-[13px] text-zinc-600 leading-relaxed">{step.description}</p>

              {index < steps.length - 1 && (
                <span
                  className="hidden lg:flex absolute top-1/2 -right-[17px] -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white border border-gray-200 shadow-sm items-center justify-center text-primary"
                  aria-hidden="true"
                >
                  <ChevronRight className="w-4 h-4" />
                </span>
              )}
            </li>
          ))}
        </ol>

        <div className="mt-10 rounded-2xl px-6 py-5 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4" style={{ backgroundColor: "#050b1f" }}>
          <div className="flex items-center gap-4">
            <span className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-primary" />
            </span>
            <p className="text-sm text-gray-300 leading-relaxed">
              <span className="font-bold text-white">Every dog is treated like family.</span> You get a happy, well-cared-for pup and our direct line for any questions.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setIsQuoteOpen(true)}
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-md h-11 px-6 shrink-0 transition-colors"
          >
            Book Now
          </button>
        </div>
      </div>

      <QuoteModal open={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />
    </section>
  );
};
