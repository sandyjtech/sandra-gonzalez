import React from 'react';
import './Footer.css';

const Footer = () => {
  const year = new Date();
  const currentYear = year.getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-icons">
          {/* Add social media icons with links */}
          <a href="https://linkedin.com/your-profile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          {/* Add more social media icons */}
        </div>
        <div className="footer-items">
          {/* Add footer items (e.g., copyright notice) */}
          <p>&copy; {currentYear} Sandra Gonzalez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;