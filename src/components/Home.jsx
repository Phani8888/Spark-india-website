// // components/Home.jsx
// import React, { useState, useEffect, useRef } from 'react';
// import './Home.css';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isDropdownOpen, setIsDropdownOpen] = useState({
//     about: false,
//     product: false
//   });
//   const [scrolled, setScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   // Slider images data
//   const slides = [
//     {
//       id: 1,
//       title: "More than 5 decades of Dedicated Service to Industry",
//       subtitle: "Excellence in Food Ingredients & Industrial Chemicals",
//       image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920",
//       buttonText: "Preview More",
//       link: "/about-us"
//     },
//     {
//       id: 2,
//       title: "We are Pioneers in Business Development",
//       subtitle: "Channel Sales and Value Added Selling",
//       image: "https://images.unsplash.com/photo-1565538420870-da08ff96a207?w=1920",
//       buttonText: "Preview More",
//       link: "/about-us"
//     },
//     {
//       id: 3,
//       title: "A Comprehensive Array of Products",
//       subtitle: "Food Ingredients and Industrial Chemicals",
//       image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920",
//       buttonText: "Preview More",
//       link: "/about-us"
//     },
//     {
//       id: 4,
//       title: "Long Term Customer Relationships",
//       subtitle: "Rather than a one time sale",
//       image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920",
//       buttonText: "Preview More",
//       link: "/about-us"
//     }
//   ];

//   // Trending products data
//   const trendingProducts = [
//     {
//       id: 1,
//       icon: "🥛",
//       title: "Dairy Cultures",
//       description: "Today, our dairy cultures can be found in everything from traditional yogurt to industrial cheese.",
//       link: "/product-range/dairy-cultures"
//     },
//     {
//       id: 2,
//       icon: "🥤",
//       title: "Functional Systems",
//       description: "Suggesting a dairy functional system that entails all the consumer preferences is our main goal.",
//       link: "/product-range/functional-systems"
//     },
//     {
//       id: 3,
//       icon: "🥖",
//       title: "Bakery Enzymes",
//       description: "Our baking enzymes can help improve flour performance and dough stability throughout the process.",
//       link: "/product-range/bakery-enzymes"
//     },
//     {
//       id: 4,
//       icon: "🌱",
//       title: "Soy Proteins",
//       description: "Soy protein is one of the most versatile and valuable plant-based ingredients in our portfolio.",
//       link: "/product-range/soy-proteins"
//     },
//     {
//       id: 5,
//       icon: "🍯",
//       title: "Liquid Glucose",
//       description: "This glucose syrup is a highly refined and concentrated solution of dextrose, maltose and higher saccharides.",
//       link: "/product-range/liquid-glucose"
//     },
//     {
//       id: 6,
//       icon: "⚪",
//       title: "Maltodextrin",
//       description: "Maltodextrin is a white powder that is relatively tasteless and dissolves in water.",
//       link: "/product-range/maltodextrin"
//     }
//   ];

//   // Industries served
//   const industries = [
//     "Dairy", "Water Treatment", "Bakery", "Detergent Chemicals",
//     "Confectionery", "Leather Processing", "Pharmaceuticals", "Textiles"
//   ];

//   // Awards data
//   const awards = [
//     {
//       id: 1,
//       title: "1st Runner Up Award",
//       description: "Presented to Acid India Group in the 'Nutri Alliance Big Treat 2018' event conducted by DuPont Nutrition & Health, India for job well done during the year 2018-2019.",
//       image: "https://acidindia.in/wp-content/uploads/2022/05/1st-Runner-Award.jpg"
//     },
//     {
//       id: 2,
//       title: "Certificate of Appreciation",
//       description: "To Mr. Nitin J. Asher, Chairman, Acid India Group for successfully completing the first module of 'Dairy Training Course' organized by Danisco, Gurgaon, India in September 2010.",
//       image: "https://acidindia.in/wp-content/uploads/2022/05/Certificate-of-Appreciation-award1.jpg"
//     },
//     {
//       id: 3,
//       title: "Gratitude Award",
//       description: "Recipient of the Gratitude Award from Britannia Industries in the year 2018 for partnering and contributing to their 'Delightful completion of 100 years' in the industry.",
//       image: "https://acidindia.in/wp-content/uploads/2022/05/Award3.jpg"
//     }
//   ];

