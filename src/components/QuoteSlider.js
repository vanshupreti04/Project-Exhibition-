import React, { useState, useEffect } from 'react';
import './QuoteSlider.css'; // Add your styles for Hero

const QuoteSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        "/Images/Screenshot 2024-11-20 000225.png",
        "/Images/Screenshot 2024-11-20 000909.png",
        "/Images/Screenshot 2024-11-20 001155.png"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [slides.length]);

  return (
    <div>
    <div className="container">
      <div className="quote-section">
        <blockquote className="quote">
          <span>Your <span className="highlight">Generosity</span>,</span><br />
          <span>Their <span className="highlight">Brighter</span> Tomorrow.</span>
        </blockquote>
        <p className="new-quote">
          Securely connecting donors and organizations<br />
          to share life-changing resources.
        </p>
        <div className="button-container">
          <button className="neon-button" id="raiseTicketButton">Raise a Ticket</button>
          <button className="white-button" id="findTicketButton">Find a Ticket</button>
        </div>
      </div>
      <div className="slider">
      {slides.map((slide, index) => (
        <img
        key={index}
        src={slide}
        alt={`Image ${index + 1}`}
        className={`slide-image ${index === currentSlide ? 'active' : ''}`}
        />
        ))}
      </div>
    </div>
    <div class="top-donators">
    <h2>Top Donators</h2>
    <div class="donator-box">
      <div class="donator-info">
        <span class="donor-name">John Doe</span>
        <div class="donor-icon"></div>
        <span class="company">Company A</span>
      </div>
    </div>
  </div>
    </div>
  );
};

export default QuoteSlider;