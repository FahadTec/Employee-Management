const user = require("../models/user")
const passport = require('passport')
const jwt = require('jsonwebtoken');
const credentialValidation = require("../validation/loginValidation")
const validateRegisterInput = require("../validation/signupValidation")

exports.signup = async function(req,res){
    
    try{
         // check email and password validatios
       const {errors, isValid} =  validateRegisterInput(req.body);
       if(!isValid){
        return res.status(401).json(errors);
       }
      
        const {firstName,lastName, email, password, isAdmin} = req.body;

        // check if email exists
        const User = await user.findOne({email});
        if(User){
            res.status(400).json({error: "Email already exists."});
        }
        //var token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {expiresIn: 86400}) 
        const newUser = new user ({firstName,  lastName, email, password})
        const response= await newUser.save();
        if(response){
            res.status(201).json({sucess:true, msg: "You have signed up successfully"});
         }
        

    }
    catch(err){
        res.status(400).json(err);
    }
};


// login 
exports.login = async function(req,res,next){
    const {errors, isValid} = credentialValidation(req.body.email,req.body.password);
    if(!isValid){
            return res.status(401).json(errors);
    }
    passport.authenticate('local', async (err, user, info) => {    
    try {
        if(err || !user){
        const error = new Error('An Error occured')
        return next(error);
        }
        req.login(user, { session : false }, async (error) => {
        if( error ) return next(error)
        //We don't want to store the sensitive information such as the
        //user password in the token so we pick only the email and id
        console.log(user.isAdmin)
        const body = { _id : user._id, isAdmin : user.isAdmin };
        //Sign the JWT token and populate the payload with the user email and id
        const token = jwt.sign({ user : body },process.env.secret);
        //Send back the token to the user
        return res.status(200).json({ token:token });
        });     
    } catch (error) {
            return next(error);
    }
})(req, res, next);
             
             
             
        
        
    
    
        
        
  
   
    

};
