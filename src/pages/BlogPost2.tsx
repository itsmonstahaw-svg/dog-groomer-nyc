import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { CTA } from "@/components/CTA";

const BlogPost2 = () => {
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
              YOUR GO-TO TEAM FOR PET BOARDING & HOME BOARDING IN NEW YORK
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
              <p>Leaving your dog behind when you travel can be one of the most stressful experiences for a pet owner. You want to know that your furry family member is safe, comfortable, and loved. In the fast-paced environment of New York City, finding a boarding solution that doesn't feel like a cold, industrial kennel can be a challenge. That's where Heart Of Love Pet Care comes in. We are your go-to team for pet boarding and home boarding in New York, offering a personalized experience that prioritizes your dog's emotional and physical well-being above all else.</p>
              <p>Heart Of Love Pet Care is a small, owner-operated pet care business based in Queens, New York. We were built on a genuine love for animals and a commitment to treating every dog like family—not just a number. When you choose our home boarding service, your dog isn't just staying in a facility; they are being welcomed into a loving home environment where they receive one-on-one attention, plenty of playtime, and the same comforts they enjoy at home. This is the Heart Of Love Pet Care difference: we provide a "home away from home" that minimizes the stress of separation for both you and your pet, ensuring they are happy and healthy while you are away.</p>
              <p>Our story began with a simple belief: every dog deserves to be treated with dignity and affection, especially when their owners are away. In the concrete jungle of NYC, we provide a warm, soft place for your dog to land. Whether you live in Manhattan, Brooklyn, or right here in Queens, our boarding services are designed to maintain your dog's routine and keep them happy. We understand that New York City dogs have unique needs, from their walking schedules to their socialization habits, and we adapt our care to meet those needs perfectly. We believe that boarding should be a vacation for your pet, not a source of anxiety.</p>
              <p>Safety is our top priority at Heart Of Love Pet Care. Our home boarding environment is secure and monitored, and we are experienced in handling dogs of all sizes and temperaments. From the moment you drop off your pet to the moment you return, you'll receive regular updates and photos, giving you peace of mind while you're away from NYC. We limit the number of dogs we board at any given time to ensure that each guest receives the focused care they deserve. This owner-operated approach allows us to maintain a level of quality and safety that larger commercial kennels in New York simply cannot match.</p>
              <p>Choosing Heart Of Love Pet Care means choosing a team that truly cares. We don't believe in the one-size-fits-all approach of large commercial facilities. Instead, we offer a boutique boarding experience that is as unique as your dog. Our commitment to the Queens community and the wider New York City area is reflected in the trust our clients place in us year after year. We treat every dog as if they were our own, ensuring they are well-fed, well-exercised, and most importantly, well-loved during their stay.</p>
              <p>We also understand the importance of socialization and mental stimulation. During their stay at our Queens home boarding facility, your dog will have opportunities to interact with other friendly pets in a controlled and supervised manner. We provide structured play, enrichment activities, and plenty of quiet time for rest. This balanced approach ensures that your dog returns to you happy, relaxed, and well-adjusted.</p>
              <p>Whether you're heading out on a business trip or a well-deserved vacation, trust Heart Of Love Pet Care to provide the safe, loving, and professional boarding your dog needs. We are more than just a service; we are your pet's second family in New York. Join the hundreds of satisfied pet parents across Queens and NYC who have made us their first choice for home boarding.</p>

              <div className="mt-12 p-8 bg-primary/5 rounded-xl border-2 border-primary/20 text-center">
                <h4 className="text-2xl font-black uppercase mb-4">Planning a trip?</h4>
                <p className="mb-6">Book your dog's stay with Heart Of Love Pet Care and enjoy your travels with total peace of mind.</p>
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

export default BlogPost2;
