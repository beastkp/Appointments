const express = require("express");
const {createAppointment,getAllAppointments}  = require('../controllers/AppointmentsCtrl')
const router = express.Router();


router.route('/makeappointment').post(createAppointment);
router.route("/allappointments").get(getAllAppointments);

module.exports = router;
