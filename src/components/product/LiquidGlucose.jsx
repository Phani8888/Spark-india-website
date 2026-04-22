import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductCommon.css';

const LiquidGlucose = () => {
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://acidindia.in/wp-content/uploads/2022/05/liquid-glucose-gel.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Liquid Glucose</h1>
            <div className="breadcrumb">
              <Link to="/">Home</Link> &raquo; <Link to="/product-range">Product Range</Link> &raquo; <span>Liquid Glucose</span>
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
              <p>This glucose syrup is a highly refined and concentrated solution of dextrose, maltose and higher saccharides. It is obtained by acid and/or enzyme hydrolysis of starch and it is a clear colourless viscous liquid fit for human consumption.</p>
              
              <h3 style={{ color: '#e4312c', marginTop: '1.5rem', marginBottom: '1rem' }}>Applications</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {["Ice Creams", "Sweets & Candies", "Chocolates", "Peanut burfis", "Chewing gums", "Pies & Biscuits", "Tonics & Cough Syrups"].map((item, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem' }}><span className="bullet">•</span> {item}</li>
                ))}
              </ul>

              <h3 style={{ color: '#e4312c', marginTop: '1.5rem', marginBottom: '1rem' }}>Benefits</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}><span className="bullet">•</span> It is used as a major ingredient in hard boiled candies as it prevents crystallization and imparts cohesiveness</li>
                <li style={{ marginBottom: '0.5rem' }}><span className="bullet">•</span> Liquid Glucose is used in conjunction with sugar for manufacturing flavoured candies, chikkis and chocolates to improve the form, body and texture of the final product.</li>
                <li style={{ marginBottom: '0.5rem' }}><span className="bullet">•</span> It allows the cakes, pies and biscuits to absorb water, prevent drying and extend shelf life</li>
                <li style={{ marginBottom: '0.5rem' }}><span className="bullet">•</span> It helps keep food products soft, fresh and acts as a preservative thereby extending the shelf life of the products.</li>
                <li style={{ marginBottom: '0.5rem' }}><span className="bullet">•</span> It is incorporated in ice creams as it enhances flavours, decreases the freezing point, adds body, creaminess and stability</li>
                <li style={{ marginBottom: '0.5rem' }}><span className="bullet">•</span> Glucose syrup is extensively used in vitamin-based tonics and cough syrups.</li>
              </ul>

              <h3 style={{ color: '#e4312c', marginTop: '1.5rem', marginBottom: '1rem' }}>Manufacturer</h3>
              <p><span className="bullet">•</span> Cargill</p>
            </div>
          )}

          {activeTab === 'industrial' && (
            <div className="description-content">
              <p>This glucose syrup is a highly refined and concentrated solution of dextrose, maltose and higher saccharides. It is obtained by acid and/or enzyme hydrolysis of starch and it is a clear colorless viscous liquid fit for industrial usage.</p>
              
              <h3 style={{ color: '#e4312c', marginTop: '1.5rem', marginBottom: '1rem' }}>Applications</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}><span className="bullet">•</span> Leather Products</li>
              </ul>

              <h3 style={{ color: '#e4312c', marginTop: '1.5rem', marginBottom: '1rem' }}>Benefits</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '0.5rem' }}><span className="bullet">•</span> Glucose syrup adds fineness, glossiness and proper weightage in the finishing of leather. When used in tanning, it offers a lustrous look and provides pliability to finished leather.</li>
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

export default LiquidGlucose;