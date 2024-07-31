// import React from 'react'

// function TeacherReg() {
//   return (
//     <div>
//       <h1>Teacher Registration</h1>
//     </div>
//   )
// }

// export default TeacherReg

import React,{useState} from 'react'
// import "./TeachReg.css";
import { Link} from "react-router-dom";

const TeacherReg = () => {

  const [teacherFirstName, setTeacherFirstName] = useState("");
  const [teacherLastName, setTeacherLastName] = useState("");
  const [teacherFullName, setTeacherFullName] = useState("");
  const [teacherDateOfBirth, setTeacherDateOfBirth] = useState("");
  const [teacherPhoneNo,setTeacherPhoneNo]=useState("");
  const [teacherAddress,setTeacherAdress]=useState("");
  const [teacherUserName,setTeacherUserName]=useState("");
  const [teacherEmail,setTeacherEmail]=useState("");
  const [teacherPassword, setTeacherPassword] = useState("");
  const [teacherExperience,setTeacherExperience]=useState("");
  const [teacherSubjects,setTeacherSubjects]=useState("");
  // const navigate=useNavigate();

  const handleSubjectChange=(e)=>{
    setTeacherSubjects(e.target.value);
  }

  const handleExperienceChange=(e)=>{
    setTeacherExperience(e.target.value)
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();

  }

  return (
    <div className="register-section">
      <form onSubmit={handleSubmit}>
      <h1 className="heading">Teacher Registration</h1>
          <div className="card-one">
            <label htmlFor="teacherFirstName">First Name :</label>
            <input
              type="text"
              placeholder="First Name"
              name="teacherFirstName"
              value={teacherFirstName}
              onChange={(e) => setTeacherFirstName(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="card-one">
            <label htmlFor="teacherLastName">Last Name :</label>
            <input
              type="text"
              placeholder="Last Name"
              name="teacherLastName"
              value={teacherLastName}
              onChange={(e) => setTeacherLastName(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="card-one">
            <label htmlFor="teacherFullName">Full Name :</label>
            <input
              type="text"
              placeholder="Full Name"
              name="teacherFullName"
              value={teacherFullName}
              onChange={(e) => setTeacherFullName(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="card-one">
            <label htmlFor="teacherDateOfBirth">Date Of Birth :</label>
            <input
              type="date"
              placeholder="dd-mm-yy"
              name="teacherDateOfBirth"
              value={teacherDateOfBirth}
              onChange={(e) => setTeacherDateOfBirth(e.target.value)}
              className="input"
              required
            />
          </div>
          <div className="card-one">
            <label htmlFor="teacherPhoneNo.">phone No :</label>
            <input
              type="text"
              placeholder="phone No."
              name="teacherPhoneNo."
              value={teacherPhoneNo}
              onChange={(e) => setTeacherPhoneNo(e.target.value)}
              className="input"
              required
            />
          </div>
          <div className="card-one">
            <label htmlFor="teacherAdress">Address :</label>
            <input
              type="text"
              placeholder="Adress"
              name="teacherAdress"
              value={teacherAddress}
              onChange={(e) => setTeacherAdress(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="card-one">
            <label htmlFor="teacherUserName">User Name :</label>
            <input
              type="text"
              placeholder="User Name"
              name="teacherUserName"
              value={teacherUserName}
              onChange={(e) => setTeacherUserName(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="card-one">
            <label htmlFor="teacherEmail">Email :</label>
            <input
              type="text"
              placeholder="email"
              name="teacherEmail"
              value={teacherEmail}
              onChange={(e) => setTeacherEmail(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="card-one">
            <label htmlFor="teacherPassword">password :</label>
            <input
              type="password"
              placeholder="password"
              name="teacherPassword"
              value={teacherPassword}
              onChange={(e) => setTeacherPassword(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="card-one">
            <label htmlFor="">Experience :</label>
            <div className="selectionlist">
              <select name="" id="Experience" value={teacherExperience} className="input" onChange={handleExperienceChange}>
              <option value="">Select Experience</option>
                <option value="One Year">One Year</option>
                <option value="Two Year">Two Years</option>
                <option value="Three Year">Three years</option>
                <option value="Four year">Four Years</option>
                <option value="Five Year">Five Years</option>
                <option value="Six Year">Six Years</option>
              </select>
            </div>
          </div>

          <div className="card-one">
            <label htmlFor="">subjects :</label>
            <div className="selectionlist">
              <select name="" id="subjects" value={teacherSubjects} className="input" onChange={handleSubjectChange}>
              <option value="">Select subjects</option>
                <option value="English">English</option>
                <option value="Maths">Maths</option>
                <option value="Science">Science</option>
                <option value="Social">Social</option>
              </select>
            </div>
          </div>
          <p className="paragraph">
            Already Registered ? <Link to="/Login">Login</Link>
          </p>
          <button className="button-one" type="submit" >
            Register
          </button>
        </form>
    </div>
  )}
export default TeacherReg;

