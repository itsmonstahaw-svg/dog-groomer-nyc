import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <main className="flex-grow w-full max-w-[900px] mx-auto px-6 pt-40 pb-24">
        <h1 className="text-4xl font-black uppercase mb-2">Privacy Policy</h1>
        <p className="text-muted-foreground mb-10">Last updated: May 15, 2026</p>

        <div className="space-y-8 text-foreground/90 leading-relaxed">

          <section>
            <h2 className="text-xl font-black uppercase mb-3">1. Information We Collect</h2>
            <p>When you contact us through our website forms, we collect your name, phone number, email address, and any message content you provide. We may also collect basic usage data such as browser type and pages visited through standard web analytics.</p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-3">2. How We Use Your Information</h2>
            <p>We use the information you provide solely to respond to your service inquiries, schedule appointments, send you quotes, and — if you have consented — send occasional service updates or promotional messages via SMS or email. We do not sell, rent, or trade your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-3">3. SMS & Email Communications</h2>
            <p>By submitting our contact form and checking the consent box, you agree to receive SMS notifications and/or marketing messages from Tri Refrigeration & HVAC. Message frequency varies. Message and data rates may apply. You can reply STOP at any time to unsubscribe, or text HELP to <strong>(713) 909-7745</strong> for assistance.</p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-3">4. Data Storage & Security</h2>
            <p>Your information is stored securely within our CRM platform (GoHighLevel / LeadConnector). We take reasonable technical and organizational measures to protect your data from unauthorized access, loss, or misuse.</p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-3">5. Third-Party Services</h2>
            <p>Our website uses third-party services including GoHighLevel for CRM and form processing, and Google Analytics for website traffic analysis. These services have their own privacy policies governing the use of your information.</p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-3">6. Cookies</h2>
            <p>Our website may use cookies to improve your browsing experience and track website performance. You can disable cookies in your browser settings, though some features of the site may not function correctly as a result.</p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-3">7. Your Rights</h2>
            <p>You have the right to request access to, correction of, or deletion of your personal data at any time. To make such a request, please contact us at <a href="mailto:trivietpy@gmail.com" className="text-primary underline">trivietpy@gmail.com</a> or call <a href="tel:+17139097745" className="text-primary underline">(713) 909-7745</a>.</p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-3">8. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated date. Continued use of the website after changes constitutes acceptance of the revised policy.</p>
          </section>

          <section>
            <h2 className="text-xl font-black uppercase mb-3">9. Contact Us</h2>
            <p>If you have any questions about this Privacy Policy, please contact us:</p>
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

export default PrivacyPolicy;
