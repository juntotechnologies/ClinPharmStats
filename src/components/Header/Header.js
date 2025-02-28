import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../ContactForm/ContactForm';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);
  const contactFormRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleClickOutside = (event) => {
      if (contactFormRef.current && !contactFormRef.current.contains(event.target)) {
        setIsContactFormOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const toggleContactForm = (e) => {
    e.preventDefault();
    setIsContactFormOpen(!isContactFormOpen);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/assets/images/logo.png`} alt="Alpha Stats Logo" />
            {/* <span className="logo-text">Alpha Stats, Inc.</span> */}
          </Link>
        </div>
        
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
        
        <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            <li><Link to="/" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/ceo-profile" onClick={() => setIsMobileMenuOpen(false)}>CEO Profile</Link></li>
            <li className="contact-dropdown">
              <a href="#" onClick={toggleContactForm} className={isContactFormOpen ? 'active' : ''}>
                Contact
              </a>
              {isContactFormOpen && (
                <div className="contact-dropdown-content" ref={contactFormRef}>
                  <div className="dropdown-header">
                    <h3>Contact Us</h3>
                    <button className="close-button" onClick={toggleContactForm}>×</button>
                  </div>
                  
                  <div className="dropdown-contact-info">
                    <div className="contact-item">
                      <i className="fas fa-envelope"></i>
                      <div>
                        <h4>Email</h4>
                        <p><a href="mailto:info@alphastatsinc.com">info@alphastatsinc.com</a></p>
                      </div>
                    </div>
                    
                    <div className="contact-item">
                      <i className="fas fa-phone"></i>
                      <div>
                        <h4>Phone</h4>
                        <p>(732) 216-3931</p>
                      </div>
                    </div>
                    
                    <div className="contact-item">
                      <i className="fas fa-map-marker-alt"></i>
                      <div>
                        <h4>Location</h4>
                        <p>Central NJ</p>
                      </div>
                    </div>
                  </div>
                  
                  <ContactForm isDropdown={true} />
                </div>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header; 