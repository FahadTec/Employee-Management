let jwt = require('jsonwebtoken')
let User = require('../models/user')

function verifyToken(req, res, next) {
  var token =  (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-auth-token'];
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
    
  jwt.verify(token, process.env.secret, async function(err, decoded) {
    if (err)
     return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    
  
    var info = jwt.decode(token, {complete: true});
    const user = await User.findById(info.payload.user._id)
    if(!user){
      res.status(401).json({error:"no user found"})
    }
    req.isAdmin = user.isAdmin;
    req._id = user._id;
    next();
  });
}

module.exports = verifyToken;