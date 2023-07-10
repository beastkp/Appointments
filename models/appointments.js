const mongoose = require("mongoose");
const moment = require("moment");

const AppointmentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxlength: 50,
  },
  illness: {
    type: String,
    required: true,
    maxlength: 50,
  },
  email: {
    type: String,
    match: [
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
      "please provide a valid email address",
    ],
  },
  date: {
    type: Date,
    required: [true, "Please Provide Date"],
    get: (date) => moment(date).format("DD-MM-YYYY"),
  },
  time: {
    type: String,
    required: [true, "Please Provide time "],
  },
});

module.exports = mongoose.model("Appointment", AppointmentSchema);
