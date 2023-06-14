const express = require("express");
const { Login, Register} = require("../controllers/UserCtrl");
const router = express.Router();

//routes
router.route('/login').post(Login);
router.route('/register').post(Register);

module.exports = router;

