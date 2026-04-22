import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductCommon.css';

const Maltodextrin = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    about: false,
    product: false
  });
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('food');

  const handleAnnualReturn = () => {
    window.open('https://acidindia.in/wp-content/uploads/2024/02/FORM-MGT-9-AY-2324.pdf', '_blank');
  };

  const toggleDropdown = (menu) => {
    setIsDropdownOpen(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="product-page">
      {/* Navbar */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo-section">
            <Link to="/" className="company-logo">
              <div className="logo-icon">
                <img src="/spark.jpg" alt="SPARK" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
              </div>
              <div className="logo-text">
                <h1>SPARK</h1>
                <p>FOODS & CHEMICALS</p>
              </div>
            </Link>
          </div>
          
          <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li><Link to="/" className="nav-link">Home</Link></li>
              
              <li className="dropdown" onMouseEnter={() => toggleDropdown('about')} onMouseLeave={() => toggleDropdown('about')}>
                <Link to="/about-us" className="nav-link dropdown-toggle">
                  About Us <span className="dropdown-arrow">▼</span>
                </Link>
                {isDropdownOpen.about && (
                  <ul className="dropdown-menu">
                    <li><Link to="/about-us#company">Our Company</Link></li>
                    <li><Link to="/about-us#story">Our Story</Link></li>
                    <li><Link to="/about-us#process">Our Process</Link></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleAnnualReturn(); }}>Annual Return</a></li>
                    <li><Link to="/about-us#strengths">Our Strengths</Link></li>
                    <li><Link to="/about-us#message">Our Chairman's Message</Link></li>
                    <li><Link to="/awards-accolades">Our Awards & Accolades</Link></li>
                  </ul>
                )}
              </li>
              
              <li className="dropdown" onMouseEnter={() => toggleDropdown('product')} onMouseLeave={() => toggleDropdown('product')}>
                <Link to="/product-range" className="nav-link dropdown-toggle">
                  Product Range <span className="dropdown-arrow">▼</span>
                </Link>
                {isDropdownOpen.product && (
                  <ul className="dropdown-menu mega-dropdown">
                    <div className="mega-dropdown-container">
                      <div className="mega-dropdown-column">
                        <h4>Food Ingredients</h4>
                        <ul>
                          <li><Link to="/product-range/dairy-cultures">Dairy Cultures</Link></li>
                          <li><Link to="/product-range/functional-systems">Functional Systems</Link></li>
                          <li><Link to="/product-range/dairy-enzymes">Dairy Enzymes</Link></li>
                          <li><Link to="/product-range/emulsifiers">Emulsifiers</Link></li>
                          <li><Link to="/product-range/bakery-enzymes">Bakery Enzymes</Link></li>
                          <li><Link to="/product-range/hydrocolloids">Hydrocolloids</Link></li>
                          <li><Link to="/product-range/soy-proteins">Soy Proteins</Link></li>
                          <li><Link to="/product-range/liquid-glucose">Liquid Glucose</Link></li>
                          <li><Link to="/product-range/maltodextrin">Maltodextrin</Link></li>
                          <li><Link to="/product-range/maize-starch">Maize Starch</Link></li>
                          <li><Link to="/product-range/modified-starches">Modified Starches</Link></li>
                          <li><Link to="/product-range/citric-acid">Citric Acid</Link></li>
                          <li><Link to="/product-range/cocoa-powder">Cocoa Powder</Link></li>
                          <li><Link to="/product-range/saffron">Saffron</Link></li>
                          <li><Link to="/product-range/food-safety-equipment-testing-kits">Food Safety Equipment & Testing Kits</Link></li>
                          <li><Link to="/product-range/flavours-food-colors">Flavours & Food Colors</Link></li>
                          <li><Link to="/product-range/phosphoric-acid">Phosphoric Acid</Link></li>
                          <li><Link to="/product-range/bromine-bromine-chemicals">Bromine & Bromine Chemicals</Link></li>
                          <li><Link to="/product-range/acetic-acid">Acetic Acid</Link></li>
                          <li><Link to="/product-range/e-blends">E – Blends</Link></li>
                        </ul>
                      </div>
                      <div className="mega-dropdown-column">
                        <h4>Industrial Chemicals</h4>
                        <ul>
                          <li><Link to="/product-range/liquid-glucose">Liquid Glucose</Link></li>
                          <li><Link to="/product-range/maltodextrin">Maltodextrin</Link></li>
                          <li><Link to="/product-range/maize-starch">Maize Starch</Link></li>
                          <li><Link to="/product-range/citric-acid">Citric Acid</Link></li>
                          <li><Link to="/product-range/phosphoric-acid">Phosphoric Acid</Link></li>
                          <li><Link to="/product-range/bromine-bromine-chemicals">Bromine & Bromine chemicals</Link></li>
                          <li><Link to="/product-range/fatty-acids">Fatty Acids</Link></li>
                          <li><Link to="/product-range/acetic-acid">Acetic Acid</Link></li>
                          <li><Link to="/product-range/detergent-chemical">Detergent Chemicals</Link></li>
                        </ul>
                      </div>
                    </div>
                  </ul>
                )}
              </li>
              
              <li><Link to="/industries" className="nav-link">Industries</Link></li>
              <li><Link to="/activities" className="nav-link">Activities</Link></li>
              <li><Link to="/careers" className="nav-link">Careers</Link></li>
              <li><Link to="/contact" className="nav-link">Contact</Link></li>
            </ul>
          </div>
          
          <div className="nav-actions">
            <button className="quote-btn">Get a Quote</button>
            <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              ☰
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        className="product-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://acidindia.in/wp-content/uploads/2022/05/malto-powder.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Maltodextrin</h1>
            <div className="breadcrumb">
              <Link to="/">Home</Link> &raquo; <Link to="/product-range">Product Range</Link> &raquo; <span>Maltodextrin</span>
            </div>
          </div>
        </div>
      </section>

      {/* Toggle Section */}
      <section className="description-section">
        <div className="container">
          <div className="toggle-buttons" style={{ display: 'flex', gap: '1rem', marginBottom: '2rem', justifyContent: 'center' }}>
            <button 
              onClick={() => setActiveTab('food')}
              style={{
                padding: '10px 30px',
                backgroundColor: activeTab === 'food' ? '#e4312c' : '#f5f5f5',
                color: activeTab === 'food' ? '#fff' : '#333',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Food Ingredient
            </button>
            <button 
              onClick={() => setActiveTab('industrial')}
              style={{
                padding: '10px 30px',
                backgroundColor: activeTab === 'industrial' ? '#e4312c' : '#f5f5f5',
                color: activeTab === 'industrial' ? '#fff' : '#333',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Industrial Chemical
            </button>
          </div>

          {activeTab === 'food' && (
            <div className="description-content">
              <p>Maltodextrin is a white powder that is relatively tasteless and dissolves in water. It is an additive used in a wide range of foods, as it can improve their texture, flavor, and shelf life. Maltodextrin is generally used as a thickener or filler to increase the volume of a processed food.</p>
              <p>It is possible to make maltodextrin from any starchy food, including corn, potato, wheat, tapioca, or rice. Although the powder comes from these natural products, it then undergoes processing.</p>
              <p>Maltodextrins are glucose polymeric chains with a molecular weight between that of starch and glucose syrups. Cargill offers a broad range of maltodextrin products that vary in the degree of starch hydrolysis and sugar profile.</p>
              
              <h3 style={{ color: '#e4312c', marginTop: '1.5rem', marginBottom: '1rem' }}>Applications</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}><span className="bullet">•</span> Food</li>
                <li style={{ marginBottom: '0.5rem' }}><span className="bullet">•</span> Beverages</li>
              </ul>

              <h3 style={{ color: '#e4312c', marginTop: '1.5rem', marginBottom: '1rem' }}>Benefits</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}><span className="bullet">•</span> Used as food thickener in food such as ice creams, infant formula, brewing, potato chips, jerky and frozen food</li>
                <li style={{ marginBottom: '0.5rem' }}><span className="bullet">•</span> Beverages are scientifically prepared with Maltodextrin, which add more flavor, solubility, consistency, taste and reduction in cost</li>
                <li style={{ marginBottom: '0.5rem' }}><span className="bullet">•</span> Capsules often contain maltodextrin since it neither adds nor detracts from the medicinal content while stabilizing the drugs</li>
                <li style={{ marginBottom: '0.5rem' }}><span className="bullet">•</span> Used as a stabilizer, thickener, anticaking agent and bulking agent</li>
                <li style={{ marginBottom: '0.5rem' }}><span className="bullet">•</span> Used in artificial sweeteners as a binding agent</li>
              </ul>

              <h3 style={{ color: '#e4312c', marginTop: '1.5rem', marginBottom: '1rem' }}>Manufacturer</h3>
              <p><span className="bullet">•</span> Cargill</p>
            </div>
          )}

          {activeTab === 'industrial' && (
            <div className="description-content">
              <p>Maltodextrin is a white powder that is relatively tasteless and dissolves in water. Maltodextrins are glucose polymeric chains with a molecular weight between that of starch and glucose syrups.</p>
              
              <h3 style={{ color: '#e4312c', marginTop: '1.5rem', marginBottom: '1rem' }}>Applications</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}><span className="bullet">•</span> Personal Care Products</li>
                <li style={{ marginBottom: '0.5rem' }}><span className="bullet">•</span> Cosmetics</li>
              </ul>

              <h3 style={{ color: '#e4312c', marginTop: '1.5rem', marginBottom: '1rem' }}>Benefits</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}><span className="bullet">•</span> Used as an absorbent, binding agent, emulsion stabilizer, film-forming agent, skin conditioning in cosmetic products</li>
                <li style={{ marginBottom: '0.5rem' }}><span className="bullet">•</span> It plays a significant role in the application of baby products, bath products, cleansing products, eye makeup, shaving preparations, hair and skin care products</li>
              </ul>

              <h3 style={{ color: '#e4312c', marginTop: '1.5rem', marginBottom: '1rem' }}>Manufacturer</h3>
              <p><span className="bullet">•</span> Cargill</p>
            </div>
          )}
        </div>
      </section>

      {/* Documentation Section */}
      <section className="documentation-section">
        <div className="container">
          <h2>Product Documentation</h2>
          <div className="download-item">
            <span className="download-icon">📄</span>
            <a href="#" className="download-link">Download Product Brochure</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-about">
              <img src="/spark.jpg" alt="SPARK" className="footer-logo" />
              <h3>SPARK</h3>
              <p>FOODS & CHEMICALS</p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about-us">About Us</Link></li>
                <li><Link to="/product-range">Products Range</Link></li>
                <li><Link to="/industries">Industries</Link></li>
                <li><Link to="/activities">Activities</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            <div className="footer-social">
              <h4>Stay in Touch</h4>
              <p>Keep up to date on social media</p>
              <div className="social-icons">
                <a href="#" className="social-icon">📘</a>
                <a href="#" className="social-icon">🔗</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Copyright © 2026 All right reserved.</p>
            <p>Design ~ Websitica Technologies</p>
          </div>
        </div>
      </footer>

      {/* Fixed Call and WhatsApp Buttons */}
      <div className="fixed-call">
        <a href="tel:7824841841" className="call-button">
          <span>📞</span>
          <div className="button-text">Call Now<br />+91 7824841841</div>
        </a>
      </div>
      <div className="fixed-whatsapp">
        <a href="https://wa.me/917824841841" className="whatsapp-button">
          <span>💬</span>
          <div className="button-text">WhatsApp<br />+91 7824841841</div>
        </a>
      </div>
    </div>
  );
};

export default Maltodextrin;