// components/AwardsAccolades.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AwardsAccolades.css';

const AwardsAccolades = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    about: false,
    product: false
  });
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('principals');

  // Awards Data
  const principalsAwards = [
    {
      id: 1,
      title: "High Value Leads Champion",
      description: "Declared as the High Value Leads Champion for successfully generating maximum number of high value leads in the 'Power through Health & Immunity Campaign organized by DuPont Nutrition & Biosciences, India for Channel partners in January 2021.",
      image: "https://acidindia.in/wp-content/uploads/2022/05/High-value-lead-award.jpg"
    },
    {
      id: 2,
      title: "Leads Champion",
      description: "Declared as the Leads Champion for successfully generating maximum number of leads in the 'Power through Health & Immunity Campaign organized by DuPont Nutrition & Biosciences, India for Channel partners in January 2021.",
      image: "https://acidindia.in/wp-content/uploads/2022/05/Lead-champion-award1.jpg"
    },
    {
      id: 3,
      title: "1st Runner Up Award",
      description: "1st Runner Up Award presented to Acid India Group in the 'Nutri Alliance Big Treat 2018' event conducted by DuPont Nutrition & Health, India for job well done during the year 2018-2019.",
      image: "https://acidindia.in/wp-content/uploads/2022/05/1st-Runner-Award.jpg"
    },
    {
      id: 4,
      title: "Up gradation of skillset, enthusiasm and passion in pursuit of selling excellence",
      description: "Dow Consumer Solutions proudly certified and recognized Mr. Nitin. J. Asher, Chairman, Acid India Group for his efforts towards 'Up gradation of skillset, enthusiasm and passion in pursuit of selling excellence'.",
      image: "https://acidindia.in/wp-content/uploads/2022/05/Up-gradation-of-skillset-Award.jpg"
    },
    {
      id: 5,
      title: "Certificate of Appreciation",
      description: "Certificate of Appreciation to Mr. Nitin. J. Asher, Chairman, Acid India Group for successfully completing the first module of 'Dairy Training Course' organized by Danisco, Gurgaon, India in September 2010.",
      image: "https://acidindia.in/wp-content/uploads/2022/05/Certificate-of-Appreciation-award1.jpg"
    },
    {
      id: 6,
      title: "A Partner of Choice",
      description: "Clinched the award 'A Partner of Choice' in the 'Channel Partners Meet - 2014' conducted by VVF (India) Limited",
      image: "https://acidindia.in/wp-content/uploads/2022/05/Partner-of-Choice-award1.jpg"
    },
    {
      id: 7,
      title: "Certificate of Appreciation",
      description: "Was Awarded the Certificate of Appreciation by Aditya Birla - Grasim Industries in 'Lakshya Event - Together We Can' held on 9th April 2022 for association with Domestic Chlor - Alkali Business.",
      image: "https://acidindia.in/wp-content/uploads/2022/05/Certificate-of-Appreciation-2.jpg"
    },
    {
      id: 8,
      title: "Certificate of Appreciation",
      description: "Certificate of Appreciation from Grasim Industries Limited (Chemical Division) for Acid India Limited being the Authorized Distributor and amongst the Top Distributors attending Reflection 2018 at Hyderabad, India.",
      image: "https://acidindia.in/wp-content/uploads/2022/05/Certificate-of-Appreciation-2018-at-Hyderabad.jpg"
    },
    {
      id: 9,
      title: "The Master of New Wins – 2016",
      description: "Award presented to Acid India Group for emerging as The Master of New Wins - 2016 in the event 'Nutri Alliance' hosted by DuPont Nutrition & Health at Gurgaon, India.",
      image: "https://acidindia.in/wp-content/uploads/2022/05/The-Master-of-New-Wins-–-2016-award.jpg"
    },
    {
      id: 10,
      title: "The Business Partner of the Year 2016",
      description: "Award presented to Acid India Group in the event 'Nutri Alliance' for emerging as The Business Partner of the Year 2016 for DuPont Nutrition and Health, Gurgaon, India.",
      image: "https://acidindia.in/wp-content/uploads/2022/05/Business-Partner-of-the-Year.jpg"
    },
    {
      id: 11,
      title: "The Explorer Award",
      description: "Recipient of The Explorer Award for rising among the 'Top 5 Channel Partners in number of new opportunities acquired in Q1 2014' for DuPont Nutrition & Health.",
      image: "https://acidindia.in/wp-content/uploads/2022/05/Award7.jpg"
    },
    {
      id: 12,
      title: "The Explorer Award",
      description: "Recipient of The Explorer Award for being among the 'Top 5 Channel Partners in number of new opportunities acquired in Q2 2014' for DuPont Nutrition & Health.",
      image: "https://acidindia.in/wp-content/uploads/2022/05/Explorer-Award2.jpg"
    },
    {
      id: 13,
      title: "Certificate of Gratitude",
      description: "Was Awarded the Certificate of Gratitude by Ensign Industry, on the occasion of the Spring Festival, 'In recognition of constant trust and great support', during the year 2015",
      image: "https://acidindia.in/wp-content/uploads/2022/05/Certificate-of-gratitude-1.jpg"
    },
    {
      id: 14,
      title: "Winner",
      description: "Winner at the event 'DuPont Nakshatra' organized by DuPont, India for an 'Outstanding contribution towards business success' in 2014.",
      image: "https://acidindia.in/wp-content/uploads/2022/05/Winner1.jpg"
    },
    {
      id: 15,
      title: "DuPont Nakshatra",
      description: "Awardee at the event 'DuPont Nakshatra' in recognition of valued contribution in 2012",
      image: "https://acidindia.in/wp-content/uploads/2022/05/DuPont-Nakshatra1.jpg"
    }
  ];

  const customersAwards = [
    {
      id: 1,
      title: "Invitee",
      description: "Invitee to the Supplier Conference held by Neuland Laboratories Ltd at Hyderabad on 10th June 2017.",
      image: "https://acidindia.in/wp-content/uploads/2022/05/invitee.jpg"
    },
    {
      id: 2,
      title: "Invitee",
      description: "Invitee to the Vendors' Meet held by Tagros Chemicals India Ltd at Chennai in the year 2005",
      image: "https://acidindia.in/wp-content/uploads/2022/05/Trgros2.jpg"
    },
    {
      id: 3,
      title: "Silver coin",
      description: "In recognition of relentless contribution, Acid India Limited was felicitated by Tagros Chemicals India Ltd with a Silver coin on the occasion of its 25th Anniversary at Chennai, India.",
      image: "https://acidindia.in/wp-content/uploads/2022/05/Silver-coin-award.jpg"
    },
    {
      id: 4,
      title: "Gratitude Award",
      description: "Recipient of the Gratitude Award from Britannia Industries in the year 2018 for partnering and contributing to their 'Delightful completion of 100 years' in the industry.",
      image: "https://acidindia.in/wp-content/uploads/2022/05/Award3.jpg"
    }
  ];

  const associationsAwards = [
    {
      id: 1,
      title: "Token of Appreciation",
      description: "Token of Appreciation from the Tamilnadu Dyes & Chemicals Merchants Association at Holi Milan - 2016",
      image: "https://acidindia.in/wp-content/uploads/2022/05/Token-of-Appreciation-award.jpg"
    },
    {
      id: 2,
      title: "Award of Excellence",
      description: "Award of Excellence presented to Mr. Jayant. D. Asher, Founder, Acid India Group on 16th July 2016 at Le Royal Meridien in appreciation of his dedicated service to Pharmaceutical Profession as Trustee of Tamilnadu Pharmaceutical Sciences Welfare Trust, Chennai.",
      image: "https://acidindia.in/wp-content/uploads/2022/05/Award-of-Excellence-Award.jpg"
    },
    {
      id: 3,
      title: "Award of Gratitude",
      description: "Award of Gratitude presented to Acid India in recognition of being the 'Co-Host of Golden Jubilee Celebrations (1955 - 2005)' of Tamilnadu Dyes & Chemicals Merchants Association, Chennai.",
      image: "https://acidindia.in/wp-content/uploads/2022/05/Award14.jpg"
    },
    {
      id: 4,
      title: "Token of Appreciation and Gratitude",
      description: "Token of Appreciation and Gratitude from 'Hindustan Chamber of Commerce' on the occasion of their Diamond Jubilee Celebration in 2006.",
      image: "https://acidindia.in/wp-content/uploads/2022/05/Award13.jpg"
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
    setActiveTab(sectionId);
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
    <div className="awards-page">
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
                    <li><a href="https://acidindia.in/wp-content/uploads/2024/02/FORM-MGT-9-AY-2324.pdf" target="_blank" rel="noopener noreferrer">Annual Return</a></li>
                    <li><Link to="/about-us#strengths">Our Strengths</Link></li>
                    <li><Link to="/about-us#message">Our Chairman's Message</Link></li>
                    <li><Link to="/awards-accolades" className="active">Our Awards & Accolades</Link></li>
                  </ul>
                )}
              </li>
              
              <li className="dropdown" onMouseEnter={() => toggleDropdown('product')} onMouseLeave={() => toggleDropdown('product')}>
                <a href="/product-range" className="nav-link dropdown-toggle">
                  Product Range <span className="dropdown-arrow">▼</span>
                </a>
                {isDropdownOpen.product && (
                  <ul className="dropdown-menu">
                    <li><a href="#food">Food Ingredients</a></li>
                    <li><a href="#industrial">Industrial Chemicals</a></li>
                    <li><a href="#dairy">Dairy Cultures</a></li>
                    <li><a href="#enzymes">Bakery Enzymes</a></li>
                    <li><a href="#proteins">Soy Proteins</a></li>
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
      <section className="awards-hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Acid India Limited</h1>
            <h2>Our Awards & Accolades</h2>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="tab-navigation">
        <div className="container">
          <div className="tab-buttons">
            <button 
              className={`tab-btn ${activeTab === 'principals' ? 'active' : ''}`}
              onClick={() => scrollToSection('principals')}
            >
              Principals
            </button>
            <button 
              className={`tab-btn ${activeTab === 'customers' ? 'active' : ''}`}
              onClick={() => scrollToSection('customers')}
            >
              Customers
            </button>
            <button 
              className={`tab-btn ${activeTab === 'associations' ? 'active' : ''}`}
              onClick={() => scrollToSection('associations')}
            >
              Associations
            </button>
          </div>
        </div>
      </section>

      {/* Principals Section */}
      <section id="principals" className="awards-section">
        <div className="container">
          <div className="section-header">
            <h2>Principals</h2>
            <div className="section-divider"></div>
          </div>
          <div className="awards-grid">
            {principalsAwards.map(award => (
              <div key={award.id} className="award-card">
                <div className="award-image">
                  <img src={award.image} alt={award.title} />
                </div>
                <div className="award-content">
                  <h3>{award.title}</h3>
                  <p>{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customers Section */}
      <section id="customers" className="awards-section alt-bg">
        <div className="container">
          <div className="section-header">
            <h2>Customers</h2>
            <div className="section-divider"></div>
          </div>
          <div className="awards-grid">
            {customersAwards.map(award => (
              <div key={award.id} className="award-card">
                <div className="award-image">
                  <img src={award.image} alt={award.title} />
                </div>
                <div className="award-content">
                  <h3>{award.title}</h3>
                  <p>{award.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Associations Section */}
      <section id="associations" className="awards-section">
        <div className="container">
          <div className="section-header">
            <h2>Associations</h2>
            <div className="section-divider"></div>
          </div>
          <div className="awards-grid">
            {associationsAwards.map(award => (
              <div key={award.id} className="award-card">
                <div className="award-image">
                  <img src={award.image} alt={award.title} />
                </div>
                <div className="award-content">
                  <h3>{award.title}</h3>
                  <p>{award.description}</p>
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

export default AwardsAccolades;