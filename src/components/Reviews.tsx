import { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Phone, Quote, Star, X } from "lucide-react";
import { QuoteModal } from "./QuoteModal";
import { SITE, reviewCountLabel } from "@/lib/site";

export const GoogleG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} aria-label="Google">
    <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.5 5.4 2.6 13.2l7.9 6.1C12.4 13.6 17.7 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.5 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.7c-.6 3-2.3 5.5-4.8 7.2l7.5 5.8c4.4-4.1 7.1-10.1 7.1-17.5z" />
    <path fill="#FBBC05" d="M10.5 28.7A14.5 14.5 0 0 1 9.5 24c0-1.6.3-3.2.8-4.7l-7.9-6.1A24 24 0 0 0 0 24c0 3.9.9 7.5 2.6 10.8l7.9-6.1z" />
    <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.5-5.8c-2.1 1.4-4.8 2.3-8.4 2.3-6.3 0-11.6-4.1-13.5-9.8l-7.9 6.1C6.5 42.6 14.6 48 24 48z" />
  </svg>
);

export type ReviewItem = { name: string; text: string };

export const REVIEWS: ReviewItem[] = [
  {
    name: "Finn Russell",
    text: "They did an amazing job with my golden retriever! He came out smelling fantastic, perfectly trimmed, and so happy. The staff is incredibly gentle and caring.",
  },
  {
    name: "Sarah Jenkins",
    text: "My rescue dog is usually terrified of the groomer, but the team here was so patient and sweet with her. She looks beautiful and wasn't stressed at all!",
  },
  {
    name: "Michael Thompson",
    text: "Best grooming salon in town. They always listen to exactly how I want my poodle cut, and their blueberry facial leaves him smelling great for weeks.",
  },
];

const Stars = ({ size = "w-4 h-4" }: { size?: string }) => (
  <span className="flex">
    {[1, 2, 3, 4, 5].map((i) => (
      <Star key={i} className={`${size} fill-yellow-400 text-yellow-400`} />
    ))}
  </span>
);

