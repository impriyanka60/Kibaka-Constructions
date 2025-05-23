import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        
        {/* About Section */}
        <div className="footer-about">
          <h2>KIBAKA Construction</h2>
          <p>
            Building the future with excellence. We specialize in commercial and
            residential construction, renovations, and project management.
          </p>
        </div>
        
        {/* Quick Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: contact-kibakaconstruction@gmail.com</p>
          <p>Phone:  +91 7739336836/ 0612-3159063</p>
          <p>Address: 1st Floor,Baba Market,Guru Govind Singh Link Path,Patna</p>
        </div>

        {/* Social Media Links */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/share/18nhGgTV8Q/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://www.instagram.com/kibakaconstruction?igsh=MWF6M2R6anI0N294cQ==" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} KIBAKA Construction. All Rights Reserved.</p>
      </div>
    </div>
  );
}
