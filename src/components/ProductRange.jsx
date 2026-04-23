// components/ProductRange.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './ProductRange.css';

const ProductRange = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    about: false,
    product: false
  });
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Handle Annual Return click
  const handleAnnualReturn = () => {
    // window.open('https://acidindia.in/wp-content/uploads/2024/02/FORM-MGT-9-AY-2324.pdf', '_blank');
  };

  // Food Ingredients Data
  const foodIngredients = [
    {
      id: 1,
      title: "Dairy Cultures",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/starter-culture.jpg",
      description: "Today, our dairy cultures can be found in everything from traditional yogurt to industrial cheese.",
      link: "/product-range/dairy-cultures"
    },
    {
      id: 2,
      title: "Functional Systems",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/functional-stabilisers.jpg",
      description: "Suggesting a dairy functional system that entails all the consumer preferences is our main goal.",
      link: "/product-range/functional-systems"
    },
    {
      id: 3,
      title: "Dairy Enzymes",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/dairy-enzyme.jpg",
      description: "Our dairy enzymes give cheese products their defining texture and flavor while providing advantages in UHT processing.",
      link: "/product-range/dairy-enzymes"
    },
    {
      id: 4,
      title: "Emulsifiers",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/confectionery-emulsifiers.jpg",
      description: "Emulsifiers are used in a wide range of areas from bakery, confectionery, dairy & frozen desserts to meal solutions, snacks and oils & fats.",
      link: "/product-range/emulsifiers"
    },
    {
      id: 5,
      title: "Bakery Enzymes",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/Bread-improvers.jpg",
      description: "Our baking enzymes can help improve flour performance and dough stability throughout the process, leading to fewer products discarded.",
      link: "/product-range/bakery-enzymes"
    },
    {
      id: 6,
      title: "Hydrocolloids",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/hydrocolloid.jpg",
      description: "Fruit pectin is associated with cellulose in plant tissues, where it plays a fundamental role in determining their mechanical properties.",
      link: "/product-range/hydrocolloids"
    },
    {
      id: 7,
      title: "Soy Proteins",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/soy-protein.jpg",
      description: "We offer a variety of protein products, exhibiting a wide range of functional properties, protein levels and physical formats.",
      link: "/product-range/soy-proteins"
    },
    {
      id: 8,
      title: "Liquid Glucose",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/liquid-glucose-gel.jpg",
      description: "This glucose syrup is a highly refined and concentrated solution of dextrose, maltose and higher saccharides.",
      link: "/product-range/liquid-glucose"
    },
    {
      id: 9,
      title: "Maltodextrin",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/malto-powder.jpg",
      description: "Maltodextrins are available both in powder and liquid form, and act as protective colloids for emulsions as well as emulsion polymerization material.",
      link: "/product-range/maltodextrin"
    },
    {
      id: 10,
      title: "Maize Starch",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/maize-starch.jpg",
      description: "Maize starch powder is widely used as a stiffening agent and a thickener with many industrial applications.",
      link: "/product-range/maize-starch"
    },
    {
      id: 11,
      title: "Modified Starches",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/starch-modified.jpg",
      description: "Cargill's portfolio of modified food starch has been developed to fulfill the needs of the food industry.",
      link: "/product-range/modified-starches"
    },
    {
      id: 12,
      title: "Citric Acid",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/citric.jpg",
      description: "We have profound expertise and network to supply the world's renowned brand of Citric acid.",
      link: "/product-range/citric-acid"
    },
    {
      id: 13,
      title: "Cocoa Powder",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/cocoa.jpg",
      description: "Our cocoa powders vary in taste from fruity natural to bitter, and in color from vibrant red to dark brown and black.",
      link: "/product-range/cocoa-powder"
    },
    {
      id: 14,
      title: "Saffron",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/Saffron.jpg",
      description: "Saffron is that spice derived from the flower of Crocus sativus, commonly known as the 'saffron crocus'.",
      link: "/product-range/saffron"
    },
    {
      id: 15,
      title: "Food Safety Equipment & Testing Kits",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/Food-Safety-Equipments-Testing-Kits.jpg",
      description: "3M is a leader of innovative solutions that help the food and beverage industries optimize the quality of their products to enable consumer protection.",
      link: "/product-range/food-safety-equipment-testing-kits"
    },
    {
      id: 16,
      title: "Flavours & Food Colors",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/food-color.jpg",
      description: "Flavour is a sensory phenomenon which is a combination of the sensations of taste, odour or aroma, heat and cold, and texture or 'mouthfeel'.",
      link: "/product-range/flavours-food-colors"
    },
    {
      id: 17,
      title: "Phosphoric Acid",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/Phosphoric.jpg",
      description: "The acid is mostly available in the form of an aqueous solution (almost 86%) and is odorless, colorless, and non-volatile liquid.",
      link: "/product-range/phosphoric-acid"
    },
    {
      id: 18,
      title: "Bromine & Bromine Chemicals",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/bromine-glass.jpg",
      description: "We have associated with Solaris Chemtech which is part of the Excel Group of Companies, India's leading producer of Bromine and Bromine Chemicals.",
      link: "/product-range/bromine-bromine-chemicals"
    },
    {
      id: 19,
      title: "Acetic Acid",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/Product-Acetic-acid.jpg",
      description: "We source the best quality acetic acid either through imports or through local suppliers to suit the diverse needs of customers.",
      link: "/product-range/acetic-acid"
    },
    {
      id: 20,
      title: "E - Blends",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/Emulsifier-blend.jpg",
      description: "Emulsifier Blends or E-Blends named as BUSH Magic Bake Series is a range of blended & optimized Emulsifiers in Liquid Format.",
      link: "/product-range/e-blends"
    }
  ];

  // Industrial Chemicals Data
  const industrialChemicals = [
    {
      id: 1,
      title: "Liquid Glucose",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/liquid-glucose-gel.jpg",
      description: "This glucose syrup is a highly refined and concentrated solution of dextrose, maltose and higher saccharides.",
      link: "/product-range/liquid-glucose"
    },
    {
      id: 2,
      title: "Maltodextrin",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/malto-powder.jpg",
      description: "Maltodextrins are available both in powder and liquid form, and act as protective colloids for emulsions as well as emulsion polymerization material.",
      link: "/product-range/maltodextrin"
    },
    {
      id: 3,
      title: "Maize Starch",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/maize-starch.jpg",
      description: "Maize starch powder is widely used as a stiffening agent and a thickener with many industrial applications.",
      link: "/product-range/maize-starch"
    },
    {
      id: 4,
      title: "Citric Acid",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/citric.jpg",
      description: "We have profound expertise and network to supply the world's renowned brand of Citric acid.",
      link: "/product-range/citric-acid"
    },
    {
      id: 5,
      title: "Phosphoric Acid",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/Phosphoric.jpg",
      description: "The acid is mostly available in the form of an aqueous solution (almost 86%) and is odorless, colorless, and non-volatile liquid.",
      link: "/product-range/phosphoric-acid"
    },
    {
      id: 6,
      title: "Bromine & Bromine Chemicals",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/bromine-glass.jpg",
      description: "We have associated with Solaris Chemtech which is part of the Excel Group of Companies, India's leading producer of Bromine and Bromine Chemicals.",
      link: "/product-range/bromine-bromine-chemicals"
    },
    {
      id: 7,
      title: "Fatty Acids",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/chemicals-oils.jpg",
      description: "A fatty acid is a subunit of fats, oils, and waxes. It pertains to any long chain of hydrocarbon, with a single carboxylic group and aliphatic tail.",
      link: "/product-range/fatty-acids"
    },
    {
      id: 8,
      title: "Acetic Acid",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/Product-Acetic-acid.jpg",
      description: "We source the best quality acetic acid either through imports or through local suppliers to suit the diverse needs of customers.",
      link: "/product-range/acetic-acid"
    },
    {
      id: 9,
      title: "Detergent Chemicals",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/detergent-types.jpg",
      description: "We strive to help our customers deliver distinct functional benefits that enable new and differentiated label claims for consumers.",
      link: "/product-range/detergent-chemical"
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
    <div className="product-range-page">
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
                    <li><button onClick={(e) => { e.preventDefault(); handleAnnualReturn(); }} style={{ background: 'none', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer' }}>Annual Return</button></li>
                    <li><Link to="/about-us#strengths">Our Strengths</Link></li>
                    <li><Link to="/about-us#message">Our Chairman's Message</Link></li>
                    <li><Link to="/awards-accolades">Our Awards & Accolades</Link></li>
                  </ul>
                )}
              </li>
              
             <li className="dropdown" onMouseEnter={() => toggleDropdown('product')} onMouseLeave={() => toggleDropdown('product')}>
  <Link to="/product-range" className="nav-link dropdown-toggle active">
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
      <section className="product-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Our Product Range</h1>
            <p>Would you like to obtain consistent and uncompromising quality in your end product, at the same time achieve maximum cost effectiveness, productivity and customer delight? Then, check out our below product categories that would certainly serve your purpose.</p>
            <div className="hero-buttons">
              <button className="hero-btn primary" onClick={() => scrollToSection('food')}>Food Ingredients</button>
              <button className="hero-btn secondary" onClick={() => scrollToSection('industrial')}>Industrial Chemicals</button>
            </div>
          </div>
        </div>
      </section>

      {/* Food Ingredients Section */}
      <section id="food" className="food-ingredients">
        <div className="container">
          <div className="section-header">
            <h2>Food <span className="highlight">Ingredients</span></h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="products-grid">
            {foodIngredients.map(product => (
              <div key={product.id} className="product-card">
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-content">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <button className="learn-more-btn" onClick={() => window.location.href = product.link}>
                    LEARN MORE →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industrial Chemicals Section */}
      <section id="industrial" className="industrial-chemicals">
        <div className="container">
          <div className="section-header dark">
            <h3>Industrial <span className="highlight">Chemicals</span></h3>
            <div className="section-divider light"></div>
          </div>
          
          <div className="products-grid">
            {industrialChemicals.map(product => (
              <div key={product.id} className="product-card dark-card">
                <div className="product-image">
                  <img src={product.image} alt={product.title} />
                </div>
                <div className="product-content">
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>
                  <button className="learn-more-btn" onClick={() => window.location.href = product.link}>
                    LEARN MORE →
                  </button>
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
                <a href="https://facebook.com" className="social-icon" target="_blank" rel="noopener noreferrer">📘</a>
                <a href="https://linkedin.com" className="social-icon" target="_blank" rel="noopener noreferrer">🔗</a>
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

export default ProductRange;