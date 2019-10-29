const passport = require('passport');
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
// load user model
const User = require('../models/user'); 
require('dotenv').config();



const localLogin = new LocalStrategy({usernameField: 'email',passwordField:'password'},
function(email,password,done){
        
        User.findOne({email: email},function(err,user){
            
            if(err){return done(err);}
            if(!user){ return done(null,false, {message: "Email not registered."}) }
            bcrypt.compare(password, user.password ,function(err,isMatch){
                if(err){return done (err);}
                if(isMatch){
                    
                    return done(null,user,{ message : 'Logged in Successfully'})
                } else {
                    return done(null,false,{message:'password incorrect'})
                }
            })
        })
})



  passport.use(localLogin);