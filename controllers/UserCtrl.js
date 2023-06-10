const User = require("../models/user");
const bcrypt = require("bcrypt");

const Register = async(req,res) => {
    try {
        const {name,email,password} = req.body;
        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(200).send({message:"USer Already exits",success:false});
        }
        // const salt = await bcrypt.genSalt(10);
        // const hashedPasword = await bcrypt.hash(password,salt);
        // password= hashedPasword;
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send({message:"Registered",success:true});

    } catch (error) {
        console.log(error);
    }
};
const Login = async (req, res) => {};
const getting = async (req, res) => {
    try {
        await User.find({email:req.body.email});
        res.status(201).send({message:"User Found",success:true});
    } catch (error) {
        console.log(error);
        res.status(404).send({message:"Not founf this particular user",success:false});
    }
};

module.exports = { Login, Register,getting };
