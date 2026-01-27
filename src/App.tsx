import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/home/homePage';
import { ProductsPage } from './pages/products/Products';
import { ServicesPage } from './pages/services/Services';
import { TechnologyPage } from './pages/technology/Technology';
// import { BlogPage } from './pages/blog/Blog';
import { AboutPage } from './pages/about/About';
import { CareersPage } from './pages/careers/Careers';
import { ContactPage } from './pages/contact/Contact';
import { PrivacyPage } from './pages/privacy/Privacy';
import { TermsPage } from './pages/terms/Terms';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-[var(--color-bg)] ">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          {/* <Route path="/blog" element={<BlogPage />} /> */}
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy_policy" element={<PrivacyPage />} />
          <Route path="/terms_of_service" element={<TermsPage />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
