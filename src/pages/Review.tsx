import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceHero } from "@/components/ServiceHero";
import { SITE } from "@/lib/site";

// Direct "leave a review" page (/review): the review survey on its own, for links sent to customers.
// The public reviews list lives at /reviews.
const Review = () => {
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
            { name: "Leave a Review", href: "/review" },
          ]}
          eyebrow="Your Feedback"
          title="Leave Us a Review"
          sub="We value your feedback! Please take a moment to share your experience with us."
          noButtons
        />

        <section className="py-14 md:py-16" style={{ backgroundColor: "#F4F6F9" }}>
          <div className="w-full max-w-[720px] mx-auto px-[12px]">
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-4 md:p-6">
              <iframe
                src={SITE.reviewSurveyUrl}
                style={{ border: "none", width: "100%", height: "600px", borderRadius: "10px" }}
                scrolling="no"
                id="bVJmpV7IwCk5H0Trl0UN"
                title="Leave a review"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Review;
