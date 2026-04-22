// components/Contact.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

const Contact = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    about: false,
    product: false
  });
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  // Handle Annual Return click
  const handleAnnualReturn = () => {
    // window.open('https://acidindia.in/wp-content/uploads/2024/02/FORM-MGT-9-AY-2324.pdf', '_blank');
  };

  // Refs for scrolling to sections
  const hyderabadRef = useRef(null);

  const locations = [
   { 
      id: 'hyderabad', 
      name: 'Hyderabad', 
      ref: hyderabadRef, 
      title: 'HYDERABAD - BRANCH',
      sameAddress: true,
      office: { 
        address: ['5-15-A, Sri Hills Colony,', 'Almasguda,', 'Balapur,', 'R.R Dist.,', 'Hyderabad, Telangana - 500 058'],
        map: 'https://maps.app.goo.gl/Gx5FBEj6W2DoUvzb6' 
      },
   }  
  ]

  const scrollToSection = (ref) => {
    if (ref.current) {
      const navbarHeight = 80;
      const elementPosition = ref.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const toggleDropdown = (menu) => {
    setIsDropdownOpen(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Component to render location cards (either separate or merged)
  const LocationCards = ({ location }) => {
    if (location.sameAddress) {
      return (
        <div className="location-grid single-card">
          <div className="location-card full-width">
            <div className="card-header">
              <span className="card-icon">🏢🏭</span>
              <h4>OFFICE & WAREHOUSE</h4>
            </div>
            <div className="card-content">
              <div className="address">
                {location.office.address.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
              <div className="map-container">
                <iframe 
                  src={location.office.map} 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  title="Office & Warehouse Location" 
                />
              </div>
              <a href={location.office.map} target="_blank" rel="noopener noreferrer" className="open-maps-btn">
                Open in Maps 🗺️
              </a>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="location-grid">
          <div className="location-card">
            <div className="card-header">
              <span className="card-icon">🏢</span>
              <h4>OFFICE</h4>
            </div>
            <div className="card-content">
              <div className="address">
                {location.office.address.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
              <div className="map-container">
                <iframe 
                  src={location.office.map} 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  title="Office Location" 
                />
              </div>
              <a href={location.office.map} target="_blank" rel="noopener noreferrer" className="open-maps-btn">
                Open in Maps 🗺️
              </a>
            </div>
          </div>
          <div className="location-card">
            <div className="card-header">
              <span className="card-icon">🏭</span>
              <h4>WAREHOUSE</h4>
            </div>
            <div className="card-content">
              <div className="address">
                {location.warehouse.address.map((line, idx) => (
                  <p key={idx}>{line}</p>
                ))}
              </div>
              <div className="map-container">
                <iframe 
                  src={location.warehouse.map} 
                  width="100%" 
                  height="300" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  title="Warehouse Location" 
                />
              </div>
              <a href={location.warehouse.map} target="_blank" rel="noopener noreferrer" className="open-maps-btn">
                Open in Maps 🗺️
              </a>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <div className="contact-page">
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
              <li><Link to="/contact" className="nav-link active">Contact</Link></li>
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
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <div className="contact-hero-content">
            <h1>Get in Touch</h1>
            <h2>We'd love to hear from you...</h2>
          </div>
        </div>
      </section>

      {/* Horizontal Location Buttons */}
      <section className="location-buttons">
        <div className="container">
          <div className="location-btn-group">
            {/* <button className="location-btn" onClick={() => scrollToSection(chennaiRef)}>Chennai</button> */}
            {/* <button className="location-btn" onClick={() => scrollToSection(bangaloreRef)}>Bangalore</button> */}
            <button className="location-btn" onClick={() => scrollToSection(hyderabadRef)}>Hyderabad</button>
            {/* <button className="location-btn" onClick={() => scrollToSection(andhraRef)}>Andhra Pradesh</button> */}
            {/* <button className="location-btn" onClick={() => scrollToSection(ahmedabadRef)}>Ahmedabad</button> */}
            {/* <button className="location-btn" onClick={() => scrollToSection(mumbaiRef)}>Maharashtra</button> */}
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="contact-info">
        <div className="container">
          <div className="info-cards">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>General Enquiries</h3>
              <p><a href="mailto:sparkfoodsandchemicals@sparkfoods.in">sparkfoodsandchemicals@sparkfoods.in</a> / <a href="tel:917093991217">+91 7093991217</a></p>
            </div>
            <div className="info-card">
              <div className="info-icon">💼</div>
              <h3>Sales Enquiries</h3>
              <p><a href="mailto:sales@sparkfoods.in">sales@sparkfoods.in</a> / <a href="tel:919392211721">+91 9392211721</a></p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Details Sections */}
      {locations.map((location) => (
        <div key={location.id} ref={location.ref} className="location-section">
          <section className="location-details">
            <div className="container">
              <div className="location-header">
                <div className="location-icon">📍</div>
                <h3>{location.title}</h3>
              </div>
              <LocationCards location={location} />
            </div>
          </section>
        </div>
      ))}

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="form-wrapper">
            <div className="form-header">
              <h3>Send us a Message</h3>
              <p>Have any questions? We'd love to hear from you.</p>
            </div>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleInputChange} required />
                </div>
                <div className="form-group">
                  <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleInputChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} />
                </div>
                <div className="form-group">
                  <input type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleInputChange} required />
                </div>
              </div>
              <div className="form-group">
                <textarea name="message" placeholder="Your Message" rows="6" value={formData.message} onChange={handleInputChange} required />
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
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
                <li><a href="/product-range">Products Range</a></li>
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
          <div className="button-text">
            Call Now<br />+91 7824841841
          </div>
        </a>
      </div>
      <div className="fixed-whatsapp">
        <a href="https://wa.me/917824841841" className="whatsapp-button">
          <span>💬</span>
          <div className="button-text">
            WhatsApp<br />+91 7824841841
          </div>
        </a>
      </div>
    </div>
  );
};

export default Contact;