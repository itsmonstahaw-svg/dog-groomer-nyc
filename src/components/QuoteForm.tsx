import { useEffect, useId, useRef, useState } from "react";
import { ArrowRight, Check, Lock, MessageSquare, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput, toUSE164 } from "@/components/PhoneInput";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/components/ui/use-toast";
import { SITE } from "@/lib/site";

// Shared field styles: dark glass inputs on the navy form card.
const field =
  "h-11 pl-10 rounded-md bg-white/[0.06] border border-white/15 text-white text-sm placeholder:text-gray-500 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-0 focus-visible:border-primary transition-colors";
const label = "block text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-300 mb-1.5";
const icon = "absolute left-3.5 w-4 h-4 text-gray-500 pointer-events-none";

// How long the "Request received" confirmation shows before the empty form comes back.
const CONFIRM_SECONDS = 30;

// Quote form used in the hero, the quote modal, the contact/about pages and the gallery.
// Leads go to the GoHighLevel quote webhook (SITE.ghlWebhook). On success the form is replaced in place by a
// confirmation for 30 seconds, then the empty form comes back (no redirect).
export const QuoteForm = () => {
  const id = useId();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [height, setHeight] = useState<number | undefined>(undefined);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (!submitted) return;
    const timer = window.setTimeout(() => setSubmitted(false), CONFIRM_SECONDS * 1000);
    return () => window.clearTimeout(timer);
  }, [submitted]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const fullName = (formData.get("fullName") as string) || "";
    const [firstName, ...lastNames] = fullName.trim().split(" ");

    const payload = {
      first_name: firstName || "",
      last_name: lastNames.join(" "),
      // Always +1XXXXXXXXXX so GoHighLevel tracks it as a USA number.
      phone: toUSE164((formData.get("phone") as string) || ""),
      country: "US",
      message: (formData.get("message") as string) || "",
      source: window.location.href,
      sms_consent: formData.get("smsConsent") === "on" ? "Yes" : "No",
    };

    try {
      const res = await fetch(SITE.ghlWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);

      // Keep the card the same height while the confirmation shows, so the page doesn't jump.
      setHeight(formRef.current?.offsetHeight);
      form.reset();
      setSubmitted(true);
    } catch (error) {
      console.error(error);
      // Never pretend the lead was sent.
      toast({
        title: "Something went wrong",
        description: `Please try again or call us at ${SITE.phone}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div role="status" aria-live="polite" className="flex flex-col items-center justify-center text-center px-4" style={{ minHeight: height }}>
        <div className="w-16 h-16 rounded-full border-2 border-primary bg-primary/10 flex items-center justify-center text-primary">
          <Check className="w-8 h-8" strokeWidth={2.5} />
        </div>
        <p className="mt-5 text-2xl font-black uppercase tracking-tight text-white">Request received</p>
        <p className="mt-2 text-sm text-gray-300 max-w-[260px] leading-relaxed">
          Thanks! We'll be in touch shortly. Need us sooner? Call{" "}
          <a href={SITE.phoneHref} className="font-bold text-primary hover:underline whitespace-nowrap">{SITE.phone}</a>.
        </p>
      </div>
    );
  }

  return (
    <form ref={formRef} className="space-y-4 text-left" onSubmit={handleSubmit}>
      <div>
        <label htmlFor={`name-${id}`} className={label}>
          Full Name <span className="text-primary">*</span>
        </label>
        <div className="relative flex items-center">
          <User className={icon} />
          <Input id={`name-${id}`} name="fullName" placeholder="John Smith" autoComplete="name" className={field} required />
        </div>
      </div>

      <div>
        <label htmlFor={`phone-${id}`} className={label}>Phone Number</label>
        <div className="relative flex items-center">
          <Phone className={icon} />
          <PhoneInput id={`phone-${id}`} name="phone" placeholder="(718) 555-0123" className={field} />
        </div>
      </div>

      <div>
        <label htmlFor={`msg-${id}`} className={label}>
          How can we help? <span className="text-primary">*</span>
        </label>
        <div className="relative">
          <MessageSquare className={`${icon} top-3.5`} />
          <Textarea
            id={`msg-${id}`}
            name="message"
            placeholder="Your dog's name, breed and the service you need..."
            className={`${field} h-auto min-h-[92px] py-3 resize-none`}
            required
          />
        </div>
      </div>

      <div className="flex items-start gap-3 rounded-md border border-white/10 bg-white/[0.03] p-3">
        <Checkbox
          id={`terms-${id}`}
          name="smsConsent"
          className="mt-0.5 border-white/40 data-[state=checked]:bg-primary data-[state=checked]:border-primary w-4 h-4 shrink-0"
          required
        />
        <label htmlFor={`terms-${id}`} className="text-[11px] text-gray-400 leading-relaxed">
          I agree to the{" "}
          <a href="/terms" target="_blank" rel="noreferrer" className="underline text-gray-200 hover:text-primary">
            Terms &amp; Conditions
          </a>{" "}
          and to receive text messages from {SITE.name} about my request. Msg &amp; data rates may apply. Reply STOP to opt out.
        </label>
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="group w-full h-12 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground font-black text-[15px] uppercase tracking-wider shadow-lg shadow-primary/25"
      >
        {isSubmitting ? "Sending..." : "Get My Free Quote"}
        {!isSubmitting && <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />}
      </Button>

      <p className="flex items-center justify-center gap-1.5 text-[11px] text-gray-500">
        <Lock className="w-3 h-3" />
        Your details are only used to reply to your request.
      </p>
    </form>
  );
};
