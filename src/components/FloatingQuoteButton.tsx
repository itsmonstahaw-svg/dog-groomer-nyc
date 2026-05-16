import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "./QuoteForm";
import { X } from "lucide-react";

export const FloatingQuoteButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating button */}
      <div
        className={`fixed bottom-[20px] right-[90px] z-40 transition-all duration-300 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
        }`}
      >
        <Button
          onClick={() => setIsOpen(true)}
          className="h-10 px-4 text-sm font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg rounded-md"
        >
          GET A FREE QUOTE
        </Button>
      </div>

      {/* Modal overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/70" onClick={() => setIsOpen(false)} />
          <div className="relative bg-black border border-white/10 p-6 sm:p-8 rounded-lg shadow-2xl w-full max-w-md">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white opacity-70 hover:opacity-100"
            >
              <X className="h-5 w-5" />
            </button>
            <div className="flex justify-center mb-4">
              <img
                src="https://vibe.filesafe.space/1778436264577951505/attachments/1a1d7288-f458-45eb-9f31-db5f96aae826.png"
                alt="Tri Refrigeration & HVAC Logo"
                className="h-16 w-auto object-contain mix-blend-lighten"
              />
            </div>
            <h2 className="text-3xl font-black uppercase text-center text-white mb-2 tracking-tight">
              GET A FREE QUOTE
            </h2>
            <p className="text-center text-gray-400 mb-6">
              Fill out the form below and we'll get back to you shortly.
            </p>
            <QuoteForm />
          </div>
        </div>
      )}
    </>
  );
};

export default FloatingQuoteButton;
