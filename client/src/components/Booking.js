import React from "react";
import {Link} from "react-router-dom";
import "./Booking.css";
import { FaFileSignature, FaHome, FaCalendarCheck, FaMoneyCheckAlt } from "react-icons/fa";

export default function Booking() {
  return (
    <section className="booking-section" id="booking">
      <div className="booking-flex">
        {/* Left - Steps */}
        <div className="booking-container">
          <h2 className="section-title">📝 Booking Process</h2>
          <p className="section-subtitle">
            Follow these simple steps to book your dream home
          </p>
          <ol className="booking-steps">
            <li>
              <FaMoneyCheckAlt className="step-icon" /> <strong>Step 1:</strong> Pay token amount of ₹1,00,000 followed by 10% of total flat cost within 8 days.
            </li>
            <li>
              <FaFileSignature className="step-icon" /> <strong>Step 2:</strong> Pay 25% within 45 days. Agreement for sale will be registered.
            </li>
            <li>
              <FaHome className="step-icon" /> <strong>Step 3:</strong> Pay 10% during roof casting of each floor (5 floors).
            </li>
            <li>
              <FaCalendarCheck className="step-icon" /> <strong>Step 4:</strong> Pay 15% at start of brickwork.
            </li>
            <li>
              <FaCalendarCheck className="step-icon" /> <strong>Step 5:</strong> Pay 10% at the time of plastering.
            </li>
            <li>
              <FaCalendarCheck className="step-icon" /> <strong>Step 6:</strong> Remaining balance to be paid 45 days before handover.
            </li>
          </ol>
          <div className="booking-note">
            <strong>Note:</strong> Registration expenses, revenue charges, and GST will be borne by the allotee.
          </div>
        </div>

        {/* Right - Call to Action */}
        <div className="booking-image call-to-action-box">
          <h3>📞 Ready to Book?</h3>
          <p>Contact us today to reserve your flat and get more details about the process.</p>
          <Link to="/contact" className="cta-button-booking">Contact Us</Link>
        </div>
      </div>
    </section>
  );
}
