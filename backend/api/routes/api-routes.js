
 let router = require('express').Router();
 let user = require('../Controller/userController');
 let VerifyToken = require('../Middleware/verifyToken');
 let requireAdmin = require('../Middleware/checkForAdmin');
 let upload = require('../Middleware/imageLoader')
 //const multer = require('multer');



//Get all data 
router.route('/').get(user.index);


// get,delete,update specific ser

router.route('/viewProfile/:employee_id').get(user.view);
router.route('/deleteProfile/:employee_id').delete(VerifyToken,requireAdmin,user.delete);
router.route('/editProfile/:employee_id').patch(VerifyToken,user.update);
router.route('/uploadImage').post(VerifyToken,upload.single('image'),user.uploadImage)
// add more information to specific user routes
router.route('/addSkills').put(VerifyToken,user.addSkills);
router.route('/addQualification').put(VerifyToken,user.addQualification);
router.route('/addCertifications').put(VerifyToken,user.addCertifications);

module.exports = router;
