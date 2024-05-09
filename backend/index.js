import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import helmet from "helmet"
import "./db/conn.js"
import dotenv from "dotenv"
dotenv.config({path:"./config.env"})
import authRouter from "./router/auth.js";
import userRouter from "./router/user.js";
import jobRouter from "./router/job.js";
import applicationRouter from "./router/application.js";
import cloudinary from "cloudinary";



const app=express();


app.use(cors({
    origin:"http://localhost:5174",
    credentials:true
}))
app.use(express.json());
app.use(cookieParser());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))



// importing router
app.use("/auth",authRouter);
app.use("/job",jobRouter)
app.use("/application",applicationRouter)
app.use("/user",userRouter);


// cloudinary
cloudinary.v2.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.API_KEY,
    api_secret:process.env.API_SECRET
})



// exception hadleing
app.use((err,req,res,next)=>{
    const errorStatus=err.staus||500;
    const errorMessage=err.message||"something went wrong";

    return res.status(errorStatus).json({
        success:false,
        status:errorStatus,
        message:errorMessage,
        stack:err.stack,
    })

})



app.listen(process.env.PORT,(req,res)=>{
    console.log("express connection success")
})