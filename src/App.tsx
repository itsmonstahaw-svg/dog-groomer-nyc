import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import BlogPost4 from "./pages/BlogPost4";
import BlogPost5 from "./pages/BlogPost5";
import BlogPost6 from "./pages/BlogPost6";
import ServiceHub from "./pages/ServiceHub";
import ServiceDetail from "./pages/ServiceDetail";
import AboutUs from "./pages/AboutUs";
import LocationsHub from "./pages/LocationsHub";
import LocationPage from "./pages/LocationPage";
import ReviewsPage from "./pages/Reviews";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Discount from "./pages/Discount";
import Review from "./pages/Review";
import ClientSubmit from "./pages/ClientSubmit";
import ThankYou from "./pages/ThankYou";
import { AREAS, SERVICES, areaPath, servicePath } from "./data/catalog";

const App = () => (
  <Routes>
    <Route path="/" element={<Index />} />
    <Route path="/home" element={<Index />} />
    <Route path="/services" element={<ServiceHub />} />
    {SERVICES.map((service) => (
      <Route key={service.slug} path={servicePath(service)} element={<ServiceDetail service={service} />} />
    ))}
    <Route path="/about" element={<AboutUs />} />
    <Route path="/service-areas" element={<LocationsHub />} />
    {AREAS.map((area) => (
      <Route key={area.slug} path={areaPath(area)} element={<LocationPage area={area} />} />
    ))}
    <Route path="/reviews" element={<ReviewsPage />} />
    <Route path="/gallery" element={<Gallery />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/blog/grooming-guide" element={<BlogPost1 />} />
    <Route path="/blog/boarding-team" element={<BlogPost2 />} />
    <Route path="/blog/grooming-health" element={<BlogPost3 />} />
    <Route path="/blog/training-works" element={<BlogPost4 />} />
    <Route path="/blog/boarding-vs-kennels" element={<BlogPost5 />} />
    <Route path="/blog/potty-training" element={<BlogPost6 />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/get-your-discount" element={<Discount />} />
    <Route path="/review" element={<Review />} />
    <Route path="/client-submit" element={<ClientSubmit />} />
    <Route path="/thank-you" element={<ThankYou />} />
    {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default App;
