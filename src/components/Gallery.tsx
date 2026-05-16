import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export const Gallery = () => {
  const images = [
    "https://vibe.filesafe.space/1778436264577951505/attachments/44b5245f-5e7a-4ac8-af4a-6516d74fd711.png",
    "https://vibe.filesafe.space/1778436264577951505/attachments/50840071-8c3e-49d7-887f-4d816e97ce81.png",
    "https://vibe.filesafe.space/1778436264577951505/attachments/dbce6618-f302-4f7b-b169-680309246b07.png",
    "https://vibe.filesafe.space/1778436264577951505/attachments/d10284c9-b899-433c-bb20-32ae6a9a7c38.png",
    "https://vibe.filesafe.space/1778436264577951505/attachments/87d1531c-4c8e-498b-911e-ffd1599ecfc4.png",
    "https://vibe.filesafe.space/1778436264577951505/attachments/a7d4c1c6-fc20-4dab-a693-7a1c9bf920bc.png",
    "https://vibe.filesafe.space/1778436264577951505/attachments/313af329-52b1-4bd0-bdb5-18478eb1317f.png",
    "https://vibe.filesafe.space/1778436264577951505/attachments/a7a3f002-ccd7-4930-b9d0-04bc341451b7.png",
    "https://vibe.filesafe.space/1778436264577951505/attachments/213dc09f-031a-4c61-8f33-03d704f6f4f1.png",
    "https://vibe.filesafe.space/1778436264577951505/attachments/c1c15a3d-62b3-40cf-b980-e4e2fa0a3729.png",
    "https://vibe.filesafe.space/1778436264577951505/attachments/78d39b14-86b7-460b-86d1-6b81c1530112.png",
    "https://vibe.filesafe.space/1778436264577951505/attachments/78c2a408-8dee-43c4-af45-04dac0229bb8.png"
  ];

  return (
    <section id="gallery" className="py-12 bg-background border-b border-border/40">
      <div className="w-full max-w-[1200px] mx-auto px-0">
        <div className="flex flex-col md:flex-row md:items-end gap-4 mb-12 px-[12px]">
          <div className="flex-shrink-0">
            <p className="text-sm font-bold tracking-widest text-white/70 uppercase mb-2">
              SEE WHY OUR CUSTOMERS LOVE US
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter">
              SEE OUR WORK
            </h2>
          </div>
          <div className="flex-grow h-[2px] bg-primary mb-2 md:mb-4 hidden md:block"></div>
          <div className="flex-shrink-0">
            <Button 
              variant="outline" 
              className="font-bold uppercase tracking-wider border-2 border-white text-white hover:bg-white hover:text-black transition-all px-6 py-6 rounded-none group"
              onClick={() => window.location.href = '/gallery'}
            >
              SEE ALL PHOTOS <span className="ml-2 text-primary group-hover:text-black transition-colors text-xl">→</span>
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-1">
          {images.map((img, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="aspect-square relative overflow-hidden group"
            >
              <img 
                src={img} 
                alt={`Gallery image ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
