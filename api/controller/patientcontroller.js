const Patient = require("../model/patient")

//api to add new Patient
module.exports.addpatient=async(req,res)=>{
    try{
        console.log(req.body);
        const patient=await Patient.findOne({email:req.body.email});
        if(patient){
            return res.status(401).json({
                mesage:"patinet already present",
                
             })
        }
        else{
            const doc=new Patient();
        doc.name=req.body.name;
        doc.age=req.body.age;
        doc.gender=req.body.gender;
        doc.email=req.body.email;
        await doc.save();
         return res.status(200).json({
            mesage:"new patinet added successfully",
            
         })

        }
    }
    catch(error){
        return res.status(500).json({
            mesage:"internal server error",
            
         })
    }

}

//api to get all patients

// module.exports.allpatients=async(req,res)=>{
    
//     try{
//         const patients=await Patient.find({});
//         res.status(200).json({
//             message:"all user",
//             data:patients
//         })

//     }
//     catch(error){
//         return res.status(500).json({
//             mesage:"internal server error",
            
//          })
//     }
// }