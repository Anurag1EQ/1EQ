import { useState } from 'react';

// 1EQ Website V4 - AI Supply Template Style
// Dark theme, modern layout, streamlined content

const colors = {
  // Light sections
  bg: '#FFFFFF',
  bgCard: '#F8FAFC',
  bgHover: '#F1F5F9',
  // Dark sections (hero, CTA, footer)
  bgDark: '#0a1628',
  bgDarkAlt: '#0d1f35',
  // Brand colors
  primary: '#E63946',
  accent: '#2563EB',
  success: '#059669',
  purple: '#7C3AED',
  // Light section text
  text: '#0f172a',
  textMuted: '#475569',
  textDim: '#64748b',
  // Dark section text
  textLight: '#FFFFFF',
  textLightMuted: 'rgba(255, 255, 255, 0.7)',
  textLightDim: 'rgba(255, 255, 255, 0.5)',
  // Borders
  border: '#E2E8F0',
  borderLight: '#D1D5DB',
  borderDark: 'rgba(255, 255, 255, 0.1)'
};

// Smooth scroll CSS + animations + responsive
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap');
    
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    @keyframes float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-10px); }
    }
    
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
    
    .animate-in { animation: fadeInUp 0.6s ease-out forwards; }
    .delay-1 { animation-delay: 0.1s; }
    .delay-2 { animation-delay: 0.2s; }
    .delay-3 { animation-delay: 0.3s; }
    
    .hover-lift { transition: transform 0.3s ease, box-shadow 0.3s ease; }
    .hover-lift:hover { transform: translateY(-4px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
    
    .btn-glow:hover { box-shadow: 0 0 30px rgba(230, 57, 70, 0.25); }
    
    .marquee-track { display: flex; animation: marquee 30s linear infinite; }
    .marquee-track:hover { animation-play-state: paused; }
    
    /* Mobile responsive */
    .nav-links { display: flex; gap: 32px; align-items: center; }
    .nav-menu-btn { display: none; background: none; border: none; color: white; font-size: 24px; cursor: pointer; }
    .mobile-menu { display: none; }
    
    .hero-title { font-size: 64px; }
    .section-title { font-size: 48px; }
    .page-title { font-size: 56px; }
    
    .grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; }
    .grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    .grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; }
    .grid-2-1 { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; }
    .footer-grid { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 48px; }
    
    .section-padding { padding: 120px 48px; }
    .page-header-padding { padding: 140px 48px 60px; }
    .content-padding { padding: 60px 48px 80px; }
    
    .flex-buttons { display: flex; gap: 16px; }
    .stats-row { display: flex; gap: 48px; }
    
    .product-card-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; align-items: center; }
    .phone-mockup { display: block; }
    
    .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
    .process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
    .benefits-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
    .hiring-steps { display: flex; gap: 16px; }
    .hiring-step { flex: 1; }
    
    .job-card-header { display: flex; justify-content: space-between; align-items: flex-start; }
    .job-apply-btn { white-space: nowrap; }
    
    .team-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
    
    @media (max-width: 1024px) {
      .grid-4 { grid-template-columns: repeat(2, 1fr); }
      .grid-3 { grid-template-columns: repeat(2, 1fr); }
      .footer-grid { grid-template-columns: repeat(2, 1fr); gap: 32px; }
      .pricing-grid { grid-template-columns: repeat(2, 1fr); }
      .process-grid { grid-template-columns: repeat(2, 1fr); }
      .team-grid { grid-template-columns: repeat(2, 1fr); }
      .hiring-steps { flex-wrap: wrap; }
      .hiring-step { flex: 0 0 calc(33% - 11px); }
    }
    
    @media (max-width: 768px) {
      .nav-links { display: none; }
      .nav-menu-btn { display: block; }
      .mobile-menu.open { 
        display: flex; 
        flex-direction: column; 
        position: fixed;
        top: 70px;
        left: 0;
        right: 0;
        background: rgba(10, 22, 40, 0.98);
        padding: 24px;
        gap: 16px;
        border-bottom: 1px solid rgba(255,255,255,0.1);
      }
      .mobile-menu.open a, .mobile-menu.open button {
        width: 100%;
        text-align: center;
        padding: 12px;
      }
      
      .hero-title { font-size: 40px; }
      .section-title { font-size: 32px; }
      .page-title { font-size: 36px; }
      
      .grid-4, .grid-3, .grid-2 { grid-template-columns: 1fr; }
      .grid-2-1 { grid-template-columns: 1fr; gap: 32px; }
      .footer-grid { grid-template-columns: 1fr; gap: 32px; }
      
      .section-padding { padding: 60px 20px; }
      .page-header-padding { padding: 100px 20px 40px; }
      .content-padding { padding: 40px 20px 60px; }
      
      .flex-buttons { flex-direction: column; }
      .flex-buttons button { width: 100%; }
      
      .stats-row { flex-wrap: wrap; gap: 24px; justify-content: center; }
      .stats-row > div { flex: 0 0 calc(50% - 12px); text-align: center; }
      
      .product-card-grid { grid-template-columns: 1fr; }
      .phone-mockup { display: none; }
      
      .pricing-grid { grid-template-columns: 1fr; }
      .process-grid { grid-template-columns: 1fr; }
      .benefits-grid { grid-template-columns: 1fr; }
      .team-grid { grid-template-columns: 1fr; }
      
      .hiring-steps { flex-direction: column; gap: 24px; }
      .hiring-step { flex: none; display: flex; align-items: center; gap: 16px; text-align: left; }
      .hiring-step > div:first-child { margin: 0; }
      
      .job-card-header { flex-direction: column; gap: 16px; }
      .job-apply-btn { width: 100%; }
      
      .testimonial-grid { grid-template-columns: 1fr; }
      
      .trusted-logos { flex-direction: column; gap: 16px; }
      
      .product-tags { justify-content: center; }
      
      .impact-stats { grid-template-columns: repeat(2, 1fr); gap: 24px; }
      
      nav { padding: 16px 20px; }
      
      .cta-buttons { flex-direction: column; align-items: center; }
    }
    
    @media (max-width: 480px) {
      .hero-title { font-size: 32px; }
      .section-title { font-size: 28px; }
      .page-title { font-size: 28px; }
      
      .stats-row > div { flex: 0 0 100%; }
      .impact-stats { grid-template-columns: 1fr; }
      
      .hiring-step { flex-direction: column; text-align: center; }
    }
  `}</style>
);

// Navigation
const Navigation = ({ activePage, setActivePage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: 'rgba(10, 22, 40, 0.95)',
      backdropFilter: 'blur(20px)',
      borderBottom: `1px solid ${colors.borderDark}`,
      padding: '16px 48px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      zIndex: 100,
      fontFamily: "'DM Sans', sans-serif"
    }}>
      <div
        style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}
        onClick={() => { setActivePage('home'); setMobileMenuOpen(false); }}
      >
        <span style={{ fontSize: '28px', fontWeight: '700', color: colors.primary }}>1</span>
        <span style={{ fontSize: '28px', fontWeight: '700', color: colors.textLight }}>EQ</span>
      </div>

      {/* Desktop Navigation */}
      <div className="nav-links">
        {['Products', 'Services', 'Technology', 'Blog', 'About', 'Careers'].map(item => (
          <button
            key={item}
            onClick={() => setActivePage(item.toLowerCase())}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '14px',
              color: activePage === item.toLowerCase() ? colors.textLight : colors.textLightMuted,
              cursor: 'pointer',
              fontWeight: '500',
              fontFamily: "'DM Sans', sans-serif",
              transition: 'color 0.2s'
            }}
            onMouseEnter={e => e.target.style.color = colors.textLight}
            onMouseLeave={e => e.target.style.color = activePage === item.toLowerCase() ? colors.textLight : colors.textLightMuted}
          >
            {item}
          </button>
        ))}
        <button
          onClick={() => setActivePage('contact')}
          style={{
            background: colors.textLight,
            color: colors.text,
            border: 'none',
            padding: '12px 24px',
            borderRadius: '8px',
            fontSize: '14px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s'
          }}>
          Get in Touch
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="nav-menu-btn"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
        {['Products', 'Services', 'Technology', 'Blog', 'About', 'Careers', 'Contact'].map(item => (
          <button
            key={item}
            onClick={() => { setActivePage(item.toLowerCase()); setMobileMenuOpen(false); }}
            style={{
              background: activePage === item.toLowerCase() ? 'rgba(255,255,255,0.1)' : 'none',
              border: 'none',
              fontSize: '16px',
              color: colors.textLight,
              cursor: 'pointer',
              fontWeight: '500',
              fontFamily: "'DM Sans', sans-serif",
              padding: '12px',
              borderRadius: '8px'
            }}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
};

// Pill component
const Pill = ({ children, color = colors.primary }) => (
  <div style={{
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: `${color}15`,
    border: `1px solid ${color}30`,
    color: color,
    padding: '8px 16px',
    borderRadius: '100px',
    fontSize: '13px',
    fontWeight: '500'
  }}>
    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: color }} />
    {children}
  </div>
);

// Hero Section (DARK)
const Hero = ({ setActivePage }) => (
  <section className="section-padding" style={{
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    background: `linear-gradient(180deg, ${colors.bgDark} 0%, ${colors.bgDarkAlt} 100%)`,
    fontFamily: "'DM Sans', sans-serif",
    position: 'relative',
    overflow: 'hidden',
    paddingTop: '120px'
  }}>
    {/* Background gradient */}
    <div style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '1000px',
      height: '1000px',
      background: `radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, transparent 60%)`,
      pointerEvents: 'none'
    }} />

    <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%', position: 'relative', padding: '0 20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `${colors.primary}20`, border: `1px solid ${colors.primary}40`, padding: '8px 16px', borderRadius: '100px', marginBottom: '24px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: colors.textLight }} />
          <span style={{ fontSize: '13px', fontWeight: '500', color: colors.textLight }}>EdTech Product Studio • Since 2021</span>
        </div>

        <h1 className="hero-title" style={{
          fontWeight: '500',
          color: colors.textLight,
          lineHeight: '1.1',
          marginTop: '24px',
          marginBottom: '24px',
          fontFamily: "'Playfair Display', serif"
        }}>
          Learning technology for{' '}
          <span style={{
            background: `linear-gradient(135deg, ${colors.primary} 0%, #FF6B6B 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>underserved India</span>
        </h1>

        <p style={{
          fontSize: '18px',
          color: colors.textLightMuted,
          lineHeight: '1.7',
          marginBottom: '40px',
          maxWidth: '600px',
          margin: '0 auto 40px'
        }}>
          From our own products to custom platforms — we design, build, and ship EdTech that works.
        </p>

        <div className="flex-buttons" style={{ justifyContent: 'center', marginBottom: '60px' }}>
          <button
            onClick={() => setActivePage('products')}
            style={{
              background: colors.textLight,
              color: colors.text,
              border: 'none',
              padding: '16px 32px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}>
            View Products
          </button>
          <button
            onClick={() => setActivePage('services')}
            style={{
              background: 'transparent',
              color: colors.textLight,
              border: `1px solid ${colors.borderDark}`,
              padding: '16px 32px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.3s'
            }}
            onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.1)'}
            onMouseLeave={e => e.target.style.background = 'transparent'}
          >
            Our Services
          </button>
        </div>

        {/* Stats row */}
        <div className="stats-row" style={{ justifyContent: 'center' }}>
          {[
            { value: '20+', label: 'In-house team' },
            { value: '28', label: 'States reached' },
            { value: '4+', label: 'Live products' }
          ].map(stat => (
            <div key={stat.label}>
              <div style={{ fontSize: '36px', fontWeight: '600', color: colors.textLight, fontFamily: "'Playfair Display', serif" }}>{stat.value}</div>
              <div style={{ fontSize: '14px', color: colors.textLightDim }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

// Logo Marquee (DARK) - simplified brand words
const LogoMarquee = () => {
  const items = ['EdTech', 'Accessibility', 'Innovation', 'Impact', 'Learning', 'Technology'];
  return (
    <section style={{
      padding: '40px 0',
      background: colors.bgDark,
      borderTop: `1px solid ${colors.borderDark}`,
      borderBottom: `1px solid ${colors.borderDark}`,
      overflow: 'hidden',
      fontFamily: "'DM Sans', sans-serif"
    }}>
      <div style={{ display: 'flex', width: 'max-content' }} className="marquee-track">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} style={{
            padding: '0 48px',
            fontSize: '18px',
            fontWeight: '600',
            color: colors.textLightDim,
            whiteSpace: 'nowrap',
            display: 'flex',
            alignItems: 'center',
            gap: '48px'
          }}>
            {item}
            <span style={{ color: colors.borderDark }}>•</span>
          </div>
        ))}
      </div>
    </section>
  );
};

// Trusted By Section
const TrustedBySection = () => (
  <section style={{
    padding: '80px 48px',
    background: colors.bg,
    fontFamily: "'DM Sans', sans-serif"
  }}>
    <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
      <p style={{ fontSize: '14px', color: colors.textDim, textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '32px' }}>
        Trusted by educators and institutions across India
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '48px', flexWrap: 'wrap', opacity: 0.6 }}>
        {/* Replace these with actual client/partner logos */}
        {['Partner 1', 'Partner 2', 'Partner 3', 'Partner 4', 'Partner 5'].map((partner, i) => (
          <div
            key={partner}
            style={{
              padding: '16px 32px',
              background: colors.bgCard,
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              color: colors.textMuted,
              border: `1px solid ${colors.border}`
            }}
          >
            {partner} Logo
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Testimonials Section
const TestimonialsSection = () => (
  <section style={{
    padding: '100px 48px',
    background: colors.bgCard,
    fontFamily: "'DM Sans', sans-serif"
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <Pill color={colors.accent}>Testimonials</Pill>
        <h2 style={{
          fontSize: '42px',
          fontWeight: '600',
          color: colors.text,
          marginTop: '24px',
          fontFamily: "'Playfair Display', serif"
        }}>
          What people are saying
        </h2>
      </div>

      <div className="grid-3" style={{ gap: '24px' }}>
        {[
          {
            quote: "1PYQ transformed how I prepare for my exams. The AI knows exactly where I'm weak and helps me focus my time better.",
            name: "Student Name",
            role: "UPSC Aspirant",
            location: "Lucknow"
          },
          {
            quote: "As a non-tech founder, working with 1EQ was refreshing. They understood our mission and delivered a platform our teachers actually use.",
            name: "Partner Name",
            role: "Founder, Coaching Institute",
            location: "Jaipur"
          },
          {
            quote: "The accessibility features in 1ISL Challenge are incredible. Finally, technology that doesn't leave the deaf community behind.",
            name: "User Name",
            role: "Accessibility Advocate",
            location: "Mumbai"
          }
        ].map((testimonial, i) => (
          <div
            key={i}
            style={{
              background: colors.bg,
              borderRadius: '20px',
              padding: '32px',
              border: `1px solid ${colors.border}`,
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Quote */}
            <div style={{ fontSize: '32px', color: colors.primary, marginBottom: '16px', lineHeight: 1 }}>"</div>
            <p style={{ fontSize: '16px', color: colors.textMuted, lineHeight: '1.7', marginBottom: '24px', flex: 1 }}>
              {testimonial.quote}
            </p>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${colors.primary}20 0%, ${colors.accent}20 100%)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                fontWeight: '600',
                color: colors.primary
              }}>
                {testimonial.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <p style={{ fontSize: '15px', fontWeight: '600', color: colors.text, marginBottom: '2px' }}>{testimonial.name}</p>
                <p style={{ fontSize: '13px', color: colors.textDim }}>{testimonial.role} • {testimonial.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Impact Stats Section
const ImpactSection = () => (
  <section style={{
    padding: '80px 48px',
    background: colors.bg,
    fontFamily: "'DM Sans', sans-serif"
  }}>
    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      <div style={{
        background: `linear-gradient(135deg, ${colors.bgDark} 0%, ${colors.bgDarkAlt} 100%)`,
        borderRadius: '24px',
        padding: '60px',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '32px',
        textAlign: 'center'
      }}>
        {[
          { value: '50,000+', label: 'Learners served' },
          { value: '1M+', label: 'Questions answered' },
          { value: '28', label: 'States reached' },
          { value: '18', label: 'Languages supported' }
        ].map(stat => (
          <div key={stat.label}>
            <div style={{ fontSize: '42px', fontWeight: '600', color: colors.textLight, fontFamily: "'Playfair Display', serif", marginBottom: '8px' }}>{stat.value}</div>
            <div style={{ fontSize: '14px', color: colors.textLightMuted }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Products Section (Homepage - featured + link to full page)
const ProductsSection = ({ setActivePage }) => (
  <section style={{
    padding: '120px 48px',
    background: colors.bg,
    fontFamily: "'DM Sans', sans-serif"
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <Pill>Our Products</Pill>
        <h2 style={{
          fontSize: '48px',
          fontWeight: '700',
          color: colors.text,
          marginTop: '24px',
          fontFamily: "'Playfair Display', serif"
        }}>
          Technology built for how India learns
        </h2>
      </div>

      {/* Featured Product - 1PYQ */}
      <div className="hover-lift" style={{
        background: colors.bgCard,
        borderRadius: '24px',
        padding: '48px',
        marginBottom: '32px',
        border: `1px solid ${colors.border}`,
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '48px',
        alignItems: 'center'
      }}>
        <div>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '20px' }}>
            <span style={{ background: `${colors.primary}20`, color: colors.primary, padding: '6px 14px', borderRadius: '6px', fontSize: '12px', fontWeight: '600' }}>FLAGSHIP</span>
            <span style={{ background: colors.bgHover, color: colors.textMuted, padding: '6px 14px', borderRadius: '6px', fontSize: '12px', border: `1px solid ${colors.border}` }}>B2C</span>
          </div>
          <h3 style={{ fontSize: '42px', fontWeight: '700', color: colors.text, marginBottom: '16px', fontFamily: "'Playfair Display', serif" }}>1PYQ</h3>
          <p style={{ fontSize: '18px', color: colors.textMuted, lineHeight: '1.7', marginBottom: '24px' }}>
            AI-powered precision learning for competitive exam aspirants. Unlike traditional platforms, 1PYQ identifies knowledge gaps and focuses only on what you need to learn.
          </p>
          <div style={{ display: 'flex', gap: '32px', marginBottom: '24px' }}>
            {[
              { label: 'Platforms', value: 'Web, iOS, Android' },
              { label: 'Pricing', value: '₹0 – ₹500/year' },
              { label: 'Reach', value: 'All Indian states' }
            ].map(item => (
              <div key={item.label}>
                <div style={{ fontSize: '12px', color: colors.textDim, marginBottom: '4px' }}>{item.label}</div>
                <div style={{ fontSize: '14px', color: colors.text, fontWeight: '500' }}>{item.value}</div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setActivePage('products')}
            style={{
              background: colors.primary,
              color: colors.text,
              border: 'none',
              padding: '12px 24px',
              borderRadius: '8px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
            Learn More →
          </button>
        </div>

        <div style={{
          background: `linear-gradient(135deg, ${colors.primary}10 0%, ${colors.bgHover} 100%)`,
          borderRadius: '16px',
          padding: '32px',
          minHeight: '320px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: `1px solid ${colors.border}`,
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* App mockup placeholder */}
          <div style={{
            width: '200px',
            height: '400px',
            background: colors.bg,
            borderRadius: '32px',
            border: `8px solid ${colors.text}`,
            padding: '8px',
            boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
            position: 'relative'
          }}>
            {/* Phone notch */}
            <div style={{
              width: '80px',
              height: '24px',
              background: colors.text,
              borderRadius: '12px',
              margin: '0 auto 16px',
            }} />
            {/* App content placeholder */}
            <div style={{ padding: '8px' }}>
              <div style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, #FF6B6B 100%)`,
                borderRadius: '12px',
                padding: '16px',
                marginBottom: '12px'
              }}>
                <div style={{ fontSize: '12px', color: 'white', fontWeight: '600', marginBottom: '4px' }}>1PYQ</div>
                <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.8)' }}>AI-Powered Learning</div>
              </div>
              {/* Placeholder content lines */}
              {[1, 2, 3, 4].map(i => (
                <div key={i} style={{
                  height: '40px',
                  background: colors.bgCard,
                  borderRadius: '8px',
                  marginBottom: '8px',
                  border: `1px solid ${colors.border}`
                }} />
              ))}
            </div>
            {/* Replace with actual screenshot */}
            <p style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '9px',
              color: colors.textDim,
              textAlign: 'center',
              width: '100%'
            }}>
              Replace with app screenshot
            </p>
          </div>
        </div>
      </div>

      {/* Other Products Preview */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '32px' }}>
        {[
          { name: '1LMS', color: colors.accent },
          { name: '1ISL Challenge', color: colors.success },
          { name: 'Client Projects', color: colors.purple }
        ].map(item => (
          <span key={item.name} style={{
            padding: '10px 20px',
            background: `${item.color}10`,
            borderRadius: '100px',
            fontSize: '14px',
            color: item.color,
            fontWeight: '500',
            border: `1px solid ${item.color}30`
          }}>{item.name}</span>
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <button
          onClick={() => setActivePage('products')}
          style={{
            background: 'transparent',
            color: colors.text,
            border: `1px solid ${colors.border}`,
            padding: '14px 28px',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
          View All Products →
        </button>
      </div>
    </div>
  </section>
);

// Why 1EQ - Benefits Grid
const BenefitsSection = () => (
  <section style={{
    padding: '120px 48px',
    background: colors.bg,
    fontFamily: "'DM Sans', sans-serif"
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <Pill color={colors.success}>Why 1EQ</Pill>
        <h2 style={{
          fontSize: '48px',
          fontWeight: '700',
          color: colors.text,
          marginTop: '24px',
          fontFamily: "'Playfair Display', serif"
        }}>
          We're not a generic dev shop
        </h2>
      </div>

      <div className="grid-3" style={{ gap: '24px' }}>
        {[
          { icon: '🎓', title: 'EdTech DNA', desc: "We understand pedagogy, learning outcomes, and what makes education stick." },
          { icon: '👥', title: 'In-house Team', desc: '20-person tech team. No outsourcing. Direct communication with builders.' },
          { icon: '♿', title: 'Accessibility First', desc: 'Multi-language, low-bandwidth, sign language — we build for everyone.' },
          { icon: '🎯', title: 'Mission Aligned', desc: "We partner with orgs that believe education shouldn't depend on pin code." },
          { icon: '⚡', title: 'Battle-tested Tech', desc: "Our products serve real users daily. We build what works, not what demos well." },
          { icon: '🤝', title: 'Long-term Partners', desc: "We don't disappear after delivery. We grow with you." }
        ].map(item => (
          <div
            key={item.title}
            className="hover-lift"
            style={{
              background: colors.bgCard,
              borderRadius: '20px',
              padding: '32px',
              border: `1px solid ${colors.border}`
            }}
          >
            <div style={{
              width: '56px',
              height: '56px',
              borderRadius: '14px',
              background: colors.bgHover,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
              marginBottom: '20px'
            }}>{item.icon}</div>
            <h4 style={{ fontSize: '20px', fontWeight: '600', color: colors.text, marginBottom: '8px' }}>{item.title}</h4>
            <p style={{ fontSize: '14px', color: colors.textMuted, lineHeight: '1.6' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// Services Cards (Homepage teaser - links to full page)
const ServicesSection = ({ setActivePage }) => (
  <section style={{
    padding: '120px 48px',
    background: colors.bgCard,
    fontFamily: "'DM Sans', sans-serif"
  }}>
    <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
      <Pill color={colors.purple}>Services</Pill>
      <h2 style={{
        fontSize: '48px',
        fontWeight: '700',
        color: colors.text,
        marginTop: '24px',
        marginBottom: '20px',
        fontFamily: "'Playfair Display', serif"
      }}>
        How we can help
      </h2>
      <p style={{ fontSize: '18px', color: colors.textMuted, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>
        Custom development, white-label platforms, tech consulting, and accessibility solutions — all built by our in-house team.
      </p>

      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}>
        {['Custom Dev', 'White-label LMS', 'Tech Consulting', 'Accessibility'].map(tag => (
          <span key={tag} style={{ padding: '10px 20px', background: colors.bg, borderRadius: '100px', fontSize: '14px', color: colors.textMuted, border: `1px solid ${colors.border}` }}>{tag}</span>
        ))}
      </div>

      <button
        onClick={() => setActivePage('services')}
        style={{
          background: colors.text,
          color: colors.textLight,
          border: 'none',
          padding: '16px 32px',
          borderRadius: '8px',
          fontSize: '15px',
          fontWeight: '600',
          cursor: 'pointer'
        }}>
        View All Services →
      </button>
    </div>
  </section>
);

// CTA Section (DARK)
const CTASection = ({ setActivePage }) => (
  <section style={{
    padding: '120px 48px',
    background: `linear-gradient(180deg, ${colors.bgDarkAlt} 0%, ${colors.bgDark} 100%)`,
    fontFamily: "'DM Sans', sans-serif",
    position: 'relative',
    overflow: 'hidden'
  }}>
    {/* Background gradient */}
    <div style={{
      position: 'absolute',
      bottom: '-50%',
      left: '50%',
      transform: 'translateX(-50%)',
      width: '1000px',
      height: '600px',
      background: `radial-gradient(ellipse, ${colors.primary}15 0%, transparent 70%)`,
      pointerEvents: 'none'
    }} />

    <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
      <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `${colors.primary}20`, border: `1px solid ${colors.primary}40`, padding: '8px 16px', borderRadius: '100px', marginBottom: '16px' }}>
        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: colors.textLight }} />
        <span style={{ fontSize: '13px', fontWeight: '500', color: colors.textLight }}>Get Started</span>
      </div>
      <h2 style={{
        fontSize: '56px',
        fontWeight: '500',
        color: colors.textLight,
        marginTop: '24px',
        marginBottom: '24px',
        fontFamily: "'Playfair Display', serif"
      }}>
        Ready to build something that matters?
      </h2>
      <p style={{ fontSize: '18px', color: colors.textLightMuted, marginBottom: '40px' }}>
        We partner with organizations that share our mission to make education accessible for all.
      </p>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
        <button
          onClick={() => setActivePage('contact')}
          style={{
            background: colors.textLight,
            color: colors.text,
            border: 'none',
            padding: '16px 32px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer'
          }}>
          Get in Touch
        </button>
        <button
          onClick={() => setActivePage('about')}
          style={{
            background: 'transparent',
            color: colors.textLight,
            border: `1px solid ${colors.borderDark}`,
            padding: '16px 32px',
            borderRadius: '8px',
            fontSize: '16px',
            fontWeight: '500',
            cursor: 'pointer'
          }}>
          About Us
        </button>
      </div>
    </div>
  </section>
);

// Footer (DARK)
const Footer = ({ setActivePage }) => (
  <footer className="section-padding" style={{
    background: colors.bgDark,
    borderTop: `1px solid ${colors.borderDark}`,
    fontFamily: "'DM Sans', sans-serif",
    paddingTop: '60px',
    paddingBottom: '40px'
  }}>
    <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <div className="footer-grid" style={{ marginBottom: '48px' }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '16px' }}>
            <span style={{ fontSize: '24px', fontWeight: '700', color: colors.primary }}>1</span>
            <span style={{ fontSize: '24px', fontWeight: '700', color: colors.textLight }}>EQ</span>
          </div>
          <p style={{ color: colors.textLightMuted, fontSize: '14px', lineHeight: '1.7', marginBottom: '20px' }}>
            Learning technology for underserved India.<br />From classrooms to communities.
          </p>
          {/* Social Links */}
          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              { name: 'LinkedIn', icon: 'in', url: '#' },
              { name: 'Twitter', icon: '𝕏', url: '#' },
              { name: 'Instagram', icon: '○', url: '#' },
              { name: 'YouTube', icon: '▶', url: '#' }
            ].map(social => (
              <a
                key={social.name}
                href={social.url}
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: colors.textLightMuted,
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '600',
                  transition: 'background 0.2s'
                }}
                onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.2)'}
                onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.1)'}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 style={{ color: colors.textLight, fontSize: '14px', fontWeight: '600', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Products</h4>
          {['1PYQ', '1LMS', '1ISL Challenge'].map(item => (
            <a key={item} onClick={() => setActivePage('products')} style={{ display: 'block', color: colors.textLightMuted, fontSize: '14px', marginBottom: '12px', cursor: 'pointer', textDecoration: 'none' }}>{item}</a>
          ))}
        </div>

        <div>
          <h4 style={{ color: colors.textLight, fontSize: '14px', fontWeight: '600', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Company</h4>
          {[{ label: 'About', page: 'about' }, { label: 'Services', page: 'services' }, { label: 'Technology', page: 'technology' }, { label: 'Blog', page: 'blog' }, { label: 'Careers', page: 'careers' }].map(item => (
            <a key={item.label} onClick={() => setActivePage(item.page)} style={{ display: 'block', color: colors.textLightMuted, fontSize: '14px', marginBottom: '12px', cursor: 'pointer', textDecoration: 'none' }}>{item.label}</a>
          ))}
        </div>

        <div>
          <h4 style={{ color: colors.textLight, fontSize: '14px', fontWeight: '600', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Contact</h4>
          <p style={{ color: colors.textLightMuted, fontSize: '14px', marginBottom: '8px' }}>contact@1eq.in</p>
          <p style={{ color: colors.textLightMuted, fontSize: '14px', marginBottom: '8px' }}>+91 98851 15063</p>
          <p style={{ color: colors.textLightDim, fontSize: '13px', lineHeight: '1.5' }}>907, OCUS Quantum<br />Sector 51, Gurgaon</p>
        </div>
      </div>

      <div style={{ borderTop: `1px solid ${colors.borderDark}`, paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <p style={{ fontSize: '13px', color: colors.textLightDim }}>© 2021–2026 1EQ Edutech Pvt. Ltd.</p>
        <div style={{ display: 'flex', gap: '24px' }}>
          <button onClick={() => setActivePage('privacy')} style={{ fontSize: '13px', color: colors.textLightDim, cursor: 'pointer', background: 'none', border: 'none' }}>Privacy Policy</button>
          <button onClick={() => setActivePage('terms')} style={{ fontSize: '13px', color: colors.textLightDim, cursor: 'pointer', background: 'none', border: 'none' }}>Terms of Service</button>
        </div>
      </div>
    </div>
  </footer>
);

// ============ INNER PAGES ============

// Products Page
const ProductsPage = ({ setActivePage }) => (
  <section style={{ minHeight: '100vh', background: colors.bg, fontFamily: "'DM Sans', sans-serif" }}>
    {/* Dark Header */}
    <div className="page-header-padding" style={{ background: `linear-gradient(180deg, ${colors.bgDark} 0%, ${colors.bgDarkAlt} 100%)`, paddingBottom: '80px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `${colors.primary}20`, border: `1px solid ${colors.primary}40`, padding: '8px 16px', borderRadius: '100px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: colors.textLight }} />
          <span style={{ fontSize: '13px', fontWeight: '500', color: colors.textLight }}>Our Products</span>
        </div>
        <h1 className="page-title" style={{ fontWeight: '500', color: colors.textLight, marginTop: '24px', marginBottom: '16px', fontFamily: "'Playfair Display', serif" }}>
          Technology built for how India learns
        </h1>
        <p style={{ fontSize: '18px', color: colors.textLightMuted, maxWidth: '600px', margin: '0 auto' }}>
          From AI-powered exam prep to accessible learning tools — products designed for real Indian learners.
        </p>
      </div>
    </div>

    {/* Which product section */}
    <div className="content-padding" style={{ background: colors.bgCard, borderBottom: `1px solid ${colors.border}` }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '24px', textAlign: 'center' }}>Which product is right for you?</h2>
        <div className="grid-3" style={{ gap: '16px' }}>
          {[
            { question: "Preparing for competitive exams?", answer: "1PYQ", color: colors.primary },
            { question: "Running a coaching center or school?", answer: "1LMS", color: colors.accent },
            { question: "Learning or teaching sign language?", answer: "1ISL Challenge", color: colors.success }
          ].map(item => (
            <div key={item.answer} style={{
              background: colors.bg,
              padding: '24px',
              borderRadius: '12px',
              border: `1px solid ${colors.border}`,
              textAlign: 'center'
            }}>
              <p style={{ fontSize: '14px', color: colors.textMuted, marginBottom: '12px' }}>{item.question}</p>
              <p style={{ fontSize: '18px', fontWeight: '600', color: item.color }}>→ {item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Light Content */}
    <div className="content-padding" style={{ paddingTop: '80px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* ========== 1PYQ SECTION ========== */}
        <div id="1pyq" style={{ marginBottom: '100px' }}>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <span style={{ background: `${colors.primary}20`, color: colors.primary, padding: '6px 14px', borderRadius: '6px', fontSize: '13px', fontWeight: '600' }}>B2C</span>
            <span style={{ background: `${colors.primary}20`, color: colors.primary, padding: '6px 14px', borderRadius: '6px', fontSize: '13px', fontWeight: '600' }}>FLAGSHIP</span>
          </div>
          <h2 className="section-title" style={{ fontWeight: '600', color: colors.text, marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>1PYQ</h2>
          <p style={{ fontSize: '15px', color: colors.textDim, marginBottom: '8px', fontStyle: 'italic' }}>Print. Practice. Personalise Your Questions</p>
          <p style={{ fontSize: '20px', color: colors.primary, fontWeight: '500', marginBottom: '16px' }}>AI-powered precision learning for exam aspirants</p>

          {/* Philosophy Tagline */}
          <div style={{
            background: `linear-gradient(135deg, ${colors.primary}08 0%, ${colors.bgCard} 100%)`,
            borderRadius: '12px',
            padding: '24px 28px',
            borderLeft: `3px solid ${colors.primary}`,
            marginBottom: '32px',
            maxWidth: '600px'
          }}>
            <p style={{ fontSize: '18px', color: colors.text, fontWeight: '500', marginBottom: '4px', fontFamily: "'Playfair Display', serif" }}>
              अहम् शिक्षकः। <span style={{ color: colors.textMuted, fontWeight: '400' }}>— Aham Shikṣakaḥ</span>
            </p>
            <p style={{ fontSize: '15px', color: colors.textMuted, fontStyle: 'italic' }}>
              "I am the teacher." Self-learning isn't the fallback. It's the future.
            </p>
          </div>

          <p style={{ fontSize: '17px', color: colors.textMuted, lineHeight: '1.8', marginBottom: '40px', maxWidth: '700px' }}>
            Unlike traditional platforms that restart everyone from scratch, 1PYQ uses AI to identify your specific knowledge gaps and creates a personalized learning path. Stop wasting time on what you already know — focus only on what you need to learn.
          </p>

          {/* Features Grid */}
          <div className="grid-3" style={{ marginBottom: '40px' }}>
            {[
              { icon: '🎯', title: 'AI Gap Analysis', desc: 'Identifies exactly where you need to improve' },
              { icon: '🔄', title: 'Spaced Repetition', desc: 'Scientifically-proven retention system' },
              { icon: '📊', title: 'Progress Tracking', desc: 'Visual analytics of your preparation' },
              { icon: '📴', title: 'Offline Mode', desc: 'Download and learn without internet' },
              { icon: '🌐', title: 'Multi-language', desc: 'Available in Hindi and English' },
              { icon: '💰', title: 'Affordable', desc: 'Starting at ₹0, capped at ₹500/year' }
            ].map(feature => (
              <div key={feature.title} style={{
                background: colors.bgCard,
                padding: '24px',
                borderRadius: '16px',
                border: `1px solid ${colors.border}`
              }}>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{feature.icon}</div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', color: colors.text, marginBottom: '6px' }}>{feature.title}</h4>
                <p style={{ fontSize: '14px', color: colors.textMuted, lineHeight: '1.5' }}>{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Supported Exams */}
          <div style={{ background: colors.bgCard, borderRadius: '16px', padding: '32px', marginBottom: '40px', border: `1px solid ${colors.border}` }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: colors.text, marginBottom: '20px' }}>Supported Exams</h3>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {['UPSC', 'SSC CGL', 'SSC CHSL', 'Banking (IBPS/SBI)', 'Railways', 'State PSC', 'CTET', 'NTA UGC NET'].map(exam => (
                <span key={exam} style={{
                  padding: '8px 16px',
                  background: colors.bg,
                  borderRadius: '100px',
                  fontSize: '14px',
                  color: colors.textMuted,
                  border: `1px solid ${colors.border}`
                }}>{exam}</span>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div style={{
            background: colors.bgCard,
            borderRadius: '20px',
            padding: '32px 40px',
            marginBottom: '40px',
            border: `1px solid ${colors.border}`
          }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: colors.text, marginBottom: '24px' }}>Simple, Affordable Pricing</h3>
            <div className="grid-3" style={{ gap: '32px', marginBottom: '24px' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '12px', color: colors.textDim, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Start Free</div>
                <div style={{ fontSize: '36px', fontWeight: '700', color: colors.text }}>₹0</div>
                <div style={{ fontSize: '14px', color: colors.textMuted }}>Limited access</div>
              </div>
              <div style={{ textAlign: 'center', padding: '16px', background: `${colors.primary}08`, borderRadius: '12px', border: `1px solid ${colors.primary}20` }}>
                <div style={{ fontSize: '12px', color: colors.primary, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px', fontWeight: '600' }}>Most Popular</div>
                <div style={{ fontSize: '36px', fontWeight: '700', color: colors.text }}>₹10<span style={{ fontSize: '16px', fontWeight: '400', color: colors.textMuted }}>/mo</span></div>
                <div style={{ fontSize: '14px', color: colors.textMuted }}>Unlimited access</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '12px', color: colors.textDim, marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Yearly Cap</div>
                <div style={{ fontSize: '36px', fontWeight: '700', color: colors.text }}>₹500</div>
                <div style={{ fontSize: '14px', color: colors.textMuted }}>Max you'll ever pay</div>
              </div>
            </div>
            <p style={{ fontSize: '14px', color: colors.textDim, textAlign: 'center' }}>
              Subscribe via the app or website. No hidden fees.
            </p>
          </div>

          {/* Download buttons */}
          <div className="flex-buttons" style={{ flexWrap: 'wrap' }}>
            <button style={{ background: colors.text, color: colors.textLight, border: 'none', padding: '16px 32px', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '20px' }}>▶</span> Google Play
            </button>
            <button style={{ background: colors.text, color: colors.textLight, border: 'none', padding: '16px 32px', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '20px' }}></span> App Store
            </button>
            <button style={{ background: 'transparent', color: colors.text, border: `1px solid ${colors.border}`, padding: '16px 32px', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>
              Try Web Version →
            </button>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: '48px', marginTop: '40px', paddingTop: '40px', borderTop: `1px solid ${colors.border}` }}>
            {[
              { value: '4.5★', label: 'Play Store Rating' },
              { value: '50K+', label: 'Downloads' },
              { value: '28', label: 'States' }
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontSize: '28px', fontWeight: '600', color: colors.text }}>{stat.value}</div>
                <div style={{ fontSize: '14px', color: colors.textDim }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== 1LMS SECTION ========== */}
        <div id="1lms" style={{ marginBottom: '100px' }}>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <span style={{ background: `${colors.accent}15`, color: colors.accent, padding: '6px 14px', borderRadius: '6px', fontSize: '13px', fontWeight: '600' }}>B2B</span>
            <span style={{ background: `${colors.accent}15`, color: colors.accent, padding: '6px 14px', borderRadius: '6px', fontSize: '13px', fontWeight: '600' }}>WHITE-LABEL</span>
          </div>
          <h2 className="section-title" style={{ fontWeight: '600', color: colors.text, marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>1LMS</h2>
          <p style={{ fontSize: '15px', color: colors.textDim, marginBottom: '8px', fontStyle: 'italic' }}>One Learning Management System for Bharat</p>
          <p style={{ fontSize: '20px', color: colors.accent, fontWeight: '500', marginBottom: '16px' }}>Your brand. Our technology.</p>

          {/* Philosophy Tagline */}
          <div style={{
            background: `linear-gradient(135deg, ${colors.accent}08 0%, ${colors.bgCard} 100%)`,
            borderRadius: '12px',
            padding: '24px 28px',
            borderLeft: `3px solid ${colors.accent}`,
            marginBottom: '32px',
            maxWidth: '500px'
          }}>
            <p style={{ fontSize: '18px', color: colors.text, fontWeight: '500', marginBottom: '4px', fontFamily: "'Playfair Display', serif" }}>
              शिक्षा का सेतु
            </p>
            <p style={{ fontSize: '15px', color: colors.textMuted, fontStyle: 'italic' }}>
              "Bridge to Education" — Education Simplified
            </p>
          </div>

          <p style={{ fontSize: '17px', color: colors.textMuted, lineHeight: '1.8', marginBottom: '40px', maxWidth: '700px' }}>
            Launch your own branded learning platform without building from scratch. 1LMS is a white-label solution that gives coaching centers, schools, and educators a professional LMS with your branding — powered by our battle-tested technology.
          </p>

          {/* Who it's for */}
          <div className="grid-4" style={{ gap: '16px', marginBottom: '40px' }}>
            {[
              { icon: '🏫', label: 'Coaching Centers' },
              { icon: '🎓', label: 'Schools & Colleges' },
              { icon: '👨‍🏫', label: 'Individual Tutors' },
              { icon: '🏢', label: 'EdTech Startups' }
            ].map(item => (
              <div key={item.label} style={{
                background: colors.bgCard,
                padding: '24px',
                borderRadius: '12px',
                textAlign: 'center',
                border: `1px solid ${colors.border}`
              }}>
                <div style={{ fontSize: '32px', marginBottom: '12px' }}>{item.icon}</div>
                <p style={{ fontSize: '14px', fontWeight: '500', color: colors.text }}>{item.label}</p>
              </div>
            ))}
          </div>

          {/* Features */}
          <div className="grid-2" style={{ gap: '20px', marginBottom: '40px' }}>
            {[
              { title: 'Custom Branding', desc: 'Your logo, colors, and domain. Students see your brand, not ours.' },
              { title: 'Content Management', desc: 'Upload videos, PDFs, quizzes. Organize by courses, batches, subjects.' },
              { title: 'Live Classes', desc: 'Integrated video conferencing. Schedule and record classes.' },
              { title: 'Assessments', desc: 'Create tests, track performance, generate reports automatically.' },
              { title: 'Student Management', desc: 'Enrollments, batches, progress tracking, parent communication.' },
              { title: 'Payment Integration', desc: 'Collect fees online. Razorpay, PayU, UPI supported.' }
            ].map(feature => (
              <div key={feature.title} style={{
                background: colors.bgCard,
                padding: '28px',
                borderRadius: '16px',
                border: `1px solid ${colors.border}`
              }}>
                <h4 style={{ fontSize: '17px', fontWeight: '600', color: colors.text, marginBottom: '8px' }}>{feature.title}</h4>
                <p style={{ fontSize: '15px', color: colors.textMuted, lineHeight: '1.6' }}>{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Pricing note */}
          <div style={{
            background: `linear-gradient(135deg, ${colors.accent}10 0%, ${colors.bgCard} 100%)`,
            borderRadius: '16px',
            padding: '32px',
            border: `1px solid ${colors.accent}30`,
            marginBottom: '32px'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: colors.text, marginBottom: '12px' }}>Pricing</h3>
            <p style={{ fontSize: '16px', color: colors.textMuted, marginBottom: '20px' }}>
              Custom pricing based on your student count and requirements. Starts at ₹5,000/month for small coaching centers.
            </p>
            <button onClick={() => setActivePage('contact')} style={{
              background: colors.accent,
              color: colors.textLight,
              border: 'none',
              padding: '14px 28px',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
              Get a Quote →
            </button>
          </div>
        </div>

        {/* ========== 1ISL SECTION ========== */}
        <div id="1isl" style={{ marginBottom: '60px' }}>
          <div style={{ display: 'flex', gap: '12px', marginBottom: '24px', flexWrap: 'wrap' }}>
            <span style={{ background: `${colors.success}15`, color: colors.success, padding: '6px 14px', borderRadius: '6px', fontSize: '13px', fontWeight: '600' }}>SOCIAL IMPACT</span>
            <span style={{ background: `${colors.success}15`, color: colors.success, padding: '6px 14px', borderRadius: '6px', fontSize: '13px', fontWeight: '600' }}>FREE</span>
          </div>
          <h2 className="section-title" style={{ fontWeight: '600', color: colors.text, marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>1ISL Challenge</h2>
          <p style={{ fontSize: '15px', color: colors.textDim, marginBottom: '8px', fontStyle: 'italic' }}>One Indian Sign Language Challenge</p>
          <p style={{ fontSize: '20px', color: colors.success, fontWeight: '500', marginBottom: '16px' }}>India's first ISL vocabulary learning app</p>

          {/* Philosophy Tagline */}
          <div style={{
            background: `linear-gradient(135deg, ${colors.success}08 0%, ${colors.bgCard} 100%)`,
            borderRadius: '12px',
            padding: '24px 28px',
            borderLeft: `3px solid ${colors.success}`,
            marginBottom: '32px',
            maxWidth: '600px'
          }}>
            <p style={{ fontSize: '18px', color: colors.text, fontWeight: '500', marginBottom: '4px', fontFamily: "'Playfair Display', serif" }}>
              सबकी भाषा, सबके लिए <span style={{ color: colors.textMuted, fontWeight: '400' }}>— Sabki Bhasha, Sabke Liye</span>
            </p>
            <p style={{ fontSize: '15px', color: colors.textMuted, fontStyle: 'italic' }}>
              "Everyone's language, for everyone." — Bridging the deaf and hearing worlds, together.
            </p>
          </div>

          <p style={{ fontSize: '17px', color: colors.textMuted, lineHeight: '1.8', marginBottom: '24px', maxWidth: '700px' }}>
            Indian Sign Language is used by over 5 million deaf Indians, yet resources to learn it are scarce. 1ISL Challenge makes sign language learning accessible to everyone — whether you're deaf, a family member, a teacher, or just curious.
          </p>

          {/* Languages */}
          <div style={{ background: colors.bgCard, borderRadius: '16px', padding: '32px', marginBottom: '40px', border: `1px solid ${colors.border}` }}>
            <h3 style={{ fontSize: '18px', fontWeight: '600', color: colors.text, marginBottom: '20px' }}>Available in 18 Indian Languages</h3>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {['Hindi', 'English', 'Tamil', 'Telugu', 'Kannada', 'Malayalam', 'Bengali', 'Marathi', 'Gujarati', 'Punjabi', 'Odia', 'Assamese', 'Urdu', 'Maithili', 'Sanskrit', 'Konkani', 'Nepali', 'Manipuri'].map(lang => (
                <span key={lang} style={{
                  padding: '6px 14px',
                  background: colors.bg,
                  borderRadius: '100px',
                  fontSize: '13px',
                  color: colors.textMuted,
                  border: `1px solid ${colors.border}`
                }}>{lang}</span>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="grid-3" style={{ gap: '20px', marginBottom: '40px' }}>
            {[
              { icon: '🎮', title: 'Gamified Learning', desc: 'Fun challenges and streaks to keep you motivated' },
              { icon: '📹', title: 'Video Lessons', desc: 'Clear sign demonstrations by native signers' },
              { icon: '🏆', title: 'Leaderboards', desc: 'Compete with friends and learners nationwide' }
            ].map(feature => (
              <div key={feature.title} style={{
                background: colors.bgCard,
                padding: '24px',
                borderRadius: '16px',
                border: `1px solid ${colors.border}`
              }}>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{feature.icon}</div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', color: colors.text, marginBottom: '6px' }}>{feature.title}</h4>
                <p style={{ fontSize: '14px', color: colors.textMuted, lineHeight: '1.5' }}>{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* Download */}
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <button style={{ background: colors.success, color: colors.textLight, border: 'none', padding: '16px 32px', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ fontSize: '20px' }}>▶</span> Download on Play Store
            </button>
            <span style={{ fontSize: '14px', color: colors.textDim }}>100% Free • No ads • No in-app purchases</span>
          </div>

          {/* Impact stats */}
          <div style={{ display: 'flex', gap: '48px', marginTop: '40px', paddingTop: '40px', borderTop: `1px solid ${colors.border}` }}>
            {[
              { value: '10K+', label: 'Downloads' },
              { value: '500+', label: 'Signs taught' },
              { value: '18', label: 'Languages' }
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontSize: '28px', fontWeight: '600', color: colors.text }}>{stat.value}</div>
                <div style={{ fontSize: '14px', color: colors.textDim }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          background: colors.bgCard,
          borderRadius: '24px',
          padding: '60px',
          textAlign: 'center',
          border: `1px solid ${colors.border}`
        }}>
          <h2 style={{ fontSize: '32px', fontWeight: '600', color: colors.text, marginBottom: '16px', fontFamily: "'Playfair Display', serif" }}>
            Need something custom?
          </h2>
          <p style={{ fontSize: '17px', color: colors.textMuted, marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
            We also build custom EdTech solutions. Check out our services or get in touch.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <button onClick={() => setActivePage('services')} style={{ background: colors.text, color: colors.textLight, border: 'none', padding: '14px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>
              View Services
            </button>
            <button onClick={() => setActivePage('contact')} style={{ background: 'transparent', color: colors.text, border: `1px solid ${colors.border}`, padding: '14px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>
              Contact Us
            </button>
          </div>
        </div>

      </div>
    </div>
  </section>
);

// Services Page
const ServicesPageFull = ({ setActivePage }) => (
  <section style={{ minHeight: '100vh', background: colors.bg, fontFamily: "'DM Sans', sans-serif" }}>
    {/* Dark Header */}
    <div style={{ background: `linear-gradient(180deg, ${colors.bgDark} 0%, ${colors.bgDarkAlt} 100%)`, padding: '140px 48px 60px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `${colors.purple}20`, border: `1px solid ${colors.purple}40`, padding: '8px 16px', borderRadius: '100px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: colors.textLight }} />
          <span style={{ fontSize: '13px', fontWeight: '500', color: colors.textLight }}>Our Services</span>
        </div>
        <h1 style={{ fontSize: '56px', fontWeight: '500', color: colors.textLight, marginTop: '24px', marginBottom: '16px', fontFamily: "'Playfair Display', serif" }}>
          Custom technology for impact
        </h1>
        <p style={{ fontSize: '20px', color: colors.textLightMuted }}>
          Technology solutions for organizations building impact.
        </p>
      </div>
    </div>

    {/* Light Content */}
    <div style={{ padding: '60px 48px 80px' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

        {/* Non-Tech Founders Section */}
        <div style={{
          background: `linear-gradient(135deg, ${colors.purple}15 0%, ${colors.bgCard} 100%)`,
          borderRadius: '24px',
          padding: '60px',
          border: `1px solid ${colors.purple}30`,
          marginBottom: '60px'
        }}>
          <span style={{ display: 'inline-block', background: `${colors.purple}20`, color: colors.purple, padding: '6px 14px', borderRadius: '6px', fontSize: '13px', fontWeight: '600', marginBottom: '24px' }}>FREE ADVISORY</span>

          <h2 style={{ fontSize: '36px', fontWeight: '700', color: colors.text, marginBottom: '20px', fontFamily: "'Playfair Display', serif" }}>Non-tech founder? So is ours.</h2>

          <p style={{ fontSize: '17px', color: colors.textMuted, lineHeight: '1.8', marginBottom: '16px', maxWidth: '700px' }}>
            We built a 20+ person tech team, shipped 4 live products, and delivered platforms for multiple clients — all without a technical co-founder.
          </p>

          <p style={{ fontSize: '17px', color: colors.textMuted, lineHeight: '1.8', marginBottom: '32px', maxWidth: '700px' }}>
            It wasn't easy. We made mistakes, overpaid for bad advice, hired wrong, and learned the hard way what actually matters when building tech products. Now we're offering that experience to you — free.
          </p>

          <div style={{ marginBottom: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: '600', color: colors.text, marginBottom: '16px' }}>What we can help with:</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', maxWidth: '700px' }}>
              {[
                'Evaluating whether you need a technical co-founder, an agency, or an in-house team',
                'Scoping your MVP without overbuilding (or underbuilding)',
                'Understanding what developers actually do — and what to look for when hiring',
                'Avoiding common traps that burn non-tech founders'
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <span style={{ color: colors.purple, fontSize: '18px', lineHeight: '1.4' }}>✓</span>
                  <span style={{ fontSize: '15px', color: colors.textMuted, lineHeight: '1.6' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', padding: '24px', background: colors.bg, borderRadius: '12px', maxWidth: '500px' }}>
            <div>
              <div style={{ fontSize: '14px', color: colors.textDim, marginBottom: '4px' }}>The offer</div>
              <div style={{ fontSize: '18px', color: colors.text, fontWeight: '600' }}>30-minute call. No pitch, no strings.</div>
            </div>
            <button style={{ background: colors.purple, color: colors.text, border: 'none', padding: '14px 28px', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer', whiteSpace: 'nowrap' }}>Book a Free Call</button>
          </div>
        </div>

        {/* Paid Services */}
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.text, marginBottom: '32px', fontFamily: "'Playfair Display', serif" }}>How we can help</h2>

        <div className="grid-2" style={{ gap: '24px', marginBottom: '60px' }}>
          {[
            { icon: '💻', title: 'Custom Development', desc: 'End-to-end product development for EdTech and social impact organizations.', color: colors.primary },
            { icon: '🏷️', title: 'White-label Solutions', desc: 'Launch your own branded learning platform using our battle-tested technology.', color: colors.accent },
            { icon: '🧭', title: 'Tech Consulting', desc: 'Strategic guidance, architecture reviews, and team augmentation.', color: colors.success },
            { icon: '♿', title: 'Accessibility Solutions', desc: 'Sign language, multi-language, and low-bandwidth optimization.', color: colors.purple }
          ].map(item => (
            <div key={item.title} style={{ background: colors.bgCard, borderRadius: '24px', padding: '40px', border: `1px solid ${colors.border}` }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '16px', background: `${item.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '28px', marginBottom: '24px' }}>{item.icon}</div>
              <h2 style={{ fontSize: '24px', fontWeight: '700', color: colors.text, marginBottom: '12px', fontFamily: "'Playfair Display', serif" }}>{item.title}</h2>
              <p style={{ fontSize: '16px', color: colors.textMuted, lineHeight: '1.7' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Portfolio */}
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.text, marginBottom: '32px', fontFamily: "'Playfair Display', serif" }}>What We've Built</h2>
        <div className="grid-2" style={{ gap: '24px', marginBottom: '60px' }}>
          {[
            { name: 'MarkMyPresence', cat: 'Attendance', desc: 'Smart attendance tracking for educational institutions.', color: colors.primary },
            { name: 'Deaf Helpline App', cat: 'Accessibility', desc: 'Emergency helpline app for the deaf community.', color: colors.success },
            { name: 'RunKranti', cat: 'Fitness', desc: 'Community-driven fitness platform for runners.', color: colors.accent },
            { name: '1MathTrix', cat: 'EdTech', desc: 'Gamified mathematics learning app.', color: colors.purple }
          ].map(item => (
            <div key={item.name} style={{ background: colors.bgCard, borderRadius: '16px', padding: '32px', border: `1px solid ${colors.border}` }}>
              <span style={{ display: 'inline-block', background: `${item.color}15`, color: item.color, padding: '6px 12px', borderRadius: '6px', fontSize: '12px', fontWeight: '600', marginBottom: '16px' }}>{item.cat}</span>
              <h3 style={{ fontSize: '24px', fontWeight: '700', color: colors.text, marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>{item.name}</h3>
              <p style={{ fontSize: '15px', color: colors.textMuted, lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: colors.text, marginBottom: '32px', fontFamily: "'Playfair Display', serif" }}>How we build with you</h2>
        <div className="grid-4" style={{ gap: '20px', marginBottom: '60px' }}>
          {[
            { step: '01', label: 'Discovery', desc: 'We understand your mission, users, and constraints. No assumptions — just deep listening and research.', icon: '🔍' },
            { step: '02', label: 'Design', desc: 'We architect solutions that fit your needs, timeline, and budget. User-centered, accessible-first.', icon: '✏️' },
            { step: '03', label: 'Develop', desc: 'Our in-house team builds, tests, and iterates with you in the loop. No outsourcing, no surprises.', icon: '⚡' },
            { step: '04', label: 'Deploy', desc: "We launch, monitor, and support. We don't disappear after delivery — we're in it for the long haul.", icon: '🚀' }
          ].map(item => (
            <div key={item.step} style={{
              background: colors.bgCard,
              borderRadius: '20px',
              padding: '32px',
              border: `1px solid ${colors.border}`
            }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{item.icon}</div>
              <div style={{ fontSize: '13px', color: colors.purple, fontWeight: '600', marginBottom: '8px' }}>{item.step}</div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: colors.text, marginBottom: '12px' }}>{item.label}</h3>
              <p style={{ fontSize: '14px', color: colors.textMuted, lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          background: `linear-gradient(135deg, ${colors.bgDark} 0%, ${colors.bgDarkAlt} 100%)`,
          borderRadius: '24px',
          padding: '60px',
          textAlign: 'center'
        }}>
          <h2 style={{ fontSize: '32px', fontWeight: '600', color: colors.textLight, marginBottom: '16px', fontFamily: "'Playfair Display', serif" }}>
            Ready to build something?
          </h2>
          <p style={{ fontSize: '17px', color: colors.textLightMuted, marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
            Let's talk about your project. No pressure, just a conversation.
          </p>
          <button onClick={() => setActivePage('contact')} style={{ background: colors.textLight, color: colors.text, border: 'none', padding: '16px 32px', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>
            Start a Conversation →
          </button>
        </div>

      </div>
    </div>
  </section>
);
// Technology Page
const TechnologyPage = () => (
  <section style={{ minHeight: '100vh', background: colors.bg, fontFamily: "'DM Sans', sans-serif" }}>
    {/* Dark Header */}
    <div className="page-header-padding" style={{ background: `linear-gradient(180deg, ${colors.bgDark} 0%, ${colors.bgDarkAlt} 100%)`, paddingBottom: '80px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `${colors.accent}20`, border: `1px solid ${colors.accent}40`, padding: '8px 16px', borderRadius: '100px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: colors.textLight }} />
          <span style={{ fontSize: '13px', fontWeight: '500', color: colors.textLight }}>Technology</span>
        </div>
        <h1 className="page-title" style={{ fontWeight: '500', color: colors.textLight, marginTop: '24px', marginBottom: '16px', fontFamily: "'Playfair Display', serif" }}>
          Built with modern, battle-tested tech
        </h1>
        <p style={{ fontSize: '18px', color: colors.textLightMuted, maxWidth: '600px', margin: '0 auto' }}>
          Our in-house team of 20+ engineers uses industry-standard technologies to build scalable, accessible, and reliable products.
        </p>
      </div>
    </div>

    {/* Tech Stack Section */}
    <div className="content-padding" style={{ borderBottom: `1px solid ${colors.border}` }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '600', color: colors.text, marginBottom: '16px', fontFamily: "'Playfair Display', serif" }}>Our Tech Stack</h2>
        <p style={{ fontSize: '17px', color: colors.textMuted, marginBottom: '48px', maxWidth: '600px' }}>
          We choose technologies that are reliable, scalable, and have strong community support.
        </p>

        {/* Languages */}
        <div style={{ marginBottom: '48px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '600', color: colors.textDim, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>Languages</h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {[
              { name: 'Python', icon: '🐍', color: '#3776AB' },
              { name: 'JavaScript', icon: '⚡', color: '#F7DF1E' },
              { name: 'TypeScript', icon: '📘', color: '#3178C6' },
              { name: 'Java', icon: '☕', color: '#ED8B00' },
              { name: 'Kotlin', icon: '🎯', color: '#7F52FF' },
              { name: 'Swift', icon: '🍎', color: '#FA7343' }
            ].map(tech => (
              <div key={tech.name} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 20px',
                background: colors.bgCard,
                borderRadius: '12px',
                border: `1px solid ${colors.border}`
              }}>
                <span style={{ fontSize: '20px' }}>{tech.icon}</span>
                <span style={{ fontSize: '15px', fontWeight: '500', color: colors.text }}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Frontend */}
        <div style={{ marginBottom: '48px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '600', color: colors.textDim, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>Frontend</h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {[
              { name: 'React', icon: '⚛️', color: '#61DAFB' },
              { name: 'React Native', icon: '📱', color: '#61DAFB' },
              { name: 'Next.js', icon: '▲', color: '#000000' },
              { name: 'Tailwind CSS', icon: '🎨', color: '#06B6D4' },
              { name: 'Redux', icon: '🔄', color: '#764ABC' }
            ].map(tech => (
              <div key={tech.name} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 20px',
                background: colors.bgCard,
                borderRadius: '12px',
                border: `1px solid ${colors.border}`
              }}>
                <span style={{ fontSize: '20px' }}>{tech.icon}</span>
                <span style={{ fontSize: '15px', fontWeight: '500', color: colors.text }}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Backend */}
        <div style={{ marginBottom: '48px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '600', color: colors.textDim, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>Backend</h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {[
              { name: 'Node.js', icon: '🟢', color: '#339933' },
              { name: 'Spring Boot', icon: '🍃', color: '#6DB33F' },
              { name: 'Django', icon: '🎸', color: '#092E20' },
              { name: 'FastAPI', icon: '⚡', color: '#009688' },
              { name: 'Express.js', icon: '🚂', color: '#000000' }
            ].map(tech => (
              <div key={tech.name} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 20px',
                background: colors.bgCard,
                borderRadius: '12px',
                border: `1px solid ${colors.border}`
              }}>
                <span style={{ fontSize: '20px' }}>{tech.icon}</span>
                <span style={{ fontSize: '15px', fontWeight: '500', color: colors.text }}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div style={{ marginBottom: '48px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '600', color: colors.textDim, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>Databases</h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {[
              { name: 'PostgreSQL', icon: '🐘', color: '#336791' },
              { name: 'MySQL', icon: '🐬', color: '#4479A1' },
              { name: 'MongoDB', icon: '🍃', color: '#47A248' },
              { name: 'Redis', icon: '🔴', color: '#DC382D' },
              { name: 'Firebase', icon: '🔥', color: '#FFCA28' }
            ].map(tech => (
              <div key={tech.name} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 20px',
                background: colors.bgCard,
                borderRadius: '12px',
                border: `1px solid ${colors.border}`
              }}>
                <span style={{ fontSize: '20px' }}>{tech.icon}</span>
                <span style={{ fontSize: '15px', fontWeight: '500', color: colors.text }}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cloud & DevOps */}
        <div style={{ marginBottom: '0' }}>
          <h3 style={{ fontSize: '14px', fontWeight: '600', color: colors.textDim, marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '1px' }}>Cloud & DevOps</h3>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {[
              { name: 'AWS', icon: '☁️', color: '#FF9900' },
              { name: 'Google Cloud', icon: '🌐', color: '#4285F4' },
              { name: 'Vercel', icon: '▲', color: '#000000' },
              { name: 'Docker', icon: '🐳', color: '#2496ED' },
              { name: 'GitHub Actions', icon: '⚙️', color: '#2088FF' }
            ].map(tech => (
              <div key={tech.name} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '12px 20px',
                background: colors.bgCard,
                borderRadius: '12px',
                border: `1px solid ${colors.border}`
              }}>
                <span style={{ fontSize: '20px' }}>{tech.icon}</span>
                <span style={{ fontSize: '15px', fontWeight: '500', color: colors.text }}>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* What We Build */}
    <div className="content-padding" style={{ background: colors.bgCard, borderBottom: `1px solid ${colors.border}` }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '600', color: colors.text, marginBottom: '16px', fontFamily: "'Playfair Display', serif" }}>What We Build</h2>
        <p style={{ fontSize: '17px', color: colors.textMuted, marginBottom: '48px', maxWidth: '600px' }}>
          End-to-end product development across all major platforms.
        </p>

        <div className="grid-4" style={{ gap: '24px' }}>
          {[
            { icon: '📱', title: 'Mobile Apps', desc: 'Native iOS & Android, React Native cross-platform', platforms: ['iOS', 'Android', 'Cross-platform'] },
            { icon: '🌐', title: 'Web Applications', desc: 'Responsive SPAs, PWAs, and complex dashboards', platforms: ['React', 'Next.js', 'PWA'] },
            { icon: '⚙️', title: 'Backend & APIs', desc: 'RESTful APIs, GraphQL, microservices architecture', platforms: ['REST', 'GraphQL', 'WebSockets'] },
            { icon: '🤖', title: 'AI/ML Solutions', desc: 'Custom ML models, NLP, recommendation systems', platforms: ['TensorFlow', 'OpenAI', 'Custom ML'] }
          ].map(item => (
            <div key={item.title} style={{
              background: colors.bg,
              borderRadius: '20px',
              padding: '32px',
              border: `1px solid ${colors.border}`
            }}>
              <div style={{ fontSize: '40px', marginBottom: '20px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: colors.text, marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: colors.textMuted, lineHeight: '1.6', marginBottom: '16px' }}>{item.desc}</p>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {item.platforms.map(p => (
                  <span key={p} style={{
                    padding: '4px 10px',
                    background: colors.bgCard,
                    borderRadius: '100px',
                    fontSize: '12px',
                    color: colors.textDim,
                    border: `1px solid ${colors.border}`
                  }}>{p}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Our Expertise */}
    <div className="content-padding" style={{ borderBottom: `1px solid ${colors.border}` }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '600', color: colors.text, marginBottom: '16px', fontFamily: "'Playfair Display', serif" }}>Our Expertise</h2>
        <p style={{ fontSize: '17px', color: colors.textMuted, marginBottom: '48px', maxWidth: '600px' }}>
          Beyond standard development, we specialize in solving India-specific challenges.
        </p>

        <div className="grid-2" style={{ gap: '24px' }}>
          {[
            {
              icon: '♿',
              title: 'Accessibility',
              desc: 'Indian Sign Language integration, screen reader optimization, WCAG compliance. We build for users with diverse abilities.',
              color: colors.success,
              stats: '18 Indian languages supported'
            },
            {
              icon: '🌐',
              title: 'Multi-language Support',
              desc: 'Full localization for Indian languages including RTL support for Urdu. Unicode-first architecture.',
              color: colors.accent,
              stats: 'Hindi, Tamil, Telugu, Bengali + 14 more'
            },
            {
              icon: '📴',
              title: 'Offline-First Architecture',
              desc: 'Apps that work without internet. Smart sync, local caching, and bandwidth optimization for Tier 2/3 cities.',
              color: colors.primary,
              stats: 'Works on 2G networks'
            },
            {
              icon: '⚡',
              title: 'Performance Optimization',
              desc: 'Sub-3 second load times on budget devices. Optimized for low-RAM Android phones that most Indian students use.',
              color: colors.purple,
              stats: 'Optimized for ₹5,000 phones'
            }
          ].map(item => (
            <div key={item.title} style={{
              background: `linear-gradient(135deg, ${item.color}08 0%, ${colors.bgCard} 100%)`,
              borderRadius: '20px',
              padding: '32px',
              border: `1px solid ${item.color}20`
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '16px',
                background: `${item.color}15`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                marginBottom: '20px'
              }}>{item.icon}</div>
              <h3 style={{ fontSize: '22px', fontWeight: '600', color: colors.text, marginBottom: '12px' }}>{item.title}</h3>
              <p style={{ fontSize: '15px', color: colors.textMuted, lineHeight: '1.7', marginBottom: '16px' }}>{item.desc}</p>
              <span style={{
                display: 'inline-block',
                padding: '6px 12px',
                background: `${item.color}15`,
                borderRadius: '100px',
                fontSize: '13px',
                color: item.color,
                fontWeight: '500'
              }}>{item.stats}</span>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Engineering Principles */}
    <div className="content-padding">
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '600', color: colors.text, marginBottom: '16px', fontFamily: "'Playfair Display', serif" }}>How We Engineer</h2>
        <p style={{ fontSize: '17px', color: colors.textMuted, marginBottom: '48px', maxWidth: '600px' }}>
          Our engineering culture and principles that guide how we build.
        </p>

        <div className="grid-3" style={{ gap: '24px', marginBottom: '60px' }}>
          {[
            { icon: '🔒', title: 'Security First', desc: 'End-to-end encryption, regular audits, OWASP compliance' },
            { icon: '📊', title: 'Data-Driven', desc: 'Analytics built-in from day one. We measure what matters.' },
            { icon: '🧪', title: 'Test Coverage', desc: '80%+ test coverage. Automated CI/CD pipelines.' },
            { icon: '📖', title: 'Documentation', desc: 'Comprehensive docs for every project we deliver.' },
            { icon: '🔄', title: 'Agile Sprints', desc: '2-week sprints with demos. You see progress constantly.' },
            { icon: '🛡️', title: 'Code Reviews', desc: 'Every PR is reviewed. Quality is non-negotiable.' }
          ].map(item => (
            <div key={item.title} style={{
              padding: '28px',
              background: colors.bgCard,
              borderRadius: '16px',
              border: `1px solid ${colors.border}`
            }}>
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: colors.text, marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: colors.textMuted, lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          background: `linear-gradient(135deg, ${colors.bgDark} 0%, ${colors.bgDarkAlt} 100%)`,
          borderRadius: '24px',
          padding: '48px',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '28px', fontWeight: '600', color: colors.textLight, marginBottom: '12px', fontFamily: "'Playfair Display', serif" }}>
            Have a project in mind?
          </h3>
          <p style={{ fontSize: '16px', color: colors.textLightMuted, marginBottom: '24px' }}>
            Let's discuss how our tech expertise can help you build something impactful.
          </p>
          <button
            onClick={() => window.location.hash = 'contact'}
            style={{
              background: colors.textLight,
              color: colors.text,
              border: 'none',
              padding: '16px 32px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer'
            }}>
            Start a Conversation →
          </button>
        </div>
      </div>
    </div>
  </section>
);

const AboutPage = ({ setActivePage }) => (
  <section style={{ minHeight: '100vh', background: colors.bg, fontFamily: "'DM Sans', sans-serif" }}>
    {/* Dark Header */}
    <div style={{ background: `linear-gradient(180deg, ${colors.bgDark} 0%, ${colors.bgDarkAlt} 100%)`, padding: '140px 48px 60px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `${colors.primary}20`, border: `1px solid ${colors.primary}40`, padding: '8px 16px', borderRadius: '100px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: colors.textLight }} />
          <span style={{ fontSize: '13px', fontWeight: '500', color: colors.textLight }}>About Us</span>
        </div>
        <h1 style={{ fontSize: '56px', fontWeight: '500', color: colors.textLight, marginTop: '24px', marginBottom: '16px', fontFamily: "'Playfair Display', serif" }}>
          Building technology for how India learns
        </h1>
        <p style={{ fontSize: '20px', color: colors.primary, fontWeight: '500' }}>
          Since 2021, we've been making education accessible.
        </p>
      </div>
    </div>

    {/* Light Content */}
    <div style={{ padding: '60px 48px 80px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Story */}
        <div style={{ fontSize: '17px', color: colors.textMuted, lineHeight: '1.9', maxWidth: '700px', marginBottom: '80px' }}>
          <p style={{ marginBottom: '24px' }}>1EQ Edutech started with a simple question: why does education technology work for some and not for others?</p>
          <p style={{ marginBottom: '24px' }}>We found that most EdTech is built for urban, English-speaking, premium-paying users. But India's real learners — the ones preparing for government exams in Tier 2 and Tier 3 cities, the ones who can't afford ₹999/month subscriptions — were being left behind.</p>
          <p>So we built differently. Today, 1EQ Edutech creates learning technology that's accessible, affordable, and effective.</p>
        </div>

        {/* Leadership Team */}
        <h2 style={{ fontSize: '32px', fontWeight: '600', color: colors.text, marginBottom: '40px', fontFamily: "'Playfair Display', serif" }}>Leadership</h2>
        <div className="grid-3" style={{ gap: '24px', marginBottom: '80px' }}>
          {[
            { name: 'Founder Name', role: 'Founder & CEO', desc: 'Non-tech founder who built a 20+ person tech team from scratch. Passionate about making education accessible.' },
            { name: 'Co-founder Name', role: 'Co-founder & COO', desc: 'Operations and partnerships. Ensures our products reach the learners who need them most.' },
            { name: 'Tech Lead Name', role: 'Head of Engineering', desc: 'Leads our in-house tech team. Architect behind 1PYQ and our accessibility-first approach.' }
          ].map(person => (
            <div key={person.name} style={{ background: colors.bgCard, borderRadius: '20px', padding: '32px', border: `1px solid ${colors.border}` }}>
              <div style={{
                width: '72px',
                height: '72px',
                borderRadius: '50%',
                background: `linear-gradient(135deg, ${colors.primary}20 0%, ${colors.accent}20 100%)`,
                marginBottom: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                color: colors.primary
              }}>
                {person.name.split(' ').map(n => n[0]).join('')}
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '600', color: colors.text, marginBottom: '4px' }}>{person.name}</h3>
              <p style={{ fontSize: '14px', color: colors.primary, fontWeight: '500', marginBottom: '12px' }}>{person.role}</p>
              <p style={{ fontSize: '14px', color: colors.textMuted, lineHeight: '1.6' }}>{person.desc}</p>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div style={{ background: colors.bgCard, borderRadius: '20px', padding: '48px', border: `1px solid ${colors.border}`, marginBottom: '48px' }}>
          <h3 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '32px', fontFamily: "'Playfair Display', serif" }}>Our Team</h3>
          <div className="grid-4" style={{ gap: '32px' }}>
            {[
              { value: '20+', label: 'Team members' },
              { value: '15+', label: 'Engineers' },
              { value: '3+', label: 'Designers' },
              { value: '0', label: 'Outsourced' }
            ].map(stat => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '36px', fontWeight: '600', color: colors.text, fontFamily: "'Playfair Display', serif", marginBottom: '8px' }}>{stat.value}</div>
                <div style={{ fontSize: '14px', color: colors.textMuted }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Information */}
        <div style={{ padding: '32px', background: colors.bgCard, borderRadius: '16px', border: `1px solid ${colors.border}`, marginBottom: '48px' }}>
          <h3 style={{ fontSize: '20px', fontWeight: '600', color: colors.text, marginBottom: '20px' }}>Company Information</h3>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', fontSize: '14px' }}>
            <div><span style={{ color: colors.textDim }}>Registered Name:</span> <span style={{ color: colors.text }}>1EQ Edutech Private Limited</span></div>
            <div><span style={{ color: colors.textDim }}>Founded:</span> <span style={{ color: colors.text }}>December 2021</span></div>
            <div><span style={{ color: colors.textDim }}>CIN:</span> <span style={{ color: colors.text }}>U72200KA2021PTC156100</span></div>
            <div><span style={{ color: colors.textDim }}>Headquarters:</span> <span style={{ color: colors.text }}>Gurgaon, India</span></div>
          </div>
        </div>

        {/* Join Us CTA */}
        <div style={{
          background: `linear-gradient(135deg, ${colors.success}10 0%, ${colors.bgCard} 100%)`,
          borderRadius: '20px',
          padding: '48px',
          border: `1px solid ${colors.success}30`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px'
        }}>
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '8px', fontFamily: "'Playfair Display', serif" }}>
              Want to join our team?
            </h3>
            <p style={{ fontSize: '16px', color: colors.textMuted }}>
              We're always looking for passionate people who want to make education accessible.
            </p>
          </div>
          <button
            onClick={() => setActivePage('careers')}
            style={{
              background: colors.success,
              color: colors.textLight,
              border: 'none',
              padding: '16px 32px',
              borderRadius: '8px',
              fontSize: '16px',
              fontWeight: '600',
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}>
            View Open Positions →
          </button>
        </div>
      </div>
    </div>
  </section>
);

// Contact Page
const ContactPage = () => (
  <section style={{ minHeight: '100vh', background: colors.bg, fontFamily: "'DM Sans', sans-serif" }}>
    {/* Dark Header */}
    <div className="page-header-padding" style={{ background: `linear-gradient(180deg, ${colors.bgDark} 0%, ${colors.bgDarkAlt} 100%)`, textAlign: 'center' }}>
      <div style={{ maxWidth: '600px', margin: '0 auto' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `${colors.primary}20`, border: `1px solid ${colors.primary}40`, padding: '8px 16px', borderRadius: '100px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: colors.textLight }} />
          <span style={{ fontSize: '13px', fontWeight: '500', color: colors.textLight }}>Contact</span>
        </div>
        <h1 className="page-title" style={{ fontWeight: '500', color: colors.textLight, marginTop: '24px', marginBottom: '16px', fontFamily: "'Playfair Display', serif" }}>
          Get in Touch
        </h1>
        <p style={{ fontSize: '18px', color: colors.textLightMuted }}>
          Have a question or partnership idea? We'd love to hear from you.
        </p>
      </div>
    </div>

    {/* Light Content */}
    <div className="content-padding">
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="grid-2" style={{ gap: '48px', alignItems: 'start' }}>

          {/* Contact Info */}
          <div>
            <h2 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '32px', fontFamily: "'Playfair Display', serif" }}>Contact Information</h2>

            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${colors.primary}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>✉️</div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '600', color: colors.text, marginBottom: '4px' }}>Email</h4>
                  <a href="mailto:hello@1eq.in" style={{ fontSize: '15px', color: colors.primary, textDecoration: 'none' }}>hello@1eq.in</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${colors.accent}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>💼</div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '600', color: colors.text, marginBottom: '4px' }}>Partnerships</h4>
                  <a href="mailto:partnerships@1eq.in" style={{ fontSize: '15px', color: colors.accent, textDecoration: 'none' }}>partnerships@1eq.in</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', marginBottom: '24px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${colors.success}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>💻</div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '600', color: colors.text, marginBottom: '4px' }}>Careers</h4>
                  <a href="mailto:careers@1eq.in" style={{ fontSize: '15px', color: colors.success, textDecoration: 'none' }}>careers@1eq.in</a>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: `${colors.purple}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>📍</div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '600', color: colors.text, marginBottom: '4px' }}>Office</h4>
                  <p style={{ fontSize: '15px', color: colors.textMuted, lineHeight: '1.6' }}>907, OCUS Quantum<br />Sector 51, Gurgaon<br />Haryana, India</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div style={{ paddingTop: '24px', borderTop: `1px solid ${colors.border}` }}>
              <h4 style={{ fontSize: '14px', fontWeight: '600', color: colors.textDim, marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Follow Us</h4>
              <div style={{ display: 'flex', gap: '12px' }}>
                {[
                  { name: 'LinkedIn', icon: 'in', url: '#' },
                  { name: 'Twitter', icon: '𝕏', url: '#' },
                  { name: 'Instagram', icon: '◯', url: '#' },
                  { name: 'YouTube', icon: '▶', url: '#' }
                ].map(social => (
                  <a
                    key={social.name}
                    href={social.url}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '10px',
                      background: colors.bgCard,
                      border: `1px solid ${colors.border}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: colors.textMuted,
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: '600'
                    }}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{ background: colors.bgCard, padding: '40px', borderRadius: '20px', border: `1px solid ${colors.border}` }}>
            <h3 style={{ fontSize: '20px', fontWeight: '600', color: colors.text, marginBottom: '24px' }}>Send us a message</h3>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: colors.text, marginBottom: '8px' }}>Name</label>
              <input type="text" style={{ width: '100%', padding: '14px', background: colors.bg, border: `1px solid ${colors.border}`, borderRadius: '8px', fontSize: '15px', color: colors.text, boxSizing: 'border-box' }} placeholder="Your name" />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: colors.text, marginBottom: '8px' }}>Email</label>
              <input type="email" style={{ width: '100%', padding: '14px', background: colors.bg, border: `1px solid ${colors.border}`, borderRadius: '8px', fontSize: '15px', color: colors.text, boxSizing: 'border-box' }} placeholder="you@example.com" />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: colors.text, marginBottom: '8px' }}>Subject</label>
              <select style={{ width: '100%', padding: '14px', background: colors.bg, border: `1px solid ${colors.border}`, borderRadius: '8px', fontSize: '15px', color: colors.text, boxSizing: 'border-box' }}>
                <option>General Inquiry</option>
                <option>Partnership</option>
                <option>Custom Development</option>
                <option>Product Support</option>
              </select>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: colors.text, marginBottom: '8px' }}>Message</label>
              <textarea style={{ width: '100%', padding: '14px', background: colors.bg, border: `1px solid ${colors.border}`, borderRadius: '8px', fontSize: '15px', color: colors.text, boxSizing: 'border-box', minHeight: '120px', resize: 'vertical' }} placeholder="How can we help?" />
            </div>
            <button style={{ width: '100%', background: colors.text, color: colors.textLight, border: 'none', padding: '16px', borderRadius: '8px', fontSize: '16px', fontWeight: '600', cursor: 'pointer' }}>Send Message</button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Careers Page
const CareersPage = ({ setActivePage }) => (
  <section style={{ minHeight: '100vh', background: colors.bg, fontFamily: "'DM Sans', sans-serif" }}>
    {/* Dark Header */}
    <div style={{ background: `linear-gradient(180deg, ${colors.bgDark} 0%, ${colors.bgDarkAlt} 100%)`, padding: '140px 48px 80px' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `${colors.success}20`, border: `1px solid ${colors.success}40`, padding: '8px 16px', borderRadius: '100px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: colors.textLight }} />
          <span style={{ fontSize: '13px', fontWeight: '500', color: colors.textLight }}>We're Hiring</span>
        </div>
        <h1 style={{ fontSize: '56px', fontWeight: '500', color: colors.textLight, marginTop: '24px', marginBottom: '16px', fontFamily: "'Playfair Display', serif" }}>
          Build technology that matters
        </h1>
        <p style={{ fontSize: '18px', color: colors.textLightMuted, maxWidth: '600px', margin: '0 auto' }}>
          Join a team that's making education accessible for millions of Indians. We're looking for people who care about impact, not just code.
        </p>
      </div>
    </div>

    {/* Why Join Us */}
    <div style={{ padding: '80px 48px', background: colors.bgCard, borderBottom: `1px solid ${colors.border}` }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '600', color: colors.text, marginBottom: '40px', textAlign: 'center', fontFamily: "'Playfair Display', serif" }}>Why join 1EQ?</h2>
        <div className="grid-4" style={{ gap: '24px' }}>
          {[
            { icon: '🎯', title: 'Mission-driven', desc: 'Your work directly impacts millions of learners across India' },
            { icon: '🏠', title: 'Remote-first', desc: 'Work from anywhere in India. We judge output, not hours.' },
            { icon: '📈', title: 'Growth', desc: 'Small team = big ownership. Grow fast with real responsibility.' },
            { icon: '🤝', title: 'No politics', desc: 'Flat hierarchy. Your ideas matter more than your title.' }
          ].map(item => (
            <div key={item.title} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '36px', marginBottom: '16px' }}>{item.icon}</div>
              <h3 style={{ fontSize: '18px', fontWeight: '600', color: colors.text, marginBottom: '8px' }}>{item.title}</h3>
              <p style={{ fontSize: '14px', color: colors.textMuted, lineHeight: '1.6' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* Open Positions */}
    <div style={{ padding: '80px 48px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '600', color: colors.text, marginBottom: '16px', fontFamily: "'Playfair Display', serif" }}>Open Positions</h2>
        <p style={{ fontSize: '16px', color: colors.textMuted, marginBottom: '40px' }}>
          Don't see a perfect fit? We're always looking for exceptional people. Send your resume to <span style={{ color: colors.primary, fontWeight: '500' }}>careers@1eq.in</span>
        </p>

        {/* Job Listings */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '60px' }}>
          {[
            {
              title: 'Senior React Native Developer',
              team: 'Engineering',
              location: 'Remote (India)',
              type: 'Full-time',
              description: 'Build and scale our mobile apps used by thousands of students daily. 3+ years React Native experience required.'
            },
            {
              title: 'Backend Engineer (Node.js)',
              team: 'Engineering',
              location: 'Remote (India)',
              type: 'Full-time',
              description: 'Design and build scalable APIs and services. Experience with Node.js, PostgreSQL, and AWS preferred.'
            },
            {
              title: 'Product Designer',
              team: 'Design',
              location: 'Remote (India)',
              type: 'Full-time',
              description: 'Own the design for our products end-to-end. Strong portfolio in mobile/web apps required.'
            },
            {
              title: 'Content Writer (Hindi/English)',
              team: 'Content',
              location: 'Remote (India)',
              type: 'Full-time',
              description: 'Create educational content for competitive exam preparation. Background in UPSC/SSC content preferred.'
            },
            {
              title: 'QA Engineer',
              team: 'Engineering',
              location: 'Remote (India)',
              type: 'Full-time',
              description: 'Ensure quality across our products. Experience with mobile and web testing, automation a plus.'
            }
          ].map((job, i) => (
            <div
              key={i}
              style={{
                background: colors.bgCard,
                borderRadius: '16px',
                padding: '28px 32px',
                border: `1px solid ${colors.border}`,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
              className="hover-lift"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <h3 style={{ fontSize: '20px', fontWeight: '600', color: colors.text, marginBottom: '8px' }}>{job.title}</h3>
                  <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '14px', color: colors.textMuted }}>{job.team}</span>
                    <span style={{ fontSize: '14px', color: colors.textDim }}>•</span>
                    <span style={{ fontSize: '14px', color: colors.textMuted }}>{job.location}</span>
                    <span style={{ fontSize: '14px', color: colors.textDim }}>•</span>
                    <span style={{ fontSize: '14px', color: colors.success, fontWeight: '500' }}>{job.type}</span>
                  </div>
                </div>
                <button style={{
                  background: colors.text,
                  color: colors.textLight,
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap'
                }}>
                  Apply →
                </button>
              </div>
              <p style={{ fontSize: '15px', color: colors.textMuted, lineHeight: '1.6' }}>{job.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div style={{ background: colors.bgCard, borderRadius: '20px', padding: '40px', border: `1px solid ${colors.border}`, marginBottom: '60px' }}>
          <h3 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '24px', fontFamily: "'Playfair Display', serif" }}>Benefits & Perks</h3>
          <div className="grid-2" style={{ gap: '16px' }}>
            {[
              '💰 Competitive salary',
              '🏠 Work from anywhere in India',
              '💻 MacBook + equipment allowance',
              '📚 Learning & development budget',
              '🏥 Health insurance',
              '🌴 Flexible time off',
              '📱 Free access to all 1EQ products',
              '🎉 Annual team retreats'
            ].map((benefit, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <span style={{ fontSize: '15px', color: colors.text }}>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hiring Process */}
        <div style={{ marginBottom: '60px' }}>
          <h3 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '24px', fontFamily: "'Playfair Display', serif" }}>Our Hiring Process</h3>
          <div style={{ display: 'flex', gap: '16px' }}>
            {[
              { step: '1', title: 'Apply', desc: 'Submit your application' },
              { step: '2', title: 'Screen', desc: '15-min intro call' },
              { step: '3', title: 'Task', desc: 'Small take-home task' },
              { step: '4', title: 'Interview', desc: 'Technical + culture fit' },
              { step: '5', title: 'Offer', desc: 'Welcome to the team!' }
            ].map((item, i) => (
              <div key={i} style={{ flex: 1, textAlign: 'center' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: colors.primary,
                  color: colors.text,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '600',
                  fontSize: '16px',
                  margin: '0 auto 12px'
                }}>{item.step}</div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', color: colors.text, marginBottom: '4px' }}>{item.title}</h4>
                <p style={{ fontSize: '13px', color: colors.textMuted }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{
          background: `linear-gradient(135deg, ${colors.bgDark} 0%, ${colors.bgDarkAlt} 100%)`,
          borderRadius: '20px',
          padding: '48px',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '28px', fontWeight: '600', color: colors.textLight, marginBottom: '12px', fontFamily: "'Playfair Display', serif" }}>
            Don't see a role that fits?
          </h3>
          <p style={{ fontSize: '16px', color: colors.textLightMuted, marginBottom: '24px' }}>
            We're always looking for talented people. Send us your resume anyway.
          </p>
          <a href="mailto:careers@1eq.in" style={{
            display: 'inline-block',
            background: colors.textLight,
            color: colors.text,
            padding: '14px 28px',
            borderRadius: '8px',
            fontSize: '15px',
            fontWeight: '600',
            textDecoration: 'none'
          }}>
            Email careers@1eq.in
          </a>
        </div>

      </div>
    </div>
  </section>
);

// Homepage
const HomePage = ({ setActivePage }) => (
  <>
    <Hero setActivePage={setActivePage} />
    <LogoMarquee />
    <TrustedBySection />
    <ProductsSection setActivePage={setActivePage} />
    <ImpactSection />
    <BenefitsSection />
    <TestimonialsSection />
    <ServicesSection setActivePage={setActivePage} />
    <CTASection setActivePage={setActivePage} />
  </>
);

// Privacy Policy Page
const PrivacyPage = () => (
  <section style={{ minHeight: '100vh', background: colors.bg, fontFamily: "'DM Sans', sans-serif" }}>
    <div className="page-header-padding" style={{ background: `linear-gradient(180deg, ${colors.bgDark} 0%, ${colors.bgDarkAlt} 100%)` }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="page-title" style={{ fontWeight: '500', color: colors.textLight, fontFamily: "'Playfair Display', serif" }}>
          Privacy Policy
        </h1>
        <p style={{ fontSize: '16px', color: colors.textLightMuted, marginTop: '16px' }}>
          Last updated: January 2026
        </p>
      </div>
    </div>

    <div className="content-padding">
      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '16px', color: colors.textMuted, lineHeight: '1.8' }}>

        <h2 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '16px', marginTop: '40px' }}>1. Information We Collect</h2>
        <p style={{ marginBottom: '16px' }}>We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include:</p>
        <ul style={{ marginLeft: '24px', marginBottom: '24px' }}>
          <li style={{ marginBottom: '8px' }}>Name and email address</li>
          <li style={{ marginBottom: '8px' }}>Phone number (optional)</li>
          <li style={{ marginBottom: '8px' }}>Usage data and learning progress</li>
          <li style={{ marginBottom: '8px' }}>Device information and IP address</li>
        </ul>

        <h2 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '16px', marginTop: '40px' }}>2. How We Use Your Information</h2>
        <p style={{ marginBottom: '16px' }}>We use the information we collect to:</p>
        <ul style={{ marginLeft: '24px', marginBottom: '24px' }}>
          <li style={{ marginBottom: '8px' }}>Provide, maintain, and improve our services</li>
          <li style={{ marginBottom: '8px' }}>Personalize your learning experience</li>
          <li style={{ marginBottom: '8px' }}>Send you updates and promotional communications (with your consent)</li>
          <li style={{ marginBottom: '8px' }}>Respond to your comments and questions</li>
        </ul>

        <h2 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '16px', marginTop: '40px' }}>3. Data Security</h2>
        <p style={{ marginBottom: '24px' }}>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

        <h2 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '16px', marginTop: '40px' }}>4. Data Sharing</h2>
        <p style={{ marginBottom: '24px' }}>We do not sell your personal information. We may share your information with third-party service providers who assist us in operating our services, subject to confidentiality obligations.</p>

        <h2 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '16px', marginTop: '40px' }}>5. Your Rights</h2>
        <p style={{ marginBottom: '16px' }}>You have the right to:</p>
        <ul style={{ marginLeft: '24px', marginBottom: '24px' }}>
          <li style={{ marginBottom: '8px' }}>Access your personal data</li>
          <li style={{ marginBottom: '8px' }}>Request correction of inaccurate data</li>
          <li style={{ marginBottom: '8px' }}>Request deletion of your data</li>
          <li style={{ marginBottom: '8px' }}>Opt-out of marketing communications</li>
        </ul>

        <h2 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '16px', marginTop: '40px' }}>6. Contact Us</h2>
        <p style={{ marginBottom: '24px' }}>If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@1eq.in" style={{ color: colors.primary }}>privacy@1eq.in</a></p>

        <div style={{ marginTop: '48px', padding: '24px', background: colors.bgCard, borderRadius: '12px', border: `1px solid ${colors.border}` }}>
          <p style={{ fontSize: '14px', color: colors.textDim }}>
            <strong style={{ color: colors.text }}>1EQ Edutech Private Limited</strong><br />
            907, OCUS Quantum, Sector 51, Gurgaon, Haryana, India<br />
            CIN: U72200KA2021PTC156100
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Terms of Service Page
const TermsPage = () => (
  <section style={{ minHeight: '100vh', background: colors.bg, fontFamily: "'DM Sans', sans-serif" }}>
    <div className="page-header-padding" style={{ background: `linear-gradient(180deg, ${colors.bgDark} 0%, ${colors.bgDarkAlt} 100%)` }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 className="page-title" style={{ fontWeight: '500', color: colors.textLight, fontFamily: "'Playfair Display', serif" }}>
          Terms of Service
        </h1>
        <p style={{ fontSize: '16px', color: colors.textLightMuted, marginTop: '16px' }}>
          Last updated: January 2026
        </p>
      </div>
    </div>

    <div className="content-padding">
      <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '16px', color: colors.textMuted, lineHeight: '1.8' }}>

        <h2 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '16px', marginTop: '40px' }}>1. Acceptance of Terms</h2>
        <p style={{ marginBottom: '24px' }}>By accessing or using 1EQ's services, including 1PYQ, 1LMS, and 1ISL Challenge, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.</p>

        <h2 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '16px', marginTop: '40px' }}>2. Use of Services</h2>
        <p style={{ marginBottom: '16px' }}>You agree to use our services only for lawful purposes and in accordance with these terms. You agree not to:</p>
        <ul style={{ marginLeft: '24px', marginBottom: '24px' }}>
          <li style={{ marginBottom: '8px' }}>Use the services in any way that violates applicable laws</li>
          <li style={{ marginBottom: '8px' }}>Attempt to gain unauthorized access to our systems</li>
          <li style={{ marginBottom: '8px' }}>Share your account credentials with others</li>
          <li style={{ marginBottom: '8px' }}>Copy, modify, or distribute our content without permission</li>
        </ul>

        <h2 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '16px', marginTop: '40px' }}>3. User Accounts</h2>
        <p style={{ marginBottom: '24px' }}>You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.</p>

        <h2 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '16px', marginTop: '40px' }}>4. Subscription and Payments</h2>
        <p style={{ marginBottom: '24px' }}>Some of our services require a subscription. By subscribing, you agree to pay all applicable fees. Subscriptions may auto-renew unless cancelled. Refunds are provided in accordance with our refund policy.</p>

        <h2 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '16px', marginTop: '40px' }}>5. Intellectual Property</h2>
        <p style={{ marginBottom: '24px' }}>All content, features, and functionality of our services are owned by 1EQ Edutech and are protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express permission.</p>

        <h2 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '16px', marginTop: '40px' }}>6. Disclaimer of Warranties</h2>
        <p style={{ marginBottom: '24px' }}>Our services are provided "as is" without warranties of any kind. We do not guarantee that our services will be uninterrupted, secure, or error-free.</p>

        <h2 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '16px', marginTop: '40px' }}>7. Limitation of Liability</h2>
        <p style={{ marginBottom: '24px' }}>To the maximum extent permitted by law, 1EQ Edutech shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our services.</p>

        <h2 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '16px', marginTop: '40px' }}>8. Changes to Terms</h2>
        <p style={{ marginBottom: '24px' }}>We may update these terms from time to time. We will notify you of any material changes by posting the new terms on our website. Your continued use of our services after such changes constitutes acceptance of the new terms.</p>

        <h2 style={{ fontSize: '24px', fontWeight: '600', color: colors.text, marginBottom: '16px', marginTop: '40px' }}>9. Contact Us</h2>
        <p style={{ marginBottom: '24px' }}>If you have any questions about these Terms of Service, please contact us at <a href="mailto:legal@1eq.in" style={{ color: colors.primary }}>legal@1eq.in</a></p>

        <div style={{ marginTop: '48px', padding: '24px', background: colors.bgCard, borderRadius: '12px', border: `1px solid ${colors.border}` }}>
          <p style={{ fontSize: '14px', color: colors.textDim }}>
            <strong style={{ color: colors.text }}>1EQ Edutech Private Limited</strong><br />
            907, OCUS Quantum, Sector 51, Gurgaon, Haryana, India<br />
            CIN: U72200KA2021PTC156100
          </p>
        </div>
      </div>
    </div>
  </section>
);

// Blog & Resources Page
const BlogPage = ({ setActivePage }) => {
  const [activeTab, setActiveTab] = useState('blog');

  const blogPosts = [
    {
      title: 'Why Self-Learning is the Future of Education in India',
      excerpt: 'Traditional coaching models are failing millions. Here\'s how AI-powered self-learning is changing the game for competitive exam aspirants.',
      category: 'EdTech Insights',
      date: 'Jan 15, 2026',
      readTime: '5 min read',
      image: '📚',
      featured: true
    },
    {
      title: 'Introducing 1PYQ 2.0: Smarter Gap Analysis',
      excerpt: 'Our biggest update yet brings improved AI algorithms that identify your weak areas with 40% more accuracy.',
      category: 'Product Updates',
      date: 'Jan 8, 2026',
      readTime: '3 min read',
      image: '🚀',
      featured: false
    },
    {
      title: 'Making EdTech Accessible: Our Journey with Indian Sign Language',
      excerpt: 'How we built 1ISL Challenge and what we learned about designing for the deaf community.',
      category: 'Accessibility',
      date: 'Dec 28, 2025',
      readTime: '7 min read',
      image: '♿',
      featured: false
    },
    {
      title: 'The Real Cost of Education Technology in Tier 2 & 3 Cities',
      excerpt: 'Most EdTech pricing excludes 80% of Indian learners. We did the math on what affordable really means.',
      category: 'EdTech Insights',
      date: 'Dec 15, 2025',
      readTime: '6 min read',
      image: '💰',
      featured: false
    },
    {
      title: 'How We Built a 20-Person Tech Team Without a Technical Co-founder',
      excerpt: 'Lessons learned from hiring, managing, and scaling an in-house engineering team as a non-tech founder.',
      category: 'Company News',
      date: 'Dec 5, 2025',
      readTime: '8 min read',
      image: '👥',
      featured: false
    },
    {
      title: 'Spaced Repetition: The Science Behind 1PYQ',
      excerpt: 'Understanding the cognitive science that makes our learning algorithm effective for long-term retention.',
      category: 'EdTech Insights',
      date: 'Nov 20, 2025',
      readTime: '6 min read',
      image: '🧠',
      featured: false
    }
  ];

  const resources = [
    {
      title: 'EdTech Accessibility Checklist',
      description: 'A comprehensive checklist for building accessible educational products in India.',
      type: 'PDF Guide',
      icon: '📋',
      color: colors.primary
    },
    {
      title: 'Non-Tech Founder\'s Guide to Building a Tech Team',
      description: 'Everything we wish we knew before hiring our first developer.',
      type: 'eBook',
      icon: '📖',
      color: colors.accent
    },
    {
      title: '1LMS Partnership Case Study: ABC Coaching',
      description: 'How a Jaipur-based coaching center scaled to 5,000 students using our white-label LMS.',
      type: 'Case Study',
      icon: '📊',
      color: colors.success
    },
    {
      title: 'Indian Sign Language: A Primer for Developers',
      description: 'Technical considerations for building ISL-inclusive applications.',
      type: 'Whitepaper',
      icon: '📄',
      color: colors.purple
    }
  ];

  const categories = ['All', 'Product Updates', 'EdTech Insights', 'Accessibility', 'Company News'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <section style={{ minHeight: '100vh', background: colors.bg, fontFamily: "'DM Sans', sans-serif" }}>
      {/* Dark Header */}
      <div className="page-header-padding" style={{ background: `linear-gradient(180deg, ${colors.bgDark} 0%, ${colors.bgDarkAlt} 100%)`, paddingBottom: '60px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: `${colors.accent}20`, border: `1px solid ${colors.accent}40`, padding: '8px 16px', borderRadius: '100px' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: colors.textLight }} />
            <span style={{ fontSize: '13px', fontWeight: '500', color: colors.textLight }}>Blog & Resources</span>
          </div>
          <h1 className="page-title" style={{ fontWeight: '500', color: colors.textLight, marginTop: '24px', marginBottom: '16px', fontFamily: "'Playfair Display', serif" }}>
            Insights & Resources
          </h1>
          <p style={{ fontSize: '18px', color: colors.textLightMuted, maxWidth: '600px', margin: '0 auto' }}>
            Thoughts on EdTech, accessibility, and building technology for underserved India.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ borderBottom: `1px solid ${colors.border}`, background: colors.bgCard }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 48px' }}>
          <div style={{ display: 'flex', gap: '32px' }}>
            {[
              { id: 'blog', label: 'Blog' },
              { id: 'resources', label: 'Resources' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '20px 0',
                  fontSize: '15px',
                  fontWeight: '600',
                  color: activeTab === tab.id ? colors.text : colors.textMuted,
                  cursor: 'pointer',
                  borderBottom: activeTab === tab.id ? `2px solid ${colors.primary}` : '2px solid transparent',
                  marginBottom: '-1px'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="content-padding">
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

          {activeTab === 'blog' && (
            <>
              {/* Category Filter */}
              <div style={{ display: 'flex', gap: '12px', marginBottom: '40px', flexWrap: 'wrap' }}>
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    style={{
                      padding: '8px 16px',
                      borderRadius: '100px',
                      border: selectedCategory === cat ? 'none' : `1px solid ${colors.border}`,
                      background: selectedCategory === cat ? colors.text : 'transparent',
                      color: selectedCategory === cat ? colors.textLight : colors.textMuted,
                      fontSize: '14px',
                      fontWeight: '500',
                      cursor: 'pointer'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Featured Post */}
              {selectedCategory === 'All' && (
                <div style={{
                  background: `linear-gradient(135deg, ${colors.primary}10 0%, ${colors.bgCard} 100%)`,
                  borderRadius: '24px',
                  padding: '48px',
                  marginBottom: '48px',
                  border: `1px solid ${colors.primary}20`,
                  cursor: 'pointer'
                }}>
                  <span style={{
                    display: 'inline-block',
                    background: colors.primary,
                    color: colors.textLight,
                    padding: '4px 12px',
                    borderRadius: '100px',
                    fontSize: '12px',
                    fontWeight: '600',
                    marginBottom: '16px'
                  }}>FEATURED</span>
                  <h2 style={{ fontSize: '32px', fontWeight: '600', color: colors.text, marginBottom: '16px', fontFamily: "'Playfair Display', serif" }}>
                    {blogPosts[0].title}
                  </h2>
                  <p style={{ fontSize: '17px', color: colors.textMuted, lineHeight: '1.7', marginBottom: '20px', maxWidth: '700px' }}>
                    {blogPosts[0].excerpt}
                  </p>
                  <div style={{ display: 'flex', gap: '16px', fontSize: '14px', color: colors.textDim }}>
                    <span>{blogPosts[0].category}</span>
                    <span>•</span>
                    <span>{blogPosts[0].date}</span>
                    <span>•</span>
                    <span>{blogPosts[0].readTime}</span>
                  </div>
                </div>
              )}

              {/* Blog Grid */}
              <div className="grid-3" style={{ gap: '24px' }}>
                {(selectedCategory === 'All' ? filteredPosts.slice(1) : filteredPosts).map((post, i) => (
                  <article
                    key={i}
                    className="hover-lift"
                    style={{
                      background: colors.bgCard,
                      borderRadius: '20px',
                      overflow: 'hidden',
                      border: `1px solid ${colors.border}`,
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{
                      height: '140px',
                      background: `linear-gradient(135deg, ${colors.bgHover} 0%, ${colors.bgCard} 100%)`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '48px'
                    }}>
                      {post.image}
                    </div>
                    <div style={{ padding: '24px' }}>
                      <span style={{
                        fontSize: '12px',
                        color: colors.primary,
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>{post.category}</span>
                      <h3 style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: colors.text,
                        marginTop: '8px',
                        marginBottom: '12px',
                        lineHeight: '1.4'
                      }}>{post.title}</h3>
                      <p style={{
                        fontSize: '14px',
                        color: colors.textMuted,
                        lineHeight: '1.6',
                        marginBottom: '16px'
                      }}>{post.excerpt}</p>
                      <div style={{ display: 'flex', gap: '12px', fontSize: '13px', color: colors.textDim }}>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Load More */}
              <div style={{ textAlign: 'center', marginTop: '48px' }}>
                <button style={{
                  background: 'transparent',
                  border: `1px solid ${colors.border}`,
                  padding: '14px 32px',
                  borderRadius: '8px',
                  fontSize: '15px',
                  fontWeight: '600',
                  color: colors.text,
                  cursor: 'pointer'
                }}>
                  Load More Articles
                </button>
              </div>
            </>
          )}

          {activeTab === 'resources' && (
            <>
              <p style={{ fontSize: '17px', color: colors.textMuted, marginBottom: '40px', maxWidth: '600px' }}>
                Free guides, case studies, and whitepapers to help you build better educational products.
              </p>

              {/* Resources Grid */}
              <div className="grid-2" style={{ gap: '24px', marginBottom: '60px' }}>
                {resources.map((resource, i) => (
                  <div
                    key={i}
                    className="hover-lift"
                    style={{
                      background: colors.bgCard,
                      borderRadius: '20px',
                      padding: '32px',
                      border: `1px solid ${colors.border}`,
                      cursor: 'pointer',
                      display: 'flex',
                      gap: '20px'
                    }}
                  >
                    <div style={{
                      width: '64px',
                      height: '64px',
                      borderRadius: '16px',
                      background: `${resource.color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '28px',
                      flexShrink: 0
                    }}>
                      {resource.icon}
                    </div>
                    <div>
                      <span style={{
                        fontSize: '12px',
                        color: resource.color,
                        fontWeight: '600',
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}>{resource.type}</span>
                      <h3 style={{
                        fontSize: '18px',
                        fontWeight: '600',
                        color: colors.text,
                        marginTop: '6px',
                        marginBottom: '8px'
                      }}>{resource.title}</h3>
                      <p style={{
                        fontSize: '14px',
                        color: colors.textMuted,
                        lineHeight: '1.6'
                      }}>{resource.description}</p>
                      <span style={{
                        display: 'inline-block',
                        marginTop: '12px',
                        fontSize: '14px',
                        color: resource.color,
                        fontWeight: '500'
                      }}>Download →</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Newsletter CTA */}
              <div style={{
                background: `linear-gradient(135deg, ${colors.bgDark} 0%, ${colors.bgDarkAlt} 100%)`,
                borderRadius: '24px',
                padding: '48px',
                textAlign: 'center'
              }}>
                <h3 style={{ fontSize: '28px', fontWeight: '600', color: colors.textLight, marginBottom: '12px', fontFamily: "'Playfair Display', serif" }}>
                  Get new resources in your inbox
                </h3>
                <p style={{ fontSize: '16px', color: colors.textLightMuted, marginBottom: '24px' }}>
                  Subscribe to our newsletter for EdTech insights and product updates.
                </p>
                <div style={{ display: 'flex', gap: '12px', maxWidth: '400px', margin: '0 auto' }}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    style={{
                      flex: 1,
                      padding: '14px 16px',
                      borderRadius: '8px',
                      border: `1px solid ${colors.borderDark}`,
                      background: 'rgba(255,255,255,0.1)',
                      color: colors.textLight,
                      fontSize: '15px'
                    }}
                  />
                  <button style={{
                    background: colors.textLight,
                    color: colors.text,
                    border: 'none',
                    padding: '14px 24px',
                    borderRadius: '8px',
                    fontSize: '15px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap'
                  }}>
                    Subscribe
                  </button>
                </div>
                <p style={{ fontSize: '13px', color: colors.textLightDim, marginTop: '16px' }}>
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </>
          )}

        </div>
      </div>
    </section>
  );
};

// Main App
export default function App() {
  const [activePage, setActivePage] = useState('home');

  return (
    <div style={{ background: colors.bg, minHeight: '100vh' }}>
      <GlobalStyles />
      <Navigation activePage={activePage} setActivePage={setActivePage} />

      {activePage === 'home' && <HomePage setActivePage={setActivePage} />}
      {activePage === 'products' && <ProductsPage setActivePage={setActivePage} />}
      {activePage === 'services' && <ServicesPageFull setActivePage={setActivePage} />}
      {activePage === 'technology' && <TechnologyPage />}
      {activePage === 'blog' && <BlogPage setActivePage={setActivePage} />}
      {activePage === 'about' && <AboutPage setActivePage={setActivePage} />}
      {activePage === 'contact' && <ContactPage />}
      {activePage === 'careers' && <CareersPage setActivePage={setActivePage} />}
      {activePage === 'privacy' && <PrivacyPage />}
      {activePage === 'terms' && <TermsPage />}

      <Footer setActivePage={setActivePage} />
    </div>
  );
}