//   // Brand partners
//   const brands = [
//     "IFF", "Cargill", "Aditya Birla", "Solaris", "Ensign", "OFi",
//     "3M", "Bell Saffron", "Southern Acids", "Emery", "Evyap", "Symrise"
//   ];

//   // Stats data
//   const stats = [
//     { value: "111 Cr+", label: "Our Turnover (FY: 2021 - 2022)" },
//     { value: "300+", label: "Our Products" },
//     { value: "3500+", label: "Our Clientele" },
//     { value: "20+", label: "Our Product Ranges" },
//     { value: "20+", label: "Industries Served" },
//     { value: "10+", label: "Our Presence" }
//   ];

//   // Handle Annual Return click
//   const handleAnnualReturn = () => {
//     window.open('https://acidindia.in/wp-content/uploads/2024/02/FORM-MGT-9-AY-2324.pdf', '_blank');
//   };

//   // Auto slide change
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   // Handle scroll for fixed navbar
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 50);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const toggleDropdown = (menu) => {
//     setIsDropdownOpen(prev => ({
//       ...prev,
//       [menu]: !prev[menu]
//     }));
//   };

//   return (
//     <div className="home-container">
//       {/* Navbar */}
//       <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
//         <div className="nav-container">
//           <div className="logo-section">
//             <Link to="/" className="company-logo">
//               <div className="logo-icon">
//                 <img src="/spark.jpg" alt="SPARK" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
//               </div>
//               <div className="logo-text">
//                 <h1>SPARK</h1>
//                 <p>FOODS & CHEMICALS</p>
//               </div>
//             </Link>
//           </div>
          
//           <div className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
//             <ul className="nav-links">
//               <li><Link to="/" className="nav-link active">Home</Link></li>
              
//               <li className="dropdown" onMouseEnter={() => toggleDropdown('about')} onMouseLeave={() => toggleDropdown('about')}>
//                 <Link to="/about-us" className="nav-link dropdown-toggle">
//                   About Us <span className="dropdown-arrow">▼</span>
//                 </Link>
//                 {isDropdownOpen.about && (
//                   <ul className="dropdown-menu">
//                     <li><Link to="/about-us#company">Our Company</Link></li>
//                     <li><Link to="/about-us#story">Our Story</Link></li>
//                     <li><Link to="/about-us#process">Our Process</Link></li>
//                     <li><a href="#" onClick={(e) => { e.preventDefault(); handleAnnualReturn(); }}>Annual Return</a></li>
//                     <li><Link to="/about-us#strengths">Our Strengths</Link></li>
//                     <li><Link to="/about-us#message">Our Chairman's Message</Link></li>
//                     <li><Link to="/awards-accolades">Our Awards & Accolades</Link></li>
//                   </ul>
//                 )}
//               </li>
              
//               <li className="dropdown" onMouseEnter={() => toggleDropdown('product')} onMouseLeave={() => toggleDropdown('product')}>
//   <Link to="/product-range" className="nav-link dropdown-toggle">
//     Product Range <span className="dropdown-arrow">▼</span>
//   </Link>
//   {isDropdownOpen.product && (
//     <ul className="dropdown-menu mega-dropdown">
//       <div className="mega-dropdown-container">
//         <div className="mega-dropdown-column">
//           <h4>Food Ingredients</h4>
//           <ul>
//             <li><Link to="/product-range/dairy-cultures">Dairy Cultures</Link></li>
//             <li><Link to="/product-range/functional-systems">Functional Systems</Link></li>
//             <li><Link to="/product-range/dairy-enzymes">Dairy Enzymes</Link></li>
//             <li><Link to="/product-range/emulsifiers">Emulsifiers</Link></li>
//             <li><Link to="/product-range/bakery-enzymes">Bakery Enzymes</Link></li>
//             <li><Link to="/product-range/hydrocolloids">Hydrocolloids</Link></li>
//             <li><Link to="/product-range/soy-proteins">Soy Proteins</Link></li>
//             <li><Link to="/product-range/liquid-glucose">Liquid Glucose</Link></li>
//             <li><Link to="/product-range/maltodextrin">Maltodextrin</Link></li>
//             <li><Link to="/product-range/maize-starch">Maize Starch</Link></li>
//             <li><Link to="/product-range/modified-starches">Modified Starches</Link></li>
//             <li><Link to="/product-range/citric-acid">Citric Acid</Link></li>
//             <li><Link to="/product-range/cocoa-powder">Cocoa Powder</Link></li>
//             <li><Link to="/product-range/saffron">Saffron</Link></li>
//             <li><Link to="/product-range/food-safety-equipment-testing-kits">Food Safety Equipment & Testing Kits</Link></li>
//             <li><Link to="/product-range/flavours-food-colors">Flavours & Food Colors</Link></li>
//             <li><Link to="/product-range/phosphoric-acid">Phosphoric Acid</Link></li>
//             <li><Link to="/product-range/bromine-bromine-chemicals">Bromine & Bromine Chemicals</Link></li>
//             <li><Link to="/product-range/acetic-acid">Acetic Acid</Link></li>
//             <li><Link to="/product-range/e-blends">E – Blends</Link></li>
//           </ul>
//         </div>
//         <div className="mega-dropdown-column">
//           <h4>Industrial Chemicals</h4>
//           <ul>
//             <li><Link to="/product-range/liquid-glucose">Liquid Glucose</Link></li>
//             <li><Link to="/product-range/maltodextrin">Maltodextrin</Link></li>
//             <li><Link to="/product-range/maize-starch">Maize Starch</Link></li>
//             <li><Link to="/product-range/citric-acid">Citric Acid</Link></li>
//             <li><Link to="/product-range/phosphoric-acid">Phosphoric Acid</Link></li>
//             <li><Link to="/product-range/bromine-bromine-chemicals">Bromine & Bromine chemicals</Link></li>
//             <li><Link to="/product-range/fatty-acids">Fatty Acids</Link></li>
//             <li><Link to="/product-range/acetic-acid">Acetic Acid</Link></li>
//             <li><Link to="/product-range/detergent-chemical">Detergent Chemicals</Link></li>
//           </ul>
//         </div>
//       </div>
//     </ul>
//   )}
// </li>
//               <li><Link to="/industries" className="nav-link">Industries</Link></li>
//               <li><Link to="/activities" className="nav-link">Activities</Link></li>
//               <li><Link to="/careers" className="nav-link">Careers</Link></li>
//               <li><Link to="/contact" className="nav-link">Contact</Link></li>
//             </ul>
//           </div>
          
//           <div className="nav-actions">
//             <button className="quote-btn">Get a Quote</button>
//             <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//               ☰
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Slider Section */}
//       <section id="home" className="hero-slider">
//         <div className="slider-container">
//           {slides.map((slide, index) => (
//             <div 
//               key={slide.id} 
//               className={`slide ${index === currentSlide ? 'active' : ''}`}
//               style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})` }}
//             >
//               <div className="slide-content">
//                 <h1>{slide.title}</h1>
//                 <p>{slide.subtitle}</p>
//                 <button className="slide-btn" onClick={() => window.location.href = slide.link}>{slide.buttonText}</button>
//               </div>
//             </div>
//           ))}
          
