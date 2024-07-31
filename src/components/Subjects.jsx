import React from 'react'
import Maths from "../components/Maths"
import "./Subjects.css"
import {Link} from "react-router-dom"

function Subjects() {
  return (
    <div>
    <div className="register-card">
       <Link to="/subject" className="custom-link"><button>Maths</button></Link>
       <Link to="/science" className="custom-link"><button>Science</button></Link>
       <Link to="/social" className="custom-link"><button>Social</button></Link>
    </div>
     
    <div className="Demo-section">  
        <div className="containers">
          {Maths.map((item) => (
            <div className="card-containers" key={item.id}>
              <iframe
                width="320"
                height="200"
                src={item.Url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share">
                allowfullscreen
              </iframe>
              <p className="paragraphs">{item.paragraph}</p>
            </div>
          ))}
        </div>
    </div>
    </div>
  )
}

export default Subjects; 
