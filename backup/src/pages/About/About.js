import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">        
        <div className="about-content">
          <div className="about-text">
            <h2>Our Medical Writing Services</h2>
            <p>
              Alpha Statistics provides comprehensive medical and scientific writing services 
              for pharmaceutical, biotechnology and medical device companies. Our team offers 
              expertise in creating documentation for regulatory submissions, clinical research, 
              and scientific publications.
            </p>
            
            <h2>What We Offer</h2>
            <ul className="services-list">
              <li>
                <h3>Regulatory Writing</h3>
                <p>Clinical study protocols, clinical study reports, investigator brochures, patient narratives</p>
              </li>
              <li>
                <h3>Scientific Publications</h3>
                <p>Manuscripts for peer-reviewed journals, posters, and presentations for scientific meetings</p>
              </li>
              <li>
                <h3>Research Documentation</h3>
                <p>Grant applications, research proposals, internal research documents</p>
              </li>
              <li>
                <h3>Medical Communications</h3>
                <p>Product monographs, patient education materials, training materials</p>
              </li>
            </ul>
            
            <h2>Our Approach</h2>
            <p>
              We combine scientific knowledge, regulatory expertise, and clear communication to deliver 
              high-quality documents that meet your specific needs. Our experienced team works closely 
              with clients throughout the development process to ensure accuracy, clarity, and compliance 
              with regulatory requirements.
            </p>
          </div>
          
          <div className="about-image">
            <img src={`${process.env.PUBLIC_URL}/assets/images/medical-writing.jpg`} alt="Medical writing services" />
            <div className="contact-cta">
              <h3>Need specialized medical writing?</h3>
              <p>Contact us to discuss your specific requirements</p>
              <a href="/contact" className="cta-button">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 