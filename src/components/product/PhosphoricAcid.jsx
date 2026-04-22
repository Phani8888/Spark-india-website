// src/components/product/PhosphoricAcid.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductCommon.css';

const PhosphoricAcid = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    about: false,
    product: false
  });
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openToggle, setOpenToggle] = useState(null);

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

  return (
    <div className="product-page">
      {/* Navbar (same as previous components - omitted for brevity) */}
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://acidindia.in/wp-content/uploads/2022/05/Phosphoric.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Phosphoric Acid</h1>
            <div className="breadcrumb">
              <Link to="/">Home</Link> &raquo; <Link to="/product-range">Product Range</Link> &raquo; <span>Phosphoric Acid</span>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="description-section">
        <div className="container">
          <div className="description-content">
            <p>H3PO4 is one of the most important and useful mineral acids. The acid is mostly available in the form of an aqueous solution (almost 86%) and is odorless, colorless, and non-volatile liquid. The solution is a sticky liquid and even though this acid is categorized as a weak acid it can still cause irritation or burns in the skin as well as damage to the eyes and membranes in the nose.</p>
            <p>It is also referred to as orthophosphoric acid which helps us to easily distinguish it from other phosphoric acids such as polyphosphoric acid. Another name for this acid is phosphoric(V) acid. This acid is a non-toxic acid and in its pure form, it is a solid at room temperature. It has a molar mass of 97.99 g/mol.</p>
          </div>
        </div>
      </section>

      {/* Food Ingredient Toggle Section */}
      <section className="toggle-section">
        <div className="container">
          <div className={`toggle-item ${openToggle === 'food' ? 'open' : ''}`}>
            <div className="toggle-header" onClick={() => toggleSection('food')}>
              <h3>Food Ingredient</h3>
              <span className="toggle-icon">{openToggle === 'food' ? '▲' : '▼'}</span>
            </div>
            {openToggle === 'food' && (
              <div className="toggle-content">
                <p>Grasim Industries Limited, a flagship company of the global conglomerate Aditya Birla Group, ranking amongst the top publicly listed companies in India, is our prestigious principal for the supply of Orthophosphoric acid (86%).<br />
                We also collaborate with a diverse set of companies from Vietnam, Taiwan, Korea, China and Belgium for the procurement and supply of food grade phosphoric acid (85%).</p>
                
                <h4>Applications</h4>
                <ul>
                  <li>Edible Oils</li>
                  <li>Breweries</li>
                  <li>Beverages</li>
                </ul>
                
                <h4>Benefits</h4>
                <ul>
                  <li>Can be used in the refining processes of edible oils like palm oil, sunflower oil, rice bran oil, etc</li>
                  <li>Used as sanitizing agents in brewing industries.</li>
                  <li>Provides sour and tangy taste to beverages.</li>
                </ul>
                
                <h4>Source of Material</h4>
                <ul>
                  <li>Grasim Industries – A Flagship Company of Aditya Birla Group</li>
                  <li>Vietnam</li>
                  <li>Taiwan</li>
                  <li>Korea</li>
                  <li>China</li>
                  <li>Belgium</li>
                </ul>
              </div>
            )}
          </div>

          {/* Industrial Chemical Toggle Section */}
          <div className={`toggle-item ${openToggle === 'industrial' ? 'open' : ''}`}>
            <div className="toggle-header" onClick={() => toggleSection('industrial')}>
              <h3>Industrial Chemical</h3>
              <span className="toggle-icon">{openToggle === 'industrial' ? '▲' : '▼'}</span>
            </div>
            {openToggle === 'industrial' && (
              <div className="toggle-content">
                <p>Grasim Industries Limited, a flagship company of the global conglomerate Aditya Birla Group, ranking amongst the top publicly listed companies in India, is our prestigious principal for the supply of Orthophosphoric acid (86%).</p>
                
                <h4>Applications</h4>
                <ul>
                  <li>Pre-Treatment Chemicals</li>
                  <li>Electroplating</li>
                  <li>Water Treatment Chemicals</li>
                  <li>Refractory</li>
                  <li>Leather Chemicals</li>
                  <li>Match Industries</li>
                  <li>Agriculture</li>
                  <li>Paper Mills</li>
                  <li>Breweries</li>
                  <li>Technical Textile</li>
                </ul>
                
                <h4>Benefits</h4>
                <ul>
                  <li>Can be used to remove rust in direct use</li>
                  <li>Used as an electrolyte in copper electro polishing process for burr removal and circuit board planarization</li>
                  <li>Pre-Treatment Chemicals</li>
                  <li>Removes mineral deposits and hard water stains</li>
                  <li>Can be used for heat resistance</li>
                  <li>Used as a dispersing agent in leather treatment</li>
                  <li>Can be used in the carbonisation of wooden match sticks.</li>
                  <li>Can be used effectively in correcting phosphate deficiencies in all crops and soil that needs phosphate</li>
                  <li>Can be used for direct application in pre plant blow down (or) injected in to the oil (or) in irrigation water.</li>
                  <li>Used as sanitizing agents in brewing industries</li>
                  <li>Can be used in effluent treatment of wooden pulp manufacturers</li>
                </ul>
                
                <h4>Manufacturer</h4>
                <ul>
                  <li>Grasim Industries – A Flagship Company of Aditya Birla Group</li>
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

      {/* Footer and Fixed Buttons (same as previous) */}
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

export default PhosphoricAcid;