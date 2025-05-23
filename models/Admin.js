const mongoose = require("mongoose");
const adminSchema= new mongoose.Schema({
    Username:String,
    Password:String,

})
module.exports=mongoose.model("Admin",adminSchema);