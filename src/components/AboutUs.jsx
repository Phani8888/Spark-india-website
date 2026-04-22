// components/AboutUs.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AboutUs.css';

const AboutUs = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    about: false,
    product: false
  });
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Timeline Data
  const timelineEvents = [
    { id: 1, year: "1970-1980", description: "Commenced operations with product promotions of Hydrochloric acid, Sulphuric acid and Nitric Acid.", align: "left" },
    { id: 2, year: "1980-1990", description: "Undertook the role of distributorship of phosphoric acid for Ballarpur Industries Limited (BILT)", align: "right" },
    { id: 3, year: "1990-2000", description: "Added new products like Caustic Soda, Sodium Tripolyphosphate (STPP), Bromine and Bromine Chemicals and Citric acid in the company's portfolio. Kick started business operations in Mumbai with dedicated office and state of art the warehouse", align: "left" },
    { id: 4, year: "2000-2010", description: "Became authorized channel partners for Danisco, VVF (India) Limited, Adani Wilmar Limited, Kasyap Sweetners Limited, Deepak Fertilizers and Petrochemicals Corporation Limited and Weifang Ensign. Expanded business operations to Karnataka, Andhra Pradesh, Kerala and Gujarat with dedicated offices and warehouse facilities.", align: "right" },
    { id: 5, year: "2010-2020", description: "Extended our PAN India presence with more business operations at Telengana, Gurgaon and West Bengal. Chosen as the sole distributors for 3M India, Cargill and The Dow Chemical Company", align: "left" },
    { id: 6, year: "2020-2022", description: "Ventured into Madhya Pradesh, Odisha and Rajasthan markets with effective field force to reach out to our customers. Included new potential product ranges in the company's portfolio by establishing distributor-partnership agreements with Olam Food Ingredients (Ofi), Evyap, Emery Oleochemicals and Bell Saffron", align: "right" }
  ];

  // Strengths Data
  const strengths = [
    { icon: "📅", title: "5 Decades of Dedicated Service to Industry" },
    { icon: "🇮🇳", title: "PAN India Presence" },
    { icon: "📦", title: "20+ Product Categories & 300+ Unique Products" },
    { icon: "🏭", title: "Multiple Branches with State-of-the-Art Warehouses" },
    { icon: "🌍", title: "10+ Global Principals" },
    { icon: "👥", title: "Young team of qualified and trained professionals" },
    { icon: "🎯", title: "Vibrant leadership team with vast experience" },
    { icon: "💪", title: "Robust & Concrete Commercial support" },
    { icon: "🗺️", title: "Local Terrain knowledge with solution oriented approach" },
    { icon: "⭐", title: "Expertise in handling high value products" }
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

  const handleAnnualReturn = () => {
    window.open('https://acidindia.in/wp-content/uploads/2024/02/FORM-MGT-9-AY-2324.pdf', '_blank');
  };

  return (
    <div className="aboutus-page">
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
                <Link to="/about-us" className="nav-link dropdown-toggle active">
                  About Us <span className="dropdown-arrow">▼</span>
                </Link>
                {isDropdownOpen.about && (
                  <ul className="dropdown-menu">
                    <li><a href="#company" onClick={(e) => { e.preventDefault(); scrollToSection('company'); }}>Our Company</a></li>
                    <li><a href="#story" onClick={(e) => { e.preventDefault(); scrollToSection('story'); }}>Our Story</a></li>
                    <li><a href="#process" onClick={(e) => { e.preventDefault(); scrollToSection('process'); }}>Our Process</a></li>
                    <li><a href="#" onClick={(e) => { e.preventDefault(); handleAnnualReturn(); }}>Annual Return</a></li>
                    <li><a href="#strengths" onClick={(e) => { e.preventDefault(); scrollToSection('strengths'); }}>Our Strengths</a></li>
                    <li><a href="#message" onClick={(e) => { e.preventDefault(); scrollToSection('message'); }}>Our Chairman's Message</a></li>
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
      <section className="aboutus-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>About Us</h1>
            <p>We interact with customers to understand their ever evolving demands and specific requirements to find ultimate solutions to every emerging challenge faced on day-to-day basis in the current market scenario</p>
            <button className="hero-btn" onClick={() => scrollToSection('company')}>View More</button>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section id="company" className="company-overview">
        <div className="container">
          <div className="section-header">
            <h2>Our Company <span className="highlight">Overview</span></h2>
            <div className="section-divider"></div>
          </div>
          <div className="company-content">
            <p>Incorporated in the year 1970, Acid India is a highly reckoned firm, founded passionately by Shri. Jayant D.Asher, a recipient of Excellence award in Pharmaceutical Profession sciences. The company was led into core operations by his Brother Late Shri. Kamal D.Asher with whose help, it steadily progressed and affirmed a leading position in the Industry. With a significant share in both the established & emerging Markets of the nation, Acid India Limited is now a 52-year old ISO 9001:2015 certified organization operating under the leadership of Shri Nitin J Asher who is the current chairman of the company. No doubt, that he along with his younger brother Shri. Amrish J Asher, Managing Director, Acid India Limited propelled the Company's turnover in multi-folds by initiating phase by phase enhancement of geographic presence, collaborating with world class MNCs and creating new product segments.</p>
            <p>From a proprietary firm that once started promoting acids like hydrochloric acid, sulphuric acid and nitric acid in the early 70's, Acid India Limited is now a pioneering organization, manoeuvring its energy and expertise in business development, channel sales and value added selling of a comprehensive array of food ingredients and industrial chemicals across India. Moreover, In view of the rich and profound relationship with customers, Acid India is flourishing as the chosen channel partner to represent some of the renowned brands across the globe like International Flavours & Fragrances (IFF), 3M, Cargill, Olam Food Ingredients (Ofi), Weifang Ensign, Aditya Birla – Grasim Industries, Solaris Chemtech, Symrise and Bell Saffron respectively for their products.</p>
            <p>Being Headquartered at Chennai, Acid India Limited has multiple branch offices with state-of-the-art warehouses in Tamilnadu, Karnataka, Maharashtra, Gujarat, Andhra Pradesh and Telengana. In addition to it, resident operations at Kerala, Rajasthan, Madhya Pradesh and Orissa with committed and dedicated human resource are result-oriented proven pathways embraced for accelerating growth and business development.</p>
            <p>Over many meritorious years of exploring the market, the company has been consistently contributing to Food-based industrial segments like Dairy, Bakery, Beverages, Confectionery, Nutritional Supplements, Edible Oils, Convenience Foods (RTC & RTE), Pharmaceuticals & Agro Chemicals, Pickling, Animal Feed and HoReCA. On the other hand, Acid India has stood apart also as a significant player in Non-Food based industrial segments like Electroplating & Metal Finishing, Personal Care & Cosmetics, Technical Textile, Water Treatment, Leather Processing, Detergents, Match Manufacturing, Paper Mills, Fertilizers and Cement Manufacturing.</p>
            <p>To enhance and achieve the goals of the organization, the skilled, experienced, trained and highly qualified professionals of Acid India Limited, interact with end users to know their ever increasing demands and specific requirements by taking support of Principals Manufacturers and find ultimate solutions to every challenge faced by customers.</p>
            <p>In a nutshell, when you make a beginning with Acid India Limited, it will be an everlasting reliable source of support, as we believe firmly in long term relationships rather than a One Time Sale.</p>
          </div>
        </div>
      </section>

      {/* Our Story Timeline Section */}
      <section id="story" className="our-story">
        <div className="container">
          <div className="section-header">
            <h3>Our <span className="highlight">Story</span></h3>
            <div className="section-divider"></div>
          </div>
          <div className="timeline">
            {timelineEvents.map((event) => (
              <div key={event.id} className={`timeline-item ${event.align}`}>
                <div className="timeline-content">
                  <div className="timeline-icon">📅</div>
                  <h4>{event.year}</h4>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision, Mission & Values Section */}
      <section id="vision" className="vision-mission">
        <div className="container">
          <div className="section-header">
            <h3>Our Vision, <span className="highlight">Mission & Values</span></h3>
            <div className="section-divider"></div>
          </div>
          <div className="vmv-grid">
            <div className="vmv-card">
              <div className="vmv-icon">👁️</div>
              <h4>Vision</h4>
              <div className="vmv-divider"></div>
              <p>To become the preferred Global Conglomerate offering unique and value added solutions to all industries and mankind to their delight</p>
            </div>
            <div className="vmv-card">
              <div className="vmv-icon">🎯</div>
              <h4>Mission</h4>
              <div className="vmv-divider"></div>
              <p>To provide unique and value added solutions through innovation and solution orientation. Channelize and direct all activities towards providing ultimate delight to our stakeholders</p>
            </div>
            <div className="vmv-card">
              <div className="vmv-icon">💎</div>
              <h4>Values</h4>
              <div className="vmv-divider"></div>
              <div className="values-list">
                <p><strong>A</strong> - Add Value, Accountability</p>
                <p><strong>I</strong> - Integrity & Ethics, Innovation & Solution Orientation</p>
                <p><strong>L</strong> - Lead, Inspire & Deliver, Lasting Relationship</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section id="process" className="our-process">
        <div className="container">
          <div className="section-header">
            <h3>Our <span className="highlight">Process</span></h3>
            <div className="section-divider"></div>
          </div>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-icon">📚</div>
              <h4>Develop</h4>
              <div className="process-divider"></div>
              <p>Build the habit of learning what the customer needs.</p>
            </div>
            <div className="process-card">
              <div className="process-icon">🚚</div>
              <h4>Deliver</h4>
              <div className="process-divider"></div>
              <p>Provide timely service of exception quality and value.</p>
            </div>
            <div className="process-card">
              <div className="process-icon">🎉</div>
              <h4>Delight</h4>
              <div className="process-divider"></div>
              <p>Go beyond stakeholders' expectations at every opportunity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Figures Section */}
      <section id="figures" className="our-figures">
        <div className="container">
          <div className="section-header dark">
            <h4>Our Figures</h4>
            <div className="section-divider light"></div>
          </div>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">111 Cr+</div>
              <div className="stat-label">Our Turnover (FY: 2021 - 2022)</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">300+</div>
              <div className="stat-label">Our Products</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">3500+</div>
              <div className="stat-label">Our Clientele</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">20+</div>
              <div className="stat-label">Our Product Ranges</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">20+</div>
              <div className="stat-label">Industries Served</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">10+</div>
              <div className="stat-label">Our Presence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Strengths Section */}
      <section id="strengths" className="our-strengths">
        <div className="container">
          <div className="section-header">
            <h3>Our <span className="highlight">Strengths</span></h3>
            <div className="section-divider"></div>
          </div>
          <div className="strengths-grid">
            {strengths.map((strength, index) => (
              <div key={index} className="strength-card">
                <div className="strength-icon">{strength.icon}</div>
                <div className="strength-divider"></div>
                <p>{strength.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chairman's Message Section */}
      <section id="message" className="chairman-message">
        <div className="container">
          <div className="section-header">
            <h3>Our Chairman's <span className="highlight">Message</span></h3>
            <div className="section-divider"></div>
          </div>
          <div className="message-content">
            <div className="chairman-image">
              <img src="https://acidindia.in/wp-content/uploads/2022/05/chairman.jpg" alt="Chairman" />
            </div>
            <div className="message-text">
              <p className="quote">" We are ever in pursuit of becoming a Customer's Companion in his Growth Journey by offering Uncompromising Quality, Reliability and Sustainability in products and services. "</p>
              <p>On behalf of the Acid India Group, I deem it to be a matter of immense pleasure and privilege to talk to you through this portal of Acid India Family. No wonder, I feel so glad and fulfilling to realize the fact that our company is able to be a part of millions of lives in India through our food related products in their everyday use.</p>
              <p>We are proud of our heritage and remember with fondness all our predecessors since the 1970s, who had taken sincere efforts and made substantial contribution to the growth of this Company that has brought it to the stage and status where it is now. In sustaining this meritorious patrimony, our present teams of vibrant and trained professionals in various departments have been working strenuously towards that one firm objective of proposing and delivering the right kind of tailor made solutions to customers by understanding their needs and requirements.</p>
              <p className="quote-small">"When I Lost My Excuses, I Found My Results"</p>
              <p>We as a pioneering trading house of a comprehensive array of food ingredients and industrial chemicals, have confronted ups and downs in the ever changing and ever evolving global circumstances. Though 2020-2021 was marked not only by its challenges due to COVID-19, but also clearly moulded us as individuals and as an enduring organization to stay robust and immune in the new normal economic scenario.</p>
              <p>Having said this, Days are not far when our Company will continue to learn more and explore ways to make footprints in the manufacturing industry as well, while continuing to find newer and better insights to address customer needs through our trading expertise. We are ever in pursuit of becoming a Customer's Companion in his Growth Journey by offering Uncompromising Quality, Reliability and Sustainability in products and services.</p>
              <p>Once again thank you for visiting our website and taking your valuable time to read my thought.</p>
              <p>Looking forward for a longer & stronger business relationship.</p>
              <p>Have a nice day.</p>
              <div className="signature">
                <p><strong>Mr. Nitin J Asher</strong></p>
                <p>Chairman</p>
                <p>Acid India Limited</p>
              </div>
            </div>
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

export default AboutUs;