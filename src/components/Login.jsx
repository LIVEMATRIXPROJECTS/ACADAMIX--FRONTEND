import React,{useState} from 'react'
import {Link} from "react-router-dom"
import "./Login.css"

function Login() {

    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const handleSubmit=(e)=>{
       e.preventDefault(); 
    }
  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h1 className="heading">Login</h1>
        <div className="form-content">
          <input 
           type="email" 
           name="email" 
           id="email"
           value={email}
           placeholder="Enter Your Email"
           onChange={(e)=>setEmail(e.target.value)}
           required
          />
        </div>
        <div className="form-content">
          <input 
           type="password" 
           name="password" 
           id="password"
           value={password}
           placeholder="Enter Your Password"
           onChange={(e)=>setPassword(e.target.value)}
           required
          />
        </div>
        <div className="forgot-container">
            <label><input type="checkbox"/>Remember Me</label>
            <a href="#">Forgot Password?</a>
        </div>
        <div className="form-button">
          <button type="submit">Login</button>
        </div>
        <div className="register-container">
            <p>Don't Have An Account? <Link to="/registerpage">Register</Link></p>
        </div>
      </form>
    </div>
  )
}

export default Login
