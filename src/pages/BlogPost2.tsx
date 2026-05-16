import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { CTA } from "@/components/CTA";

const BlogPost2 = () => {
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
              Walk-In Cooler Not Holding Temperature? Here's What To Do | Tri Refrigeration & HVAC
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
            A walk-in cooler that isn't holding the correct temperature is a nightmare scenario for any Houston food service business. When the internal temperature begins to rise, the clock starts ticking on your perishable inventory. Before you panic and assume the worst, there are a few common causes you can investigate. Understanding what to look for can sometimes save you a service call, or at least help you provide valuable information to a commercial refrigeration specialist like Tri Refrigeration & HVAC when they arrive.
          </p>
          <p>
            Tri Refrigeration & HVAC was built to handle exactly these kinds of high-stakes situations. Our founder, Tri Nung, spent years working on complex commercial refrigeration systems at the supermarket level. In a supermarket, a failing walk-in cooler is a massive financial liability. Tri honed his skills in these intense, high-demand commercial environments before going independent to bring his expertise directly to Houston businesses and residential homeowners. Today, Tri Refrigeration & HVAC is a fully insured, small, owner-operated business built on reliability and doing the job right the first time.
          </p>
          <p>
            The first and most obvious thing to check is the door. In a busy commercial kitchen, doors are constantly being opened and closed, and sometimes they get propped open or don't latch properly. Check the door seals (gaskets) for any tears, cracks, or wear. A damaged gasket allows warm Houston air to seep in and cold air to escape, forcing the compressor to work overtime. If the door isn't sealing tight, that's often the culprit behind a slow rise in temperature.
          </p>
          <p>
            Next, inspect the evaporator coils inside the cooler. Are they iced over? Ice buildup acts as an insulator, preventing the coils from absorbing heat from the air inside the box. This is often caused by a blocked drain line, poor airflow due to overstocked shelves, or a failing defrost cycle. If you see significant ice, you've found the immediate problem. However, you'll likely need a professional from Tri Refrigeration & HVAC to diagnose the underlying cause to prevent it from happening again.
          </p>
          <p>
            Another common issue is a dirty condenser coil. The condenser unit is responsible for releasing the heat absorbed from inside the cooler. In the dusty, humid Houston environment, these coils can quickly become clogged with dirt, grease, and debris. When the coils are blocked, the system can't dissipate heat effectively, leading to poor cooling performance and eventual compressor failure. Regular maintenance from Tri Refrigeration & HVAC can keep these coils clean and your system running efficiently.
          </p>
          <p>
            If you've checked the door, ensured the coils aren't iced over, and the condenser looks clean, but the temperature is still rising, it's time to call in the experts. You could be dealing with a refrigerant leak, a failing compressor, a bad thermostat, or an electrical issue. These are not DIY fixes. Attempting to repair a complex commercial refrigeration system without the proper training and tools can cause further damage and void your warranties. With Tri Nung's supermarket-level experience, Tri Refrigeration & HVAC can quickly and accurately diagnose even the most complex issues.
          </p>
          <p>
            When you need fast, reliable service, Tri Refrigeration & HVAC is here for Houston restaurants, commercial property owners, and homeowners. We specialize in commercial refrigeration and HVAC, meaning we have the expertise to quickly repair your walk-in cooler. We offer emergency response and overtime availability because we know your inventory can't wait.
          </p>
          <p className="font-bold text-xl pt-8">
            Is your walk-in cooler struggling to keep up? Don't risk your inventory. Call Tri Refrigeration & HVAC at (713) 909-7745 or request a free quote for immediate, professional service!
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

export default BlogPost2;