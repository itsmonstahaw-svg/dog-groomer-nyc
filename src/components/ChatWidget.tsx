import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, MessageSquare, Phone, Send, User, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PhoneInput, toUSE164 } from "@/components/PhoneInput";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/site";

const field =
  "h-11 pl-10 rounded-lg bg-white border border-gray-200 text-sm text-gray-900 placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-0 focus-visible:border-primary transition-colors";
const label = "block text-[11px] font-semibold uppercase tracking-[0.1em] text-gray-500 mb-1.5";
const icon = "absolute left-3.5 w-4 h-4 text-gray-400 pointer-events-none";

// Floating chat bubble (same widget as Air Time Mechanical). Messages go to the chat GoHighLevel webhook
// (SITE.ghlChatWebhook).
export const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);
  const [notice, setNotice] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Closing the chat resets the "sent" screen so the next visit starts with the form again.
  const closeChat = () => {
    setOpen(false);
    setSent(false);
    setNotice("");
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNotice("");
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const fullName = (formData.get("chatName") as string) || "";
    const [firstName, ...lastNames] = fullName.trim().split(" ");

    const payload = {
      first_name: firstName || "",
      last_name: lastNames.join(" "),
      // Always +1XXXXXXXXXX so GoHighLevel tracks it as a USA number.
      phone: toUSE164((formData.get("chatPhone") as string) || ""),
      country: "US",
      message: (formData.get("chatMessage") as string) || "",
      source: `chat-widget: ${window.location.href}`,
    };

    try {
      const res = await fetch(SITE.ghlChatWebhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);
      setSent(true);
      form.reset();
    } catch (error) {
      console.error(error);
      setNotice(`Something went wrong. Please try again or call us at ${SITE.phone}.`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[60] flex flex-col items-end gap-3">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-label={`Chat with ${SITE.name}`}
            className="w-[360px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-7rem)] flex flex-col rounded-2xl bg-white shadow-[0_24px_60px_-12px_rgba(4,11,28,0.45)] border border-black/5 overflow-hidden"
          >
            {/* Header */}
            <div className="relative px-5 pt-5 pb-4 text-white" style={{ backgroundColor: "#050b1f" }}>
              <div className="absolute inset-x-0 bottom-0 h-px bg-primary/40"></div>
              <div className="flex items-center gap-3">
                <div className="relative shrink-0">
                  <div className="w-11 h-11 rounded-full bg-white flex items-center justify-center overflow-hidden ring-2 ring-white/10">
                    <img src={SITE.logo} alt="" className="w-10 h-10 object-contain" />
                  </div>
                  <span className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 ring-2 ring-[#050b1f]"></span>
                </div>
                <div className="flex-grow min-w-0">
                  <p className="font-black text-[15px] leading-tight truncate">{SITE.name}</p>
                  <p className="mt-0.5 text-xs text-gray-400">Texts go straight to our phone</p>
                </div>
                <button
                  type="button"
                  onClick={closeChat}
                  aria-label="Close chat"
                  className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 flex items-center justify-center transition-colors shrink-0"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto" style={{ backgroundColor: "#F4F6F9" }}>
              <div className="p-4">
                {/* Greeting bubble */}
                <div className="flex items-end gap-2">
                  <div className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0 overflow-hidden">
                    <img src={SITE.logo} alt="" className="w-6 h-6 object-contain" />
                  </div>
                  <div>
                    <div className="bg-white border border-gray-200 shadow-sm text-gray-800 text-sm leading-relaxed rounded-2xl rounded-bl-md px-4 py-3">
                      Hi there! 👋 This text goes straight to my personal phone. Send me any questions about your dog and I'll text you back as soon as I can.
                    </div>
                    <p className="mt-1 ml-1 text-[10px] text-gray-400">{SITE.name}</p>
                  </div>
                </div>

                {sent ? (
                  <div className="mt-4 rounded-xl bg-white border border-gray-200 shadow-sm text-center px-5 py-8 flex flex-col items-center">
                    <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                      <Check className="w-7 h-7" strokeWidth={2.5} />
                    </div>
                    <p className="mt-4 text-lg font-black text-gray-900">Message sent!</p>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed max-w-[240px]">
                      We'll text you back shortly. For anything urgent, call{" "}
                      <a href={SITE.phoneHref} className="font-bold text-primary hover:underline whitespace-nowrap">{SITE.phone}</a>.
                    </p>
                  </div>
                ) : (
                  <form className="mt-4 rounded-xl bg-white border border-gray-200 shadow-sm p-4 space-y-3.5" onSubmit={handleSubmit}>
                    <div>
                      <label className={label}>Your Name <span className="text-primary">*</span></label>
                      <div className="relative flex items-center">
                        <User className={icon} />
                        <Input name="chatName" placeholder="John Smith" autoComplete="name" className={field} required />
                      </div>
                    </div>
                    <div>
                      <label className={label}>Mobile Number <span className="text-primary">*</span></label>
                      <div className="relative flex items-center">
                        <Phone className={icon} />
                        <PhoneInput name="chatPhone" placeholder="(718) 555-0000" className={field} required />
                      </div>
                    </div>
                    <div>
                      <label className={label}>Message</label>
                      <div className="relative">
                        <MessageSquare className={`${icon} top-3.5`} />
                        <Textarea name="chatMessage" placeholder="How can we help?" className={`${field} h-auto min-h-[84px] py-3 resize-none`} />
                      </div>
                    </div>
                    {notice && <p className="text-xs text-red-600 leading-snug">{notice}</p>}
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-11 rounded-lg bg-primary hover:bg-primary/90 text-primary-foreground font-bold shadow-md shadow-primary/25"
                    >
                      <Send className="w-4 h-4" />
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                    <p className="text-[10px] text-gray-400 leading-snug text-center">
                      By sending, you agree to receive text messages from {SITE.name}. Msg &amp; data rates may apply.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Footer */}
            <a
              href={SITE.phoneHref}
              className="flex items-center justify-center gap-2 border-t border-gray-200 bg-white px-4 py-3 text-xs text-gray-500 hover:text-primary transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              Prefer to call? <span className="font-bold text-gray-800">{SITE.phone}</span>
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-3">
        {!open && (
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="hidden sm:inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-bold text-gray-900 shadow-lg border border-black/5 hover:text-primary transition-colors"
          >
            Chat with us
          </button>
        )}
        <button
          type="button"
          onClick={() => (open ? closeChat() : setOpen(true))}
          aria-label={open ? "Close chat" : "Open chat"}
          aria-expanded={open}
          className={`w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-xl hover:scale-105 transition-transform flex items-center justify-center ${open ? "" : "chat-glow"}`}
        >
          {open ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
        </button>
      </div>
    </div>
  );
};
