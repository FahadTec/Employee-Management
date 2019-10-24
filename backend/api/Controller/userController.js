const user = require("../models/user")
const bcrypt = require("bcrypt")
const credentialValidation = require("../validation/loginValidation")
const validateRegisterInput = require("../validation/signupValidation")


//function for validating password using bcrypt 
async function validatePassword(plainPassword, hashedPassword) {
    return await bcrypt.compare(plainPassword, hashedPassword);
}


//signup
exports.signup = async function(req,res){
    try{
        
       const {errors, isValid} =  validateRegisterInput(req.body);
       if(!isValid){
        return res.status(401).json(errors);
       }
        // check email and password validatios
        

        const {firstName,lastName, email, password, isAdmin} = req.body;
       
      

        // check if email exists
        const User = await user.findOne({email});
        if(User){
            res.status(400).json({error: "Email already exists."});
        }

       
         
         const newUser = new user ({firstName,  lastName, email, password , isAdmin})
         const response= await newUser.save();
         if(response){
            res.status(201).json({data: newUser,msg: "You have signed up successfully"});
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
        
        
        const u = await user.findOne({email});
        
        if(!u){
            res.status(404).json({error: "Email not found"});
        }
        const pwd = await validatePassword(password ,u.password);
        if(!pwd){
            res.status(401).json({error: "incorrect password"});
        }

        res.status(200).json({data:u, msg: "Logged in Successfully"})
    }
    catch(err){
        res.status(400).json(err)
    }

};



//get all employees
exports.index=  async function(req,res){
    try{
         const docs = await user.find();
         if(!docs || docs[0]=='' || docs.length==0 || docs[0] == undefined){
              res.status(404).json( {message : "user  profile can not be fetched"});
         }
         else {
               res.status(200).json(docs)
         }
  
    }
    catch (err){
          res.status(400).json(err)
        }
    };
  
  // create new employee
  exports.new = async function (req,res){
     // Create a new user
    try{
        const employeeDetails = new user(req.body);
        const response = await employeeDetails.save();
        if(response){
          res.status(201).json({msg: "user profile created"});
        }
    }
    catch(err) {
      res.status(400).json(err)
    }
  
  };
  
  
  // view specific employee
  exports.view = async function(req,res){
    const id = req.params.employee_id;
  
    try{
        const doc = await user.findById(id);
        
         if(!doc || doc == undefined){
              res.status(404).json( {message : "employee profile can not be fetched"});
         }
         else {
               res.status(200).json(doc)
         }
  
    }
    catch (err){
          res.status(400).json(err)
        }
    };
  
  // update information based on Employee's Id
  exports.update = async function(req,res){
    const id = req.params.employee_id;
    try{
      const emp = await user.findById(id);
       if(!emp || emp == undefined){
            res.status(404).json( {message : "employee profile can not be fetched"});
       }
       emp.set(req.body);
       const response = await emp.save();
       if(response){
         res.status(200).json({msg: "user profile updated"});
       }
  
    }
    catch(err){
      res.status(400).json(err)
    }
  }

  // delete specific employee
  exports.delete = async function(req,res){
    const id = req.params.employee_id;
    try{
      const response = await user.findByIdAndRemove(id,function (err, user) {
        if (err){
            res.status(500).send("There was a problem deleting the user.");
        }
        res.status(204).send("User: "+ id +" was deleted.");
      });
    }
    catch (err){
          res.status(400).json(err)
        }
  };
  
  // updates employess profile if more qualification are to be added
  exports.addQualification = async function(req,res){
     const id = req.params.employee_id;
     
     var data = "";
     if(req.body.qualifications != undefined && req.body.qualifications != ''){
             data = {$addToSet: { qualifications: req.body.qualifications}};
     }
     
     
     try{
         const emp = await user.findByIdAndUpdate(id, data);
           
          if(!emp || emp == undefined){
            res.status(404).json( {message : "employee profile can not be fetched"});
          }  
          if(req.body.qualifications == undefined || req.body.qualifications == ''){
          
            res.status(401).json({message:"Employee Qualification not Updated; No data provided"});
          }
          else{
            res.status(200).json( {message : "employee Qualification updated"});
          }
          
        }
     catch(err){
          res.status(400).json(err);
     }
     
  };
  

 // updates employess profile if more skills are to be added
  exports.addSkills = async function(req,res){
    const id = req.params.employee_id;
    
    var data = "";
    if(req.body.skills != undefined && req.body.skills != ''){
            data = {$addToSet: { skills: req.body.skills}};
    }
    
    
    try{
        const emp = await user.findByIdAndUpdate(id, data);
          
         if(!emp || emp == undefined){
           res.status(404).json( {message : "employee profile can not be fetched"});
         }  
         if(req.body.skills == undefined || req.body.skills == ''){
         
           res.status(401).json({message:"Employee skills not Updated; No data provided"});
         }
         else{
           res.status(200).json( {message : "employee skills updated"});
         }
         
       }
    catch(err){
         res.status(400).json(err);
    }
    
 };

 // updates employess profile if more certifications are to be added
 exports.addCertifications = async function(req,res){
    const id = req.params.employee_id;
    
    var data = "";
    if(req.body.certifications != undefined && req.body.certifications != ''){
            data = {$addToSet: { certifications: req.body.certifications}};
    }
    
    
    try{
        const emp = await user.findByIdAndUpdate(id, data);
          
         if(!emp || emp == undefined){
           res.status(404).json( {message : "employee profile can not be fetched"});
         }  
         if(req.body.certifications == undefined || req.body.certifications == ''){
         
           res.status(401).json({message:"Employee certifications not Updated; No data provided"});
         }
         else{
           res.status(200).json( {message : "employee certifications updated"});
         }
         
       }
    catch(err){
         res.status(400).json(err);
    }
    
 };