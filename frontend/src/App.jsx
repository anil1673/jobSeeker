import React from "react";
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Home from './pages/home/Home.jsx'
import Register from './pages/register/Register.jsx'
import Login from "./pages/login/Login.jsx";
import PostJob from "./pages/admin/postJob/PostJob.jsx";
import Jobs from "./pages/admin/jobs/Jobs.jsx";
import ApplicationForm from "./pages/applicationForm/ApplicationForm.jsx";




const App=()=>{
  return(
    <>
      <BrowserRouter>
      
        <Routes>
          <Route exact path="/map" element={<Map/>}/>
          <Route exact path="/register" element={<Register/>}/>
          <Route exact path="/login" element={<Login/>}/>
          {/* admin mode */}
          <Route exact path="/postjob" element={<PostJob/>}/>
          <Route exact path="/admin/jobs" element={<Jobs/>}/>
          <Route exact path="/applicationform" element={<ApplicationForm/>}/>
          <Route exact path="/" element={<Home/>}/>
          

          
          
          
        </Routes>
      </BrowserRouter>
    </>
  )
};


export default  App;