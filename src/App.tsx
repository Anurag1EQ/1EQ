import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/home/Home';
import { ProductsPage } from './pages/products/Products';
import { ServicesPage } from './pages/services/Services';
import { TechnologyPage } from './pages/technology/Technology';
import { BlogPage } from './pages/blog/Blog';
import { AboutPage } from './pages/about/About';
import { CareersPage } from './pages/careers/Careers';
import { ContactPage } from './pages/contact/Contact';
import { PrivacyPage } from './pages/privacy/Privacy';
import { TermsPage } from './pages/terms/Terms';

// Component to scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Placeholder components for other pages until we extract them
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="min-h-screen flex items-center justify-center bg-[var(--color-bg)] pt-24">
    <div className="text-center">
      <h1 className="text-4xl font-bold text-[var(--color-text)] mb-4">{title}</h1>
      <p className="text-[var(--color-text-muted)]">This page is being extracted from OldApp.tsx</p>
      <p className="text-sm text-[var(--color-text-dim)] mt-2">Check back soon!</p>
    </div>
  </div>
);

// Main App with React Router
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
          <Route path="/blog" element={<BlogPage />} />
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
