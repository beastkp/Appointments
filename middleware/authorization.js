const jwt = require("jsonwebtoken");
const users = require("../models/user");
const UnauthenticatedError  = require('../errors/Unauthenticated');
require('dotenv').config();

const auth = async (req,res,next)=>{
    const authHeader = req.headers.authorization;
    if(!authHeader ||!authHeader.startsWith("Bearer")){
        // throw new UnauthenticatedError("Authentication Invalid");
        console.log("Backend here!!, no token ")
    }
    const token = authHeader.split(' ')[1];
    
    try {
        const payload = jwt.verify(token,process.env.JWT_SECRET);

        //attaching the user to routes
        req.user = {userId:payload.userId,name:payload.name};
        next();
    } catch (error) {
        throw new UnauthenticatedError("Authentication invalid");   
    }
}

module.exports = auth;