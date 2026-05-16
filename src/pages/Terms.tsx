import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-grow w-full max-w-[900px] mx-auto px-6 pt-40 pb-24">
        <h1 className="text-4xl font-black uppercase mb-2">Terms & Conditions</h1>
        <p className="text-muted-foreground mb-10">Last updated: May 15, 2026</p>

        <div className="space-y-8 text-foreground/90 leading-relaxed">

          <section>
            <h2 className="text-xl font-black uppercase mb-3">1. Acceptance of Terms</h2>
            <p>By accessing and using the Tri Refrigeration & HVAC website (trirefrigerationhvac.com), you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our website.</p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-3">2. Services</h2>
            <p>Tri Refrigeration & HVAC provides commercial and residential HVAC installation, repair, and maintenance, commercial refrigeration services, walk-in cooler and freezer service, restaurant equipment repair, ice machine service, and related HVAC and refrigeration services in the Houston, TX metro area. All services are subject to a separate service agreement between the client and Tri Refrigeration & HVAC.</p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-3">3. Quotes & Estimates</h2>
            <p>Any quote or estimate provided through our website or over the phone is a preliminary estimate only and is not a binding contract. Final pricing is confirmed in writing prior to work commencing. Prices may vary based on the actual scope of work, parts required, and site conditions.</p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-3">4. Appointments & Cancellations</h2>
            <p>We ask that you provide at least 24 hours notice if you need to cancel or reschedule a booked appointment. Failure to provide adequate notice may result in a cancellation fee. Emergency overtime callouts are subject to additional charges.</p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-3">5. Limitation of Liability</h2>
            <p>Tri Refrigeration & HVAC shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or website. Our liability in connection with any service is limited to the cost of the service provided. We are fully insured; please request proof of insurance prior to work commencing if required.</p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-3">6. Warranty</h2>
            <p>All repair work carried out by Tri Refrigeration & HVAC is warranted for a period as specified on your service invoice. Warranties cover parts and labour for defects arising from our work only and do not cover damage caused by misuse, neglect, or third-party interference.</p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-3">7. Website Use</h2>
            <p>You agree to use this website for lawful purposes only. You must not use the site in any way that could damage, disable, or impair the website or interfere with other users. Unauthorized use of the website may give rise to a claim for damages.</p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-3">8. Intellectual Property</h2>
            <p>All content on this website including text, images, logos, and graphics is the property of Tri Refrigeration & HVAC or its content suppliers. You may not reproduce, distribute, or use any content without prior written permission.</p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-3">9. Governing Law</h2>
            <p>These Terms & Conditions are governed by the laws of the State of Texas. Any disputes arising from these terms or our services shall be subject to the exclusive jurisdiction of the courts of Harris County, Texas.</p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-3">10. Contact Us</h2>
            <p>If you have any questions about these Terms & Conditions, please contact us:</p>
            <ul className="mt-3 space-y-1">
              <li><strong>Tri Refrigeration & HVAC</strong></li>
              <li>4610 Cashel Glen Dr, Houston, TX 77069</li>
              <li><a href="tel:+17139097745" className="text-primary underline">(713) 909-7745</a></li>
              <li><a href="mailto:trivietpy@gmail.com" className="text-primary underline">trivietpy@gmail.com</a></li>
            </ul>
          </section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Terms;
