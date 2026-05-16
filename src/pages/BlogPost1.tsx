import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { CTA } from "@/components/CTA";

const BlogPost1 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative w-full min-h-[60vh] flex items-center justify-center text-center pt-32 pb-24 overflow-hidden">
          <div 
            className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url("https://vibe.filesafe.space/1778436264577951505/attachments/bae4b4f5-17dc-4e41-a45e-97b195687224.png")' }}
          >
            <div className="absolute inset-0 bg-black/65"></div>
          </div>

          <div className="w-full max-w-[1000px] mx-auto px-[12px] relative z-20 space-y-5">
            <span className="inline-block text-primary font-black uppercase tracking-[0.3em] text-sm border border-primary/50 px-4 py-1 rounded-sm">
              BLOG
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-[1.1] tracking-tight text-primary [text-shadow:_0_2px_10px_rgba(0,0,0,0.5)]">
              Why Houston Restaurants & Food Service Businesses Need A Dedicated Refrigeration Specialist | Tri Refrigeration & HVAC
            </h1>
          </div>

          {/* Bottom wave */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="relative block w-full h-[80px] md:h-[120px]"
            >
              <path
                d="M0 120 L0 60 C 150 -20 250 140 450 70 C 650 0 750 120 900 80 C 1050 40 1150 20 1200 50 L 1200 120 Z"
                className="fill-white"
              />
            </svg>
          </div>
        </section>

        {/* Body Content */}
        <section className="py-16 bg-white text-black">
          <div className="px-4 max-w-[800px] mx-auto w-full">
            <div className="prose prose-lg max-w-none text-zinc-800 space-y-6 leading-relaxed">
          <p>
            Operating a restaurant, commercial kitchen, or food service business in Houston is no small feat. Between managing staff, ensuring food quality, and keeping customers happy, the last thing you need is a refrigeration breakdown. In the fast-paced food service industry, reliable refrigeration is the backbone of your business. When your walk-in cooler or commercial freezer goes down, the consequences are immediate and severe. That's why Houston restaurant owners and commercial property managers need a dedicated commercial refrigeration specialist like Tri Refrigeration & HVAC on speed dial.
          </p>
          <p>
            The story of Tri Refrigeration & HVAC starts with a deep commitment to doing the job right. Our founder, Tri Nung, spent years working on massive, highly complex commercial refrigeration systems at the supermarket level. In those high-demand commercial environments, there is zero room for error. A single failure can mean tens of thousands of dollars in spoiled inventory. After building deep expertise in these intense settings, Tri decided to go independent. He founded Tri Refrigeration & HVAC to bring that same elite level of skill and precision directly to Houston businesses and residential homeowners alike. As a small, owner-operated business, we are built entirely on reliability, transparency, and unmatched technical skill.
          </p>
          <p>
            The risks of equipment downtime go far beyond the inconvenience of a warm kitchen. The most immediate threat is food spoilage. Thousands of dollars in inventory can be lost in a matter of hours if a walk-in freezer fails. For a busy Houston restaurant, this means not only the cost of replacing the food but also the lost revenue from being unable to serve your menu. The financial hit from a single major breakdown can be devastating, especially for independent eateries operating on tight margins. When you call Tri Refrigeration & HVAC, you're getting a team that understands what's at stake.
          </p>
          <p>
            Furthermore, compromised refrigeration puts you at serious risk of health code violations. The Houston Health Department is strict about food storage temperatures for a good reason—foodborne illnesses can ruin a restaurant's reputation overnight. If an inspector finds that your commercial coolers are not holding the required temperatures, you could face hefty fines or even a forced closure. A dedicated commercial refrigeration specialist like Tri Refrigeration & HVAC ensures your equipment is running optimally, keeping you compliant and your customers safe.
          </p>
          <p>
            This is where the distinction between a general handyman and a dedicated specialist becomes crucial. Residential technicians may understand the basics of air conditioning, but commercial refrigeration systems are vastly more complex. They require specialized knowledge, tools, and parts. Tri Nung's background in supermarket-level refrigeration means Tri Refrigeration & HVAC can handle the most complex systems with ease. We understand the specific demands of supermarkets, restaurants, and food service businesses in Houston. We know that a broken commercial oven or walk-in cooler isn't just an inconvenience; it's a business emergency.
          </p>
          <p>
            When you partner with Tri Refrigeration & HVAC, you are getting a team that is fully insured and experienced in handling the heavy-duty equipment your Houston restaurant relies on. We offer fast response times and overtime availability because we know breakdowns don't just happen between 9 and 5. Whether it's a malfunctioning ice machine during the Friday dinner rush or a walk-in cooler that quits on a Sunday morning, our technicians are ready to get your kitchen back up and running. 
          </p>
          <p>
            Don't leave the heart of your restaurant's operations to chance or to technicians who don't specialize in high-demand systems. Tri Refrigeration & HVAC is proud to serve the Houston community, bringing supermarket-level expertise to local restaurants, commercial kitchens, and even residential homeowners who demand the best. By choosing a specialist, you minimize downtime, protect your inventory, and ensure your Houston business continues to thrive.
          </p>
          <p className="font-bold text-xl pt-8">
            Is your restaurant's refrigeration equipment in need of expert attention? Call Tri Refrigeration & HVAC today at (713) 909-7745 or request a free quote to schedule a service!
          </p>
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