import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logoImage from '/assets/logo.svg';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container header-container">
        
        {/* Logo */}
        <div className="logo">
        <img src="/Images/SmartDine.png" alt="ScanEat Logo" className="logo-image" />
        <span>Scan More-Eat More</span>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="menu-toggle" onClick={toggleMenu}>
          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Navigation Menu */}
        <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="../Home">Home</Link></li>
            <li><a href="#features">Features</a></li>
            <li><Link to="/howitsworks">How It Works</Link></li>

            {/* Restaurant Type with Dropdown */}
            <li className="dropdown" 
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}>
              <Link to="/foodtrucking">Restaurant Type ▾</Link>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  <li><Link to="/foodlist">Food List</Link></li>
                  <li><Link to="/fooditems">Food Items</Link></li>
                  <li><Link to="/foodtracking">Food Tracking</Link></li>
                  <li><Link to="/foodhalls">Food Halls</Link></li>
                </ul>
              )}
            </li>

            {/* <li><Link to="/pricing">Pricing</Link></li> */}
            <li><Link to="/contact" className="btn-primary">Contact Us</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
