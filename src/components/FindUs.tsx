import { Clock, Phone } from "lucide-react";
import { HOURS, SITE } from "@/lib/site";

// "Find Us" section: phone + hours card on the left, map on the right.
export const FindUs = () => (
  <section id="find-us" className="py-16 md:py-20 border-t border-gray-200" style={{ backgroundColor: "#F4F6F9" }}>
    <div className="w-full max-w-[960px] mx-auto px-[12px]">
      <p className="text-primary text-xs font-black uppercase tracking-[0.2em] mb-3">Find Us</p>
      <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black leading-tight max-w-lg">
        Proudly Based in Jamaica, Queens
      </h2>
      <p className="mt-4 text-zinc-600 max-w-xl">
        Call or request a free quote online. We're right here in Queens, and you deal directly with the owner.
      </p>

      <div className="mt-10 grid lg:grid-cols-2 gap-6 items-stretch">
        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-8 space-y-7">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400">Phone</p>
              <a href={SITE.phoneHref} className="text-lg font-bold text-black hover:text-primary transition-colors">{SITE.phone}</a>
              <p className="text-sm text-zinc-500 mt-1">{SITE.address}</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-primary" />
            </div>
            <div className="grow">
              <p className="text-xs font-bold uppercase tracking-widest text-zinc-400 mb-2">Hours</p>
              <ul className="space-y-2 text-sm">
                {HOURS.map((row) => (
                  <li key={row.day} className="flex items-center justify-between gap-4 text-zinc-700">
                    <span>{row.day}</span>
                    <span className="font-medium text-black">{row.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="relative rounded-2xl overflow-hidden border border-gray-200 min-h-[340px] bg-white">
          <iframe
            src={`https://maps.google.com/maps?q=${SITE.mapQuery}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            title="Heart Of Love Pet Care location map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
);
