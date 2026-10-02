import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Star } from "lucide-react";
import { QuoteFormPanel } from "./QuoteFormPanel";
import { GoogleG } from "./Reviews";
import { SITE, reviewCountLabel } from "@/lib/site";

// Hero videos play one after another, then repeat (a single video just loops).
const videos = SITE.heroVideos;

export const Hero = () => {
  const [videoIndex, setVideoIndex] = useState(0);

  return (
    <section className="relative w-full min-h-[100vh] flex items-center pt-32 pb-12">
      {/* Background: looping muted video when SITE.heroVideos is set (poster shows while it loads), otherwise the photo */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{ backgroundImage: `url("${SITE.heroImage}")` }}
      >
        {videos.length > 0 && (
          <video
            key={videos[videoIndex]}
            className="absolute inset-0 w-full h-full object-cover motion-reduce:hidden"
            src={videos[videoIndex]}
            poster={SITE.heroVideoPoster}
            autoPlay
            muted
            loop={videos.length === 1}
            onEnded={() => setVideoIndex((i) => (i + 1) % videos.length)}
            playsInline
            preload="auto"
            aria-hidden="true"
          />
        )}
        <div className="absolute inset-0 bg-black/65"></div>
      </div>

      <div className="w-full max-w-[960px] mx-auto px-[12px] relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-10">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left text-white"
        >
          <h1 className="text-3xl md:text-4xl font-black uppercase leading-[1.1] mb-6 tracking-tight [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
            NYC's Dog Grooming,
            <br />
            <span className="text-primary">Boarding & Training Specialists</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 font-medium [text-shadow:_0_1px_5px_rgba(0,0,0,0.5)]">
            Queens, NYC's owner-operated pet care team — treating every dog like family, not a number. Grooming, boarding, training & more.
          </p>

          <a
            href={SITE.phoneHref}
            className="mt-8 inline-flex items-center gap-2 text-white font-black text-xl hover:text-primary transition-colors"
          >
            <Phone className="w-5 h-5 text-primary" />
            {SITE.phone}
          </a>

          <div className="mt-6 flex justify-center lg:justify-start">
            <a
              href={SITE.googleUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-black/60 border border-white/10 backdrop-blur-md pl-3 pr-5 py-2"
            >
              <GoogleG className="w-5 h-5 shrink-0" />
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-white font-black text-base leading-none">{SITE.rating}</span>
              <span className="w-px h-4 bg-white/20"></span>
              <span className="text-gray-300 text-sm font-medium whitespace-nowrap">{reviewCountLabel}</span>
            </a>
          </div>
        </motion.div>

        {/* Right Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="w-full max-w-md bg-black/95 border border-white/10 p-7 rounded-2xl shadow-2xl relative backdrop-blur"
        >
          <QuoteFormPanel />
        </motion.div>

      </div>
    </section>
  );
};
