import React from 'react'
import "./broch.css"
import kp from "./kp.jpeg"
import nc from "./nc.jpeg"
import brochurePDF from "./sample.pdf"

const BrochureSection = () => {
  return (
    <div>
      <section className="brochure-section" id="brochure">
  <div className="brochure-container">
     {/* Content */}
     <div className="brochure-content">
      <h2>📄 Download Our Company Brochure</h2>
      <p>
        Learn about our services, vision, and top projects. Preview the brochure below and download it as a PDF.
      </p>
      <a href={brochurePDF} download className="download-btn">Download Brochure</a>
    </div>
    
    {/* Images */}
    <div className="brochure-images">
      <img src={kp} alt="Brochure Page 1" />
      <img src={nc} alt="Brochure Page 2" />
    </div>

   
  </div>
</section>

    </div>
  )
}

export default BrochureSection
