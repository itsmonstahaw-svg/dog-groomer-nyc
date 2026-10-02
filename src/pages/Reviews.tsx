import { useEffect, useState } from "react";
import { Star, X } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingQuoteButton } from "@/components/FloatingQuoteButton";
import { ServiceHero } from "@/components/ServiceHero";
import { CTA } from "@/components/CTA";
import { GoogleG, REVIEWS, ReviewCard } from "@/components/Reviews";
import { SITE, reviewCountLabel } from "@/lib/site";

// Reviews page: every review on file in one grid (not a carousel), plus "Leave Us a Review".
const ReviewsPage = () => {
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />
      <main className="flex-grow">
        <ServiceHero
          crumbs={[
            { name: "Home", href: "/" },
            { name: "Reviews", href: "/reviews" },
          ]}
          eyebrow="Customer Reviews"
          title="What NYC Dog Owners Say"
          sub="Our reputation is built one happy dog at a time. Here's what pet parents say about Heart Of Love Pet Care."
          image="https://vibe.filesafe.space/1777030353190232844/assets/5dbd1929-8c4c-454f-b006-fd4679ef0067.png"
          noButtons
        />

        <section className="py-14 md:py-16 bg-white text-black">
          <div className="w-full max-w-[960px] mx-auto px-[12px]">
            <div className="flex items-center justify-center gap-3 mb-10">
              <GoogleG className="w-6 h-6" />
              <span className="font-black text-lg">{SITE.rating}</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}
              </div>
              <a href={SITE.googleUrl} target="_blank" rel="noreferrer" className="font-bold text-primary hover:underline">
                {reviewCountLabel}
              </a>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {REVIEWS.map((review) => (
                <div key={review.name} className="[&>div]:shadow-md [&>div]:border [&>div]:border-gray-200">
                  <ReviewCard review={review} />
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={() => setIsReviewOpen(true)}
                className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-wider h-12 px-8 text-sm rounded transition-colors"
              >
                Leave Us a Review
              </button>
            </div>
          </div>
        </section>

        <CTA />
      </main>
      <Footer />
      <FloatingQuoteButton />

      {isReviewOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70" onClick={() => setIsReviewOpen(false)}>
          <div
            className="relative bg-black border border-white/10 rounded-lg shadow-2xl w-full max-w-[600px] p-0 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsReviewOpen(false)}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 text-white opacity-80 hover:opacity-100 transition-opacity"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe src={SITE.reviewSurveyUrl} style={{ border: "none", width: "100%", height: "600px" }} scrolling="no" title="Leave a review" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ReviewsPage;
