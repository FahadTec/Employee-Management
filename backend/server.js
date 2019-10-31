const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');


require('dotenv').config();


//configuring app
const app = express();
const port = 5000;

mongoose.Promise = global.Promise;
mongoose.set('useCreateIndex', true);


//Db connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{ useNewUrlParser: true ,useUnifiedTopology: true });

const connection = mongoose.connection;
connection.on('error',(error)=>console.error(error))
connection.once('open',()=> {
  console.log("mongodb connection successfully created.");
})

//App basic logic
app.use(express.json())
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "*");// update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin,x-auth-token,X-Requested-With, Content-Type, Accept");
 
  next();
});

//body parser
app.use(express.urlencoded({extended:false}))
app.use('/uploads',express.static('uploads'))


//importing routes
let apiRoutes = require('./api/routes/api-routes')
let authRoutes = require('./api/routes/authRoutes')
app.get('/',(req,res)=>{res.json({message: "EMS-Backend"})})

//registering routes
app.use('/auth',authRoutes)
app.use('/Users', apiRoutes);

app.use(cors());
app.listen(port, ()=> {
  console.log(`The server is live at port: ${port}`)
});


