const mongoose=require('mongoose');

mongoose.connect('mongodb+srv://shubham992284:shubham@cluster0.j0s86oy.mongodb.net/?retryWrites=true&w=majority');

const db=mongoose.connection;

db.on('open',(err)=>{
    console.log('successfully connected to db');
});

module.exports=db;