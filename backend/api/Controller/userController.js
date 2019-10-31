const user = require("../models/user")
const multer = require('multer')

//RETURN ALL THE USERS IN THE DATABASE

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
  
  // view specific employee
  exports.view = async function(req,res){
    const id = req.params.employee_id;
  
    try{
        const doc = await user.findById(id ,{password:0});
        
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
    
    var id = " ";
    if(req.isAdmin){
       id = req.params.employee_id
    }
    else {
        id = req._id
    }
   
    try{
      //console.log(req.user)
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
      const response = await user.findByIdAndRemove(id);
      if(response){
        res.status(204).json({message:"user deleted"});
      
      } else{
        res.status(500).json({msg:"There was a problem deleting the user."});
      }
      
    }
    catch (err){
          res.status(400).json(err)
        }
  };
  
  // updates employess profile if more qualification are to be added
  exports.addQualification = async function(req,res){
     const id = req._id;
     
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
    const id = req._id;
    
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
    const id = req._id;
    
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

 exports.uploadImage = async function (req,res){
     // console.log(req.body);
      
      try{
          const id = req._id
          const image = req.file
          if (!image) {
            res.status(400).send({status: false,data: 'No file is selected.'});
          }
          const emp = await user.findById(id);
          if(!emp || emp == undefined){
            res.status(404).json( {message : "employee profile can not be fetched"});
          }
          emp.image = req.file.path
          const response = await emp.save();
          if(response){
            res.status(200).json({status: true, msg: "user image updated"});
          }
      }
      catch(err){
            res.status(400).json(err)
      }

      
 }