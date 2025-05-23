import React from "react";
import { FaHammer, FaBuilding } from "react-icons/fa";
import "./Services.css";
import {motion}from "framer-motion";

export default function Services() {
  const services = [
    { icon: <FaBuilding />, title: "Commercial Construction", description: "We build high-rise commercial buildings, offices, and shopping complexes with modern architecture." },
    { icon: <FaHammer />, title: "Residential Construction", description: "We create dream homes with innovative designs and top-quality materials." },
   
  ];

  return (
    <motion.div  initial={{ opacity: 0, y: -50 ,initial:"hidden",WhileInView:"visible"}}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }} >
    <section id="services" className="services-section">
      <h2>Our Services</h2>
      <div className="yellow-line"></div>
      <p>We offer a wide range of construction and engineering services.</p>
      <motion.div className="services-grid"
     initial={{ opacity: 0, y: -50 ,initial:"hidden",WhileInView:"visible"}}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }} >
        {services.map((service, index) => (
         
          <motion.div key={index} className="service-card" 
            initial={{ opacity: 0, y: -50 ,initial:"hidden",WhileInView:"visible"}}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
            <div className="icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
          
        ))}
      </motion.div>
    </section>
    </motion.div>
  );
}
