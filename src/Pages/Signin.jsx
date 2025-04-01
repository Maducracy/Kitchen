import React from "react";
import "./Signin.css";
import Banner from "./Banner.png";
import { useState } from "react";



function signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [option, setOption] = useState(false)

  console.log("show something");

  const handlesubmit = (e) => {
    e.preventDefault();
    email === "user@example.com" && password === "password123"
      ? setOption(false)
      :setOption(true)
   
  };
  return (
    <div className="Signin-container">
      <div>
        <img className="img-sigin-ctn" src={Banner} alt="" />
      </div>
      <div>
        <h1 className="signin">Sign in to Chefs Kitchen</h1>
        <form className="form">
          <label htmlFor="">
            <h3> Email</h3>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="">
            <h3>Password</h3>
            <div className="toggle-eye-ctn">
              <input
                className=""
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </label>
        </form>
        <button onClick={handlesubmit} className="signin-btn">
          SIgn In
        </button>

        {option? <p className="input-something">These input is invalid</p>:null}
       
      </div>
    </div>
  );
}

export default signin;
