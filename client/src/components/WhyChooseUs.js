import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import "./WhyChooseUs.css";

export default function WhyChooseUs() {
  const points = [
     "Trusted Developers",
    "High-Quality Construction",
    "Spacious Flats with Excellent Ventilation",
     " Vaastu-Friendly Architecture",
    "Metro Connectivity",
    "24x7 Power & Water Supply",
    "Affordable Pricing with Great Value",
    "Wifi Provision"
  ];

  return (
    <section className="why-choose-us-section">
      <div className="why-choose-us-container">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="yellow-line"></div>
        <div className="points-grid">
          {points.map((point, index) => (
            <div className="point-card" key={index}>
              <FaCheckCircle className="icon" />
              <p>{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
