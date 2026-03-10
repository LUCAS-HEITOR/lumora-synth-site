import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Services from '../pages/Services/Services';
import ServiceDetails from '../pages/ServiceDetails/ServiceDetails';
import Portfolio from '../pages/Portfolio/Portfolio';
import ProjectDetail from '../pages/ProjectDetail/ProjectDetail';
import RequestQuote from '../pages/RequestQuote/RequestQuote';
import Checkout from '../pages/Checkout/Checkout';
import Contact from '../pages/Contact/Contact';
import FAQ from '../pages/FAQ/FAQ';
import About from '../pages/About/About';
import PrivacyPolicy from '../pages/PrivacyPolicy/PrivacyPolicy';
import TermsOfService from '../pages/TermsOfService/TermsOfService';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ScrollToTop from './ScrollToTop';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetails />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:slug" element={<ProjectDetail />} />
        <Route path="/quote" element={<RequestQuote />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
