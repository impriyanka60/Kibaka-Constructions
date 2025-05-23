import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./Projectss.css";
import { motion } from "framer-motion";

// Sample images
import x1 from "./1.jpeg";
import x2 from "./2.jpeg";
import x3 from "./3.jpeg";
import x4 from "./4.jpeg";
import x5 from "./5.jpeg";
import x6 from "./poo.jpg";

export default function Projects() {
  const images = [x1, x2, x3, x4, x5, x6];
  const [photoIndex, setPhotoIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Framer Motion Variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <section id="projects" className="projects-section" >
        <h2 style={{ color: "#fff", fontSize: "2.5rem" , marginTop:"40px" }}>Sites & Builds</h2>
        <div className="yellow-line"></div>

        <p style={{ fontSize: "1.2rem", color: "#fff", marginBottom: "30px" }}>
          Explore our recent construction projects.
        </p>

        <motion.div className="gallery" variants={containerVariants}>
          {images.map((image, index) => (
            <motion.div
              className="gallery-item"
              key={index}
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
              variants={itemVariants}
            >
              <img src={image} alt={`Project ${index + 1}`} />
              <div className="overlay">
                <h3>Project {index + 1}</h3>
                <p>Click to view</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {isOpen && (
          <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={images.map((img) => ({ src: img }))}
            index={photoIndex}
            on={{
              view: ({ index }) => setPhotoIndex(index),
            }}
          />
        )}
      </section>
    </motion.div>
  );
}
