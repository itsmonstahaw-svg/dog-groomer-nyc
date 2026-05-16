import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
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


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
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
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
