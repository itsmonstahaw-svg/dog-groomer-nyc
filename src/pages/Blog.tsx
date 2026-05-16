import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Reviews } from "@/components/Reviews";
import { Process } from "@/components/Process";
import { ServiceAreas } from "@/components/ServiceAreas";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";

const blogPosts = [
  {
    slug: "grooming-guide",
    title: "THE COMPLETE GUIDE TO PROFESSIONAL DOG GROOMING IN QUEENS, NY",
    description:
      "Looking for expert dog grooming in Queens? Discover how Heart Of Love Pet Care keeps your furry friend clean, healthy, and looking their absolute best.",
  },
  {
    slug: "boarding-team",
    title: "YOUR GO-TO TEAM FOR PET BOARDING & HOME BOARDING IN NEW YORK",
    description:
      "Need safe, loving care for your dog while you’re away? Learn how Heart Of Love Pet Care provides stress-free boarding that feels like home.",
  },
  {
    slug: "grooming-health",
    title: "WHY REGULAR GROOMING IS ESSENTIAL FOR YOUR DOG’S HEALTH",
    description:
      "Regular grooming is about more than looks. Discover how consistent grooming sessions at Heart Of Love Pet Care support your dog’s skin, coat, and overall wellbeing.",
  },
  {
    slug: "training-works",
    title: "FROM CHAOS TO CALM: DOG TRAINING THAT ACTUALLY WORKS",
    description:
      "Struggling with bad behaviour or a new puppy? Explore how Heart Of Love Pet Care’s training and behaviour sessions transform dogs across Queens and NYC.",
  },
  {
    slug: "boarding-vs-kennels",
    title: "HOME BOARDING VS. KENNELS: WHICH IS BETTER FOR YOUR DOG?",
    description:
      "Not all boarding is equal. Trust Heart Of Love Pet Care to provide warm, hands-on home boarding so your dog never has to spend a night in a cold kennel.",
  },
  {
    slug: "potty-training",
    title: "HOW TO POTTY TRAIN YOUR DOG: TIPS FROM THE PROS",
    description:
      "Potty training doesn’t have to be a nightmare. Discover proven techniques from the Heart Of Love Pet Care team to help your dog learn fast and stress-free.",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full h-[60vh] flex flex-col items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url("https://vibe.filesafe.space/1777030353190232844/attachments/b368c911-7f25-4632-acad-64db52f092c2.png")`,
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
              className="fill-background"
            />
          </svg>
        </div>

        <div className="relative z-20 flex flex-col items-center text-center px-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white [text-shadow:_0_2px_12px_rgba(0,0,0,0.5)]">
            CHECK OUT OUR BLOG
          </h1>
          <div className="flex items-center gap-2 mt-8">
            {[0, 1, 2].map((i) => (
              <svg
                key={i}
                width="40"
                height="50"
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

      {/* Blog Grid */}
      <section className="py-16 md:py-24 bg-white text-black">
        <div className="w-full max-w-[1200px] mx-auto px-[12px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-white text-black rounded-lg border border-gray-200 shadow-md p-6 flex flex-col hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-base font-black uppercase leading-snug mb-4 flex-grow">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-5">
                  {post.description}
                </p>
                <Link
                  to={`/blog/${post.slug}`}
                  className="text-sm font-black uppercase tracking-wider text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
                >
                  READ FULL POST →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <main>
        <Reviews />
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
