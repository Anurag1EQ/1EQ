import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/home/home';

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
      <div className="bg-[var(--color-bg)] min-h-screen">


        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<PlaceholderPage title="Products Page" />} />
          <Route path="/services" element={<PlaceholderPage title="Services Page" />} />
          <Route path="/technology" element={<PlaceholderPage title="Technology Page" />} />
          <Route path="/blog" element={<PlaceholderPage title="Blog Page" />} />
          <Route path="/about" element={<PlaceholderPage title="About Page" />} />
          <Route path="/careers" element={<PlaceholderPage title="Careers Page" />} />
          <Route path="/contact" element={<PlaceholderPage title="Contact Page" />} />
          <Route path="/privacy" element={<PlaceholderPage title="Privacy Policy" />} />
          <Route path="/terms" element={<PlaceholderPage title="Terms of Service" />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
