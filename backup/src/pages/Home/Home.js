import React from 'react';
import Gallery from '../../components/Gallery/Gallery';
import './Home.css';

const Home = () => {
  // Service gallery items based on Alpha Statistics' offerings
  const serviceItems = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/assets/images/statistical-analysis.jpg`,
      title: 'Statistical Analysis',
      description: 'Comprehensive statistical analysis for clinical trials and research studies'
    },
    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/assets/images/medical-writing.jpg`,
      title: 'Medical Writing',
      description: 'Professional medical writing services for regulatory submissions and publications'
    },
    {
      id: 3,
      image: `${process.env.PUBLIC_URL}/assets/images/data-management.jpg`,
      title: 'Data Management',
      description: 'Efficient clinical data management solutions'
    },
    {
      id: 4,
      image: `${process.env.PUBLIC_URL}/assets/images/consulting.jpg`,
      title: 'Consulting Services',
      description: 'Expert consultation for research design and regulatory strategy'
    }
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <div className="container">
          <h1>Alpha Statistics Inc.</h1>
          <p>Providing expert statistical analysis, medical writing, and regulatory affairs services for the pharmaceutical, biotechnology and medical device industries.</p>
          <a href="/about" className="cta-button">Learn More</a>
        </div>
      </section>
      
      <section className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <Gallery items={serviceItems} />
        </div>
      </section>
      
      <section className="features">
        <div className="container">
          <h2>Why Choose Us</h2>
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
    </div>
  );
};

export default Home; 