import { Users, ClipboardList, Wrench, SearchCheck, Handshake } from "lucide-react";

export const Process = () => {
  const steps = [
    { icon: Users, title: "Free Consult" },
    { icon: ClipboardList, title: "Estimation &\nProposal" },
    { icon: Wrench, title: "We Do\nThe Work" },
    { icon: SearchCheck, title: "Final\nInspection" },
    { icon: Handshake, title: "Payment" },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="w-full max-w-[1200px] mx-auto px-[12px]">
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-2">
            <h2 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-white">
              Our Process
            </h2>
            <div className="flex-grow h-[3px] bg-primary mt-2"></div>
          </div>
          <p className="text-lg text-gray-400 font-medium">
            Our process is simple and only contains a few simple steps
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-16 gap-x-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="relative mb-12">
                {/* White Circle */}
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full bg-white flex items-center justify-center relative z-10 shadow-2xl">
                  <step.icon className="w-12 h-12 md:w-14 md:h-14 text-black" strokeWidth={1.5} />
                </div>
                
                {/* Pointer/Tail */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[3px] h-8 bg-white"></div>
              </div>

              <h3 className="font-bold text-white text-lg md:text-xl leading-tight whitespace-pre-line uppercase tracking-tight">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
