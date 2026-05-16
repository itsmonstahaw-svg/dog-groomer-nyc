import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import BlogPost1 from "./pages/BlogPost1";
import BlogPost2 from "./pages/BlogPost2";
import BlogPost3 from "./pages/BlogPost3";
import BlogPost4 from "./pages/BlogPost4";
import BlogPost5 from "./pages/BlogPost5";
import BlogPost6 from "./pages/BlogPost6";
import ServicePetGrooming from "./pages/ServicePetGrooming";
import ServicePetBoarding from "./pages/ServicePetBoarding";
import ServiceHomeBoarding from "./pages/ServiceHomeBoarding";
import ServiceDogWalking from "./pages/ServiceDogWalking";
import ServiceTrainingBehaviour from "./pages/ServiceTrainingBehaviour";
import ServicePottyTraining from "./pages/ServicePottyTraining";
import Gallery from "./pages/Gallery";
import Blog from "./pages/Blog";
import ServiceAreaQueens from "./pages/ServiceAreaQueens";
import ServiceAreaBrooklyn from "./pages/ServiceAreaBrooklyn";
import ServiceAreaManhattan from "./pages/ServiceAreaManhattan";
import ServiceAreaNewYork from "./pages/ServiceAreaNewYork";
// Removed unused service areas
import Contact from "./pages/Contact";
import Discount from "./pages/Discount";
import Review from "./pages/Review";
import ClientSubmit from "./pages/ClientSubmit";
import ThankYou from "./pages/ThankYou";


const App = () => (
  <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Index />} />
          <Route path="/services/pet-grooming" element={<ServicePetGrooming />} />
          <Route path="/services/pet-boarding" element={<ServicePetBoarding />} />
          <Route path="/services/home-boarding" element={<ServiceHomeBoarding />} />
          <Route path="/services/dog-walking" element={<ServiceDogWalking />} />
          <Route path="/services/training-behaviour" element={<ServiceTrainingBehaviour />} />
          <Route path="/services/potty-training" element={<ServicePottyTraining />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/grooming-guide" element={<BlogPost1 />} />
          <Route path="/blog/boarding-team" element={<BlogPost2 />} />
          <Route path="/blog/grooming-health" element={<BlogPost3 />} />
          <Route path="/blog/training-works" element={<BlogPost4 />} />
          <Route path="/blog/boarding-vs-kennels" element={<BlogPost5 />} />
          <Route path="/blog/potty-training" element={<BlogPost6 />} />
          <Route path="/service-areas/queens-ny" element={<ServiceAreaQueens />} />
          <Route path="/service-areas/brooklyn-ny" element={<ServiceAreaBrooklyn />} />
          <Route path="/service-areas/manhattan-ny" element={<ServiceAreaManhattan />} />
          <Route path="/service-areas/new-york" element={<ServiceAreaNewYork />} />
          {/* Removed unused service areas */}
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
