import { motion } from "framer-motion";
import { Scissors, Home, Dumbbell, Footprints, Dog, Baby } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "Pet Grooming",
    description:
      "Full-service grooming including breed-specific cuts, deep-cleansing baths, nail trims, ear cleaning, and gland expression. Every dog leaves looking and smelling their best.",
    href: "/services/pet-grooming",
  },
  {
    icon: Home,
    title: "Home Boarding",
    description:
      "Your dog stays in a real home — not a cage. We maintain their routine, provide one-on-one attention, and send you regular photo updates while you're away.",
    href: "/services/home-boarding",
  },
  {
    icon: Dog,
    title: "Pet Boarding",
    description:
      "Safe, supervised boarding for dogs of all sizes and temperaments. A secure, loving environment that feels like a home away from home in Queens, NYC.",
    href: "/services/pet-boarding",
  },
  {
    icon: Dumbbell,
    title: "Training & Behaviour",
    description:
      "Positive-reinforcement training tailored to NYC life — leash manners, apartment etiquette, separation anxiety, basic obedience, and behavior modification.",
    href: "/services/training-behaviour",
  },
  {
    icon: Baby,
    title: "Potty Training",
    description:
      "Structured, science-based potty training programs for puppies and adult dogs. We build consistent routines that work in the real world of New York City.",
    href: "/services/potty-training",
  },
  {
    icon: Footprints,
    title: "Dog Walking",
    description:
      "Reliable daily walks by experienced, caring handlers who know the Queens streets. Solo or small-group walks available — your dog's schedule, your way.",
    href: "/services/dog-walking",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-background border-b border-border/40">
      <div className="w-full max-w-[1200px] mx-auto px-[12px]">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto pt-4">
            Professional pet care built for NYC life — owner-operated, personal, and passionate about every dog we work with.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.a
              key={i}
              href={service.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex flex-col gap-4 p-7 rounded-lg border border-border bg-card hover:border-primary hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-black uppercase tracking-tight">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
                {service.description}
              </p>
              <span className="text-sm font-black uppercase tracking-wider text-primary group-hover:text-primary/80 transition-colors flex items-center gap-1">
                Learn More →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
