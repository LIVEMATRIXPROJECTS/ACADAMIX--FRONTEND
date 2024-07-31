import React, { useState } from "react";
import "./StudentReg.css";
import { Link} from "react-router-dom";

const StudentReg = () => {
  
  const [studentFirstName, setStudentFirstName] = useState("");
  const [studentLastName, setStudentLastName] = useState("");
  const [studentFullName, setStudentFullName] = useState("");
  const [studentDateOfBirth, setStudentDateOfBirth] = useState("");
  const [studentPhoneNo, setStudentPhoneNo] = useState("");
  const [studentAdress, setStudentAdress] = useState("");
  const [studentUserName, setStudentUserName] = useState("");
  const [studentEmail, setStudentEmail] = useState("");
  const [studentPassword,setStudentPassword]=useState("");

  function handleSubmit(e) {
    e.preventDefault();
  
  }

  return (
    <div className="register-section">
        <form onSubmit={handleSubmit}>
        <h1 className="heading">Student Registration</h1>
          <div className="card-one">
            <label htmlFor="studentFirstName">First Name :</label>
            <input
              type="text"
              placeholder="First Name"
              name="studentFirstName"
              value={studentFirstName}
              onChange={(e) => setStudentFirstName(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="card-one">
            <label htmlFor="studentLastName">Last Name :</label>
            <input
              type="text"
              placeholder="Last Name"
              name="studentLastName"
              value={studentLastName}
              onChange={(e) => setStudentLastName(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="card-one">
            <label htmlFor="studentFullName">Full Name :</label>
            <input
              type="text"
              placeholder="Full Name"
              name="studentFullName"
              value={studentFullName}
              onChange={(e) => setStudentFullName(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="card-one">
            <label htmlFor="studentDateOfBirth">Date Of Birth :</label>
            <input
              type="date"
              placeholder="Date Of Birth"
              name="studentDateOfBirth"
              value={studentDateOfBirth}
              onChange={(e) => setStudentDateOfBirth(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="card-one">
            <label htmlFor="studentPhoneNo">phone No :</label>
            <input
              type="text"
              placeholder="phone No."
              name="studentPhoneNo"
              value={studentPhoneNo}
              onChange={(e) => setStudentPhoneNo(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="card-one">
            <label htmlFor="studentAdress">Address :</label>
            <input
              type="text"
              placeholder="Adress"
              name="studentAdress"
              value={studentAdress}
              onChange={(e) => setStudentAdress(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="card-one">
            <label htmlFor="studentUserName">User Name :</label>
            <input
              type="text"
              placeholder="User Name"
              name="studentUserName"
              value={studentUserName}
              onChange={(e) => setStudentUserName(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="card-one">
            <label htmlFor="studentEmail">Email :</label>
            <input
              type="text"
              placeholder="Email"
              name="studentEmail"
              value={studentEmail}
              onChange={(e) => setStudentEmail(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="card-one">
            <label htmlFor="studentPassword">password :</label>
            <input
              type="password"
              placeholder="password"
              name="studentPassword"
              value={studentPassword}
              onChange={(e) => setStudentPassword(e.target.value)}
              className="input"
              required
            />
          </div>

          <p className="paragraph">
            Already Registered ?<Link to="/Login">Login</Link>
          </p>
          <button className="button-one">
            Register
          </button>
        </form>
      </div>
  )};

export default StudentReg;