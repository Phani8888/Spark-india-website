// components/Careers.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Careers.css';

const Careers = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    about: false,
    product: false
  });
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openToggle, setOpenToggle] = useState(null);
  const [showJobForm, setShowJobForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    resume: null
  });

  // Handle Annual Return click
  const handleAnnualReturn = () => {
    window.open('https://acidindia.in/wp-content/uploads/2024/02/FORM-MGT-9-AY-2324.pdf', '_blank');
  };

  const jobOpenings = [
    {
      id: 1,
      title: "Sales Executive Trainee - Technical",
      category: "Sales",
      locations: ["Bangalore", "Hubli", "Orissa", "Chennai", "Vellore", "Madurai", "Hyderabad"],
      responsibilities: [
        "Achieve the daily, weekly and monthly sales and collection targets",
        "Identify new potential clients in your territory and convert them into business opportunities",
        "Meet end customers, promote our products, submit samples and conduct technical trials at the customer's factory",
        "Draft and prepare month-wise, product-wise and customer-wise sales and collection plan every month",
        "Travel extensively in the assigned territory, estimate the potential of the assigned territory, understand and eliminate the competitor's presence",
        "Discuss with the reporting authority on everyday basis through daily call reports, phone calls or zoom calls if necessary."
      ],
      qualifications: [
        "Candidates having 2-3 years of proven experience in Dairy Science/ Food Processing/ Food Technology/Chemical Industry",
        "A fresher holding a Bachelor's Degree in Dairy/ Food Technology /Chemistry from reputed organizations",
        "Willing to travel extensively possessing successful technical, sales and customer orientation skills",
        "Fluency in local language and English is mandatory while knowledge in Hindi is an added advantage",
        "Proficiency in using MS Excel and MS Word",
        "Salary will be fixed based on the market-based salary structure"
      ]
    },
    {
      id: 2,
      title: "Area Sales Manager",
      category: "Sales",
      locations: ["Hyderabad"],
      responsibilities: [
        "Directs the activities of the regional team in staff and line functions to ensure compliance with business plan, targets and company policies.",
        "Builds strong business relationships with key leaders, principals, internal and external clients to increase business conversion rate.",
        "Works with the commercial team and the logistics team to influence strategy and provide accurate forecasts for products to place timely indents with principals",
        "Studies marketplace trends, understands market dynamics and accordingly takes crucial decisions assuring top line and bottom line growth",
        "To be of robust support for entire team in terms of following the protocols in sales process, adherence to SOP, commercial terms and control over outstanding.",
        "Document and prepare reports, presentations for internal reviews and reviews with principals about the state's budgetary plans."
      ],
      qualifications: [
        "5-6 years of sales experience in Dairy/Food Processing/Food Technology Industry.",
        "Bachelor's Degree/ Master's Degree in Dairy/ Food Technology or Master's in Business Administration (MBA) is an added advantage",
        "Proven knowledge and strong networking skills with distributors, dealers, sub dealers and foods manufacturers",
        "Excellent verbal and written communication skills.",
        "Able to work autonomously while being a team player.",
        "Proficiency in using Excel, Word, and PowerPoint.",
        "Fluency in local language and English is mandatory, Knowledge in Hindi is an added advantage",
        "Flexibility to travel extensively within the assigned territory is mandatory",
        "Salary will be under the market-based salary structure. No constraints for the right candidate."
      ]
    }
  ];

  const toggleDropdown = (menu) => {
    setIsDropdownOpen(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const toggleJobDetails = (id) => {
    setOpenToggle(openToggle === id ? null : id);
  };

  const openApplyForm = (jobTitle) => {
    setSelectedJob(jobTitle);
    setShowJobForm(true);
    setFormData({ ...formData, position: jobTitle });
  };

  const closeJobForm = () => {
    setShowJobForm(false);
    setSelectedJob('');
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      resume: null
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      resume: e.target.files[0]
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Application submitted for ${selectedJob}! We will contact you soon.`);
    closeJobForm();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="careers-page">
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
              <li><Link to="/careers" className="nav-link active">Careers</Link></li>
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
      <section className="careers-hero">
        <div className="careers-hero-overlay">
          <div className="careers-hero-content">
            <h2>Jobs at SPARK</h2>
            <h1>Careers</h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="careers-about">
        <div className="container">
          <div className="about-content">
            <p>
              <strong>"We're more than just a Trading House. We're a Family"</strong><br /><br />
              SPARK believes that its people are the lifeline of its success over the decades. We keenly focus on achieving organizational growth by simply doing the best in unveiling the potential of its employees and grooming them professionally. We are passionate about rewarding our people at the fastest rate for their performance and result orientation. No doubt, that we look for dynamic personnel who are loyal, willing to learn continuously, take charge of circumstances, own their roles and responsibilities, come out of their comfort zones and contribute to the company.
            </p>
            <p>Join our team of vibrant and trained professionals by posting your profile in the fields below:</p>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="current-openings">
        <div className="container">
          <h3>Current Openings</h3>
          
          <div className="openings-category">
            <h4>Sales</h4>
            
            {jobOpenings.map(job => (
              <div key={job.id} className="job-item">
                <div className="job-header" onClick={() => toggleJobDetails(job.id)}>
                  <h5>{job.title}</h5>
                  <span className={`toggle-icon ${openToggle === job.id ? 'open' : ''}`}>▼</span>
                </div>
                
                {openToggle === job.id && (
                  <div className="job-details">
                    <div className="job-locations">
                      <strong>Locations:</strong>
                      <ul>
                        {job.locations.map((loc, idx) => (
                          <li key={idx}>{loc}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="job-responsibilities">
                      <strong>Key Responsibilities:</strong>
                      <ul>
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx}>{resp}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="job-qualifications">
                      <strong>Qualifications:</strong>
                      <ul>
                        {job.qualifications.map((qual, idx) => (
                          <li key={idx}>{qual}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <button className="apply-now-btn" onClick={() => openApplyForm(job.title)}>
                      Apply Now →
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Application Form Modal */}
      {showJobForm && (
        <div className="job-form-modal">
          <div className="job-form-container">
            <div className="job-form-header">
              <h2>Apply for this job</h2>
              <button className="close-modal" onClick={closeJobForm}>×</button>
            </div>
            <form onSubmit={handleSubmit} className="job-application-form">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Contact Number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Position Applied for *</label>
                <select name="position" value={formData.position} onChange={handleInputChange} required>
                  <option value="">—Please choose an option—</option>
                  <option value="Sales Executive Trainee - Technical">Sales Executive Trainee - Technical</option>
                  <option value="Area Sales Manager">Area Sales Manager</option>
                </select>
              </div>
              <div className="form-group">
                <label>Upload Resume:</label>
                <input
                  type="file"
                  name="resume"
                  accept=".docx,.pdf,.doc"
                  onChange={handleFileChange}
                  required
                />
              </div>
              <button type="submit" className="submit-job-btn">Submit</button>
            </form>
          </div>
        </div>
      )}

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

export default Careers;