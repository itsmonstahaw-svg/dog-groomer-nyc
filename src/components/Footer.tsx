import { MapPin, Phone, Facebook, Instagram } from "lucide-react";

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
  </svg>
);

export const Footer = () => {
  return (
    <footer className="bg-black border-t-2 border-primary text-gray-300">
      <div className="w-full max-w-[1200px] mx-auto px-[12px] py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.25fr_1fr_1fr_1fr_1fr] gap-12 lg:gap-8">
          
      {/* Brand & Contact */}
      <div className="space-y-6">
        <h4 className="text-white font-black uppercase tracking-wider">Contact Us</h4>
        <div className="flex items-center gap-2 text-white font-black text-lg tracking-tighter uppercase">
          Heart Of Love Pet Care
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-primary shrink-0" />
            <a href="tel:+16469259123" className="font-bold hover:text-primary transition-colors">(646) 925-9123</a>
          </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="font-bold">166-09 144th Ave, Jamaica, NY 11434, United States</span>
              </div>
              <div className="flex gap-4 pt-2">
                <a 
                  href="https://www.instagram.com/heartoflovepetcare/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.google.com/search?q=Heart+Of+Love+pet+care+nyc&sca_esv=43a6c5a008a39361&rlz=1C1GCEA_enGB1195GB1195&biw=1600&bih=789&sxsrf=ANbL-n68SAshHIX2IKrvYuExCcdNQLbh5A%3A1778522960455&ei=UBsCasO6G9_ThbIPvNKN8QM&ved=0ahUKEwjDoqGq6rGUAxXfaUEAHTxpIz4Q4dUDCBE&uact=5&oq=Heart+Of+Love+pet+care+nyc&gs_lp=Egxnd3Mtd2l6LXNlcnAiGkhlYXJ0IE9mIExvdmUgcGV0IGNhcmUgbnljMgUQIRifBTIFECEYnwVIkg9Q7gdY7AtwAXgBkAEAmAFzoAGjA6oBAzEuM7gBA8gBAPgBAZgCBaACsgPCAgcQIxiwAxgnwgIKEAAYRxjWBBiwA8ICBBAjGCfCAgUQABiABMICBhAAGBYYHsICCxAAGIAEGIoFGIYDwgIFECEYoAHCAgQQIRgVmAMAiAYBkAYKkgcDMi4zoAe2ELIHAzEuM7gHrwPCBwMwLjXIBwiACAE&sclient=gws-wiz-serp" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
                >
                  <GoogleIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Business Links */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-wider">Business</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Review Us</a></li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-3">
              <li><a href="/services/pet-grooming" className="hover:text-primary transition-colors">Pet Grooming</a></li>
              <li><a href="/services/pet-boarding" className="hover:text-primary transition-colors">Pet Boarding</a></li>
              <li><a href="/services/home-boarding" className="hover:text-primary transition-colors">Home Boarding</a></li>
              <li><a href="/services/dog-walking" className="hover:text-primary transition-colors">Dog Walking</a></li>
              <li><a href="/services/training-behaviour" className="hover:text-primary transition-colors">Training & Behaviour</a></li>
              <li><a href="/services/potty-training" className="hover:text-primary transition-colors">Potty Training</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-wider">Service Areas</h4>
            <ul className="space-y-3">
              <li><a href="/service-areas/queens-ny" className="hover:text-primary transition-colors">Queens NY</a></li>
              <li><a href="/service-areas/brooklyn-ny" className="hover:text-primary transition-colors">Brooklyn NY</a></li>
              <li><a href="/service-areas/manhattan-ny" className="hover:text-primary transition-colors">Manhattan NY</a></li>
              <li><a href="/service-areas/new-york" className="hover:text-primary transition-colors">New York Statewide</a></li>
            </ul>
          </div>

          {/* Operating Hours */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-wider">Operating Hours</h4>
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span>8:00am - 5:00pm</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>8:00am - 2:00pm</span></li>
              <li className="flex justify-between text-primary font-bold"><span>Sunday:</span> <span>Closed</span></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Heart Of Love Pet Care. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
