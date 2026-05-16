import { MessageSquare, FileText, Wrench, CheckCircle, DollarSign } from "lucide-react";

export const Process = () => {
  const steps = [
    { icon: MessageSquare, title: "Book\nAppointment" },
    { icon: FileText, title: "Consultation &\nCheck-in" },
    { icon: Wrench, title: "Spa &\nGrooming" },
    { icon: CheckCircle, title: "Final\nFluff" },
    { icon: DollarSign, title: "Pickup &\nPayment" },
  ];

  return (
    <section className="py-12 bg-background border-b border-border/40">
      <div className="w-full max-w-[1200px] mx-auto px-[12px]">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            Our Process
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto pt-4">
            Our process is simple and only contains a few simple steps
          </p>
        </div>

        <div className="relative w-full mt-24">
          {/* Connecting Line */}
          <div className="absolute top-[40px] left-0 w-full h-[2px] bg-border hidden md:block"></div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-20 h-20 rounded-full bg-background border-4 border-border flex items-center justify-center mb-6 group-hover:border-primary group-hover:text-primary transition-colors relative">
                  <step.icon className="w-8 h-8" />
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm">
                    {index + 1}
                  </div>
                </div>
                <h3 className="font-black uppercase tracking-wider text-sm md:text-base whitespace-pre-line">
                  {step.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
