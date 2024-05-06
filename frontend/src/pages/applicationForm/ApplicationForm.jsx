import { useFormik } from 'formik'
import React from 'react'
import { applicatioFormSchema } from '../../validation'


// const {name,email,coverLetter,phone,address,jobId}=req.body;

const ApplicationForm = () => {

    const{handleSubmit, handleChange, values,errors}=useFormik({
        initialValues:{
        name:"",
        email:"",
        coverLetter:"",
        phone:"",
        address:""
        },
        validationSchema:applicatioFormSchema,
        onSubmit:async(values,errors)=>{

        }
    })

    return (
        <div className="formContainer">
            <form className="formBox" onSubmit={handleSubmit}>
                <div className="inputContainer">
                    <input type="text"  name="name" placeholder='name' value={values.name} onChange={handleChange} />
                    <p>{errors.name}</p>
                </div>
                <div className="inputContainer">
                    <input type="text"  name="email" placeholder='email' value={values.email} onChange={handleChange}/>
                    <p>{errors.name}</p>
                </div>
                <div className="inputContainer">
                    <textarea type="text"  name="coverLetter" placeholder='coverLetter' value={values.coverLetter}  onChange={handleChange}/>
                    <p>{errors.name}</p>
                </div>
                <div className="inputContainer">
                    <input type="text"  name="phone" placeholder='phone' value={values.phone} onChange={handleChange}/>
                    <p>{errors.name}</p>
                </div>
                <div className="inputContainer">
                    <input type="text"  name="address" placeholder='address' value={values.address} onChange={handleChange} />
                    <p>{errors.name}</p>
                </div>
                <div className="inputContainer">
                    <input type="file"  name="address" placeholder='address' value={values.address} onChange={handleChange}/>
                    <p>{errors.name}</p>
                </div>
                <input type="submit" value="Apply" className='formApplyBtn' />
            </form>
        </div>
    )
}

export default ApplicationForm