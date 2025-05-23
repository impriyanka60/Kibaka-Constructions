import React from "react";
import "./section.css";

export default function Specifications() {
  return (
    <section className="specifications-section">
      <div className="container">
        <h2 className="section-title">⚙️ Specifications</h2>
        <div className="yellow-line"></div>
        <ul className="spec-list">
          <li><strong>Common Area</strong>Marble flooring in passengerways and staircaises, with vitrified tiles in other spaces</li>
          <li><strong>Walls:</strong> Fly ash bricks for eco-friendly construction</li>
          <li><strong>Flooring:</strong> Vitrified tiles in living & bedrooms, anti-skid tiles in bathrooms</li>
          <li><strong>Kitchen:</strong> Granite platform with stainless steel sink and glazed tile dado</li>
          <li><strong>Windows:</strong> Glazed UPVC or aluminium windows for durability</li>
          <li><strong>Bathroom:</strong>Designer washbasin,concealed plumbing,anti-skid floors and premium sanitary fittings</li>
          <li><strong>Main Door:</strong>Flush door with oter laminate and inner paint</li>
          <li><strong>Other Doors:</strong>Painted flush doors on both sides</li>
        </ul>
      </div>
    </section>
  );
}
