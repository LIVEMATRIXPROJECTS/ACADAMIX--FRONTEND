import React from 'react'
import {Link} from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="container">
      <h1>ACADAMIX.NET</h1>
      <ul>
        <Link to="/login" className="login">Login</Link>
      </ul>
    </div>
  )
}

export default Navbar
