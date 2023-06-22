const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
require("dotenv").config()
const bcrypt = require("bcrypt")

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

userSchema.methods.createJwt = function(){
  return jwt.sign({userId:this._id,name:this.name},process.env.JWT_SECRET,{
    expiresIn: process.env.JWT_LIFETIME
  });
};

userSchema.methods.comparePassword = async function(candidatePassword){
  const isMatch = await bcrypt.compare(candidatePassword,this.password);
  return isMatch;
}

module.exports = mongoose.model("users", userSchema);
