import { Navbar } from "@/components/Navbar";
import { Reviews } from "@/components/Reviews";
import { Process } from "@/components/Process";
import { ServiceAreas } from "@/components/ServiceAreas";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";

const blogPosts = [
  {
    title: "WHY HOUSTON RESTAURANTS NEED A DEDICATED COMMERCIAL REFRIGERATION SPECIALIST",
    description:
      "Cover the risks of equipment downtime, food spoilage costs, health code violations, and why a commercial-only specialist like Tri Refrigeration & HVAC is the right call for Houston restaurant owners.",
    href: "/blog/why-houston-restaurants-need-specialist",
  },
  {
    title: "WALK-IN COOLER NOT HOLDING TEMPERATURE? HERE'S WHAT TO DO",
    description:
      "Cover common causes, what business owners should check first, when to call a technician, and how Tri Refrigeration & HVAC serves Houston and surrounding areas.",
    href: "/blog/walk-in-cooler-not-holding-temperature",
  },
  {
    title: "COMMERCIAL HVAC MAINTENANCE: WHY HOUSTON BUSINESSES CAN'T AFFORD TO SKIP IT",
    description:
      "Cover the Houston heat, the cost of unexpected failures, preventative maintenance benefits, and how Tri Refrigeration & HVAC helps commercial properties stay running.",
    href: "/blog/commercial-hvac-maintenance-houston",
  },
  {
    title: "THE TRUE COST OF A BROKEN WALK-IN FREEZER FOR FOOD SERVICE BUSINESSES",
    description:
      "Cover lost stock, health inspections, emergency repair costs, and how fast response from Tri Refrigeration & HVAC protects Houston businesses.",
    href: "/blog/true-cost-broken-walk-in-freezer",
  },
  {
    title: "HVAC & REFRIGERATION IN KATY, SUGAR LAND & THE WOODLANDS: WHAT COMMERCIAL BUSINESSES NEED TO KNOW",
    description:
      "Cover the growth of commercial food service in the Houston suburbs, equipment demands, and how Tri Refrigeration & HVAC serves the wider Houston metro area.",
    href: "/blog/hvac-refrigeration-katy-sugar-land-woodlands",
  },
  {
    title: "HOW TO CHOOSE THE RIGHT COMMERCIAL HVAC & REFRIGERATION TECHNICIAN IN HOUSTON TX",
    description:
      "Cover what to look for: commercial-only experience, insurance, response time, overtime availability, and why Tri Refrigeration & HVAC ticks every box.",
    href: "/blog/choose-right-commercial-hvac-technician-houston",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://vibe.filesafe.space/1778436264577951505/attachments/bae4b4f5-17dc-4e41-a45e-97b195687224.png")',
          }}
        >
          <div className="absolute inset-0 bg-black/60" />
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

        <div className="relative z-20 flex flex-col items-center text-center px-4">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white [text-shadow:_0_2px_12px_rgba(0,0,0,0.5)]">
            CHECK OUT OUR BLOG
          </h1>
          {/* Three downward arrows */}
          <div className="flex items-center gap-2 mt-8">
            {[0, 1, 2].map((i) => (
              <svg
                key={i}
                width="52"
                height="68"
                viewBox="0 0 52 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-90"
              >
                <path
                  d="M26 4 L26 56 M10 40 L26 58 L42 40"
                  stroke="white"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Post Grid */}
      <section className="py-16 md:py-24 bg-white text-black">
        <div className="w-full max-w-[1200px] mx-auto px-[12px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="bg-white text-black rounded-lg border border-gray-200 shadow-md p-6 flex flex-col hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-base font-black uppercase leading-snug mb-4 flex-grow">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {post.description}
                </p>
                <a
                  href={post.href}
                  className="text-sm font-black uppercase tracking-wider text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                >
                  READ FULL POST →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <main>
        <Reviews topWaveColor="white" />
        <Process />
        <ServiceAreas />
        <CTA />
      </main>

      <Footer />
      <FloatingQuoteButton />
    </div>
  );
};

export default Blog;
