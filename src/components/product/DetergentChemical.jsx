// src/components/product/DetergentChemical.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductCommon.css';

const DetergentChemical = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    about: false,
    product: false
  });
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const acusolApplications = [
    "Automatic dishwashing",
    "Powder and liquid fabric wash",
    "Laundry additives",
    "Industrial and Institutional detergents."
  ];

  const acusolBenefits = [
    "Inhibition of crystal growth, thus preventing precipitation of carbonates phosphates or silicates.",
    "Dispersion of precipitates in the cleaning bath to avoid settling and scaling on surfaces and fibers.",
    "Improvement of filming maintenance by soil dispersion, which minimize organic components deposition on glass and dish wares.",
    "Increase of bleach stability especially in chlorinated formulations by binding heavy metals which destabilize chlorine species through catalytic reactions.",
    "Use in medium alkaline to very alkaline formulations, thanks to high solubility of ACUSOL™445 in caustic products. Caustics should be added slowly to a water premix containing polymer to avoid high pH gradients"
  ];

  const tergitolApplications = [
    "Detergent bar",
    "Powder Detergent",
    "Dish wash tub/bar",
    "Liquid Detergent",
    "Dishwashing Liquid"
  ];

  const tergitolBenefits = [
    "Superior Detergency",
    "Excellent removal of oily/greasy soil & sebum",
    "Excellent de-greasing benefits",
    "Rapid dissolution & good rinseablity",
    "Hard water tolerance",
    "Readily Bio-degradable (OECD 301E)"
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://acidindia.in/wp-content/uploads/2022/05/detergent-types.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Detergent Surfactants</h1>
            <div className="breadcrumb">
              <Link to="/">Home</Link> &raquo; <Link to="/product-range">Product Range</Link> &raquo; <span>Detergent Surfactants</span>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="description-section">
        <div className="container">
          <div className="description-content">
            <p>Dow helps our customers meet rising consumer expectations for product performance, sensory appeal, and a lighter environmental footprint. We offer a broad portfolio of application expertise, product technologies and material science platforms to help leading brand owners in household and institutional care succeed in the marketplace. We strive to help our customers deliver distinct functional benefits that enable new and differentiated label claims for consumers.</p>
          </div>
        </div>
      </section>

      {/* Acusol 445 Section */}
      <section className="product-subsection">
        <div className="container">
          <h2 className="subsection-title">Acusol 445</h2>
          <div className="subsection-description">
            <p>Detergent Polymer ACUSOL™445 is a homopolymer of acrylic acid with an optimized molecular weight to be used in different applications.<br />
            It is supplied in liquid form and available as partially or fully neutralized grades.</p>
          </div>
          
          <h3 className="subsection-heading">Applications:</h3>
          <div className="applications-grid">
            {acusolApplications.map((app, index) => (
              <div key={index} className="application-item">
                <span className="bullet">•</span>
                <span>{app}</span>
              </div>
            ))}
          </div>
          
          <h3 className="subsection-heading">Benefits:</h3>
          <div className="benefits-grid">
            {acusolBenefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <span className="bullet">•</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tergitol 15-S-9 Section */}
      <section className="product-subsection alternate-bg">
        <div className="container">
          <h2 className="subsection-title">Tergitol 15-S-9</h2>
          <div className="subsection-description">
            <p>A secondary alcohol ethoxylate, nonionic surfactant used in applications such as high performance cleaners and agrochemicals. It is readily biodegradable, excellent wetting ability and non-APE based. It can be used in oilfield drilling and production formulations.</p>
          </div>
          
          <h3 className="subsection-heading">Applications:</h3>
          <div className="applications-grid">
            {tergitolApplications.map((app, index) => (
              <div key={index} className="application-item">
                <span className="bullet">•</span>
                <span>{app}</span>
              </div>
            ))}
          </div>
          
          <h3 className="subsection-heading">Benefits:</h3>
          <div className="benefits-grid">
            {tergitolBenefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <span className="bullet">•</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
          
          <h3 className="subsection-heading">Manufacturer:</h3>
          <div className="manufacturer-item">
            <span className="bullet">•</span>
            <span>DOW Chemicals</span>
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

export default DetergentChemical;