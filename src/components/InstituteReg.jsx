import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import "./InstituteReg.css";

function InstituteReg() {

    const [instName, setInstName] = useState("");
    const [instAffiliated, setInstAffiliated] = useState("");
    const [instYear,setInstYear]=useState("");
    const [instManagers,setInstManagers]=useState("");
    const [instFirstName, setInstFirstName] = useState("");
    const [instLastName, setInstLastName] = useState("");
    const [instFullName, setInstFullName] = useState("");
    const [instDesignation, setInstDesignation] = useState("");
    const [instAdress,setInstAdress]=useState("");
    const [instUserName ,setInstUserName]=useState("");
    const [instEmail,setInstEmail]=useState("");
    const [instPassword,setInstPassword]=useState("");

    const handleManagersChange=(e)=>{
      setInstManagers(e.target.value)
    }

    function handleSubmit(event) {
      event.preventDefault();
  }
    
  return (
    <div className="register-section">
      <form onSubmit={handleSubmit}>
        <h1>Institution Registration</h1>
          <div className="card-one">
            <label htmlFor="instName">Institution Name :</label>
            <input
              type="text"
              placeholder="Institute Name"
              name="instName"
              value={instName}
              onChange={(e) => setInstName(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="card-one">
            <label htmlFor="instAffiliated">Institute Affiliated :</label>
            <input
              type="text"
              placeholder="Affiliated"
              name="instAffiliated"
              value={instAffiliated}
              onChange={(e) => setInstAffiliated(e.target.value)}
              className="input"
              required
            />
          </div>


          <div className="card-one">
            <label htmlFor="instYear">Foundation Year :</label>
            <input
              type="date"
              placeholder="Year"
              name="instYear"
              value={instYear}
              onChange={(e) => setInstYear(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="card-one">
            <label htmlFor="">Institute Managers :</label>
            <div className="selectionlist">
              <select name="" id="managers" value={instManagers} className="input" onChange={handleManagersChange}>
              <option value="">Select Managers</option>
                <option value="Chairman">Chairman</option>
                <option value="Director">Director</option>
                <option value="Correspondent">Correspondent</option>
                <option value="Principal">Principal</option>
              </select>
            </div>
          </div>

          <div className="card-one">
            <label htmlFor="instFirstName">First Name :</label>
            <input
              type="text"
              placeholder="First Name"
              name="instFirstName"
              value={instFirstName}
              onChange={(e) => setInstFirstName(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="card-one">
            <label htmlFor="instLastName">Last Name :</label>
            <input
              type="text"
              placeholder="Last Name"
              name="instLastName"
              value={instLastName}
              onChange={(e) => setInstLastName(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="card-one">
            <label htmlFor="instFullName">Full Name :</label>
            <input
              type="text"
              placeholder="Full Name"
              name="instFullName"
              value={instFullName}
              onChange={(e) => setInstFullName(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="card-one">
            <label htmlFor="instDesignation">Designation :</label>
            <input
              type="text"
              placeholder="Designation"
              name="instDesignation"
              value={instDesignation}
              onChange={(e) => setInstDesignation(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="card-one">
            <label htmlFor="instAdress">Institute Address :</label>
            <input
              type="text"
              placeholder=" Institute Adress"
              name="instAdress"
              value={instAdress}
              onChange={(e) => setInstAdress(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="card-one">
            <label htmlFor="instUserName">User Name :</label>
            <input
              type="text"
              placeholder="User Name"
              name="instUserName"
              value={instUserName}
              onChange={(e) => setInstUserName(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="card-one">
            <label htmlFor="instEmail">Email :</label>
            <input
              type="text"
              placeholder="Email"
              name="instEmail"
              value={instEmail}
              onChange={(e) => setInstEmail(e.target.value)}
              className="input"
              required
            />
          </div>

          <div className="card-one">
            <label htmlFor="instPassword">password :</label>
            <input
              type="password"
              placeholder="password"
              name="instPassword"
              value={instPassword}
              onChange={(e) => setInstPassword(e.target.value)}
              className="input"
              required
            />
          </div>
          <p className="paragraph">
            Already registered ?<Link to="/Login">Login</Link>
          </p>

          <button className="button-one">
            Register
          </button>
        </form>
    </div>
  );
};

export default InstituteReg;

