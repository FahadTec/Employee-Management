
 let router = require('express').Router();

 router.get('/', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to Employment Management System',
    });
});


var user = require('../Controller/userController')

//Get all data
router.route('/User')
.get(user.index)
.post(user.new);

router.route('/User/:employee_id')
.get(user.view)
.delete(user.delete)
.patch(user.update);

router.route('/User/addInfo/:employee_id').put(user.addQualification);
router.route('/User/signup').post(user.signup);
router.route('/User/login').post(user.login);

module.exports = router;
