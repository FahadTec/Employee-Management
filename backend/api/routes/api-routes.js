
 let router = require('express').Router();
 var user = require('../Controller/userController');

 var VerifyToken = require('../Middleware/verifyToken');
 var isAdmin = require('../Middleware/checkForAdmin')
//Get all data 
router.route('/').get(user.index);


// get,delete,update specific ser

router.route('/viewProfile/:employee_id',).get(user.view);
router.route('/deleteProfile/:employee_id',).delete(VerifyToken,isAdmin,user.delete);
router.route('/editProfile',).patch(VerifyToken,user.update);

// add more information to specific user routes
router.route('/addSkills').put(VerifyToken,user.addSkills);
router.route('/addQualification').put(VerifyToken,user.addQualification);
router.route('/addCertifications').put(VerifyToken,user.addCertifications);

module.exports = router;
