import { useFormik } from 'formik'
import React from 'react'
import { applicatioFormSchema } from '../../validation'
import axios from 'axios';


// const {name,email,coverLetter,phone,address,jobId}=req.body;

const ApplicationForm = () => {


    const{handleSubmit, handleChange, setFieldValue,values,errors}=useFormik({
        initialValues:{
        name:"",
        email:"",
        phone:"",
        address:"",
        cv:"",
        },
        validationSchema:applicatioFormSchema,
        onSubmit:async(values,errors)=>{
            await axios.post("http://localhost:5000/application/postApplicaiton",values,{withCredentials:true}).then((res)=>{
                console.log(res)
            }).catch((error)=>{
                console.log("error while posting applciation form",cv)
            })

        }
    });

    return (
        <div className="formContainer">
            <form className="formBox" onSubmit={handleSubmit}>
                <div className="inputContainer">
                    <input type="text"  name="name" placeholder='name' value={values.name} onChange={handleChange} />
                    <p>{errors.name}</p>
                </div>
                <div className="inputContainer">
                    <input type="text"  name="email" placeholder='email' value={values.email} onChange={handleChange}/>
                    <p>{errors.email}</p>
                </div>
               
                <div className="inputContainer">
                    <input type="number"  name="phone" placeholder='phone' value={values.phone} onChange={handleChange}/>
                    <p>{errors.phone}</p>
                </div>
                <div className="inputContainer">
                    <input type="text"  name="address" placeholder='address' value={values.address} onChange={handleChange} />
                    <p>{errors.address}</p>
                </div>
                <div className="inputContainer">
                    <input type="file" accept='.png, .jpg,.webp' name="cv" placeholder='cv'  onChange={(e)=>{
                        setFieldValue('cv',e.target.files[0])
                    }}/>
                    <p>{errors.cv}</p>
                </div>
                <input type="submit" value="Apply" className='formApplyBtn' />
            </form>
        </div>
    )
}

export default ApplicationForm