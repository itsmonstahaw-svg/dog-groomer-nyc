import { useId, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";

export const QuoteForm = () => {
  const id = useId();
  const { toast } = useToast();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    const fullName = formData.get("fullName") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    
    const [firstName, ...lastNames] = fullName.split(" ");
    const lastName = lastNames.join(" ");

    const payload = {
      first_name: firstName || "",
      last_name: lastName || "",
      phone: phone || "",
      message: message || "",
      source: window.location.href,
    };

    try {
      // CRM Tracking
      const trackingPayload = {
        type: "external_form_submission",
        timestamp: Date.now(),
        formId: "Quote Form",
        formData: {
          first_name: firstName || "",
          last_name: lastName || "",
          phone: phone || "",
          "contact.form_message": message || "",
          "contact.sms_consent": formData.get("smsConsent") === "on" ? "Yes" : "No",
          "contact.marketing_consent": formData.get("marketingConsent") === "on" ? "Yes" : "No",
        },
        formLabels: {
          first_name: "First Name",
          last_name: "Last Name",
          phone: "Phone",
          "contact.form_message": "Message",
          "contact.sms_consent": "SMS Consent",
          "contact.marketing_consent": "Marketing Consent",
        },
        url: window.location.href,
        title: document.title,
        path: window.location.pathname,
        userAgent: navigator.userAgent,
        trackingId: "tk_48f329342de4440d9f75651a54e9e020",
        locationId: "4eqi2rBevLPMIBdnk9B3",
        sessionId: crypto.randomUUID(),
        properties: {
          deviceType: /Mobile|Android|iPhone/i.test(navigator.userAgent)
            ? "mobile"
            : "desktop",
        },
      };

      fetch("https://backend.leadconnectorhq.com/external-tracking/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          version: "2021-07-28",
        },
        body: JSON.stringify(trackingPayload),
      }).catch(() => {});

      await fetch("https://services.leadconnectorhq.com/hooks/v6nfbTGbKTHqcU0RRfyn/webhook-trigger/cb9cb538-2c85-4b50-98b8-5ea7a401c8c4", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      
      (e.target as HTMLFormElement).reset();
      navigate("/thank-you");
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <div className="space-y-1">
        <label className="text-xs font-bold text-white">Full Name <span className="text-primary">*</span></label>
        <Input name="fullName" placeholder="John Smith" className="bg-white text-black border-0 h-10 rounded-sm focus-visible:ring-primary text-sm" required />
      </div>
      
      <div className="space-y-1">
        <label className="text-xs font-bold text-white">Phone</label>
        <Input name="phone" type="tel" placeholder="Example: (912) 381-9557" className="bg-white text-black border-0 h-10 rounded-sm focus-visible:ring-primary text-sm" />
      </div>
      
      <div className="space-y-1">
        <label className="text-xs font-bold text-white">Short message about your needs <span className="text-primary">*</span></label>
        <Textarea 
          name="message"
          placeholder="**Your message goes straight to my phone, I'll get back to you as soon as I'm available**" 
          className="bg-white text-black border-0 min-h-[80px] rounded-sm focus-visible:ring-primary placeholder:text-gray-500 text-sm"
          required
        />
      </div>
      
      <div className="space-y-3 pt-1">
        <div className="flex items-start gap-2">
          <Checkbox id={`terms1-${id}`} name="smsConsent" className="mt-0.5 border-gray-400 data-[state=checked]:bg-primary data-[state=checked]:border-primary w-3.5 h-3.5" required />
          <label htmlFor={`terms1-${id}`} className="text-[10px] text-gray-300 leading-tight">
            I Consent to Receive SMS Notifications, Alerts from Tri Refrigeration & HVAC. Message frequency varies. Message & data rates may apply. Text HELP to (713) 909-7745 for assistance. You can reply STOP to unsubscribe at any time.
          </label>
        </div>
        <div className="flex items-start gap-2">
          <Checkbox id={`terms2-${id}`} name="marketingConsent" className="mt-0.5 border-gray-400 data-[state=checked]:bg-primary data-[state=checked]:border-primary w-3.5 h-3.5" />
          <label htmlFor={`terms2-${id}`} className="text-[10px] text-gray-300 leading-tight">
            By checking this box I agree to receive occasional marketing messages from Tri Refrigeration & HVAC.
          </label>
        </div>
      </div>
      
      <Button type="submit" disabled={isSubmitting} className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg uppercase tracking-wider mt-2 rounded-sm">
        {isSubmitting ? "Sending..." : "GET A FREE QUOTE"}
      </Button>
    </form>
  );
};
