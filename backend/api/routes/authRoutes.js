let router = require('express').Router();
var credentials= require('../Controller/authController')
var VerifyToken = require('../Middleware/verifyToken');
var isAdmin = require('../Middleware/checkForAdmin')

router.route('/signup').post(VerifyToken,isAdmin,credentials.signup);
router.route('/login').post(credentials.login);

module.exports = router;
