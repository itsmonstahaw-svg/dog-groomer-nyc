import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Services = () => {
  const services = [
    {
      title: "HVAC & Air Conditioning",
      description: "Commercial and residential rooftop and split system air conditioning installation, repair, and maintenance.",
      image: "https://vibe.filesafe.space/1778436264577951505/attachments/57caaa70-e41c-4d13-a151-8330eda00cbd.png",
      href: "/services/hvac-air-conditioning"
    },
    {
      title: "Commercial Refrigeration",
      description: "Expert service for all types of commercial refrigeration systems in supermarkets and restaurants.",
      image: "https://vibe.filesafe.space/1778436264577951505/attachments/961f0fae-7331-4e1c-824e-9808381932c0.png",
      href: "/services/commercial-refrigeration"
    },
    {
      title: "Residential Refrigeration",
      description: "Professional repair and maintenance for residential refrigerators and freezers.",
      image: "https://vibe.filesafe.space/1778436264577951505/attachments/c332c992-ec32-461f-ac83-88ee576cfc17.png",
      href: "/services/residential-refrigeration"
    },
    {
      title: "Walk-in Coolers & Freezers",
      description: "Installation and repair of commercial and residential walk-in coolers and freezers to keep your inventory safe.",
      image: "https://vibe.filesafe.space/1778436264577951505/attachments/dc92bb99-1383-4df7-981d-f24b6c8a9221.png",
      href: "/services/walk-in-coolers"
    },
    {
      title: "Restaurant Equipment Repair & Maintenance",
      description: "Fast and reliable repair services for commercial ovens, fryers, and cooking equipment.",
      image: "https://vibe.filesafe.space/1778436264577951505/attachments/ea931fb0-2115-4e56-915f-633d726fa9c2.png",
      href: "/services/restaurant-equipment"
    },
    {
      title: "Ice Machine & EMS Systems",
      description: "Professional installation and maintenance of commercial and residential ice machines and EMS systems.",
      image: "https://vibe.filesafe.space/1778436264577951505/attachments/a0457b28-7b66-4954-b91b-435f5fd9388d.png",
      href: "/services/ice-machine-ems"
    }
  ];

  return (
    <section id="services" className="py-12 bg-background border-b border-border/40">
      <div className="w-full max-w-[1200px] mx-auto px-[12px]">
        <div className="flex flex-col md:flex-row md:items-end gap-4 mb-12">
          <div className="flex-shrink-0">
            <p className="text-sm font-bold tracking-widest text-white/70 uppercase mb-2">
              WHAT WE ARE BEST AT
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter">
              OUR SERVICES
            </h2>
          </div>
          <div className="flex-grow h-[2px] bg-primary mb-2 md:mb-4 hidden md:block"></div>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-[2px] bg-black border-[2px] border-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {services.map((service, index) => (
            <motion.a 
              key={index} 
              href={service.href}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }}
              className="group relative block overflow-hidden aspect-square sm:aspect-[4/3] lg:aspect-[4/3] bg-black"
            >
              <img 
                src={service.image} 
                alt={service.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-30"
              />
              
              {/* Overlay Description */}
              <div className="absolute inset-0 flex flex-col justify-center p-8 z-10 pointer-events-none">
                <div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75">
                  <p className="text-white text-lg font-medium leading-relaxed text-center drop-shadow-md">
                    {service.description}
                  </p>
                </div>
              </div>
              
              {/* Title Badge */}
              <div className="absolute bottom-6 left-6 z-20 transition-transform duration-500 group-hover:-translate-y-2">
                <div className="bg-black text-white px-4 py-2.5 text-sm sm:text-base font-black uppercase tracking-wide flex items-center gap-2 shadow-xl rounded-sm">
                  {service.title}
                  <div className="bg-primary text-primary-foreground rounded-full p-0.5 ml-1">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
