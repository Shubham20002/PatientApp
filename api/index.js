const express=require('express');
const port=8000;

const app=express();

app.get('/',(req,res)=>{
    res.send('heelo from express server');
})

app.listen(port,(err)=>{
    if(err){
        console.log("error while server starting");
    }
    else{
        console.log("server start on port no:",port);
    }
});