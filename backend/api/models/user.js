const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

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

userSchema.pre('save', function(next) {
  var user = this;
  bcrypt.hash(user.password, 10, function(err, hash) {
      if (err) throw err;
      user.password = hash;
      console.log("LOG: Password hashed & user saved.");
      next();
  });
});

var user = mongoose.model('User',userSchema);

module.exports = user;
