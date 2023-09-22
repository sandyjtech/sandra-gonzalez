import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for styling
import {FaLinkedin} from 'react-icons/fa';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  // Check the screen size on initial render and when resized
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial check

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="navbar">
      <div className="logo">Sandra Gonzalez</div>
      {isMobile ? (
        <div className={`mobile-menu ${isMobile ? 'active' : ''}`}>
          <Link to="/" className="menu-item">
            Home
          </Link>
          <Link to="/projects" className="menu-item">
            Projects
          </Link>
          <Link to="/resume" className="menu-item">
            Resume
          </Link>
          <Link to="/blogs" className="menu-item">
            Blogs
          </Link>
          <Link to="/contact" className="menu-item">
            Contact
          </Link>
        </div>
      ) : (
        <div className="desktop-menu">
          <Link to="/" className="menu-item">
            Home
          </Link>
          <Link to="/projects" className="menu-item">
            Projects
          </Link>
          <Link to="/resume" className="menu-item">
            Resume
          </Link>
          <Link to="/blogs" className="menu-item">
            Blogs
          </Link>
          {/* <Link to="/contact" className="menu-item">
            Contact
          </Link> */}
          <Link to="https://www.linkedin.com/in/sandra--gonzalez/" className="menu-item" target='_blank'>
          <FaLinkedin/>
          </Link>
        </div>
      )}
      {isMobile && (
        <div className="hamburger" onClick={toggleMobileMenu}>
          <div className={`bar ${isMobile ? 'open' : ''}`}></div>
          <div className={`bar ${isMobile ? 'open' : ''}`}></div>
          <div className={`bar ${isMobile ? 'open' : ''}`}></div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;