const express = require("express");
const { Login, Register,getting} = require("../controllers/UserCtrl");
const router = express.Router();

//routes
// router.post("/login", Login);
router.route('/login').post(Login);
// router.post("/register", Register);
router.route('/register').post(Register);
router.route('/get').post(getting);


module.exports = router;

