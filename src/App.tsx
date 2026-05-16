import { Routes, Route } from 'react-router-dom'
import Index from '@/pages/Index'
import NotFound from '@/pages/NotFound'
import Blog from '@/pages/Blog'
import BlogPost1 from '@/pages/BlogPost1'
import BlogPost2 from '@/pages/BlogPost2'
import BlogPost3 from '@/pages/BlogPost3'
import BlogPost4 from '@/pages/BlogPost4'
import BlogPost5 from '@/pages/BlogPost5'
import BlogPost6 from '@/pages/BlogPost6'
import ClientSubmit from '@/pages/ClientSubmit'
import Contact from '@/pages/Contact'
import Discount from '@/pages/Discount'
import Gallery from '@/pages/Gallery'
import LocationHoustonTX from '@/pages/LocationHoustonTX'
import LocationKatyTX from '@/pages/LocationKatyTX'
import LocationPearlandTX from '@/pages/LocationPearlandTX'
import LocationSugarLandTX from '@/pages/LocationSugarLandTX'
import LocationTheWoodlandsTX from '@/pages/LocationTheWoodlandsTX'
import Review from '@/pages/Review'
import ServiceCommercialRefrigeration from '@/pages/ServiceCommercialRefrigeration'
import ServiceHVACAirConditioning from '@/pages/ServiceHVACAirConditioning'
import ServiceIceMachineEMS from '@/pages/ServiceIceMachineEMS'
import ServiceResidentialRefrigeration from '@/pages/ServiceResidentialRefrigeration'
import ServiceRestaurantEquipment from '@/pages/ServiceRestaurantEquipment'
import ServiceWalkInCoolers from '@/pages/ServiceWalkInCoolers'
import ThankYou from '@/pages/ThankYou'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import Terms from '@/pages/Terms'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/home" element={<Index />} />

      {/* Services */}
      <Route path="/services/hvac-air-conditioning" element={<ServiceHVACAirConditioning />} />
      <Route path="/services/commercial-refrigeration" element={<ServiceCommercialRefrigeration />} />
      <Route path="/services/residential-refrigeration" element={<ServiceResidentialRefrigeration />} />
      <Route path="/services/walk-in-coolers" element={<ServiceWalkInCoolers />} />
      <Route path="/services/restaurant-equipment" element={<ServiceRestaurantEquipment />} />
      <Route path="/services/ice-machine-ems" element={<ServiceIceMachineEMS />} />

      {/* Locations */}
      <Route path="/locations/houston-tx" element={<LocationHoustonTX />} />
      <Route path="/locations/katy-tx" element={<LocationKatyTX />} />
      <Route path="/locations/sugar-land-tx" element={<LocationSugarLandTX />} />
      <Route path="/locations/pearland-tx" element={<LocationPearlandTX />} />
      <Route path="/locations/the-woodlands-tx" element={<LocationTheWoodlandsTX />} />

      {/* Blog */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/why-houston-restaurants-need-specialist" element={<BlogPost1 />} />
      <Route path="/blog/walk-in-cooler-not-holding-temperature" element={<BlogPost2 />} />
      <Route path="/blog/commercial-hvac-maintenance-houston" element={<BlogPost3 />} />
      <Route path="/blog/true-cost-broken-walk-in-freezer" element={<BlogPost4 />} />
      <Route path="/blog/hvac-refrigeration-katy-sugar-land-woodlands" element={<BlogPost5 />} />
      <Route path="/blog/choose-right-commercial-hvac-technician-houston" element={<BlogPost6 />} />

      {/* Other */}
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/review" element={<Review />} />
      <Route path="/discount" element={<Discount />} />
      <Route path="/client-submit" element={<ClientSubmit />} />
      <Route path="/thank-you" element={<ThankYou />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms" element={<Terms />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
