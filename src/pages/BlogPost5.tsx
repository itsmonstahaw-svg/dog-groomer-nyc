import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { CTA } from "@/components/CTA";

const BlogPost5 = () => {
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
              HOME BOARDING VS. KENNELS: WHICH IS BETTER FOR YOUR DOG?
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
              <p>When you're planning a trip away from New York City, one of the biggest decisions you'll make is where your dog will stay. Traditionally, the choice was limited to commercial kennels. However, in recent years, home boarding has emerged as a far more compassionate and personalized alternative. At Heart Of Love Pet Care in Queens, NY, we firmly believe that home boarding is the superior choice for the vast majority of dogs, and our entire business is built around providing that safe, loving environment. We treat every dog like family—not a number—and that is the core of our brand story and our commitment to the New York pet community.</p>
              <p>The primary difference between a commercial kennel and the home boarding offered by Heart Of Love Pet Care is the level of individual attention and comfort. In a kennel, dogs are often kept in cages or runs for the majority of the day, with limited human interaction and a noisy, high-stress environment that can be overwhelming. For a dog used to the comforts of a New York apartment, this can be incredibly traumatic and lead to behavioral issues. In contrast, our home boarding service welcomes your dog into a real home where they are treated like a member of the family.</p>
              <p>Heart Of Love Pet Care is a small, owner-operated business based right here in Queens. This means that when your dog stays with us, they aren't just another client; they are our guest. We maintain their regular feeding and walking schedule, ensuring that their transition away from you is as seamless as possible. Whether it's a walk through the local parks of Queens or a quiet evening on the sofa, we provide the same level of care and affection you do.</p>
              <p>For many New York City dogs, the quiet and familiar atmosphere of a home is essential for their happiness. Senior dogs, puppies, and dogs with anxiety particularly thrive in our home boarding environment. We provide a "safe haven" in the city where they can relax and feel secure while you are away. You won't have to worry about your pet being stressed by the constant barking and industrial feel of a large-scale NYC kennel.</p>
              <p>Safety and hygiene are also paramount at Heart Of Love Pet Care. Because we only board a small number of dogs at a time, we can maintain a much higher standard of cleanliness and supervision than a large kennel. We are always present to monitor our guests, ensuring that playtime is safe and that every dog is getting the individual attention they need.</p>
              <p>Furthermore, we understand that every dog has unique needs and preferences. During our initial consultation, we take the time to learn about your dog's personality, their medical history, and any specific instructions you have for their care. This personalized approach ensures that your dog's stay in Queens is as enjoyable and stress-free as possible.</p>
              <p>When it comes to your dog's happiness, the choice is clear. Skip the cold, impersonal kennels and choose the warm, loving home boarding experience provided by Heart Of Love Pet Care. We are dedicated to giving your dog a safe and joyful "home away from home" in New York. Join our family today and experience the difference that compassionate, personalized care can make.</p>

              <div className="mt-12 p-8 bg-primary/5 rounded-xl border-2 border-primary/20 text-center">
                <h4 className="text-2xl font-black uppercase mb-4">Choose the better way to board</h4>
                <p className="mb-6">Join the Heart Of Love Pet Care family and give your dog the comfort of home boarding.</p>
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

export default BlogPost5;
