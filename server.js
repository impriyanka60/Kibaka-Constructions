require('dotenv').config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

const adminRoutes = require('./routes/adminRoutes');


const app = express();
const corsOptions = {
  origin: 'https://kibaka-frontend.onrender.com',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};


app.use(cors(corsOptions));
//app.options('*', cors(corsOptions));

//app.use(cors({
 // origin: process.env.FRONTEND_URL ,
  //credentials: true
//}));
//app.options("*", cors({
  //origin: allowedOrigin,
  ////credentials: true,

//}));

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
 //app.use(express.static(path.join(__dirname, "client", "build")));
//app.get("*", (req, res) =>
  //res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
 //);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
