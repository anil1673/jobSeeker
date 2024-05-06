import express from "express"
import { deleteApplication, getAllApplicationEmployer } from "../controller/application.js";
import { authenticateToken } from "../authenticate.js";

const applicationRouter=express.Router();

applicationRouter.get("/getallapplication",authenticateToken,getAllApplicationEmployer);
applicationRouter.delete("/deleteapplication/:applicationId",authenticateToken,deleteApplication)

export default applicationRouter;