// components/BlogPost.jsx
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './BlogPost.css';

const BlogPost = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState(null);
  const [recentPosts, setRecentPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [categoryPosts, setCategoryPosts] = useState([]);
  const [showCategoryPosts, setShowCategoryPosts] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    about: false,
    product: false
  });
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Complete blog posts data
  const blogPostsData = {
    "how-russias-invasion-of-ukraine-deepened-food-crisis": {
      id: 239,
      title: "How Russia's invasion of Ukraine deepened food crisis",
      date: "May 18, 2022",
      category: "Food Crisis",
      image: "https://acidindia.in/wp-content/uploads/2022/05/ukraine-russia-crisis.jpg",
      excerpt: "Just as the first Russian tanks and military vehicles rolled into the Ukrainian territory on February 24, commodity prices surged with oil breaching $100 (€91) a barrel, aluminum climbing to a record high and wheat prices soaring to a nine-year high...",
      content: `<p>Just as the first Russian tanks and military vehicles rolled into the Ukrainian territory on February 24, commodity prices surged with oil breaching $100 (€91) a barrel, aluminum climbing to a record high and wheat prices soaring to a nine-year high.</p>
        <p>The surge reflected traders' worries that the war involving Russia — a key supplier of oil, natural gas, coal, aluminum and wheat — and Ukraine, also a key exporter of wheat and oilseeds, could stoke inflation, further disrupt supply chains and derail the global economic recovery.</p>
        <p>A month into the conflict, most of those fears are coming true. Inflation has shot up mainly due to higher energy and food prices, a shortage of wheat is deepening the food crisis in countries like Egypt, and economic growth is stalling, prompting economists to cut global growth forecasts.</p>
        <p>"Over time, global commodity trade flows will need to adapt to some or all of Russian/Ukrainian supply being unavailable, whether due to infrastructure damage, sanctions or ethical concerns," major commodities trader Glencore said in its annual report last week.</p>
        <p><img src="https://acidindia.in/wp-content/uploads/2022/05/food-crisis.png" alt="food-crisis" style="max-width:100%; height:auto; margin:20px 0;" /></p>
        <h2>Deepening Food Crisis:</h2>
        <p>The war in Ukraine has hit supplies of wheat, corn and sunflower oil in several parts of the world, prompting UN Secretary-General Antonio Guterres to warn of a "hurricane of hunger and a meltdown of the global food system."</p>
        <p>Russia and Ukraine together account for about 30% of global wheat exports. The two countries together account for 80% of the world's sunflower oil exports.</p>
        <p>Russian forces have been blocking ships carrying wheat from leaving the Black Sea, a key trade route for grains. The war has also jeopardized Ukraine's wheat harvests, further threatening food security.</p>
        <p>Wheat prices are the highest they've been since 2008 and are expected to continue to rise. Sunflower oil prices have also gone up across the world. Fears of supply shortages are causing people in several European countries to stockpile cooking oil and flour.</p>
        <p>The crisis is being compounded by a rise in fertilizer prices which is causing farmers globally to reduce the amount of land they're planting. Russia is a major exporter of soil nutrients like potash, ammonia and urea.</p>
        <p>The EU is set to distribute €500 million ($550 million) to help farmers deal with higher fuel, feed and fertilizer prices. It is also allowing them to grow crops on fallow land to help curb the rise in food prices and prevent any potential shortages.</p>`
    },
    "top-10-food-trends-in-2022": {
      id: 240971,
      title: "Top 10 Food Trends in 2022",
      date: "May 18, 2022",
      category: "Food & Beverages",
      image: "https://acidindia.in/wp-content/uploads/2022/05/foods-2022.jpg",
      excerpt: "The foodies and leaders in the food industry have released their predictions on the food trends of 2022. Often, these food and flavor trends offer little value to the average food and beverage manufacturer...",
      content: `<p>The foodies and leaders in the food industry have released their predictions on the food trends of 2022. Often, these food and flavor trends offer little value to the average food and beverage manufacturer because of their inability to scale for the masses.</p>
        <p>While exotic ingredients and sensational flavor profiles in food and drink may make for click-worthy headlines, they're often impractical for the average consumer who simply wants a satisfying meal or snack at a price point they can afford.</p>
        <p>The pandemic's influence on food trends for 2022 is expected to persist. We've gathered the data, researched what other influencers in the food and beverage industry are saying, and added conclusions in this article.</p>
        <h2>Top 2022 trends in the food and beverage industry:</h2>
        <p>1. Experiential Dining<br />2. Non – Alcoholic Drinks<br />3. Immune-boosting Foods<br />4. Meal Kits<br />5. Food Transparency<br />6. Upcycled and Sustainable Ingredients<br />7. Reduced Sodium and Sugar<br />8. Condiments<br />9. Return to Traditional Proteins<br />10. Continued Supply Chain Disruption</p>`
    },
    "locust-bean-gums-newfound-success-in-food-stymied-by-supply-shortages": {
      id: 233,
      title: "Locust bean gum's newfound success in food stymied by supply shortages!",
      date: "May 18, 2022",
      category: "Food & Beverages, Food Crisis",
      image: "https://acidindia.in/wp-content/uploads/2022/05/locust-bean.jpg",
      excerpt: "As demand for the versatile ingredient found in everything from ice cream to plant-based foods has increased, soaring prices have prompted some companies to look for cheaper substitutes...",
      content: `<p>As demand for the versatile ingredient found in everything from ice cream to plant-based foods has increased, soaring prices have prompted some companies to look for cheaper substitutes.</p>
        <p>Locust bean gum is a victim of its own success.</p>
        <p>The ingredient, which comes from the locust bean tree, functions as a thickener, stabilizer, emulsifier and gelling agent while providing texture.</p>
        <p>In addition to these applications, locust bean gum hits on a number of other attributes in demand with consumers, including the fact that it is plant based and natural. The tree, according to ingredient supplier International Flavors & Fragrances, also reduces soil erosion, restores carbon to the ground and requires little, if any, fertilizer or irrigation, making it a valuable tool when it comes to sustainability.</p>
        <p>Together, these attributes have created a spike in prices for locust bean gum following a shortage in the market for the popular ingredient that is unlikely to end anytime soon.</p>
        <p>"The limitation with [locust bean gum] is the supply is not increasing. There is not enough volume to satisfy the demand," said Jean-Baptiste Dufeu, a global business manager at IFF who is responsible for overseeing the ingredient at the company. "For the next few years, the market is going to remain close to what it is right now. We don't have enough product."</p>
        <p>Dufeu said while the shortage has stymied the roll out of new products using the ingredient, food and beverage manufacturers are working to develop products using locust bean gum in preparation for when more is available.</p>
        <p>"I'm convinced that this product will further develop," he said. "It's the type of product the consumers want to get in the ingredient list of the product rather than some of the others."</p>
        <p>Chris Rivard, senior R&D manager at Ben & Jerry's who is responsible for overseeing the development of new flavors, said the Unilever-owned ice cream maker uses locust bean gum in its pint slices that need to withstand "a bit more abuse" like too-warm freezer temperatures and people holding them in their hands while eating them.<br />
        Ben & Jerry's nondairy ice creams, which the brand introduced in 2016, also use locust bean gum as one of the ways to help to provide stability and creaminess that typically is provided by dairy fat in traditional offerings.</p>
        <p>"It's an important part of our toolbox," Rivard said. "It definitely suits the purpose that we need it for in the consumer space essentially."</p>
        <p>Ben & Jerry's use of locust bean gum hits on two food and beverage products that depend on the ingredient the most: plant-based foods and ice cream. Many ice cream makers use it to provide a fatty mouthfeel and to reduce the size of ice crystals that form when the treat thaws before being frozen again. Other products using the ingredient include cream cheese, breads and bakery items.</p>
        <h2>Rebuilding a decimated crop</h2>
        <p>The history of locust bean gum goes back thousands of years where it has been found in the wrappings of Egyptian mummies as well as in Pompeii from around 79 A.D. Locust bean gum is produced from the seeds of pods collected from the locust bean tree, or carob tree, which grows predominantly in Mediterranean countries such as Spain, Portugal and Morocco.</p>
        <p>Some of the trees are more than 200 years old. An estimated 12,000 to 15,000 kilograms of locust bean gum are harvested annually.</p>
        <p>The popularity of locust bean gum hasn't always been as robust as it is today, and that's a major reason behind the current shortage. Dufeu of IFF said that 10 to 15 years ago, there were many more trees. But with locust bean gum prices much lower at that time, farmers chose to remove the trees for cattle to graze or to make room to plant higher-value crops like olives or almonds.</p>
        <p>As demand started to surge, farmers moved aggressively to take care of their existing trees. They planted new ones too, but it takes up to 10 years for the locust bean tree to start producing pods, so it will take several years before their supply infiltrates the market.</p>
        <p>"We are confident that within three or four years, some significant volume will be available," Dufeu said.</p>
        <p>Nesha Zalesny, a technical consultant at IMR International, said prices for locust bean gum are about as high as she can remember since her group started following the commodity in 1991. In the second quarter of 2020, Zalesny said locust bean gum averaged about $24 a kilogram, and for years had averaged closer to $14.</p>
        <p>Recently, she said a manufacturer paid $85 a kilogram on the spot market — unlike commodities like corn or sugar, where a user can hedge against increases in the price of an ingredient at some point in the future.</p>
        <p>With prices up fourfold from a year ago, some companies are reportedly reformulating products. But doing so can be risky and costly. It can take significant time and money to replace an ingredient with another that produces the same attributes. And any changes to the label has the potential of scaring off consumers who demand a simple ingredients list.</p>
        <p>Tara gum is often used as a substitute, but its supply is smaller, with an annual harvest roughly a third as large as locust bean gum. Other potential options like pectin, carrageenan or guar gum come with their own list of challenges in terms of their efficacy, need to be blended with other ingredients, or negative perception in the eyes of the consumer.</p>
        <p>With these challenges and locust bean gum amounting to a small fraction of the total cost for a product, manufacturers so far appear to be willing to absorb the price increase for the ingredient.</p>
        <p>"There's a couple other substitutions that you can do but each one of them brings their own problems to the table," Zalesny said.</p>`
    },
    "our-52nd-anniversary": {
      id: 241455,
      title: "Our 52nd Anniversary",
      date: "July 28, 2022",
      category: "Uncategorized",
      image: null,
      excerpt: "Hurrah ! We turn 52 today. Our Journey had certainly not been a bed of roses, however the root cause of all success to Acid India Group is indefinitely credited to each and every devoted stakeholder...",
      content: `<p>Hurrah ! We turn 52 today. Our Journey had certainly not been a bed of roses, however the root cause of all success to Acid India Group is indefinitely credited to each and every devoted stakeholder who have made this happen. As we celebrate this moment of joy and...</p>`
    }
  };

  // Get all posts
  const getAllPosts = () => {
    return Object.keys(blogPostsData).map(key => ({
      slug: key,
      ...blogPostsData[key]
    }));
  };

  const handleAnnualReturn = () => {
    window.open('https://acidindia.in/wp-content/uploads/2024/02/FORM-MGT-9-AY-2324.pdf', '_blank');
  };

  const toggleDropdown = (menu) => {
    setIsDropdownOpen(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Handle search
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const results = allPosts.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(results);
      setShowSearchResults(true);
      setShowCategoryPosts(false);
      setSelectedCategory(null);
    }
  };

  // Handle category click
  const handleCategoryClick = (category) => {
    const filteredPosts = allPosts.filter(post => 
      post.category.toLowerCase().includes(category.toLowerCase())
    );
    setCategoryPosts(filteredPosts);
    setSelectedCategory(category);
    setShowCategoryPosts(true);
    setShowSearchResults(false);
    setSearchQuery('');
  };

  // Clear filters and go back to blog post
  const clearFilters = () => {
    setShowSearchResults(false);
    setShowCategoryPosts(false);
    setSelectedCategory(null);
    setSearchResults([]);
    setSearchQuery('');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Load blog post data
    if (blogPostsData[slug]) {
      setBlogPost(blogPostsData[slug]);
      
      // Get all posts for search and category filtering
      const allPostsData = getAllPosts();
      setAllPosts(allPostsData);
      
      // Get recent posts (excluding current post)
      const otherPosts = allPostsData.filter(post => post.slug !== slug);
      setRecentPosts(otherPosts.slice(0, 3));
    }
    setLoading(false);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [slug]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  // If showing search results
  if (showSearchResults) {
    return (
      <div className="blog-post-page">
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
            <div className="nav-actions">
              <button className="quote-btn">Get a Quote</button>
              <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>☰</button>
            </div>
          </div>
        </nav>

        <section className="search-results-section">
          <div className="container">
            <button className="back-to-blog" onClick={clearFilters}>← Back to Blog</button>
            <h2>Search Results for "{searchQuery}"</h2>
            {searchResults.length > 0 ? (
              <div className="search-results-grid">
                {searchResults.map(post => (
                  <article key={post.id} className="search-result-item">
                    {post.image && (
                      <div className="search-result-image">
                        <Link to={`/blog/${post.slug}`} onClick={clearFilters}>
                          <img src={post.image} alt={post.title} />
                        </Link>
                      </div>
                    )}
                    <div className="search-result-content">
                      <h3><Link to={`/blog/${post.slug}`} onClick={clearFilters}>{post.title}</Link></h3>
                      <div className="search-result-meta">
                        <span>{formatDate(post.date)}</span>
                        <span>| {post.category}</span>
                      </div>
                      <p>{post.excerpt.substring(0, 150)}...</p>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="no-results">No results found for "{searchQuery}". Please try a different search term.</p>
            )}
          </div>
        </section>
      </div>
    );
  }

  // If showing category posts
  if (showCategoryPosts) {
    return (
      <div className="blog-post-page">
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
            <div className="nav-actions">
              <button className="quote-btn">Get a Quote</button>
              <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>☰</button>
            </div>
          </div>
        </nav>

        <section className="category-posts-section">
          <div className="container">
            <button className="back-to-blog" onClick={clearFilters}>← Back to Blog</button>
            <h2>Posts in Category: {selectedCategory}</h2>
            {categoryPosts.length > 0 ? (
              <div className="category-posts-grid">
                {categoryPosts.map(post => (
                  <article key={post.id} className="category-post-item">
                    {post.image && (
                      <div className="category-post-image">
                        <Link to={`/blog/${post.slug}`} onClick={clearFilters}>
                          <img src={post.image} alt={post.title} />
                        </Link>
                      </div>
                    )}
                    <div className="category-post-content">
                      <h3><Link to={`/blog/${post.slug}`} onClick={clearFilters}>{post.title}</Link></h3>
                      <div className="category-post-meta">
                        <span>{formatDate(post.date)}</span>
                        <span>| {post.category}</span>
                      </div>
                      <p>{post.excerpt.substring(0, 150)}...</p>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="no-results">No posts found in this category.</p>
            )}
          </div>
        </section>
      </div>
    );
  }

  if (!blogPost) {
    return <div className="not-found">Blog post not found</div>;
  }

  return (
    <div className="blog-post-page">
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
            <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>☰</button>
          </div>
        </div>
      </nav>

      {/* Blog Post Hero */}
      <section className="blog-post-hero">
        <div className="blog-post-hero-overlay">
          <div className="blog-post-hero-content">
            <div className="blog-category-tag">{blogPost.category}</div>
            <h1>{blogPost.title}</h1>
            <div className="blog-post-meta">
              <span className="blog-post-date">📅 {blogPost.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post Content with Sidebar */}
      <section className="blog-post-content-section">
        <div className="container">
          <div className="blog-post-layout">
            {/* Main Content */}
            <div className="blog-post-main">
              <div className="blog-post-featured-image">
                <img src={blogPost.image} alt={blogPost.title} />
              </div>
              <div className="blog-post-body" dangerouslySetInnerHTML={{ __html: blogPost.content }} />
            </div>

            {/* Sidebar with Recent Posts */}
            <aside className="blog-post-sidebar">
              {/* Recent Posts Widget */}
              <div className="sidebar-widget recent-posts-widget">
                <h3 className="widget-title">Recent Posts</h3>
                <div className="recent-posts-list">
                  {recentPosts.map((post) => (
                    <article key={post.id} className="recent-post-item">
                      {post.image && (
                        <div className="recent-post-image">
                          <Link to={`/blog/${post.slug}`}>
                            <img src={post.image} alt={post.title} />
                          </Link>
                        </div>
                      )}
                      <div className="recent-post-content">
                        <h4 className="recent-post-title">
                          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                        </h4>
                        <div className="recent-post-meta">
                          <span className="post-date">📅 {formatDate(post.date)}</span>
                          <span className="post-category">| {post.category}</span>
                        </div>
                        <p className="recent-post-excerpt">
                          {post.excerpt ? post.excerpt.substring(0, 100) : (post.content ? post.content.replace(/<[^>]*>/g, '').substring(0, 100) : '')}...
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Categories Widget */}
              <div className="sidebar-widget categories-widget">
                <h3 className="widget-title">Categories</h3>
                <ul className="categories-list">
                  <li><button onClick={() => handleCategoryClick("Food & Beverages")} className="category-link">Food & Beverages</button><span className="count">(2)</span></li>
                  <li><button onClick={() => handleCategoryClick("Food Crisis")} className="category-link">Food Crisis</button><span className="count">(2)</span></li>
                  <li><button onClick={() => handleCategoryClick("Uncategorized")} className="category-link">Uncategorized</button><span className="count">(1)</span></li>
                </ul>
              </div>

              {/* Search Widget */}
              <div className="sidebar-widget search-widget">
                <h3 className="widget-title">Search</h3>
                <form onSubmit={handleSearch} className="search-form">
                  <input 
                    type="search" 
                    placeholder="Search..." 
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input" 
                  />
                  <button type="submit" className="search-button">Search</button>
                </form>
              </div>
            </aside>
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

export default BlogPost;