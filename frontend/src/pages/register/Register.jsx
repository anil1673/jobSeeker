import React, { useState } from 'react'
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
import { useFormik } from "formik"
import axios from "axios";
import { registerValidationSchema } from '../../validation.js';
import("./Register.css");



const Register = () => {
    const handleEmail = () => {
        setEmail(false)
    }
    const [email, setEmail] = useState(false);
    const [option, setOption] = useState('');
    const formData = new FormData();
    const navigate = useNavigate();

    const handlePageChange=()=>{
        
    }

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            name: "", email: "", phone: "", role: "", password: ""
        },
        validationSchema: registerValidationSchema,
        onSubmit: async (values, errors) => {
            console.log(values)
            await axios.post("http://localhost:5000/auth/register", values).then((res) => {
                navigate("/login");
            }).catch((error) => {
                console.log("register error", error)
            })
        }
    })



    return (
        <>
                  
                {/* register section */}
                <div className="registerContainer formContainer">
                    
                    <form className="registerBox formBox" onSubmit={handleSubmit} >
                       

                        <div className="inputContainer">
                            <input type="text" placeholder='Full Name' name="name" value={values.name} onChange={handleChange} />
                            <p>{errors.name}</p>
                        </div>

                        <div className="inputContainer">
                            <input type="text" placeholder='Email' name="email" value={values.email} onChange={handleChange} onKeyUp={handleEmail} />

                            <p>{email ? "email alredy used" : errors.email}</p>
                        </div>

                        <div className="inputContainer">
                            <input type="phone" placeholder='Phone' name="phone" value={values.phone} onChange={handleChange} />
                            <p>{errors.phone}</p>
                        </div>
                        <div className="inputContainer">
                            <p className="role">Select Role</p>
                            <label>

                                <select name='role' value={values.role} onChange={handleChange}>

                                    <option value="Job Seeker">Job Seeker</option>
                                    <option value="Employer">Employer</option>
                                </select>

                            </label>
                            <p>{errors.role}</p>
                        </div>

                        <div className="inputContainer">
                            <input type="password" placeholder='Password' name="password" value={values.password} onChange={handleChange} />
                            <p>{errors.password}</p>
                        </div>


                        <input type='submit' value="Register" className='registerButton' />
                        <hr />
                        <div className='pageChange'>
                            <p>Already have an account?</p>
                            <NavLink to="/login"> Login</NavLink>
                           
                        </div>
                    </form>
                </div>

        </>
    )
}

export default Register