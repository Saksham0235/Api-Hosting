// For connecting with database

const mongoose = require("mongoose");

// URI will be that which we have copied from mongodb website
const connectDB = (uri) => {
    console.log("Connect db")
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
