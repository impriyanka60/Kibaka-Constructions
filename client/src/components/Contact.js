import React, { useRef } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_8jfdpnr',        // Replace with your EmailJS service ID
      'template_bailvxd',       // Replace with your EmailJS template ID
      form.current,
      'cMVq52DvM1JVNbmmP'         // Replace with your EmailJS public key
    )
    .then((result) => {
        alert("Message sent successfully!");
        form.current.reset(); // clear form
    }, (error) => {
        alert("Failed to send message. Please try again.");
        console.error(error.text);
    });
  };

  return (
    <div>
      <section id="contact" className="contact-section">
        <div className="contact-container">
          
          {/* Left Side - Contact Info */}
          <div className="contact-info">
            <h2>Contact Us</h2>
            <p>We’d love to hear from you! Reach out to us via any of the methods below.</p>
            <div className="contact-details">
              <p><FaMapMarkerAlt className="icon" /> 1st Floor, Baba Market, Guru Govind Singh Link Path, Patna City-800008 (Besides Raymonds Patna City)</p>
              <p><FaPhone className="icon" /> +91 7739336836 / 0612-3159063</p>
              <p><FaEnvelope className="icon" /> kibakaconstructions@gmail.com</p>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form">
            <h3>Send Us a Message</h3>
            <form ref={form} onSubmit={sendEmail}>
              <input type="text" name="user_name" placeholder="Your Name" required />
              <input type="email" name="user_email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Your Message" rows="4" required></textarea>
              <button type="submit">Send Message</button>
            </form>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
