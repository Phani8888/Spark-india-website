// components/Industries.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Industries.css';

const Industries = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    about: false,
    product: false
  });
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle Annual Return click
  const handleAnnualReturn = () => {
    window.open('https://acidindia.in/wp-content/uploads/2024/02/FORM-MGT-9-AY-2324.pdf', '_blank');
  };

  // Food Industries Data
  const foodIndustries = [
    {
      id: 1,
      title: "Dairy",
      image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=800",
      products: "Starter Cultures, Functional Systems, Enzymes, Liquid Glucose, Citric Acid, Cocoa Powder, Flavours, Food Colours, Saffron, Acetic Acid, Food Safety Equipments & Testing Kits"
    },
    {
      id: 2,
      title: "Bakery",
      image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
      products: "Emulsifiers, E - Blends, Enzymes, Modified Starches, Liquid Glucose, Maltodextrin, Cocoa Powder, Flavours, Food Colours, Food Safety Testing Kits, Calcium Propionate & Wheat Gluten"
    },
    {
      id: 3,
      title: "Confectionery",
      image: "https://images.unsplash.com/photo-1581798459219-318e76aecc7b?w=800",
      products: "Hydrocolloids, Liquid Glucose, Maltodextrin, Modified Starches, Cocoa Powder, Saffron, Flavours & Food Colours"
    },
    {
      id: 4,
      title: "Beverages",
      image: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=800",
      products: "Functional Systems, Hydrocolloids, Citric Acid, Flavours, Saffron, Food Colors, Food Safety Testing Kits"
    },
    {
      id: 5,
      title: "Nutritional Supplements",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
      products: "Maltodextrin, Isolated Soya Proteins, Cocoa Powder, Flavours & Colours"
    },
    {
      id: 6,
      title: "Edible Oils",
      image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800",
      products: "Phosphoric acid"
    },
    {
      id: 7,
      title: "Convenience Foods (RTC & RTE)",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800",
      products: "Modified Starches, Maltodextrin & Food Testing Kits"
    },
    {
      id: 8,
      title: "Pharmaceuticals & Agro-Chemicals",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800",
      products: "Liquid Bromine, Hydrobromic acid, N-Propyl Bromide, Maltodextrin, Liquid Glucose"
    },
    {
      id: 9,
      title: "Plant-Based Meat Alternatives",
      image: "https://acidindia.in/wp-content/uploads/2022/05/plant-based-meat.jpg",
      products: "Texturised vegetable protein (TVP), Isolated Soy Protein (ISP), Maltodextrin"
    },
    {
      id: 10,
      title: "Animal Feed",
      image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?w=800",
      products: "Phosphoric Acid, Calcium Phosphates, Maltodextrin, Citric Acid"
    }
  ];

  // Non-Food Industries Data
  const nonFoodIndustries = [
    {
      id: 1,
      title: "Electroplating & Metal Finishing",
      image: "https://images.unsplash.com/photo-1562183241-b937e95585b6?w=800",
      products: "Phosphoric Acid & Citric Acid"
    },
    {
      id: 2,
      title: "Personal Care",
      image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800",
      products: "Lauric Acid, Stearic Acid"
    },
    {
      id: 3,
      title: "Technical Textile",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800",
      products: "Phosphoric Acid"
    },
    {
      id: 4,
      title: "Water Treatment",
      image: "https://acidindia.in/wp-content/uploads/2022/05/water-treatment-industries.jpg",
      products: "Phosphoric Acid, Citric Acid"
    },
    {
      id: 5,
      title: "Leather Processing",
      image: "https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=800",
      products: "Liquid Glucose, Maize Starch"
    },
    {
      id: 6,
      title: "Detergent Chemicals",
      image: "https://images.unsplash.com/photo-1563453392212-326f5e854473?w=800",
      products: "Citric Acid, Sodium Citrate, Performance Chemicals and Surfactants, Lauric Acid, Stearic Acid"
    },
    {
      id: 7,
      title: "Cosmetics",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800",
      products: "Citric Acid, Lauric Acid & Stearic Acid"
    },
    {
      id: 8,
      title: "Fertilizers",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800",
      products: "Phosphoric acid"
    },
    {
      id: 9,
      title: "Matches Manufacturing",
      image: "https://acidindia.in/wp-content/uploads/2022/05/matchsticks.jpg",
      products: "Phosphoric acid"
    },
    {
      id: 10,
      title: "Refractories",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800",
      products: "Phosphoric acid"
    },
    {
      id: 11,
      title: "Paper Mills",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800",
      products: "Phosphoric acid"
    }
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

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="industries-page">
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
              <li><Link to="/industries" className="nav-link active">Industries</Link></li>
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

      {/* Hero Section with Video Background */}
      <section className="industries-hero">
        <div className="hero-video-overlay"></div>
        <div className="hero-content">
          <h1>Industries We Serve</h1>
          <p>Our sustainable and steady growth over the years has only reaffirmed our faith that a dedicated efficient service to Trade outlets and multiple Industry segments will make us the preferred global conglomerate in the years to unfold</p>
          <div className="hero-buttons">
            <button className="hero-btn primary" onClick={() => scrollToSection('food')}>Food Industries</button>
            <button className="hero-btn secondary" onClick={() => scrollToSection('nonfood')}>Non-Food Processing Industries</button>
          </div>
        </div>
      </section>

      {/* Food Industries Section */}
      <section id="food" className="food-industries">
        <div className="container">
          <div className="section-header">
            <h2>Food <span className="highlight">Industries</span></h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="industries-grid">
            {foodIndustries.map(industry => (
              <div key={industry.id} className="industry-card">
                <div className="card-image">
                  <img src={industry.image} alt={industry.title} />
                </div>
                <div className="card-content">
                  <h3>{industry.title}</h3>
                  <p>{industry.products}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Non-Food Industries Section */}
      <section id="nonfood" className="nonfood-industries">
        <div className="container">
          <div className="section-header dark">
            <h3>Non-Food Processing <span className="highlight">Industries</span></h3>
            <div className="section-divider light"></div>
          </div>
          
          <div className="industries-grid">
            {nonFoodIndustries.map(industry => (
              <div key={industry.id} className="industry-card dark-card">
                <div className="card-image">
                  <img src={industry.image} alt={industry.title} />
                </div>
                <div className="card-content">
                  <h3>{industry.title}</h3>
                  <p>{industry.products}</p>
                </div>
              </div>
            ))}
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

export default Industries;