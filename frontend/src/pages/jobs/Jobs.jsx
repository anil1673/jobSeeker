import React from 'react'
import "./Jobs.css"
import { useSelector } from 'react-redux'
import Job from "../../component/job/Job.jsx"

const Jobs = () => {
  const allJobs=useSelector(state=>state.jobs);
  return (
    <>
        <div className="jobs">
            <h1>Latest Jobs Posted</h1>
            <div className="jobList">
              {allJobs.map((job,index)=>{
                return(
                  <>
                  <div className="cardHolder">
                  <Job data={job} key={index}/>
                  </div>
                  </>
                )
              })}
                
            </div>
        </div>
    </>
  )
}

export default Jobs