import express from "express"
import { authenticateToken } from "../authenticate.js";
import { deleteJob, getALLJob, getMyJob, postJob, updateJob } from "../controller/job.js";

const jobRouter=express.Router();
jobRouter.post("/postjob",authenticateToken,postJob);
jobRouter.get("/getalljob",authenticateToken,getALLJob);
jobRouter.get("/getmyjob",authenticateToken,getMyJob);
jobRouter.patch("/updatejob/:jobId",authenticateToken,updateJob);
jobRouter.delete("/deletejob/:jobId",authenticateToken,deleteJob);


export default jobRouter

