// src/components/OnePageView.js
import React from "react";
import About from "./About";
import Projects from "./Projects";
import Services from "./Services";
import Contact from "./Contact";
import DocumentSection from "./DocumentSection";
import LandingPage from "./LandingPage";
import WhyChooseUs from "./WhyChooseUs";
import Specifications from "./Specification";
import Proj from "./Proj";
import Amenities from "./Amenities";
import Booking from "./Booking";
import Locate from "./Locate";
//mport SocialSection from "./SocialSection";
export default function OnePageView() {
  return (
    <div  >
      <LandingPage />
      
     <About />
<WhyChooseUs />

<Proj />

<Services />
<Projects />
<Specifications />
<Amenities />
<Booking />
<DocumentSection />
<Locate />
<Contact />

    </div>
  );
}
