import React from "react";
import "./location.css";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function Location() {
  return (
    <section className="location-section">
      <div className="container location-container">
        <div className="location-text">
          <h2 className="section-title">📍 Project Location</h2>
          <p>
            <FaMapMarkerAlt style={{ marginRight: '8px', color: '#1e3a5f' }} />
            Our site is conveniently located at:
            <br />
            <strong>
              Beside DPS World Public School, Chak Bairiya, <br />
              Patna - 800008.
            </strong>
            <br /><br />
            It's easily accessible by road and well-connected to major landmarks.
          </p>
          <a 
            href="https://www.google.com/maps/place/DPS+World+Public+School,+Patna" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cta-button-location"
          >
            🧭 Get Directions
          </a>
        </div>

        <div className="map-wrapper">
          <iframe
            title="Project Location"
            className="map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14353.517059839147!2d85.1688536!3d25.6093231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58f1bfe3fe6d%3A0x6d4cf712a0c20f4b!2sDPS%20World%20Public%20School%2C%20Patna!5e0!3m2!1sen!2sin!4v1712350000000!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
