const express = require("express");
const { Login, Register,authCtrl} = require("../controllers/UserCtrl");
const authMiddleware = require('../middleware/authorization');
const router = express.Router();

//routes
router.route('/login').post(Login);
router.route('/register').post(Register);

//Authorized User
router.route('/getUserData').post(authMiddleware,authCtrl);

module.exports = router;

