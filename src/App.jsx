import React from 'react'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import RegisterPage from "./components/RegisterPage";
import StudentReg from "./components/StudentReg";
import TeacherReg from "./components/TeacherReg";
import InstituteReg from './components/InstituteReg';
import Subjects from "./components/Subjects";
import Science from "./components/Science";
import Social from "./components/Social";
import Assignment from "./components/Assignment";
import Certificate from "./components/Certificate";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registerpage" element={<RegisterPage/>}/>
          <Route path="/student" element={<StudentReg/>}/>
          <Route path="/teacher" element={<TeacherReg/>}/>
          <Route path="/institute" element={<InstituteReg/>}/>
          <Route path="/subject" element={<Subjects/>}/> 
          <Route path="/subject" element={<Subjects/>}/> 
          <Route path="/science" element={<Science/>}/>
          <Route path="/social" element={<Social/>}/>
          <Route path="/assignment" element={<Assignment/>}/>
          <Route path="/certificate" element={<Certificate/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
