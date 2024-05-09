import express from "express"
import { deleteApplication, getAllApplicationEmployer, postApplication } from "../controller/application.js";
import { authenticateToken } from "../authenticate.js";
import { applicatioFormSchema } from "../../frontend/src/validation.js";

const applicationRouter=express.Router();

applicationRouter.get("/getallapplication",authenticateToken,getAllApplicationEmployer);
applicatioFormSchema.post("/postApplicaiton",authenticateToken,postApplication)
applicationRouter.delete("/deleteapplication/:applicationId",authenticateToken,deleteApplication)

export default applicationRouter;