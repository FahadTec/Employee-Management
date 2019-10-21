const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');

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
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//importing routes
let apiRoutes = require('./api/routes/api-routes')

app.get('/', (req, res) => res.send('Welcome Employee Management System - Backend'));
//registering routes
app.use('/api', apiRoutes);
app.use(cors());
app.listen(port, ()=> {
  console.log(`The server is live at ${port}`)
});
