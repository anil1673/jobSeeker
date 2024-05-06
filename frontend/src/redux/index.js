import {createSlice } from "@reduxjs/toolkit";
import { act } from "react";

// createSlice is used to generate action creator and reducer function based on slice reduxstate

const initialValues={
    user:null,
    token:null,
    isLoggedIn:false,
    jobs:[],
}

const jobSeekerSlice=createSlice({
    name:"jobSeeker",
    initialState:initialValues,
    reducers:{
        setLogin:(state,action)=>{
            console.log(action.payload.user)
            state.user=action.payload.user;
            state.token=action.payload.token;
            state.isLoggedIn=true;
        },
        setLogout:(state,action)=>{
            state.user=null;
            state.token=null;
            state.isLoggedIn=false;
        },
        setAllJob:(state,action)=>{
            state.jobs=action.payload;
        },
        setPostJob:(state,action)=>{
            state.jobs.push(action.payload);
        },
        setDeleteJob:(state,action)=>{
            const jobId=action.payload;
            state.jobs=state.jobs.filter(job=>job._id != jobId);

        },
        setEditJob:(state,action)=>{
            const jobId=action.payload._id;
            const updatedJob=action.payload;
            state.jobs=state.jobs.map((job)=>job._id==jobId?updatedJob:job)

            
        },

    }

});

export const {setLogin,setLogout,setAllJob,setPostJob,setDeleteJob,setEditJob}=jobSeekerSlice.actions;
export default jobSeekerSlice.reducer;
