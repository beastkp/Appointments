const Appointment = require("../models/appointments");


const getAllAppointments = async(req,res)=>{
    const appnt = await Appointment.findById(req.user.userId).sort('createdAt');
    res.status(200).json({appnt,count:appnt.length});
}

const createAppointment = async(req,res)=>{
    // console.log(req.body.user);
    // req.body.createdBy = req.user.userId
    const appnt = await Appointment.create(req.body);
    res.status(201).json({appnt});

}

module.exports = {getAllAppointments,createAppointment};