const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [false, "Please provide with a Name"],
  },
  email: {
    type: String,
    required: [false, "Please provide an email"],
    unique: true,
    match: [
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "please provide a valid email address",
    ],  
  },
  password: {
    type: String,
    required: [false, "Enter Password"],
  },
});

module.exports = mongoose.model("users", userSchema);
