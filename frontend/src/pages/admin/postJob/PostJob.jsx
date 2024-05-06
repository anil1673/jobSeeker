import { useFormik } from 'formik'
import React from 'react'
import { jobValidationSchema } from '../../../validation'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setEditJob, setPostJob } from '../../../redux'
import "./PostJob.css"
import Navbar from '../../../component/navbar/Navbar'
import { useLocation, useNavigate } from 'react-router-dom'

const PostJob = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let initialJobData = {};
    let jobToEdit = {};

    // getting the data that come throught navigate() from admin's all job list on clicking edit button
    const location = useLocation();


    if (location.state) {
        initialJobData = {
            title: location.state.data.title,
            description: location.state.data.description,
            category: location.state.data.category,
            location: location.state.data.location,
            salary: location.state.data.salary
        }

    } else {
        initialJobData = { title: "", description: "", category: "", location: "", salary: "" }
    }

    const { handleSubmit, handleChange, values, errors } = useFormik({

        initialValues: initialJobData,
        validationSchema: jobValidationSchema,
        onSubmit: async (values, errors) => {
            if (location.state) {
                const jobId = location.state.data._id;
                await axios.patch(`http://localhost:5000/job/updatejob/${jobId}`, values, { withCredentials: true }).then((res) => {

                    // making job post form empty
                    values.title = "";
                    values.description = "",
                        values.category = "",
                        values.location = "",
                        values.salary = "";
                    const job = res.data.job;

                    dispatch(setEditJob(job));
                    navigate("/admin/jobs");

                }).catch(error => {
                    console.log(error)
                })

            } else {
                await axios.post("http://localhost:5000/job/postjob", values, { withCredentials: true }).then((res) => {

                    // making job post form empty
                    values.title = "";
                    values.description = "",
                        values.category = "",
                        values.location = "",
                        values.salary = "";
                    const job = res.data.job;

                    dispatch(setPostJob(job));
                    navigate("/admin/jobs");

                }).catch(error => {
                    console.log(error)
                })
            }
        }

        //for editing posted job

    })
    return (
        <>
            <div className="postJob">

                <Navbar />
                <div className="formContainer">
                    <form onSubmit={handleSubmit} className='formBox'>
                        <div className="inputContainer">
                            <input type="text" name="title" placeholder='Title' onChange={handleChange} value={values.title} />
                        </div>
                        <div className="inputContainer">
                            <input type="text" name="description" placeholder='Description' onChange={handleChange} value={values.description} />
                        </div>
                        <div className="inputContainer">
                            <input type="text" name="category" placeholder='Category' onChange={handleChange} value={values.category} />
                        </div>
                        <div className="inputContainer">
                            <input type="text" name="location" placeholder='Location' onChange={handleChange} value={values.location} />
                        </div>
                        <div className="inputContainer">
                            <input type="text" name="salary" placeholder='Salary' onChange={handleChange} value={values.salary} />
                        </div>

                        {location.state ? <input type="submit" value="Save" /> : <><input type="submit" value="Post Job" /></>}

                    </form>
                </div>
            </div>
        </>
    )
}

export default PostJob