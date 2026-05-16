import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { CTA } from "@/components/CTA";

const BlogPost6 = () => {
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
              HOW TO POTTY TRAIN YOUR DOG: TIPS FROM THE PROS
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
              <p>Potty training is often the most challenging aspect of bringing a new dog into a New York City home. Navigating stairs, elevators, and busy Queens sidewalks adds an extra layer of complexity to the process that can frustrate even the most patient pet parent. At Heart Of Love Pet Care, we've helped countless NYC owners successfully potty train their pets through a combination of expertise, patience, and love. As a small, owner-operated business built on a genuine love for animals, we believe that potty training should be a positive, bonding experience. We treat every dog like family—not a number—and that compassionate approach is the key to our success.</p>
              <p>The key to successful potty training in the city is consistency and a rock-solid routine. Dogs thrive on predictability, and this is especially true when it comes to their bathroom habits. At Heart Of Love Pet Care, we recommend establishing a strict schedule for meals, playtime, and outdoor trips. In a busy environment like New York City, it's essential to identify a consistent "potty spot" near your home in Queens where your dog feels safe and comfortable.</p>
              <p>Positive reinforcement is the most effective tool in your training arsenal. When your dog successfully goes potty outside, celebrate with plenty of praise, affection, and a high-value treat. We believe in treating every dog like family, which means using patience and encouragement rather than punishment or frustration. If accidents happen—and they will—it's important to remain calm and simply clean up the area with an enzymatic cleaner to remove the scent.</p>
              <p>Supervision is another critical component of the Heart Of Love Pet Care approach. When you're at home in your NYC apartment, keep a close eye on your dog for signs that they need to go, such as sniffing, circling, or suddenly becoming restless. If you can't supervise them directly, consider using a crate or a small, puppy-proofed area to prevent accidents. This "proactive" approach ensures that your dog has the best chance of success and helps to establish good habits early on.</p>
              <p>Our brand story is rooted in the belief that every dog can learn with the right guidance, love, and consistency. We understand that every dog's learning pace is different, and we are here to provide the personalized support and expertise you need to succeed. Whether you're a first-time owner in Astoria or an experienced pet parent in Long Island City, our professional tips are designed to help you and your dog find harmony in the city.</p>
              <p>In addition to schedule and reinforcement, we also emphasize the importance of understanding your dog's body language. Learning to read the subtle cues that your pet gives before they need to go can save you a lot of cleanup time and help to reinforce their training faster. At Heart Of Love Pet Care, we believe that education is a key part of our service, and we are committed to providing you with the knowledge you need to be a successful pet parent in New York City.</p>
              <p>At Heart Of Love Pet Care, we are more than just a service; we are your partners in pet ownership. If you need hands-on help with potty training or any other aspect of pet care, our owner-operated team is always here for you. Join the Heart Of Love family today and see how our personalized, compassionate approach can make a world of difference for you and your pet.</p>

              <div className="mt-12 p-8 bg-primary/5 rounded-xl border-2 border-primary/20 text-center">
                <h4 className="text-2xl font-black uppercase mb-4">Need a hand with training?</h4>
                <p className="mb-6">Reach out to Heart Of Love Pet Care today and let our pros help you and your dog succeed.</p>
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

export default BlogPost6;
