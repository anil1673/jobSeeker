import Job from "../model/job.js";


// get all job
export const getALLJob=async(req,res,next)=>{
    try{
        const jobs=await Job.find({expired:false});
        res.status(200).json({
            error:false,
            jobs:jobs
        })
    }catch(error){
        next(error)
    }
}

// post job
export const postJob=async(req,res,next)=>{
    try{
        const {title, description, category,location,salary,expired,jobPostedOn}=req.body;
        const postedBy=req.user._id;

        const job=await Job({title, description, category, location,salary,postedBy}).save().then(job=>{
           return res.status(200).json({
                error:false,
                msg:"job posted successfully",
                job
            })
        }).catch(error=>{
            return res.status(200).json({
                error:true,
                msg:"something went wrong while posting job"
            })
        })
    }catch(error){
        next(error)
    }
}

// get my job
export const getMyJob=async(req,res,next)=>{
    try{
        const myJob=await Job.find({postedBy:req.user._id});
        res.status(200).json({
            error:false,
            myJob
        })
    }catch(error){
        next(error)
    }
}

// update job
export const updateJob=async(req,res,next)=>{
    try{
        const {jobId}=req.params;
         let job=await Job.findByIdAndUpdate(jobId,req.body,{new:true});
         res.status(200).json({
            error:false,
            job,
            msg:"job updated successfully"
         })

        
    }catch(error){
        next(error)
    }
}

// delete job
export const deleteJob=async(req,res,next)=>{
    try{
        const {jobId}=req.params;
         let job=await Job.findByIdAndDelete(jobId);
         res.status(200).json({
            error:false,
            msg:"job deleted successfully"
         })

        
    }catch(error){
        next(error)
    }
}

