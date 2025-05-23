import React from 'react'
import "./LandingPage.css"
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
const ContactPage = () => {
  return (
    <div> <section id="contact" className="contact-section">
            <div className="contact-container">
              {/* Left Side - Contact Info */}
              <div className="contact-info">
                <h2>Contact Us</h2>
                <p>We’d love to hear from you! Reach out to us via any of the methods below.</p>
                <div className="contact-details">
                  <p><FaMapMarkerAlt className="icon" />1st Floor,Baba Market,Guru Govind Singh Link Path,Patna City-800008(Besides Raymonds Patna City)</p>
                  <p><FaPhone className="icon" /> +91 7739336836/ 0612-3159063</p>
                  <p><FaEnvelope className="icon" /> contact@abcconstruction.com</p>
                </div>
              </div>
    
              {/* Right Side - Contact Form */}
              <div className="contact-form">
                <h3>Send Us a Message</h3>
                <form>
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Your Email" required />
                  <textarea placeholder="Your Message" rows="4" required></textarea>
                  <button type="submit">Send Message</button>
                </form>
              </div>
            </div>
          </section>
       <section id="contact" className="contact-section">
              <div className="contact-container">
                {/* Left Side - Contact Info */}
                <div className="contact-info">
                  <h2>Contact Us</h2>
                  <p>We’d love to hear from you! Reach out to us via any of the methods below.</p>
                  <div className="contact-details">
                    <p><FaMapMarkerAlt className="icon" /> 123 Main Street, City, Country</p>
                    <p><FaPhone className="icon" /> +123 456 7890</p>
                    <p><FaEnvelope className="icon" /> contact@abcconstruction.com</p>
                  </div>
                </div>
      
                {/* Right Side - Contact Form */}
                <div className="contact-form">
                  <h3>Send Us a Message</h3>
                  <form>
                    <input type="text" placeholder="Your Name" required />
                    <input type="email" placeholder="Your Email" required />
                    <textarea placeholder="Your Message" rows="4" required></textarea>
                    <button type="submit">Send Message</button>
                  </form>
                </div>
              </div>
            </section>
    </div>
  )
}

export default ContactPage
