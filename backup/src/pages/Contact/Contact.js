import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would normally send data to a server
    // For demo purposes, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      error: false
    });
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
      <div className="container">
        <h1>Contact Us</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-card">
              <div className="icon">
                <i className="fas fa-map-marker-alt"></i>
              </div>
              <h3>Our Location</h3>
              <p>123 Business Avenue<br />Suite 100<br />San Francisco, CA 94107</p>
            </div>
            
            <div className="contact-card">
              <div className="icon">
                <i className="fas fa-phone"></i>
              </div>
              <h3>Phone Number</h3>
              <p>(123) 456-7890</p>
              <p>(987) 654-3210</p>
            </div>
            
            <div className="contact-card">
              <div className="icon">
                <i className="fas fa-envelope"></i>
              </div>
              <h3>Email Address</h3>
              <p>info@yourcompany.com</p>
              <p>support@yourcompany.com</p>
            </div>
            
            <div className="contact-card">
              <div className="icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>Working Hours</h3>
              <p>Monday - Friday: 9AM to 5PM</p>
              <p>Saturday: 10AM to 2PM</p>
            </div>
          </div>
          
          <div className="contact-form-container">
            <h2>Send Us a Message</h2>
            
            {formStatus.submitted ? (
              <div className="success-message">
                <i className="fas fa-check-circle"></i>
                <h3>Thank You!</h3>
                <p>Your message has been sent successfully. We'll get back to you soon.</p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="5"
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="submit-button">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 