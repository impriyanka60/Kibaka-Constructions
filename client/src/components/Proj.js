import { useEffect, useState } from "react";

const Proj = () => {
  const [projectImages, setProjectImages] = useState([]);

 
    const fetchImages = async () => {
      try {
        const res = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/get-images`, {
          credentials: 'include',
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": process.env.REACT_APP_API_BASE_URL,
          },
        });
        const data = await res.json();
        setProjectImages(data);
      } catch (err) {
        console.error("Error fetching project images:", err);
      }
    };
    useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div style={styles.section}>
      <h2 style={styles.heading}>Our Projects</h2>
      <div style={styles.gallery}>
        {projectImages.length > 0 ? (
          projectImages.map((img) => (
            <div key={img._id} style={styles.card}>
              <img
                src={`${process.env.REACT_APP_API_BASE_URL}${img.url}`}
                alt="Project"
                style={styles.image}
              />
            </div>
          ))
        ) : (
          <p style={styles.noImages}>No project images available yet.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  section: {
    padding: "4rem 2rem",
    backgroundColor: "#f5f5f5",
  },
  heading: {
    fontSize: "2rem",
    color: "#002244",
    textAlign: "center",
    marginBottom: "2rem",
  },
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "1.5rem",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease",
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  noImages: {
    textAlign: "center",
    color: "#777",
    fontSize: "1rem",
  },
};

export default Proj;
