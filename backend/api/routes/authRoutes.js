let router = require('express').Router();
let credentials= require('../Controller/authController')
let VerifyToken = require('../Middleware/verifyToken');
let isAdmin = require('../Middleware/checkForAdmin')

router.route('/signup').post(VerifyToken,isAdmin,credentials.signup);
router.route('/login').post(credentials.login);

module.exports = router;
