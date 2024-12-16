import React from 'react';
import './Testimonials.css'; // Add your styles for Testimonials

const Testimonials = () => {
  return (
    <div className="testimonials-section">
      <h4 className="testimonials-heading">TESTIMONIALS</h4>
      <h2 className="read-what-others-heading">Read What Others<br />Have To Say</h2>
      <div className="testimonial-container">
        <div className="testimonial-card">
          <div className="image-container">
            <div className="image-wrapper-1">
              <img src="Images/Screenshot 2024-11-20 215553.png" alt="Happy Donor" className="testimonial-image" />
            </div>
          </div>
          <p className="testimonial-author-1">Happy Donor</p>
          <p className="testimonial-review">"Kindnest has changed my life for the better!"</p>
        </div>
        <div className="testimonial-card">
          <div className="image-container">
            <div className="image-wrapper-2">
              <img src="Images/Screenshot 2024-11-20 215721.png" alt="Grateful Recipient" className="testimonial-image" />
            </div>
          </div>
          <p className="testimonial-author-2">Grateful Recipient</p>
          <p className="testimonial-review">"The support I received was incredible!"</p>
        </div>
        <div className="testimonial-card">
          <div className="image-container">
            <div className="image-wrapper-3">
              <img src="Images/Screenshot 2024-11-20 215932.png" alt="Community Member" className="testimonial-image" />
            </div>
          </div>
          <p className="testimonial-author-3">Community Member</p>
          <p className="testimonial-review-3">"I feel more connected to my community thanks to Kindnest."</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;