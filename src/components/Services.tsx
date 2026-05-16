import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export const Services = () => {
  const services = [
    {
      title: "Pet Boarding",
      description: "Safe, comfortable, and loving overnight care for your dog.",
      image: "https://vibe.filesafe.space/1777030353190232844/attachments/6ba8b6a0-6652-4d25-b961-c0c67821094e.png",
      href: "/services/pet-boarding"
    },
    {
      title: "Home Boarding",
      description: "A warm, cage-free alternative where your dog stays in a real home environment.",
      image: "https://vibe.filesafe.space/1777030353190232844/attachments/a713a282-c829-4085-82ee-462908fb06db.png",
      href: "/services/home-boarding"
    },
    {
      title: "Training & Behaviour",
      description: "Transform your dog's behaviour with positive, effective training techniques.",
      image: "https://vibe.filesafe.space/1777030353190232844/attachments/6aa68264-0b19-44e1-9154-970889948d40.png",
      href: "/services/training-behaviour"
    },
    {
      title: "Potty Training",
      description: "Expert guidance to help your puppy or dog build good habits from day one.",
      image: "https://vibe.filesafe.space/1777030353190232844/attachments/5bd2bd1b-1de7-434f-9f69-bb7072958d57.png",
      href: "/services/potty-training"
    },
    {
      title: "Dog Walking",
      description: "Reliable, energetic, and fun walks to keep your dog active and socialized.",
      image: "https://vibe.filesafe.space/1777030353190232844/attachments/1c47de67-7ab2-4498-ba25-e7752390d866.png",
      href: "/services/dog-walking"
    },
    {
      title: "Pet Grooming",
      description: "Professional grooming tailored to your dog's breed, coat, and personality.",
      image: "https://vibe.filesafe.space/1777030353190232844/attachments/528d0771-000a-47af-8c5a-7c8d42ae1d16.png",
      href: "/services/pet-grooming"
    }
  ];

  return (
    <section id="services" className="py-12 bg-card border-b border-border/40">
      <div className="w-full max-w-[1200px] mx-auto px-[12px]">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
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
