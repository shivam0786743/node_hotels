const mongoose = require('mongoose');
const mongoURL = 'mongodb://localhost:27017/glaxy'
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
