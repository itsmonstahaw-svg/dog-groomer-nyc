import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { CTA } from "@/components/CTA";

const BlogPost3 = () => {
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
              Commercial & Residential HVAC Maintenance: Why Houston Businesses And Homeowners Can't Afford To Skip It | Tri Refrigeration & HVAC
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
            In Houston, air conditioning isn't a luxury; it's an absolute necessity. The brutal summer heat and oppressive humidity place an immense strain on both commercial and residential HVAC systems. For business owners, ensuring the comfort of customers and employees is critical to daily operations. For homeowners, a functioning AC is vital for safety and comfort. Yet, many people treat HVAC maintenance as an optional expense, waiting until a system completely fails before calling a technician. This reactive approach is a costly mistake that Houston businesses and homeowners simply cannot afford.
          </p>
          <p>
            At Tri Refrigeration & HVAC, we've seen firsthand the damage caused by neglected maintenance. Our founder, Tri Nung, spent years working on massive commercial refrigeration and HVAC systems at the supermarket level. In those high-demand commercial environments, preventative maintenance isn't just a good idea—it's mandatory to prevent catastrophic financial losses. Tri took that high-level expertise and went independent, founding Tri Refrigeration & HVAC to bring supermarket-level skill directly to Houston businesses and residential clients. As a small, owner-operated, fully insured company, we are dedicated to doing the job right and keeping your systems running flawlessly.
          </p>
          <p>
            The true cost of an unexpected HVAC failure goes far beyond the repair bill. When your AC goes out in the middle of a Houston July, the impact on your business is immediate. Customers will quickly leave a sweltering store or restaurant, resulting in lost sales. Employee productivity plummets, and you may be forced to close your doors entirely until repairs are made. For homeowners, a broken AC means sleepless nights and potential health risks for vulnerable family members. The financial and personal losses from a single breakdown often exceed the cost of an entire year of preventative maintenance.
          </p>
          <p>
            Preventative maintenance is the key to avoiding these catastrophic failures. During a routine maintenance visit from Tri Refrigeration & HVAC, our qualified technicians will inspect, clean, and tune up your entire system. We check refrigerant levels, calibrate thermostats, inspect electrical connections, and clean dirty condenser and evaporator coils. This proactive approach catches minor issues—like a worn belt or a failing capacitor—before they turn into major, expensive breakdowns.
          </p>
          <p>
            Furthermore, regular maintenance significantly improves the energy efficiency of your HVAC system. A system clogged with dirt and struggling with low refrigerant has to work much harder to cool your building or home, driving up your monthly utility bills. In a large commercial space, these inefficiencies add up quickly. By keeping your equipment running at peak performance, preventative maintenance from Tri Refrigeration & HVAC pays for itself through lower energy costs month after month.
          </p>
          <p>
            Tri Refrigeration & HVAC understands the unique demands placed on cooling systems in the Houston area. We offer comprehensive maintenance plans tailored to the specific needs of your business or home. Whether we are servicing a complex rooftop unit for a commercial property owner or a central AC system for a residential homeowner, we apply the same rigorous standards. We work around your schedule to minimize disruption to your operations or daily life.
          </p>
          <p>
            Don't wait for the Houston heat to expose the weaknesses in your HVAC system. Investing in regular maintenance extends the lifespan of your expensive equipment, lowers your energy bills, and provides peace of mind knowing your property will stay cool and comfortable year-round. Trust the experts at Tri Refrigeration & HVAC to protect your investment.
          </p>
          <p className="font-bold text-xl pt-8">
            Protect your property from unexpected breakdowns. Call Tri Refrigeration & HVAC today at (713) 909-7745 or request a free quote to set up a customized HVAC maintenance plan!
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

export default BlogPost3;