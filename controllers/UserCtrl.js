const users = require("../models/user");
const bcrypt = require("bcrypt");

const Register = async(req,res) => {
    try {
        const {name,email,password} = req.body;
        console.log(name,email,password);
        const existingusers = await users.findOne({email});
        if(existingusers){
            return res.status(200).send({message:"users Already exits",success:false});
        }
        const user = await users.create({ ...req.body });
        res.status(201).send({message:"Registered",success:true});

    } catch (error) {
        console.log(error);
    }
};
const Login = async (req, res) => {

};

module.exports = { Login, Register};
