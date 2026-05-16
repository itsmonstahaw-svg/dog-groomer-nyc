import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Gallery = () => {
  const images = [
    "https://vibe.filesafe.space/1777030353190232844/attachments/3278d566-b56d-4032-85ae-4592751e08f7.png",
    "https://vibe.filesafe.space/1777030353190232844/attachments/54e08aa4-b3c9-4888-bd3d-b2cac4c7e20b.png",
    "https://vibe.filesafe.space/1777030353190232844/attachments/13d9a7d7-4b5a-4b42-b5b8-69caa2933a36.png",
    "https://vibe.filesafe.space/1777030353190232844/attachments/631a5763-3afb-4f4c-b33d-483b0f148e51.png",
    "https://vibe.filesafe.space/1777030353190232844/attachments/4117407e-ca8b-4bd7-978e-dd8b7cb30fda.png",
    "https://vibe.filesafe.space/1777030353190232844/attachments/fd7de464-e5a3-4284-b40f-f23aca9d2015.png",
    "https://vibe.filesafe.space/1777030353190232844/attachments/6ee065ca-bf54-48fd-b7c6-059c6c2da2ca.png",
    "https://vibe.filesafe.space/1777030353190232844/attachments/491b5b3a-c0ce-4b7e-8b07-0a03a4bd8d60.png",
  ];

  return (
    <section id="gallery" className="py-12 bg-card border-b border-border/40">
      <div className="w-full max-w-[1200px] mx-auto px-[12px]">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
              See Our Work
            </h2>
            <div className="w-24 h-1 bg-primary mt-6"></div>
          </div>
          <Button variant="outline" className="font-bold uppercase tracking-wider border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            See All Photos
          </Button>
        </div>

        <div className="columns-2 md:columns-4 gap-4 space-y-4">
          {images.map((img, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="break-inside-avoid relative overflow-hidden rounded-lg group mb-4"
            >
              <img 
                src={img} 
                alt={`Gallery image ${i + 1}`}
                className="w-full h-auto object-cover bg-muted/10 transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
