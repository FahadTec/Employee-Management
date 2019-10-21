const mongoose = require('mongoose')


const  userSchema = new mongoose.Schema({
    
  firstName:{
    type: String,
    required: true

  },
  lastName:{
    type: String,
    required: true

  },
  email: {
    type: String,
    unique: true,
    required: true

  },
  password:{
    type: String,
    minlength: 7,
    required: true

  },
  isAdmin: {
    type: Boolean,
    default: false
  },
  
  age: {
      type: Number,
      
  },
  gender:{
      type: String,
      
  },
  phoneNumber:{
      type: String,
      
  },
  city:{
      type: String,
     
  },
  country:{
      type: String,
      
  },
  skills: {
      type: Array,
      default: []
   },
  qualifications: [{
          degreeName: String,
          yearOfPassing: Number,
          instituteName: String,
          percentage: Number,
          cgpa: Number
  }],
  certifications:[{
          name: String,
          issuedBy : String,
          issueDate: Date,
          location: String
  }],


});



var user = mongoose.model('User',userSchema);

module.exports = user;
