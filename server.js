require('dotenv').config();
const express = require("express");

const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const adminRoutes = require('./routes/adminRoutes');


const app = express();

// Middleware
//app.use(cors()); // <--- important
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));

app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
const imageRoutes = require("./routes/imageRoutes");

app.use("/api", imageRoutes);
//app.use("/api/admin", require("./routes/adminRoutes"));
app.use('/api/admin', adminRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Serving frontend - comment/uncomment based on production need
 app.use(express.static(path.join(__dirname, "client", "build")));
app.get("*", (req, res) =>
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
 );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
