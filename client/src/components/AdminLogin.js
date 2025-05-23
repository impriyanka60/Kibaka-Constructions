import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/admin/login`, { password });

      // Save token in localStorage
      localStorage.setItem("adminToken", res.data.token);
      navigate("/admin-dashboard");
    } catch (error) {
      alert("Invalid password or server error");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Admin Login</h2>
        <input
          type="password"
          placeholder="Enter Admin Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleLogin} style={styles.button}>
          Login
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
    width: "320px",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  title: {
    margin: 0,
    fontSize: "24px",
    textAlign: "center",
    color: "#004f90",
  },
  input: {
    padding: "0.75rem 1rem",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "16px",
    outline: "none",
  },
  button: {
    padding: "0.75rem",
    backgroundColor: "#004f90",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default AdminLogin;// now should i paste this? 