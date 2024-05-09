import React from 'react'
import "./Job.css"
import { NavLink, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Job = ({data}) => {
    const navigate=useNavigate();
    
    
    return (
        <>
            <div className="job">
                <h3 className='title'>{data.title}</h3>
                <p className='desc'>{data.description}</p>
                <div className="extraInfo">
                    <div className="extraInfoLeft">
                        <div className="category"><h4>Category: </h4><p>{data.category}</p></div>
                        <div className="location"><h4>Location: </h4><p>{data.location}</p> </div>
                        <div className="salary"><h4>Salary:</h4><p>{data.salary}</p></div>
                    </div>
                    <button className='applyBtn' onClick={()=>{navigate("/applicationform")}}>Apply Now</button>
                    
                </div>
            </div>
        </>
    )
}

export default Job