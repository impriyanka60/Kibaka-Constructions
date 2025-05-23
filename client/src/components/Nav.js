import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  //const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  //const toggleDropdown = () => setShowDropdown(!showDropdown);
  //const closeDropdown = () => setShowDropdown(false);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <h1>Kibaka Constructions</h1>
      </div>

      <div className="hamburger" onClick={toggleMobileMenu}>
        ☰
      </div>

      <ul className={`navbar-links ${isMobileMenuOpen ? 'open' : ''}`}>
        <li><Link to="/" onClick={closeMobileMenu}>Home</Link></li>

      

       
        <li><Link to="/about" onClick={closeMobileMenu}>About</Link></li>
        <li><Link to="/project" onClick={closeMobileMenu}>Projects</Link></li>
        <li><Link to="/services" onClick={closeMobileMenu}>Services</Link></li>
        <li><Link to="/contact" onClick={closeMobileMenu}>Contact</Link></li>
        <li><Link to="/documents" onClick={closeMobileMenu}>Documents</Link></li>
        <li><Link to="/adminlogin" onClick={closeMobileMenu}>Admin</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;