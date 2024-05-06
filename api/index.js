const express=require('express');
const port=8000;
const db=require('./config/mongodb');

const app=express();
app.use(express.urlencoded());

app.get('/',(req,res)=>{
    res.send('heelo from express server');
})

app.use('/',require('./router/patient.js'))
app.listen(port,(err)=>{
    if(err){
        console.log("error while server starting");
    }
    else{
        console.log("server start on port no:",port);
    }
});