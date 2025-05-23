import React from "react";
import "./DocumentSection.css";
import floorPlanPDF from "./Bookingplan.pdf"; // Replace with actual PDF file
import floorPlanImage from "./floorplan.jpg"; // Replace with an actual image
//import WhyChooseUs from "./WhyChooseUs";
//import bannerImage from "./plan.webp"
//import plan from "./plan.webp"
export default function DocumentSection() {
  return (
   
    <section className="document-section">
       
        
      <div className="document-container" style={{ marginTop: "70px" }}>
        
        {/* Floor Plan Image */}
        <img src={floorPlanImage} alt="Floor Plan" className="document-image" />
        
        {/* Floor Plan Information */}
        <div className="document-info">
          <h2 className="document-title">📐 Floor Plan</h2>
          <p>
            A <strong>floor plan</strong> is a detailed architectural drawing showcasing the 
            layout of a building, including room dimensions, door placements, and more. 
            It helps in visualizing the space before construction begins.
          </p>
          
          <p>
            Below, you can view or download the official floor plan for our latest project.
          </p>

          {/* PDF Buttons */}
          <div className="button-group">
            <a href={floorPlanPDF} target="_blank" rel="noopener noreferrer" className="document-button view-btn">
              View PDF
            </a>
            <a href={floorPlanPDF} download className="document-button download-btn">
              Download PDF
            </a>
          </div>
        </div>
      </div>
     
    </section>
   
    
  );
}// to this too 