//           <button className="slider-btn prev" onClick={prevSlide}>
//             &#10094;
//           </button>
//           <button className="slider-btn next" onClick={nextSlide}>
//             &#10095;
//           </button>
          
//           <div className="slider-dots">
//             {slides.map((_, index) => (
//               <button 
//                 key={index}
//                 className={`dot ${index === currentSlide ? 'active' : ''}`}
//                 onClick={() => setCurrentSlide(index)}
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Trending Products Section */}
//       <section className="trending-products">
//         <div className="container">
//           <div className="section-header">
//             <div className="section-icon">📦</div>
//             <h2>Trending <span className="highlight">Products</span></h2>
//             <button className="view-more-btn" onClick={() => window.location.href = '/product-range'}>VIEW MORE</button>
//           </div>
          
//           <div className="products-grid">
//             {trendingProducts.map(product => (
//               <div key={product.id} className="product-card" onClick={() => window.location.href = product.link}>
//                 <div className="product-icon">{product.icon}</div>
//                 <h3>{product.title}</h3>
//                 <div className="product-divider"></div>
//                 <p>{product.description}</p>
//                 <button className="learn-more">LEARN MORE →</button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Industries Served Section */}
//       <section className="industries-section">
//         <div className="video-overlay"></div>
//         <div className="container">
//           <div className="industries-header">
//             <h3>Industries <span className="highlight">Served</span></h3>
//             <p>Each year, hundreds of clients across the country, from many types of industries, rely on the expertise of Trading in foods ingredients and industrial chemicals. Utilizing our vast network, technical know-how of products, business development strategies, customer orientation, as well as state-of-the-art branches and warehouse, we serve the leading manufacturing corporates with end to end marketing solutions</p>
//           </div>
          
