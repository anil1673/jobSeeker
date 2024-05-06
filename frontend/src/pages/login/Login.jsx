import { useFormik } from 'formik';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { loginValidationSchema } from '../../validation.js';
import("./Login.css");
import {useDispatch} from "react-redux"
import { setLogin } from '../../redux/index.js';




const Login = () => {
    const navigate = useNavigate()
    const dispatch=useDispatch();
    const [email, setEmail] = useState(false);

    const { handleSubmit, handleChange, values, errors } = useFormik({
        validationSchema: loginValidationSchema,
        initialValues: {
            email: "",
            password: ""
        },
        onSubmit: async (values, errors) => {
            await axios.post("http://localhost:5000/auth/login", values, { withCredentials: true }).then((res) => {
                const user = res.data.user;
                const token = res.data.token;
                console.log(user,token)
                dispatch(setLogin({user,token}))
                navigate("/")

            }).catch(error => {
                console.log("login error")
            })
        }
    })

    return (
        <>
            <div className="loginContainer formContainer">

                <form className="loginBox formBox" onSubmit={handleSubmit} >
                    <div className="inputContainer">
                        <input type="text" placeholder='Email' name="email" value={values.email} onChange={handleChange} />

                        <p>{email ? "email alredy used" : errors.email}</p>
                    </div>

                    <div className="inputContainer">
                        <input type="password" placeholder='Password' name="password" value={values.password} onChange={handleChange} />
                        <p>{errors.password}</p>
                    </div>
                    
                    <input type='submit' value="Login" className='loginButton' />
                    <hr />
                    <p className='forgetPass'>Forget Password?</p>
                    <div className='pageChange'>
                            
                            <NavLink to="/register"> Create New Account</NavLink>
                        
                    </div>
                </form>
            </div>
        </>
    )
}

export default Login