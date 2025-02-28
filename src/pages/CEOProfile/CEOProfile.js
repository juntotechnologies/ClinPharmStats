import React from 'react';
import './CEOProfile.css';

const CEOProfile = () => {
  return (
    <div className="ceo-profile-page">
      <div className="container">
        <div className="section-header">
          <h2>CEO Profile</h2>
        </div>
        
        <div className="profile-content">
          <div className="profile-header">
            <div className="profile-info">
              <h3>Vijay Chauhan, Ph.D.</h3>
              <h4>President & CEO</h4>
            </div>
            <div className="profile-image">
              {/* You can add a CEO image here if available */}
              <div className="placeholder-image">
                <i className="fas fa-user-tie"></i>
              </div>
            </div>
          </div>
          
          <div className="profile-section">
            <h3>Education</h3>
            <div className="education-item">
              <div className="year">1982-1985</div>
              <div className="details">
                <p><strong>Ph.D.(Statistics) - Mixed Model Methods</strong></p>
                <p>Edinburgh University, Scotland</p>
              </div>
            </div>
            
            <div className="education-item">
              <div className="year">1986-1987</div>
              <div className="details">
                <p><strong>Postdoctoral Fellow - Statistical modeling using mixed models</strong></p>
                <p>Swiss Federal Institute of Technology, Zurich, Switzerland</p>
              </div>
            </div>
            
            <div className="education-item">
              <div className="year">1989-1990</div>
              <div className="details">
                <p><strong>Postdoctoral Fellow - Estimation of variance components</strong></p>
                <p>McGill University, Montreal, Canada</p>
              </div>
            </div>
          </div>
          
          <div className="profile-section">
            <h3>Biostatistics & SAS Experience</h3>
            <p>
              PhD in Statistics with specialization in mixed models methodology for prediction of fixed and random effects, 
              and in estimating variance components. Over 25 years of statistical experience including 13 years in the 
              pharmaceutical and biotech companies and CROs.
            </p>
            
            <p>
              Responsibilities in my various assignments in the pharmaceutical industry included protocol development, 
              writing Statistical Analysis Plans and programming specifications, supporting IDMC, DSMB and drug development 
              advisory boards in evaluation and interpretation of clinical trial results and formulating recommendations, 
              integrated summary of efficacy and safety, CRFs review, contributing to writing of clinical study reports 
              and pre-NDA briefing packages, direct interactions with FDA reviewers and responding to FDA queries, 
              assisting Regulatory Affairs in drafting letters of responses to FDA. I have worked closely with Clinicians 
              and marketing groups for publication of clinical trials results. I have been a co-author in research 
              publications of clinical trials results.
            </p>
            
            <p>
              Therapeutic areas on my experiences include cardiovascular, hypertension, diabetes, oncology, Mesothelioma trials, 
              Dermatology (Acne Vulgaris), CNS (Bipolar I Disorder and Schizophrenia), weight loss, anti-fungal, pain studies, 
              diagnostic imaging, anti-infective (complicated skin structure infections, complicated intra-abdominal infection), 
              postmenopausal management and contraceptive studies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CEOProfile; 