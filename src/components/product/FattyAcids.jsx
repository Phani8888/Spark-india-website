// src/components/product/FattyAcids.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductCommon.css';

const FattyAcids = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    about: false,
    product: false
  });
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openToggle, setOpenToggle] = useState('lauric'); // Default open to Lauric acid

  const handleAnnualReturn = () => {
    window.open('https://acidindia.in/wp-content/uploads/2024/02/FORM-MGT-9-AY-2324.pdf', '_blank');
  };

  const toggleDropdown = (menu) => {
    setIsDropdownOpen(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const toggleSection = (section) => {
    setOpenToggle(openToggle === section ? null : section);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const lauricApplications = [
    "Used in the Manufacturing of soaps and other cosmetics.",
    "Used to investigate the molar mass of unknown substances via freezing-point depression.",
    "Used as an intermediate and as a surface active agent.",
    "Used in the cleaning, furnishing, and production of personal care products.",
    "Increases total serum cholesterol more than many of the other fatty acids."
  ];

  const lauricManufacturers = [
    "Emery", "Southern Acid (M) Berhad", "Evyap", "Dua Kuda Indonesia", "KLK Oleo", "Pacific Oleo"
  ];

  const stearicApplications = [
    "Used in the production of detergents, soaps, and cosmetics such as shampoos and shaving cream products.",
    "Used along with castor oil for preparing softeners in textile sizing.",
    "Personal Care Products",
    "Being inexpensively available and chemically benign, stearic acid finds many niche applications",
    "Used in the manufacture of candles",
    "In fireworks, stearic acid is often used to coat metal powders such as aluminum and iron. This prevents oxidation, allowing compositions to be stored for a longer period of time.",
    "It is a common lubricant during injection molding and pressing of ceramic powders.",
    "It is used as a mold release for foam latex that is baked in stone molds."
  ];

  const stearicManufacturers = [
    "Emery", "Southern Acid (M) Berhad", "Evyap", "Dua Kuda Indonesia", "KLK Oleo", "Pacific Oleo"
  ];

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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://acidindia.in/wp-content/uploads/2022/05/chemicals-oils.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Fatty Acids</h1>
            <div className="breadcrumb">
              <Link to="/">Home</Link> &raquo; <Link to="/product-range">Product Range</Link> &raquo; <span>Fatty Acids</span>
            </div>
          </div>
        </div>
      </section>

      {/* Lauric Acid Toggle Section */}
      <section className="toggle-section">
        <div className="container">
          <div className={`toggle-item ${openToggle === 'lauric' ? 'open' : ''}`}>
            <div className="toggle-header" onClick={() => toggleSection('lauric')}>
              <h3>Lauric acid</h3>
              <span className="toggle-icon">{openToggle === 'lauric' ? '▲' : '▼'}</span>
            </div>
            {openToggle === 'lauric' && (
              <div className="toggle-content">
                <p>Lauric acid, CAS 143-07-7, chemical formula C12H24O2, is produced as a white crystalline powder, has a slight odor of bay oil, and is soluble in water, alcohols, phenyls, haloalkanes, and acetates. It is non-toxic, safe to handle, inexpensive, and has a long shelf life. It is mainly used in the manufacture and production of soaps and other cosmetics as well as scientific laboratory uses.</p>
                
                <h4>Applications</h4>
                <ul>
                  {lauricApplications.map((app, index) => (
                    <li key={index}>{app}</li>
                  ))}
                </ul>
                
                <h4>Manufacturer</h4>
                <ul>
                  {lauricManufacturers.map((mfg, index) => (
                    <li key={index}>{mfg}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Stearic Acid Toggle Section */}
          <div className={`toggle-item ${openToggle === 'stearic' ? 'open' : ''}`}>
            <div className="toggle-header" onClick={() => toggleSection('stearic')}>
              <h3>Stearic Acid</h3>
              <span className="toggle-icon">{openToggle === 'stearic' ? '▲' : '▼'}</span>
            </div>
            {openToggle === 'stearic' && (
              <div className="toggle-content">
                <p>Stearic Acid, also called Octadecanoic Acid, is one of the most common long-chain fatty acids. It is found in combined form in natural animal and vegetable fats. Commercial stearic acid is a mixture of approximately equal amounts of stearic and palmitic acids and small amounts of oleic acid. It is employed in the manufacture of candles, cosmetics, shaving soaps, lubricants, and pharmaceuticals.</p>
                
                <h4>Applications</h4>
                <ul>
                  {stearicApplications.map((app, index) => (
                    <li key={index}>{app}</li>
                  ))}
                </ul>
                
                <h4>Manufacturer</h4>
                <ul>
                  {stearicManufacturers.map((mfg, index) => (
                    <li key={index}>{mfg}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
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

export default FattyAcids;