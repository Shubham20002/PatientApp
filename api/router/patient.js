const express=require('express');
const router=express.Router();
const patientcontroller=require('../controller/patientcontroller');

router.get('/allpatients',(req,res)=>{
    res.send("all");
});

router.post('/addpatient',patientcontroller.addpatient);

module.exports=router;