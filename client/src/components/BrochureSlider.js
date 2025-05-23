// BrochureSlider.js
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./BrochureSlider.css";

import { Pagination } from "swiper/modules";
import img1 from "./kp.jpeg";
import img2 from "./nc.jpeg";
import brochurePDF from "./sample.pdf";

export default function BrochureSlider() {
  return (
    <section id="brochure" className="brochure-slider-section">
      <div className="brochure-container">
        {/* Left - Text */}
        <div className="brochure-text">
          <h2>📄 View our Projet Brochure (Chandreshwar Apartment)</h2>
          <p>
            Learn more about KIBAKA Construction's journey, values, and
            services. Flip through the preview or download the full PDF.
          </p>
          <a href={brochurePDF} download className="download-btn">
            Download Brochure
          </a>
        </div>

        {/* Right - Slider */}
        <div className="brochure-slider">
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="brochure-swiper"
          >
            <SwiperSlide>
              <img src={img1} alt="Brochure Page 1" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="Brochure Page 2" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
