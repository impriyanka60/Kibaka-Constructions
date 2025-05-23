import React from "react";
//import { motion } from "framer-motion";
//import c14 from "./c14.jpg"
import "./LandingPage.css"
//import BrochureSlider from "./BrochureSlider";
//import BrochureSection from "./BrochureSection";



//import { FaFacebookF, FaEnvelope, FaInstagram} from "react-icons/fa";

export default function LandingPage() {
 

  return (
    <div className="landing-container">
     
     
      <header id="home" className="hero">
        <div className="overlay"></div>
       
        <div className="hero-content">
          <h2>KIBAKA Constructions</h2>
          <h1>& Engineers PVT Ltd.</h1>
          <p>Building the future, one project at a time</p>
          <a href="#projects" className="cta-button">View Our Work</a>
        </div>
       
      </header>
     
    
     
     

      <section className="welcome-section">
  <div className="welcome-container">
  <div className="welcome-right">
      <p>
        At KIBAKA, we believe in building more than just structures — we build trust, quality, and lasting relationships. 
        With years of experience in construction and engineering, our team is committed to delivering excellence in every project.
      </p>
      <p>
        Whether it's residential, commercial, or infrastructure, we take pride in transforming ideas into reality, 
        always prioritizing integrity, safety, and sustainability.
      </p>
    </div>
    <div className="welcome-left">
     
      <h2> Who are we?</h2>
      <h3>& Engineers Pvt. Ltd.</h3>
    </div>
    
  </div>
</section>


      
    </div>
  );
}