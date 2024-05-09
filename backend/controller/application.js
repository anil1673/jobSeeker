import express from "express";
import Application from "../model/application.js";


// post application
export const postApplication=async(req,res,next)=>{
    try{

         if(!req.files || Object.keys(req.files).length === 0 ){
            return res.status(422).json({
                error:true,
                msg:"Resume File is required"
            })
         }
         const {resume}= req.files;
         const allowedFormats=["image/png", "image/jpg", "image/webp"];

         if(!allowedFormats.includes(resume.mimetype)){
            return res.status(415).json({
                error:true,
                msg:"invalid file type. Please upload your resume in PNG, JPG or WEBP Format. "
            })
         }

         const cloudinaryResponse=await cloudinary.uploader.upload(resume.tempFilePath);

         if(!cloudinaryResponse || cloudinaryResponse.error){
            return res.status(401).json({
                error:true,
                msg:"file upload error"
            })
         }

         const {name,email,cv,phone,address,jobId}=req.body;

         const applicantId = {
            user: req.user._id,
            role: "Job Seeker",
          };
          const jobDetails=await Job.findById(jobId);

          const employerId = {
            user: jobDetails.postedBy,
            role: "Employer",
          };

        //   if(!name || !email || !cv || !phone || !address || !applicantId || !employerId || !resume){
        //    return  res.status(400).json({
        //         error:400,
        //         msg:"please fill all field"
        //     })
        //   }

          const application = await Application.create({
            name,email,cv,phone,address,applicantId,employerId,resume: {
              public_id: cloudinaryResponse.public_id,
              url: cloudinaryResponse.secure_url,
            },
          });
          res.status(200).json({
            success: true,
            message: "Application Submitted!",
            application,
          });    
    }catch(error){
        next(error)
    }
}


// get my job
export const getAllApplicationEmployer=async(req,res,next)=>{
    try{
        const {role}=req.user;

        if(role=="Employer"){
           return res.status(400).json({
                error:true,
                msg:"Employer is not allowed to access this resources"
            })
        }

        const applications=await   Application.find({'employerId.user':_id});

        return res.status(200).json({
            error:false,
            applications
        })

    }catch(error){
        next(error)
    }
}

// delete application
export const deleteApplication=async(req,res,next)=>{
    try{
        const {applicationId}=req.params;
        const {role}=req.user;
        if(role=="Employer"){
            return res.status(400).json({
                 error:true,
                 msg:"Employer is not allowed to access this resources"
             })
         }
         let application=await Application.findByIdAndDelete(applicationId);
         res.status(200).json({
            error:false,
            msg:"application deleted successfully"
         })
    }catch(error){
        next(error)
    }
}

