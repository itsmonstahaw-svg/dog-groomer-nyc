import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

const Discount = () => {
  useEffect(() => {
    // Dynamically load the script for the form
    const script = document.createElement("script");
    script.src = "https://link.msgsndr.com/js/form_embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-primary">
              Get Your Special Discount
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below to claim your exclusive discount on our premium commercial and residential HVAC & refrigeration services.
            </p>
          </div>
          
          <div className="bg-card rounded-xl p-4 md:p-8 shadow-sm border border-border">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/zK4pocVnnDe4Uet3yc9o"
              style={{ width: "100%", height: "100%", border: "none", borderRadius: "10px" }}
              id="inline-zK4pocVnnDe4Uet3yc9o"
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="Discount Form "
              data-height="800"
              data-layout-iframe-id="inline-zK4pocVnnDe4Uet3yc9o"
              data-form-id="zK4pocVnnDe4Uet3yc9o"
              title="Discount Form "
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Discount;
