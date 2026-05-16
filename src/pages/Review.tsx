import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Review = () => {
  useEffect(() => {
    // Dynamically load the script for the form
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
              Leave Us A Review
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We value your feedback! Please take a moment to share your experience with us.
            </p>
          </div>
          
          <div className="bg-card rounded-xl p-4 md:p-8 shadow-sm border border-border">
            <iframe 
              src="https://api.leadconnectorhq.com/widget/survey/S7cNKNChxMYfpTUIAXdf" 
              style={{ border: "none", width: "100%", height: "600px", borderRadius: "10px" }} 
              scrolling="no" 
              id="S7cNKNChxMYfpTUIAXdf" 
              title="survey"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Review;
