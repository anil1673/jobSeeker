import * as Yup from "yup";


export const registerValidationSchema=Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
    phone: Yup.string().matches(/^[0-9]{10}$/, 'Phone number must be 10 digits').required('Phone number is required'),
    role:Yup.string().oneOf(["Job Seeker", "Employer"], "invalid option").required("Select a role")

})

export const loginValidationSchema=Yup.object({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
   
})

export const jobValidationSchema=Yup.object({
    title:Yup.string().required("job title is required"),
    description:Yup.string().required("job description is required"),
    category:Yup.string().required("job category is required"),
    location:Yup.string().required("job location is required"),
    salary:Yup.string().required("job salary is required"),

})

export const applicatioFormSchema=Yup.object({
    name:Yup.string().required("name is required"),
    address:Yup.string().required("address is required"),
    phone:Yup.string().required("phone is required"),
    coverletter:Yup.string().required("name is required"),
    

})