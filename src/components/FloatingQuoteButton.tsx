import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { QuoteForm } from "./QuoteForm";

export const FloatingQuoteButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div data-chat-widget data-widget-id="69ac39e703fc831334516ff9" data-location-id="scriNzyBzNzN4FtsjgfR"></div>

      <div
        className={`fixed bottom-[20px] right-[90px] z-40 transition-all duration-300 transform ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0 pointer-events-none"
        }`}
      >
        <Button
          variant="default"
          className="h-14 px-6 text-base font-bold uppercase tracking-wider bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg rounded-md"
          onClick={() => setIsOpen(true)}
        >
          Get Free Quote
        </Button>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/60" onClick={() => setIsOpen(false)} />
          <div className="relative bg-black border border-white/10 p-6 sm:p-8 rounded-lg shadow-2xl max-w-md w-full">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-white opacity-70 hover:opacity-100 text-xl leading-none"
            >
              ✕
            </button>
            <div className="flex justify-center -mb-2">
              <img
                src="https://vibe.filesafe.space/1777030353190232844/attachments/c896108d-a195-4a99-9db4-723af21b2087.png"
                alt="NYC Hearts of Love Pet Care"
                className="h-32 w-auto object-contain"
              />
            </div>
            <h2 className="text-3xl font-black uppercase text-center text-white mt-4 mb-0 tracking-tight">
              Get A Free Quote
            </h2>
            <p className="text-center text-gray-400 mb-6 text-sm">
              Fill out the form below and we'll get back to you shortly.
            </p>
            <QuoteForm />
          </div>
        </div>
      )}
    </>
  );
};
