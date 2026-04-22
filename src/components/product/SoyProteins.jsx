import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductCommon.css';

const SoyProteins = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    about: false,
    product: false
  });
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAnnualReturn = () => {
    window.open('https://acidindia.in/wp-content/uploads/2024/02/FORM-MGT-9-AY-2324.pdf', '_blank');
  };

  const applications = [
    "Sports nutrition", "Nutrition Bars, Snacks & Cereals", "Weight management",
    "Meal replacement", "Protein supplementation", "Child and maternal nutrition",
    "General health and wellness", "Plant based- Meat Alternatives (Meat Chunks, Strips, Shreds, Ground Meats)"
  ];

  const benefits = [
    "90% protein (dry basis)",
    "High-quality, plant-based protein with proven health benefits",
    "An economic alternative to dairy protein",
    "No sacrifice in protein quality when used as an alternative to dairy protein",
    "Complete spray-dried blends with a similar nutritional composition to whole milk powder",
    "Turn-key options for milk-alternative powders—just add flavors",
    "Excellent flavor, dispersibility and mouthfeel",
    "Wide choice of soy-dairy and soy-only blends",
    "Versatile bases for the development of nutritional beverage powders that meet the specific nutritional needs of adults and children",
    "Versatile bases for the development of powdered desserts, yogurt powders, and more",
    "Provides meat-like fibrosity and texture",
    "Enhances succulence",
    "Increases cooked yields",
    "Reduces shrinkage",
    "Improves shape retention in ground meat applications",
    "Reduces formulation costs while improving quality",
    "Versatile: enhances functionality in meat, poultry, seafood, and meat-free applications",
    "Imparts neutral flavor and color",
    "Wide range of different shapes and sizes",
    "Imparts crispy, crunchy texture for nutrition bars, snacks and cereals"
  ];

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

  // Navbar component (same as previous components)
  const Navbar = () => (
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
  );

  // Footer component
  const Footer = () => (
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
  );

  return (
    <div className="product-page">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="product-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://acidindia.in/wp-content/uploads/2022/05/soy-protein.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Soy Proteins</h1>
            <div className="breadcrumb">
              <Link to="/">Home</Link> &raquo; <Link to="/product-range">Product Range</Link> &raquo; <span>Soy Proteins</span>
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="description-section">
        <div className="container">
          <div className="description-content">
            <p>Soy protein is one of the most versatile and valuable plant-based ingredients in our portfolio.</p>
            <p>Because Nutrition & Biosciences Soy Protein Solutions are designed to deliver application-specific functionality, we offer a variety of protein products, exhibiting a wide range of functional properties, protein levels and physical formats.</p>
            <p>So whichever attributes are most important to you, from viscosity and gelation to taste (or solubility, or emulsification, or any of the others), we're confident you'll find a product that meets your needs below.</p>
            <p>By understanding your formulation goals and processing constraints, our technical experts can recommend a protein that can precisely fit the nutritional, economic and functional requirements of your product.</p>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="applications-section">
        <div className="container">
          <h2>Applications</h2>
          <div className="applications-grid">
            {applications.map((app, index) => (
              <div key={index} className="application-item">
                <span className="bullet">•</span>
                <span>{app}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <h2>Benefits</h2>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-item">
                <span className="bullet">•</span>
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturer Section */}
      <section className="manufacturer-section">
        <div className="container">
          <h2>Manufacturer</h2>
          <div className="manufacturer-item">
            <span className="bullet">•</span>
            <span>International Flavors & Fragrances, Inc. (IFF)</span>
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

      <Footer />

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

export default SoyProteins;