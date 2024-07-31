import React,{useState} from 'react'
import {Link} from "react-router-dom"
import "./Home.css";

const Home = () => {
  const [value,setValue]=useState("");
  const onChange=(e)=>{
     setValue(e.target.value)
  }
  return (

    <div className="App">

      <div>
        <input 
        type="text" 
        name="search" 
        id="search"
        value={value}
        onChange={onChange}
        className="search-input"
        />
        <button className="search-button">Search</button>
      </div>
    
<div style={{height:"60vh"}}>

</div>
    <div className="register-card">
       <Link to="/subject" className="custom-link"><button>Learning</button></Link>
       <Link to="/assignment" className="custom-link"><button>Assignment</button></Link>
       <Link to="/certificate" className="custom-link"><button>Certificate</button></Link>  
    </div>


  </div>
    
  )
}

export default Home;
