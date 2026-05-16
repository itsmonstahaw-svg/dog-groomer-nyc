import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { CTA } from "@/components/CTA";

const BlogPost4 = () => {
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
              FROM CHAOS TO CALM: DOG TRAINING THAT ACTUALLY WORKS
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
              <p>Living with a dog in New York City requires a high level of obedience and social grace. From navigating crowded sidewalks in Queens to staying calm in a busy NYC apartment building, a well-trained dog is a happy dog. If you're struggling with behavioral issues or just brought home a new puppy, Heart Of Love Pet Care is here to help. Our training philosophy is built on the same foundation as the rest of our business: genuine love, patience, and a commitment to treating every dog like family—not a number. We believe that every dog has the potential to be a well-behaved companion with the right guidance.</p>
              <p>As a small, owner-operated pet care business based in Queens, we understand the specific challenges that New York dog owners face. We don't believe in "one-size-fits-all" training programs that you might find at large commercial chains. Instead, we offer personalized sessions that address your dog's unique personality, their history, and your specific goals as an owner. Whether it's leash pulling on the streets of Astoria, separation anxiety in a Long Island City high-rise, or basic puppy manners, our training is designed to achieve lasting results through positive reinforcement and clear, consistent communication.</p>
              <p>Our "From Chaos to Calm" approach focuses on building a strong, trust-based bond between you and your dog. We believe that training should be an enjoyable experience for both the pet and the owner, not a chore or a source of stress. In the high-energy environment of NYC, it's essential that your dog looks to you for guidance and remains calm under pressure. Our experts work with you in real-world scenarios, ensuring that the skills your dog learns are applicable to your daily life in Queens.</p>
              <p>Heart Of Love Pet Care was started with a passion for pets and a commitment to their well-being. This commitment extends to our training services, where we prioritize the emotional health of the dog above all else. We don't use harsh methods or aversive tools; instead, we use science-based techniques that encourage your dog to make the right choices through rewards and encouragement. This leads to a more confident, well-adjusted pet who is a joy to live with in the city.</p>
              <p>We've helped countless New York City families transform their relationship with their dogs. Our clients appreciate our honest, hands-on approach and the fact that we are always available to answer questions and provide ongoing support. We aren't a large, impersonal franchise—we are your neighbors in Queens, and we are dedicated to helping our local community enjoy the best possible life with their pets.</p>
              <p>In addition to basic obedience, we also specialize in behavior modification for more complex issues. From reactive barking to resource guarding, we have the experience and the patience to help your dog overcome their challenges. Our training sessions in Queens are designed to be practical, effective, and tailored to the unique lifestyle of a New York City dog owner.</p>
              <p>If you're ready to move from chaos to calm, reach out to the team at Heart Of Love Pet Care. We'll work together to create a training plan that fits your lifestyle and helps your dog thrive in the city. Whether you're dealing with a rowdy puppy or a reactive rescue, we have the expertise and the heart to help you succeed.</p>

              <div className="mt-12 p-8 bg-primary/5 rounded-xl border-2 border-primary/20 text-center">
                <h4 className="text-2xl font-black uppercase mb-4">Ready for a better-behaved dog?</h4>
                <p className="mb-6">Contact Heart Of Love Pet Care today to discuss our personalized training and behaviour sessions.</p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <a href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-black uppercase rounded-sm hover:bg-primary/90 transition-colors">Get Free Quote</a>
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

export default BlogPost4;
