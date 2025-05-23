import React from "react";
import "./section.css";

export default function Amenities() {
  return (
    <section className="amenities-section">
      <div className="container">
        <h2 className="section-title">🏡 Amenities</h2>
        <div className="yellow-line"></div>
        <div className="amenities-grid">
          <div className="amenity-card">Common Gym</div>
          <div className="amenity-card">Power Backup for Common Areas</div>
          <div className="amenity-card">Elevator with Generator Backup</div>
          <div className="amenity-card">Intercom Facility</div>
          <div className="amenity-card">Security with CCTV</div>
          <div className="amenity-card">Fire Safety Provisions</div>
          <div className="amenity-card">Security App Support</div>
          <div className="amenity-card">Waste Disposal System</div>
        </div>
      </div>
    </section>
  );
}
