// This is for creating schema of the document

const mongoose = require("mongoose");

// This is Schema That how and which data has to be entered 
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "Price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default:4.5
  },
  createdAt:{
    type:Date,
    default:Date.now(),
  },
  company:{
    type:String,
// We only have listed companies to  choose from given values    
    enum:["samsung","oneplus","nokia","mi","oppo","apple"]
    
}
});


// Creating Table it will contain the schema's
module.exports= mongoose.model('Product',productSchema);
