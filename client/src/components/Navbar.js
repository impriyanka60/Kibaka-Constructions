import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './LandingPage.css';

export default function Navbar() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar">
      <div className="logo">Kibaka Constructions</div>
      
      <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}>
        <li className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about" onClick={closeMenu}>About</Link>
        </li>
        <li className={location.pathname === '/projects' ? 'active' : ''}>
          <Link to="/projects" onClick={closeMenu}>Projects</Link>
        </li>
        <li className={location.pathname === '/services' ? 'active' : ''}>
          <Link to="/services" onClick={closeMenu}>Services</Link>
        </li>
        <li className={location.pathname === '/contact' ? 'active' : ''}>
          <Link to="/contact" onClick={closeMenu}>Contact</Link>
        </li>
        <li className={location.pathname === '/documents' ? 'active' : ''}>
          <Link to="/documents" onClick={closeMenu}>Documents</Link>
        </li>
        <li className={location.pathname === '/adminlogin' ? 'active' : ''}>
          <Link to="/adminlogin" onClick={closeMenu}>Admin</Link>
        </li>
      </ul>
    </nav>
  );
}
