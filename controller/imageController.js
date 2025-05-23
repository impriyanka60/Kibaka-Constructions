const Image = require("../models/Image");
const path = require("path");

exports.uploadImage = async (req, res) => {
  try {
    const imageUrl = `/uploads/${req.file.filename}`;
    const newImage = new Image({ url: imageUrl });
    await newImage.save();
    res.status(201).json(newImage);
  } catch (err) {
    res.status(500).json({ error: "Failed to upload image" });
  }
};

exports.getImages = async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch images" });
  }
};

//exports.deleteImage = async (req, res) => {
 // try {
    //const image = await Image.findByIdAndDelete(req.params.id);
    //if (!image) return res.status(404).json({ error: "Image not found" });

   // const fs = require("fs");
    //const filePath = path.join(__dirname, "..", "uploads", path.basename(image.url));
    //fs.unlink(filePath, () => {});
    
   // res.json({ message: "Image deleted" });
  //} catch (err) {
   // res.status(500).json({ error: "Failed to delete image" });
 // }
//};
exports.deleteImage = async (req, res) => {
  try {
    console.log("Attempting to delete image with ID:", req.params.id); // ✅ Add this line

    const image = await Image.findByIdAndDelete(req.params.id);
    if (!image) {
      console.log("Image not found"); // ✅ Log this
      return res.status(404).json({ error: "Image not found" });
    }

    const fs = require("fs");
    const filePath = path.join(__dirname, "..", "uploads", path.basename(image.url));
    fs.unlink(filePath, () => {});

    res.json({ message: "Image deleted" });
  } catch (err) {
    console.error("Failed to delete image:", err); // ✅ Log this
    res.status(500).json({ error: "Failed to delete image" });
  }
};
