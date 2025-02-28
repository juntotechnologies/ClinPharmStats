import React, { useState } from 'react';
import './MainPage.css';

const MainPage = () => {
  // State to track which service card is expanded
  const [expandedCard, setExpandedCard] = useState(null);

  // Toggle expanded card
  const toggleCard = (index) => {
    if (expandedCard === index) {
      setExpandedCard(null); // Collapse if already expanded
    } else {
      setExpandedCard(index); // Expand this card
    }
  };

  // Define scrollToSection function locally
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Adjust for header height
        behavior: 'smooth'
      });
    }
  };

  // Add this helper function for service icons
  const getServiceIcon = (serviceTitle) => {
    // Return appropriate icon based on service title
    switch(serviceTitle) {
      case "Statistical Analysis":
        return "📊";
      case "Medical Writing":
        return "📝";
      case "Data Management":
        return "💾";
      case "Consulting Services":
        return "🔍";
      case "Training & Education":
        return "🎓";
      case "Quality Assurance":
        return "✅";
      default:
        return "🔬";
    }
  };

  // Service card data
  const serviceData = [
    {
      title: "Statistical Analysis",
      image: "statistical-analysis.jpg",
      shortDesc: "Data-driven insights for clinical trials",
      longDesc: "Our statistical team provides comprehensive analysis for clinical trials, from study design and sample size calculation to final analysis and reporting. We use advanced statistical methods to ensure robust, reliable results that meet regulatory standards.",
      features: [
        "Clinical trial design and sample size calculations",
        "Statistical analysis plans (SAPs)",
        "Interim and final analyses",
        "Custom statistical programming"
      ]
    },
    {
      title: "Medical Writing",
      image: "medical-writing.jpg",
      shortDesc: "Clear, compliant documentation",
      longDesc: "Our medical writing services deliver clear, scientifically accurate and regulatory-compliant documentation. We specialize in creating high-quality documents for regulatory submissions, clinical research, and scientific publications.",
      features: [
        "Clinical study protocols and reports",
        "Regulatory documents",
        "Scientific manuscripts",
        "Patient narratives"
      ]
    },
    {
      title: "Data Management",
      image: "data-management.jpg",
      shortDesc: "Efficient clinical data solutions",
      longDesc: "We provide end-to-end clinical data management services, ensuring data integrity, accuracy, and compliance with industry standards. Our team implements efficient data collection, validation, and reporting processes.",
      features: [
        "Database design and validation",
        "Data cleaning and reconciliation",
        "CDISC compliant datasets",
        "Query management"
      ]
    },
    {
      title: "Consulting Services",
      image: "consulting.jpg",
      shortDesc: "Expert strategic guidance",
      longDesc: "Our consulting services provide strategic guidance and support for your research and development programs. We help optimize your study designs, regulatory strategy, and clinical development plans.",
      features: [
        "Regulatory strategy development",
        "FDA meeting preparation",
        "Research design optimization",
        "Expert scientific advice"
      ]
    },
    {
      title: "Training & Education",
      image: "training.jpg",
      shortDesc: "Knowledge transfer programs",
      longDesc: "We offer specialized training programs to enhance your team's capabilities in clinical research, statistics, and regulatory affairs. Our workshops and courses are tailored to your specific needs and goals.",
      features: [
        "Good Clinical Practice (GCP) training",
        "Statistical methods workshops",
        "Regulatory compliance education",
        "Protocol development training"
      ]
    },
    {
      title: "Quality Assurance",
      image: "quality.jpg",
      shortDesc: "Ensuring compliance & excellence",
      longDesc: "Our quality assurance services help maintain the highest standards in your clinical research processes. We offer comprehensive auditing, process improvement, and quality management solutions.",
      features: [
        "Audit preparation and management",
        "SOP development and review",
        "Quality management systems",
        "Regulatory compliance assessment"
      ]
    }
  ];
  
  return (
    <div className="main-page">
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <h1>Alpha Stats, Inc.</h1>
          <p>Providing expert statistical analysis, medical writing, and regulatory affairs services for the pharmaceutical, biotechnology and medical device industries.</p>
          <a href="#services" className="cta-button" onClick={(e) => {
            e.preventDefault();
            scrollToSection('services');
          }}>Learn More</a>
        </div>
      </section>
      
      {/* Services Section */}
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Services</h2>
            <p className="section-description">
              We provide comprehensive services to support pharmaceutical, biotechnology, and medical device companies.
            </p>
          </div>
          
          <div className="services-grid">
            {serviceData.map((service, index) => (
              <div 
                key={index}
                className={`service-card ${expandedCard === index ? 'expanded' : ''}`}
                onClick={() => toggleCard(index)}
              >
                <div className="service-image">
                  <div className="service-icon">
                    {getServiceIcon(service.title)}
                  </div>
                </div>
                <div className="service-content">
                  <h3>{service.title}</h3>
                  
                  {expandedCard === index && (
                    <div className="service-details">
                      <p className="service-long-desc">{service.longDesc}</p>
                      <h4>Key Features:</h4>
                      <ul className="service-features">
                        {service.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <span className="card-toggle">
                    {expandedCard === index ? 'Show Less ↑' : 'Learn More ↓'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose Us</h2>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon">🔬</div>
              <h3>Scientific Expertise</h3>
              <p>Our team combines deep statistical knowledge with industry experience.</p>
            </div>
            <div className="feature-card">
              <div className="icon">📊</div>
              <h3>Data-Driven Approach</h3>
              <p>We deliver insightful analysis that supports sound decision-making.</p>
            </div>
            <div className="feature-card">
              <div className="icon">📝</div>
              <h3>Regulatory Compliance</h3>
              <p>All our work meets stringent regulatory requirements.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* About Section (Medical Writing) - Centered */}
      <section id="about" className="about-section">
        <div className="container">
          <div className="about-content centered">
            <div className="about-text">
              <h3>Our Medical Writing Services</h3>
              <p>
                We provide comprehensive medical and scientific writing services 
                for pharmaceutical, biotechnology and medical device companies. Our team offers 
                expertise in creating documentation for regulatory submissions, clinical research, 
                and scientific publications.
              </p>
              
              <div className="services-grid-wrapper">
                <div className="services-grid-compact">
                  <div className="service-box">
                    <div className="service-box-icon">📄</div>
                    <h4>Regulatory Writing</h4>
                    <p>Clinical study protocols, clinical study reports, investigator brochures, patient narratives</p>
                  </div>
                  
                  <div className="service-box">
                    <div className="service-box-icon">📰</div>
                    <h4>Scientific Publications</h4>
                    <p>Manuscripts for peer-reviewed journals, posters, and presentations for scientific meetings</p>
                  </div>
                  
                  <div className="service-box">
                    <div className="service-box-icon">📋</div>
                    <h4>Research Documentation</h4>
                    <p>Grant applications, research proposals, internal research documents</p>
                  </div>
                  
                  <div className="service-box">
                    <div className="service-box-icon">📢</div>
                    <h4>Medical Communications</h4>
                    <p>Product monographs, patient education materials, training materials</p>
                  </div>
                </div>
              </div>
              
              <h3>Our Approach</h3>
              <p>
                We combine scientific knowledge, regulatory expertise, and clear communication to deliver 
                high-quality documents that meet your specific needs. Our experienced team works closely 
                with clients throughout the development process to ensure accuracy, clarity, and compliance 
                with regulatory requirements.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MainPage; 