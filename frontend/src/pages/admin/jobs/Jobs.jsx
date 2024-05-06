import React, { useEffect } from 'react'
import Navbar from '../../../component/navbar/Navbar'
import "./Jobs.css"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Job from '../../../component/admin/job/Job'

const Jobs = () => {
  const adminAllJobs=useSelector(state=>state.jobs);
  const loggedInUser=useSelector(state=>state.user)

  return (
    <>
        <div className="adminJobs">
        <Navbar/>
        <div className="adminJobsList">
            {adminAllJobs.map((job,index)=>{
                if(job.postedBy==loggedInUser._id){
                  return(
                    <>
                      <Job data={job} key={index}/>
                    </>
                  )
                 }
            })}
        </div>
        
    </div>
    </>
  )
}

export default Jobs