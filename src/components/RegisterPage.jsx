import React from 'react'
import {Link} from "react-router-dom"
import "./RegisterPage.css"

function RegisterPage() {
  return (
    <div className="register-card">
      <Link to="/student" className="custom-link"><button>Student</button></Link>
      <Link to="/teacher" className="custom-link"><button>Teacher</button></Link>
      <Link to="/institute" className="custom-link"><button>Institution</button></Link>
    </div>
  )
}

export default RegisterPage
