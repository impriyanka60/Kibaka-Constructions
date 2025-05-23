import React from "react";
import "./section.css";

export default function Location() {
  return (
    <section className="location-section">
      <div className="container location-container">
        <div className="location-text">
          <h2 className="section-title">📍 Project Location</h2>
          <div className="yellow-line"></div>
          <p>
            Our site is conveniently located at: <br />
            <strong>
              Beside DPS World Public School, <br />
              Chak Bairiya, Patna - 800008
            </strong>
            <br /><br />
            The location offers excellent connectivity and is close to key city landmarks.
          </p>
        </div>

        <div className="map-wrapper">
          <iframe
            title="Project Location"
            className="map-iframe"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11472.53388191786!2d85.216751!3d25.611014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed584d67e6a7b1%3A0x9c3fdd839f406cad!2sDPS%20World%20School%2C%20Patna!5e0!3m2!1sen!2sin!4v1712391225000!5m2!1sen!2sin"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
