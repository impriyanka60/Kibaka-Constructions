const express = require("express");
const router = express.Router();
const upload = require("../middlewares/upload");
const verifyToken = require("../middlewares/verifyToken");

const {
  uploadImage,
  getImages,
  deleteImage,
} = require("../controller/imageController");

// Upload a single image
router.post("/upload",verifyToken, upload.single("image"), uploadImage);

// Get all uploaded images
router.get("/get-images", getImages);

// Delete an image by ID (corrected)
router.delete("/delete/:id",verifyToken, deleteImage);

module.exports = router;