//           <div className="industries-grid">
//             {industries.map((industry, index) => (
//               <div key={index} className="industry-item">
//                 <span className="industry-bullet">▶</span>
//                 <span className="industry-name">{industry}</span>
//               </div>
//             ))}
//           </div>
          
//           <div className="industries-btn-wrapper">
//             <button className="view-details-btn" onClick={() => window.location.href = '/industries'}>VIEW MORE DETAILS</button>
//           </div>
//         </div>
//       </section>

//       {/* Chairman's Message Section */}
//       <section className="chairman-section">
//         <div className="container">
//           <div className="chairman-content">
//             <div className="chairman-image">
//               <img src="https://acidindia.in/wp-content/uploads/2022/05/chairman.jpg" alt="Chairman" />
//             </div>
//             <div className="chairman-message">
//               <div className="message-icon">📜</div>
//               <h3>Chairman's <span className="highlight">Message</span></h3>
//               <p>First and Foremost, I thank you for visiting our website.</p>
//               <p>On behalf of the Acid India Group, I deem it to be a matter of immense pleasure and privilege to talk to you through this portal of Acid India Family. No wonder, I feel so glad and fulfilling to realize the fact that our company is able to be a part of millions of lives in India through our food related products in their everyday use.</p>
//               <button className="read-more-btn" onClick={() => window.location.href = '/about-us#message'}>Read More</button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Awards Section */}
//       <section className="awards-section">
//         <div className="container">
//           <div className="awards-header">
//             <h4>Awards & <span className="highlight">Accolades</span></h4>
//             <p>The last 5 decades had certainly not been a bed of roses for us, however we have steadfastly converted many opportunities that came our way into honors and achievements. Here is a recapitulation of the various awards and accolades won from our principals, customers and associations</p>
//           </div>
          
//           <div className="awards-grid">
//             {awards.map(award => (
//               <div key={award.id} className="award-card">
//                 <img src={award.image} alt={award.title} />
//                 <h4>{award.title}</h4>
//                 <p>{award.description}</p>
//               </div>
//             ))}
//           </div>
          
//           <div className="awards-btn-wrapper">
//             <button className="preview-more-btn" onClick={() => window.location.href = '/awards-accolades'}>PREVIEW MORE</button>
//           </div>
//         </div>
//       </section>

//       {/* Brand Partners Carousel */}
//       <section className="brands-section">
//         <div className="container">
//           <h4>The Eminent Brands, <span className="highlight">which we represent...</span></h4>
//           <div className="brands-carousel">
//             <div className="brands-track">
//               {[...brands, ...brands].map((brand, index) => (
//                 <div key={index} className="brand-logo">
//                   <div className="brand-placeholder">{brand.charAt(0)}</div>
//                   <span>{brand}</span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="stats-section">
//         <div className="container">
//           <h4>Our <span>Figures</span></h4>
//           <div className="stats-grid">
//             {stats.map((stat, index) => (
//               <div key={index} className="stat-card">
//                 <div className="stat-value">{stat.value}</div>
//                 <div className="stat-label">{stat.label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="footer">
//         <div className="footer-container">
//           <div className="footer-grid">
//             <div className="footer-about">
//               <img src="/spark.jpg" alt="SPARK" className="footer-logo" />
//               <h3>SPARK</h3>
//               <p>FOODS & CHEMICALS</p>
//             </div>
//             <div className="footer-links">
//               <h4>Quick Links</h4>
//               <ul>
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about-us">About Us</Link></li>
//                 <li><a href="/product-range">Products Range</a></li>
//                 <li><Link to="/industries">Industries</Link></li>
//                 <li><Link to="/activities">Activities</Link></li>
//                 <li><Link to="/careers">Careers</Link></li>
//                 <li><Link to="/contact">Contact</Link></li>
//               </ul>
//             </div>
//             <div className="footer-social">
//               <h4>Stay in Touch</h4>
//               <p>Keep up to date on social media</p>
//               <div className="social-icons">
//                 <a href="#" className="social-icon">📘</a>
//                 <a href="#" className="social-icon">🔗</a>
//               </div>
//             </div>
//           </div>
//           <div className="footer-bottom">
//             <p>Copyright © 2026 All right reserved.</p>
//             <p>Design ~ Websitica Technologies</p>
//           </div>
//         </div>
//       </footer>

