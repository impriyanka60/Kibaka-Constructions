import { useState, useEffect } from "react";

const AdminDashboard = () => {
  const [images, setImages] = useState([]);
  const [selectedFile, setSelectedFile] = useState(null);
  const API = process.env.REACT_APP_API_BASE_URL;
  // Fetch images for Projects section only
  useEffect(() => {
    fetch(`${API}/api/get-images`)
      .then((res) => res.json())
      .then((data) => setImages(data))
      .catch((err) => console.error("Error fetching images:", err));
  }, []);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };
const token= localStorage.getItem("adminToken");
  const handleUpload = async () => {
    if (!selectedFile) {
      alert("Please select a file first.");
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedFile);

    try {
      const response = await fetch(`${API}/api/upload`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData,
      });

      if (response.ok) {
        const newImage = await response.json();
        setImages((prev) => [...prev, newImage]);
        setSelectedFile(null);
      } else {
        alert("Failed to upload image.");
      }
    } catch (err) {
      console.error("Upload error:", err);
      alert("Error uploading image.");
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this image?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`${API}/api/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`
        },
      });

      if (response.ok) {
        setImages((prev) => prev.filter((img) => img._id !== id));
      } else {
        alert("Failed to delete image.");
      }
    } catch (err) {
      console.error("Delete error:", err);
      alert("Error deleting image.");
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Admin Dashboard - Manage Project Images</h2>

      <div style={styles.uploadSection}>
        <input
          type="file"
          onChange={handleFileChange}
          style={styles.fileInput}
          accept="image/*"
        />
        <button onClick={handleUpload} style={styles.uploadBtn}>
          Upload Image
        </button>
      </div>

      <div style={styles.gallery}>
        {images.map((img) => (
          <div key={img._id} style={styles.card}>
            <img
              src={`${API}${img.url}`}
              alt="Project"
              style={styles.image}
            />
            <button onClick={() => handleDelete(img._id)} style={styles.deleteBtn}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "1200px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
  },
  title: {
    fontSize: "28px",
    marginTop:"80px",
    marginBottom: "2rem",
    textAlign: "center",
    color: "#003366",
  },
  uploadSection: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "1rem",
    marginBottom: "2rem",
  },
  fileInput: {
    padding: "0.5rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    width: "250px",
  },
  uploadBtn: {
    padding: "0.6rem 1.2rem",
    backgroundColor: "#004f90",
    color: "#fff",
    fontWeight: "bold",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  gallery: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "1rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  image: {
    width: "100%",
    height: "140px",
    objectFit: "cover",
    borderRadius: "6px",
    marginBottom: "1rem",
  },
  deleteBtn: {
    padding: "0.4rem 1rem",
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default AdminDashboard;
