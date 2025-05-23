import React from 'react';
import "./About.css"
import c14 from "./c14.jpg"
import BrochureSlider from './BrochureSlider';

const About = () => {
return ( <div> <section id="about" className="about-section">

```
          <div className="about-content" style={{marginTop:"70px"}}>
            {/* Left Side - Image */}
           
            <div className="about-image">
              <img src={c14} alt="About Us" />
            </div>
           
            {/* Right Side - Text */}
            <div className="about-text">
              <h2>About Us</h2>
              <div className="yellow-line"></div>
              <p>
                KIBAKA Construction Pvt. Ltd. has been a pioneer in 
                infrastructure development for over a decade. We specialize 
                in commercial, residential, and industrial projects with 
                top-notch quality and innovation.
              </p>
              <p>
                Our team of experts ensures every project is executed 
                efficiently, maintaining high safety standards and delivering 
                excellence.
              </p>
              <p>At KIBAKA Construction & Engineers Pvt. Ltd., we take pride in 
                  delivering high-quality infrastructure and innovative
                  building solutions. With a team of experienced engineers,
                  architects, and project managers, we have successfully completed
                  numerous residential, commercial, and industrial projects.
                 Our commitment to excellence, safety, and sustainability ensures that
                  every project we undertake meets the highest industry standards.
                 From concept to completion, we focus on precision, durability, and client satisfaction.
                 We believe in transforming ideas into reality by using advanced 
                construction techniques and cutting-edge technology. Whether it's urban development,
                large-scale construction,or renovation projects, we strive to build structures that stand the 
                 test of time</p>
            </div>
          </div>
          
        </section>
       <BrochureSlider/>
</div>

)
}
export default About

