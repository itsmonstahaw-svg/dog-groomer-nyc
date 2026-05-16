import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { CTA } from "@/components/CTA";

const BlogPost1 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <section className="relative w-full min-h-[60vh] flex items-center justify-center text-center pt-32 pb-24 overflow-hidden">
          <div
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("https://vibe.filesafe.space/1777030353190232844/attachments/b368c911-7f25-4632-acad-64db52f092c2.png")' }}
          >
            <div className="absolute inset-0 bg-black/65"></div>
          </div>

          <div className="w-full max-w-[1000px] mx-auto px-[12px] relative z-20 space-y-5">
            <span className="inline-block text-primary font-black uppercase tracking-[0.3em] text-sm border border-primary/50 px-4 py-1 rounded-sm">
              BLOG
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight text-primary [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              THE COMPLETE GUIDE TO PROFESSIONAL DOG GROOMING IN QUEENS, NY
            </h1>
          </div>

          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[80px] md:h-[120px]">
              <path d="M0 120 L0 60 C 150 -20 250 140 450 70 C 650 0 750 120 900 80 C 1050 40 1150 20 1200 50 L 1200 120 Z" className="fill-white" />
            </svg>
          </div>
        </section>

        <section className="py-16 bg-white text-black">
          <div className="px-4 max-w-[800px] mx-auto w-full">
            <Link to="/blog" className="inline-flex items-center gap-2 mb-10 font-bold uppercase tracking-wider text-sm text-black hover:text-primary transition-colors">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="prose prose-lg max-w-none text-zinc-800 space-y-6 leading-relaxed">
              <p>When it comes to the health and happiness of your canine companion, professional grooming is far more than just a luxury—it's a necessity. For residents of Queens, NY, finding a trusted partner in pet care can feel overwhelming, but Heart Of Love Pet Care has spent years building a reputation as the borough's premier destination for expert grooming services. We aren't just another grooming salon; we are a small, owner-operated business built on a genuine love for animals and a commitment to treating every dog like family—not a number. This personal touch is what defines us in the competitive New York City market.</p>
              <p>At Heart Of Love Pet Care, we understand that every dog is unique. Whether you have a high-energy doodle in Long Island City or a senior rescue in Astoria, our grooming approach is tailored to the specific needs of your pet. Professional grooming in Queens requires an understanding of the local environment—from the city grime that can accumulate on paws during walks in Flushing Meadows Park to the seasonal changes that affect a dog's coat health in the Northeast. Our team is deeply rooted in the Queens community, and we take pride in being the go-to specialists for local pet parents who demand nothing but the best for their furry friends.</p>
              <p>Our brand story is simple yet powerful: we started with a passion for pets and a commitment to their well-being. Today, we continue that mission by providing personalized attention that large franchises simply cannot match. When you walk through our doors in Queens, you aren't just another client; you are part of the Heart Of Love Pet Care family. We take the time to get to know your dog's temperament, their skin sensitivities, and your specific styling preferences. This level of owner-operated care ensures a consistency that is rare in the bustling New York City pet care industry, where volume often takes precedence over quality.</p>
              <p>Our comprehensive grooming sessions include everything from deep-cleansing baths and breed-specific haircuts to nail trimming, ear cleaning, and gland expression. We use only the highest quality, pet-safe products, ensuring that your dog's skin and coat remain vibrant and healthy. In the heart of NYC, where the environment can be harsh on a dog's hygiene, regular grooming is essential for preventing matting, skin infections, and other health issues. We treat every dog as if they were our own, ensuring they leave our care looking and feeling their absolute best. Our meticulous attention to detail is why we are considered the gold standard for grooming in Queens, NY.</p>
              <p>We pride ourselves on creating a calm, stress-free environment. Many dogs feel anxious about grooming, but at Heart Of Love Pet Care, we use gentle handling techniques and a patient approach to put them at ease. Our Queens location is designed to be a sanctuary for your pet, far removed from the noise and chaos of the city streets. We believe that a happy dog is a healthy dog, and our grooming services are a key part of that equation. We don't rush our sessions; we take the time necessary to ensure your dog is comfortable and happy throughout the entire process.</p>
              <p>Furthermore, regular grooming provides an opportunity for our experts to spot potential health concerns before they become serious problems. During our sessions in Queens, we carefully check for lumps, skin irritations, or parasites that might go unnoticed by owners. This proactive approach to health is part of our commitment to treating every dog like family. We believe that professional grooming is a partnership between the groomer and the pet parent, and we are dedicated to providing the education and support you need to keep your dog healthy between visits to our NYC salon.</p>
              <p>If you're looking for the best professional dog grooming in Queens, NY, look no further than Heart Of Love Pet Care. Our team is ready to welcome your furry friend into our family and provide the expert care they deserve. Don't let your dog's grooming needs fall by the wayside in the busy NYC lifestyle. We are here to ensure your pet remains a healthy, happy member of your household for years to come. Whether you are in Sunnyside, Woodside, or Jackson Heights, the premier pet care experience is just a short trip away.</p>

              <div className="mt-12 p-8 bg-primary/5 rounded-xl border-2 border-primary/20 text-center">
                <h4 className="text-2xl font-black uppercase mb-4">Ready to pamper your pet?</h4>
                <p className="mb-6">Join the Heart Of Love Pet Care family today and see why we are Queens' most trusted grooming specialists.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-black uppercase rounded-sm hover:bg-primary/90 transition-colors">Shoot Us A Message</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <CTA />
      <Footer />
      <FloatingQuoteButton />
    </div>
  );
};

export default BlogPost1;
