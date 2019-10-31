const user = require("../models/user")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const credentialValidation = require("../validation/loginValidation")
const validateRegisterInput = require("../validation/signupValidation")

async function hashPassword(password) {
    return await bcrypt.hash(password, 10);
   }
async function validatePassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
}


exports.signup = async function(req,res){
    
    try{
         // check email and password validatios
       const {errors, isValid} =  validateRegisterInput(req.body);
       if(!isValid){
        return res.status(401).json(errors);
       }
      
        const {firstName,lastName, email, password} = req.body;

        // check if email exists
        const User = await user.findOne({email});
        if(User){
            res.status(400).json({error: "Email already exists."});
        }
        const hashedPassword = await hashPassword(password);
        
        const newUser = new user ({firstName,  lastName, email, password:hashedPassword})
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
exports.login = async function(req,res){
    try{
    const {errors, isValid} = credentialValidation(req.body.email,req.body.password);
    if(!isValid){
            return res.status(401).json(errors);
    }
    const email = req.body.email;
    const password = req.body.password;
    const User = await user.findOne({email});
    if(!User){
        res.status(400).json({error: "Email not found."});
    }
    const pwd = await validatePassword(password ,User.password);

    if(!pwd){
        res.status(400).json({error: "incorrect password"});
    }
    const payload = { _id:User._id, isAdmin: User.isAdmin }
    const token = jwt.sign({ user : payload },process.env.secret);
    res.status(200).json({id:User._id, isAdmin:User.isAdmin,token:token, msg: "Logged in Successfully"})
    
  
    }
    catch(err){
        res.status(401).json({error:err})
    }
};