// One review card: quote mark, stars, text limited to 5 lines with a "See more" toggle, reviewer + Google.
export const ReviewCard = ({ review }: { review: ReviewItem }) => {
  const textRef = useRef<HTMLParagraphElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [overflows, setOverflows] = useState(false);

  useEffect(() => {
    const measure = () => {
      const el = textRef.current;
      if (!el || expanded) return;
      setOverflows(el.scrollHeight > el.clientHeight + 1);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [review.text, expanded]);

  return (
    <div className="relative h-full bg-white rounded-2xl p-6 flex flex-col shadow-xl">
      <Quote className="absolute top-5 right-5 w-8 h-8 text-primary/15" fill="currentColor" strokeWidth={0} />
      <Stars />
      <div className="mt-4 grow">
        <p ref={textRef} className={`text-gray-800 text-[15px] leading-relaxed ${expanded ? "" : "line-clamp-5"}`}>"{review.text}"</p>
        {(overflows || expanded) && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="mt-2 text-sm font-bold text-primary hover:underline"
          >
            {expanded ? "See less" : "See more"}
          </button>
        )}
      </div>
      <div className="flex items-center gap-3 mt-6 pt-4 border-t border-gray-100">
        <span className="w-10 h-10 rounded-full bg-primary/10 text-primary font-black flex items-center justify-center shrink-0">
          {review.name.charAt(0)}
        </span>
        <div className="min-w-0 grow">
          <p className="text-gray-900 font-bold text-sm leading-tight truncate">{review.name}</p>
          <p className="text-xs text-gray-500">Google review</p>
        </div>
        <GoogleG className="w-5 h-5 shrink-0" />
      </div>
    </div>
  );
};

// Home page "What Our Clients Say": rating summary on the left, review carousel on the right, CTA strip below.
export const Reviews = () => {
  const [isReviewOpen, setIsReviewOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", slidesToScroll: 1 });
  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const sync = useCallback(() => {
    if (!emblaApi) return;
    setSnaps(emblaApi.scrollSnapList());
    setSelected(emblaApi.selectedScrollSnap());
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    sync();
    emblaApi.on("select", sync).on("reInit", sync);
    return () => {
      emblaApi.off("select", sync).off("reInit", sync);
    };
  }, [emblaApi, sync]);

  const navButton =
    "w-10 h-10 rounded-full border border-white/25 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white";

  return (
    <section className="relative py-16 md:py-24 overflow-hidden border-b border-border/40">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("https://vibe.filesafe.space/1777030353190232844/assets/5dbd1929-8c4c-454f-b006-fd4679ef0067.png")' }}
      ></div>
      <div className="absolute inset-0 z-0" style={{ backgroundColor: "rgba(5, 11, 31, 0.88)" }}></div>

      <div className="w-full max-w-[960px] mx-auto px-[12px] relative z-10">
        <div className="max-w-2xl">
          <p className="text-primary text-xs font-black uppercase tracking-[0.2em]">What Our Clients Say</p>
          <h2 className="mt-3 text-3xl md:text-4xl font-black tracking-tight leading-tight text-white">Reviews From NYC Dog Owners</h2>
          <div className="w-16 h-1 bg-primary mt-5"></div>
        </div>

        <div className="mt-10 grid lg:grid-cols-[260px_minmax(0,1fr)] gap-6 items-stretch">
          {/* Rating summary */}
          <div className="rounded-2xl border border-white/10 p-6 flex flex-col" style={{ backgroundColor: "rgba(255,255,255,0.05)" }}>
            <div className="flex items-center gap-2">
              <GoogleG className="w-6 h-6" />
              <span className="text-sm font-bold text-gray-300">Google Rating</span>
            </div>
            <p className="mt-4 text-6xl font-black text-white leading-none">{SITE.rating}</p>
            <div className="mt-3">
              <Stars size="w-5 h-5" />
            </div>
            <a href={SITE.googleUrl} target="_blank" rel="noreferrer" className="mt-2 text-sm text-sky-300 hover:underline">
              Based on {reviewCountLabel}
            </a>
            <div className="mt-6 lg:mt-auto pt-6 space-y-2.5">
              <button
                type="button"
                onClick={() => setIsReviewOpen(true)}
                className="w-full inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-bold h-11 text-sm rounded-md transition-colors"
              >
                Leave a Review
              </button>
              <a
                href="/reviews"
                className="w-full inline-flex items-center justify-center gap-2 border border-white/25 hover:bg-white/10 text-white font-bold h-11 text-sm rounded-md transition-colors"
              >
                See All Reviews <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Carousel */}
          <div className="min-w-0 flex flex-col">
            <div className="overflow-hidden -mx-2.5" ref={emblaRef}>
              <div className="flex">
                {REVIEWS.map((review) => (
                  <div key={review.name} className="min-w-0 shrink-0 grow-0 basis-full md:basis-1/2 px-2.5">
                    <ReviewCard review={review} />
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between gap-4 mt-6">
              <div className="flex items-center gap-2">
                {snaps.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => emblaApi?.scrollTo(i)}
                    aria-label={`Go to reviews ${i + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${i === selected ? "w-8 bg-primary" : "w-2 bg-white/40 hover:bg-white/70"}`}
                  />
                ))}
              </div>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => emblaApi?.scrollPrev()} disabled={!canPrev} aria-label="Previous reviews" className={navButton}>
                  <ArrowLeft className="w-4 h-4" />
                </button>
                <button type="button" onClick={() => emblaApi?.scrollNext()} disabled={!canNext} aria-label="Next reviews" className={navButton}>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* CTA strip */}
        <div className="mt-10 rounded-2xl bg-white px-6 py-5 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl">
          <div>
            <p className="text-lg font-black text-black">Ready to become our next happy client?</p>
            <p className="text-sm text-zinc-500">Free quote, no obligation.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsQuoteOpen(true)}
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-md h-11 px-6 transition-colors"
            >
              Get A Free Quote
            </button>
            <a
              href={SITE.phoneHref}
              className="inline-flex items-center justify-center gap-2 border border-gray-200 text-black hover:border-primary hover:text-primary font-bold rounded-md h-11 px-6 transition-colors"
            >
              <Phone className="w-4 h-4" />
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      <QuoteModal open={isQuoteOpen} onClose={() => setIsQuoteOpen(false)} />

      {/* Review Modal */}
      {isReviewOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm" onClick={() => setIsReviewOpen(false)}>
          <div
            className="relative bg-black border border-white/10 rounded-2xl shadow-2xl w-full max-w-[600px] p-0 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsReviewOpen(false)}
              aria-label="Close"
              className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <iframe
              src={SITE.reviewSurveyUrl}
              style={{ border: "none", width: "100%", height: "600px" }}
              scrolling="no"
              id="bVJmpV7IwCk5H0Trl0UN"
              title="Leave a Review"
            />
          </div>
        </div>
      )}
    </section>
  );
};
