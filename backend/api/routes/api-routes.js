
 let router = require('express').Router();

 router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to Employment Management System',
    });
});


var user = require('../Controller/userController')

//Get all data and create new user
router.route('/User')
.get(user.index)
.post(user.new);

// get,delete,update specific user
router.route('/User/:employee_id')
.get(user.view)
.delete(user.delete)
.patch(user.update);

// add more information to specific user routes
router.route('/User/addSkills/:employee_id').put(user.addSkills);
router.route('/User/addQualification/:employee_id').put(user.addQualification);
router.route('/User/addCertifications/:employee_id').put(user.addCertifications);

//login and sign-up routes
router.route('/User/signup').post(user.signup);
router.route('/User/login').post(user.login);

module.exports = router;