//       {/* Fixed Call and WhatsApp Buttons */}
//       <div className="fixed-call">
//         <a href="tel:7824841841" className="call-button">
//           <span>📞</span>
//           <div className="button-text">
//             Call Now<br />+917824841841
//           </div>
//         </a>
//       </div>
//       <div className="fixed-whatsapp">
//         <a href="https://wa.me/917824841841" className="whatsapp-button">
//           <span>💬</span>
//           <div className="button-text">
//             WhatsApp<br />+917824841841
//           </div>
//         </a>
//       </div>
//     </div>
//   );
// };

// export default Home;





// components/Home.jsx - Updated with blog navigation to individual blog pages
import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    about: false,
    product: false
  });
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Slider images data
  const slides = [
    {
      id: 1,
      title: "More than 5 decades of Dedicated Service to Industry",
      subtitle: "Excellence in Food Ingredients & Industrial Chemicals",
      image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920",
      buttonText: "Preview More",
      link: "/about-us"
    },
    {
      id: 2,
      title: "We are Pioneers in Business Development",
      subtitle: "Channel Sales and Value Added Selling",
      image: "https://images.unsplash.com/photo-1565538420870-da08ff96a207?w=1920",
      buttonText: "Preview More",
      link: "/about-us"
    },
    {
      id: 3,
      title: "A Comprehensive Array of Products",
      subtitle: "Food Ingredients and Industrial Chemicals",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1920",
      buttonText: "Preview More",
      link: "/about-us"
    },
    {
      id: 4,
      title: "Long Term Customer Relationships",
      subtitle: "Rather than a one time sale",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=1920",
      buttonText: "Preview More",
      link: "/about-us"
    }
  ];

  // Trending products data
  const trendingProducts = [
    {
      id: 1,
      icon: "🥛",
      title: "Dairy Cultures",
      description: "Today, our dairy cultures can be found in everything from traditional yogurt to industrial cheese.",
      link: "/product-range/dairy-cultures"
    },
    {
      id: 2,
      icon: "🥤",
      title: "Functional Systems",
      description: "Suggesting a dairy functional system that entails all the consumer preferences is our main goal.",
      link: "/product-range/functional-systems"
    },
    {
      id: 3,
      icon: "🥖",
      title: "Bakery Enzymes",
      description: "Our baking enzymes can help improve flour performance and dough stability throughout the process.",
      link: "/product-range/bakery-enzymes"
    },
    {
      id: 4,
      icon: "🌱",
      title: "Soy Proteins",
      description: "Soy protein is one of the most versatile and valuable plant-based ingredients in our portfolio.",
      link: "/product-range/soy-proteins"
    },
    {
      id: 5,
      icon: "🍯",
      title: "Liquid Glucose",
      description: "This glucose syrup is a highly refined and concentrated solution of dextrose, maltose and higher saccharides.",
      link: "/product-range/liquid-glucose"
    },
    {
      id: 6,
      icon: "⚪",
      title: "Maltodextrin",
      description: "Maltodextrin is a white powder that is relatively tasteless and dissolves in water.",
      link: "/product-range/maltodextrin"
    }
  ];

  // Blog Posts Data with navigation links to individual blog pages
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Food Trends in 2022",
      date: "May 18, 2022",
      category: "Food & Beverages",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/foods-2022-400x250.jpg",
      description: "The foodies and leaders in the food industry have released their predictions on the food trends of 2022. Often, these food and flavor...",
      link: "/blog/top-10-food-trends-in-2022",
      slug: "top-10-food-trends-in-2022"
    },
    {
      id: 2,
      title: "How Russia's invasion of Ukraine deepened food crisis",
      date: "May 18, 2022",
      category: "Food Crisis",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/ukraine-russia-crisis-400x250.jpg",
      description: "Just as the first Russian tanks and military vehicles rolled into the Ukrainian territory on February 24, commodity prices surged with oil...",
      link: "/blog/how-russias-invasion-of-ukraine-deepened-food-crisis",
      slug: "how-russias-invasion-of-ukraine-deepened-food-crisis"
    },
    {
      id: 3,
      title: "Locust bean gum's newfound success in food stymied by supply shortages!",
      date: "May 18, 2022",
      category: "Food & Beverages, Food Crisis",
      // image: "https://acidindia.in/wp-content/uploads/2022/05/locust-bean-400x242.jpg",
      description: "As demand for the versatile ingredient found in everything from ice cream to plant-based foods has increased, soaring prices have prompted...",
      link: "/blog/locust-bean-gums-newfound-success-in-food-stymied-by-supply-shortages",
      slug: "locust-bean-gums-newfound-success-in-food-stymied-by-supply-shortages"
    }
  ];

  // Industries served
  const industries = [
    "Dairy", "Water Treatment", "Bakery", "Detergent Chemicals",
    "Confectionery", "Leather Processing", "Pharmaceuticals", "Textiles"
  ];

  // Awards data
  // const awards = [
  //   {
  //     id: 1,
  //     title: "1st Runner Up Award",
  //     description: "Presented to Spark Foods and Chemicals in the 'Nutri Alliance Big Treat 2018' event conducted by DuPont Nutrition & Health, India for job well done during the year 2018-2019.",
  //     // image: "https://acidindia.in/wp-content/uploads/2022/05/1st-Runner-Award.jpg"
  //   },
  //   {
  //     id: 2,
  //     title: "Certificate of Appreciation",
  //     description: "To Mr. Nitin J. Asher, Chairman, Acid India Group for successfully completing the first module of 'Dairy Training Course' organized by Danisco, Gurgaon, India in September 2010.",
  //     image: "https://acidindia.in/wp-content/uploads/2022/05/Certificate-of-Appreciation-award1.jpg"
  //   },
  //   {
  //     id: 3,
  //     title: "Gratitude Award",
  //     description: "Recipient of the Gratitude Award from Britannia Industries in the year 2018 for partnering and contributing to their 'Delightful completion of 100 years' in the industry.",
  //     image: "https://acidindia.in/wp-content/uploads/2022/05/Award3.jpg"
  //   }
  // ];

  // Brand partners
  const brands = [
    "IFF", "Cargill", "Aditya Birla", "Solaris", "Ensign", "OFi",
    "3M", "Bell Saffron", "Southern Acids", "Emery", "Evyap", "Symrise",
    "Givaudan", "Naturex", "PT Dua", "KLK Oleo", "Pacific Oleo"
  ];

  // Stats data
  const stats = [
    { value: "111 Cr+", label: "Our Turnover (FY: 2021 - 2022)" },
    { value: "300+", label: "Our Products" },
    { value: "3500+", label: "Our Clientele" },
    { value: "20+", label: "Our Product Ranges" },
    { value: "20+", label: "Industries Served" },
    { value: "10+", label: "Our Presence" }
  ];

  // Handle blog post click - navigate to individual blog page
  const handleBlogClick = (blogSlug) => {
    navigate(`/blog/${blogSlug}`);
  };

  // Handle Annual Return click
  const handleAnnualReturn = () => {
    // window.open('https://acidindia.in/wp-content/uploads/2024/02/FORM-MGT-9-AY-2324.pdf', '_blank');
  };

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Handle scroll for fixed navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const toggleDropdown = (menu) => {
    setIsDropdownOpen(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  return (
    <div className="home-container">
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
              <li><Link to="/" className="nav-link active">Home</Link></li>
              
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

      {/* Hero Slider Section */}
      <section id="home" className="hero-slider">
        <div className="slider-container">
          {slides.map((slide, index) => (
            <div 
              key={slide.id} 
              className={`slide ${index === currentSlide ? 'active' : ''}`}
              style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${slide.image})` }}
            >
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
                <button className="slide-btn" onClick={() => window.location.href = slide.link}>{slide.buttonText}</button>
              </div>
            </div>
          ))}
          
          <button className="slider-btn prev" onClick={prevSlide}>
            &#10094;
          </button>
          <button className="slider-btn next" onClick={nextSlide}>
            &#10095;
          </button>
          
          <div className="slider-dots">
            {slides.map((_, index) => (
              <button 
                key={index}
                className={`dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="trending-products">
        <div className="container">
          <div className="section-header">
            <div className="section-icon">📦</div>
            <h2>Trending <span className="highlight">Products</span></h2>
            <button className="view-more-btn" onClick={() => window.location.href = '/product-range'}>VIEW MORE</button>
          </div>
          
          <div className="products-grid">
            {trendingProducts.map(product => (
              <div key={product.id} className="product-card" onClick={() => window.location.href = product.link}>
                <div className="product-icon">{product.icon}</div>
                <h3>{product.title}</h3>
                <div className="product-divider"></div>
                <p>{product.description}</p>
                <button className="learn-more">LEARN MORE →</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="industries-section">
        <div className="video-overlay"></div>
        <div className="container">
          <div className="industries-header">
            <h3>Industries <span className="highlight">Served</span></h3>
            <p>Each year, hundreds of clients across the country, from many types of industries, rely on the expertise of Trading in foods ingredients and industrial chemicals. Utilizing our vast network, technical know-how of products, business development strategies, customer orientation, as well as state-of-the-art branches and warehouse, we serve the leading manufacturing corporates with end to end marketing solutions</p>
          </div>
          
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-item">
                <span className="industry-bullet">▶</span>
                <span className="industry-name">{industry}</span>
              </div>
            ))}
          </div>
          
          <div className="industries-btn-wrapper">
            <button className="view-details-btn" onClick={() => window.location.href = '/industries'}>VIEW MORE DETAILS</button>
          </div>
        </div>
      </section>

      {/* Blog Section - Clickable blog cards */}
      <section className="blog-section">
        <div className="container">
          <div className="blog-header">
            <h4>Top Industry <span className="highlight">Blogs</span></h4>
            <p>Take a glance of some trending news in the Food and Industrial sector that is continuing to cause a resonating impact in the lengths and breadths of the economy</p>
          </div>
          <div className="blog-grid">
            {blogPosts.map(post => (
              <div 
                key={post.id} 
                className="blog-card"
                onClick={() => handleBlogClick(post.slug)}
                style={{ cursor: 'pointer' }}
              >
                <div className="blog-image">
                  <img src={post.image} alt={post.title} />
                </div>
                <div className="blog-content">
                  <h5>{post.title}</h5>
                  <p className="blog-meta">{post.date} | {post.category}</p>
                  <p className="blog-description">{post.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chairman's Message Section */}
      <section className="chairman-section">
        <div className="container">
          <div className="chairman-content">
            <div className="chairman-image">
              {/* <img src="https://acidindia.in/wp-content/uploads/2022/05/chairman.jpg" alt="Chairman" /> */}
            </div>
            <div className="chairman-message">
              <div className="message-icon">📜</div>
              <h3>Chairman's <span className="highlight">Message</span></h3>
              <p>First and Foremost, I thank you for visiting our website.</p>
              <p>On behalf of the Acid India Group, I deem it to be a matter of immense pleasure and privilege to talk to you through this portal of Spark Foods and Chemicals Family. No wonder, I feel so glad and fulfilling to realize the fact that our company is able to be a part of millions of lives in India through our food related products in their everyday use.</p>
              <button className="read-more-btn" onClick={() => window.location.href = '/about-us#message'}>Read More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="awards-section">
        <div className="container">
          <div className="awards-header">
            <h4>Awards & <span className="highlight">Accolades</span></h4>
            <p>The last 5 decades had certainly not been a bed of roses for us, however we have steadfastly converted many opportunities that came our way into honors and achievements. Here is a recapitulation of the various awards and accolades won from our principals, customers and associations</p>
          </div>
          
          
          <div className="awards-btn-wrapper">
            <button className="preview-more-btn" onClick={() => window.location.href = '/awards-accolades'}>PREVIEW MORE</button>
          </div>
        </div>
      </section>

      {/* Brand Partners Carousel */}
      <section className="brands-section">
        <div className="container">
          <h4>The Eminent Brands, <span className="highlight">which we represent...</span></h4>
          <div className="brands-carousel">
            <div className="brands-track">
              {[...brands, ...brands].map((brand, index) => (
                <div key={index} className="brand-logo">
                  <div className="brand-placeholder">{brand.charAt(0)}</div>
                  <span>{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h4>Our <span>Figures</span></h4>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
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

export default Home;