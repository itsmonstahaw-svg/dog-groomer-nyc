import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { CTA } from "@/components/CTA";

const BlogPost3 = () => {
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
              WHY REGULAR GROOMING IS ESSENTIAL FOR YOUR DOG'S HEALTH
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
              <p>Many pet owners view grooming as an aesthetic choice—a way to make their dog look "pretty." However, at Heart Of Love Pet Care in Queens, NY, we know that regular grooming is a fundamental pillar of your dog's overall health and wellbeing. As a small, owner-operated business, we take a holistic view of pet care, and our grooming sessions are designed to be as much about health as they are about style. We treat every dog like family—not a number—and that means looking out for their long-term health in every session we provide in the heart of New York City.</p>
              <p>Living in New York City presents unique challenges for a dog's hygiene. The city's streets can be harsh on paws, and the pollution can dull a coat over time. Regular grooming at Heart Of Love Pet Care helps to remove the accumulated dirt, allergens, and debris that your dog picks up during their daily NYC adventures. This is especially important for dogs living in bustling areas of Queens, where seasonal changes can also lead to excessive shedding and skin irritation. Our expert groomers understand the local NYC environment and how it affects your pet's skin and coat, providing targeted care that addresses these specific issues.</p>
              <p>Our brand story is one of dedication and love. We started Heart Of Love Pet Care because we saw a need for more personalized, compassionate pet care in New York. In our Queens salon, we use only the best pet-safe products to ensure your dog's skin remains healthy and hydrated. One of the most critical aspects of regular grooming is the prevention of matting. When a dog's fur mats, it can pull on the skin, causing pain and creating a breeding ground for bacteria and parasites. Our team is trained to identify and safely handle these issues, ensuring your pet remains comfortable and healthy.</p>
              <p>Beyond the coat, our grooming sessions include essential care for ears, nails, and teeth. Overgrown nails can lead to joint pain and difficulty walking, while neglected ears can quickly develop painful infections. By bringing your dog to Heart Of Love Pet Care regularly, you ensure that these areas are consistently monitored and maintained by professionals who truly care. We take the time to perform a thorough "nose-to-tail" check during every session, spotting potential health concerns such as lumps, skin tags, or early signs of dental disease before they become serious problems.</p>
              <p>In the high-stress environment of New York City, your dog deserves a grooming experience that is relaxing and positive. We pride ourselves on our gentle handling and patient approach, making sure even the most anxious dogs feel safe in our care. Our Queens location is a sanctuary where your pet receives the undivided attention they deserve. We believe that this personalized, owner-operated approach is what sets us apart from the larger, more impersonal franchises in NYC.</p>
              <p>Furthermore, regular grooming sessions are an excellent way to maintain your dog's comfort during the changing seasons in New York. From the humid summers to the freezing winters, your dog's coat needs change, and our experts at Heart Of Love Pet Care are here to provide the appropriate care. We offer de-shedding treatments, moisturizing baths, and protective paw care to ensure your pet is ready for whatever the NYC weather throws at them.</p>
              <p>At Heart Of Love Pet Care, we are committed to the health and happiness of every dog in our community. Regular grooming is an investment in your pet's quality of life and longevity. We invite you to experience the Heart Of Love difference and see how our expert care can transform your dog's health and appearance. Your furry friend is part of our family, and we are here to support them through every stage of their life in New York.</p>

              <div className="mt-12 p-8 bg-primary/5 rounded-xl border-2 border-primary/20 text-center">
                <h4 className="text-2xl font-black uppercase mb-4">Is it time for a refresh?</h4>
                <p className="mb-6">Schedule a grooming session today and give your dog the health-focused care they deserve.</p>
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

export default BlogPost3;
