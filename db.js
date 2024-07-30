const mongoose = require('mongoose');
require('dotenv').config();
//const mongoURL = 'mongodb://localhost:27017/glaxy'
//const mongoURL= 'mongodb+srv://shivamdhiman05:shivam420@cluster0.fxmziz2.mongodb.net/'
const mongoURL= process.env.MONGODB_URL;
mongoose.connect(mongoURL)
const db= mongoose.connection;
db.on('connected', ()=>{
  console.log('connected to MongoDB server');
});
db.on('error', (err)=>{
  console.log(' MongoDB connection error',err);
});
db.on('disconnected', ()=>{
  console.log('MongoDB server is disconnected');
});
module.exports=db;
