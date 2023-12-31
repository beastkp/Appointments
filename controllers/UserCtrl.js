const jwt = require("jsonwebtoken");
const users = require("../models/user");
const bcrypt = require("bcrypt");
const { urlencoded } = require("express");

const Register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // console.log(name,email,password);

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const tempUser = { name, email, password: hashedPassword };

    const existingusers = await users.findOne({ email });
    if (existingusers) {
      return res
        .status(200)
        .send({ message: "users Already exits", success: false });
    }
    const user = await users.create({ ...tempUser });
    const token = user.createJwt();
    // res.status(201).json({tempUser});
    //instead of user send token
    // res.status(201).json({ user: { name: user.name }, token }).send({message:"Successful",success:true});
    res.status(201).send({ message: "Successful", success: true });
  } catch (error) {
    console.log(error);
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await users.findOne({ email });
    if (!user) {
      res.status(400).send({ message: "Please register", status: false });
    }
    const isPasswordCorrect = await user.comparePassword(password);
    // const isPasswordCorrect = await bcrypt.compare(password,user.password)

    if (!isPasswordCorrect) {
      res.status(401).send({ message: "You are not authorized" });
    }

    const token = user.createJwt();
    // res.status(200).json({ user: { name: user.name }, token });
    res.status(200).send({ message: "Successfull login", status: true, token });
  } catch (error) {
    console.log(error);
  }
};

const authCtrl = async (req, res) => {
  try {
    const user = await users.findById({ _id: req.user.userId });
    if (!user) {
      res.status(200).send({ message: "user not found", success: false });
    } else {
      res
        .status(200)
        .send({
          message: "Successful",
          success: true,
          data: { name: user.name, email: user.email },
          //this data goes to the frontend via a post request it is used in protected route section of client to store the profile info of the user logged in though redux 
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "auth error", success: false, error });
  }
};

module.exports = { Login, Register, authCtrl };
