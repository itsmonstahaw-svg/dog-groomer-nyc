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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr] gap-12 lg:gap-8">
          
      {/* Brand & Contact */}
      <div className="space-y-6">
        <h4 className="text-white font-black uppercase tracking-wider">Contact Us</h4>
        <div className="flex items-center gap-2 text-white font-black text-lg tracking-tighter uppercase">
          Tri Refrigeration & HVAC
        </div>
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-primary shrink-0" />
            <a href="tel:+17139097745" className="font-bold hover:text-primary transition-colors">(713) 909-7745</a>
          </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-primary shrink-0" />
                <span className="font-bold">4610 Cashel Glen Dr, Houston, TX 77069</span>
              </div>
              <div className="flex gap-4 pt-2">
                <a href="https://www.facebook.com/Tripointrefrigeration/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="https://www.instagram.com/TriHVACHouston" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://g.page/r/CZoh3-NW4MDcEAE/review" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors">
                  <GoogleIcon className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Business Links */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-wider">Business</h4>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/gallery" className="hover:text-primary transition-colors">Gallery</a></li>
              <li><a href="/blog" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="/contact" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="https://g.page/r/CZoh3-NW4MDcEAE/review" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">Review Us</a></li>
            </ul>
          </div>
          {/* Shop Links */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              <li><a href="/services/hvac-air-conditioning" className="hover:text-primary transition-colors">HVAC & Air Conditioning</a></li>
              <li><a href="/services/commercial-refrigeration" className="hover:text-primary transition-colors">Commercial Refrigeration</a></li>
              <li><a href="/services/walk-in-coolers" className="hover:text-primary transition-colors">Walk-in Coolers & Freezers</a></li>
              <li><a href="/services/restaurant-equipment" className="hover:text-primary transition-colors">Restaurant Equipment</a></li>
              <li><a href="/services/ice-machine-ems" className="hover:text-primary transition-colors">Ice Machine & EMS</a></li>
              <li><a href="/services/residential-refrigeration" className="hover:text-primary transition-colors">Residential Refrigeration</a></li>
            </ul>
          </div>

          {/* Locations Links */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-wider">Locations</h4>
            <ul className="space-y-3">
              <li><a href="/locations/houston-tx" className="hover:text-primary transition-colors">Houston, TX</a></li>
              <li><a href="/locations/katy-tx" className="hover:text-primary transition-colors">Katy, TX</a></li>
              <li><a href="/locations/sugar-land-tx" className="hover:text-primary transition-colors">Sugar Land, TX</a></li>
              <li><a href="/locations/pearland-tx" className="hover:text-primary transition-colors">Pearland, TX</a></li>
              <li><a href="/locations/the-woodlands-tx" className="hover:text-primary transition-colors">The Woodlands, TX</a></li>
            </ul>
          </div>
          {/* Operating Hours */}
          <div className="space-y-6">
            <h4 className="text-white font-black uppercase tracking-wider">Operating Hours</h4>
            <ul className="space-y-3 font-mono text-sm">
              <li className="flex justify-between"><span>Mon - Fri:</span> <span>7:30am - 5:00pm</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>Overtime Available</span></li>
              <li className="flex justify-between text-primary font-bold"><span>Sunday:</span> <span>Overtime Available</span></li>
            </ul>
          </div>

        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Tri Refrigeration & HVAC. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
