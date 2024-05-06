const express=require('express');
const router=express.Router();
const Patient=require('../model/patient.js')
const patientcontroller=require('../controller/patientcontroller');

router.get('/allpatients',async(req,res)=>{
    
    try{
        const patients=await Patient.find({});
        res.status(200).json({
            message:"all user",
            data:patients
        })

    }
    catch(error){
        return res.status(500).json({
            mesage:"internal server error",
            
         })
    }});

router.post('/addpatient',patientcontroller.addpatient);

module.exports=router;