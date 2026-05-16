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
import Review from '@/pages/Review'
import ThankYou from '@/pages/ThankYou'
import PrivacyPolicy from '@/pages/PrivacyPolicy'
import Terms from '@/pages/Terms'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/home" element={<Index />} />

      {/* Blog */}
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/grooming-guide" element={<BlogPost1 />} />
      <Route path="/blog/boarding-team" element={<BlogPost2 />} />
      <Route path="/blog/grooming-health" element={<BlogPost3 />} />
      <Route path="/blog/training-works" element={<BlogPost4 />} />
      <Route path="/blog/boarding-vs-kennels" element={<BlogPost5 />} />
      <Route path="/blog/potty-training" element={<BlogPost6 />} />

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
