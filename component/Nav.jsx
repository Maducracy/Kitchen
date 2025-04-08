import React from "react";
import "./Nav.css";
import Hamburger from "hamburger-react";
import { useState } from "react";
import Logo from "../src/Pages/Logo.svg";
import { Link } from "react-router-dom";
import telephone from "../src/Pages/telephone.png"
import { useNavigate } from "react-router-dom";

function Nav() {
  const [isOpen, setOpen] = useState(false);
  const navigate = useNavigate();
  const handlebutton = () => {
    navigate("/Signin");
  };
  const Signbutton = () => {
    navigate("/Signup");
  };
  return (
    <div className="main-dev">
      <div className="Pc">
        <div className="Logo-container">
          <img className="logo" src={Logo} alt="logo" />
          <h1 style={{fontSize:"40px", color:"orangered"}}>Eatable</h1>
        </div>
        <ul className="Nav_Link">
          <Link className="nodecoration" to={"/Home"}>Home</Link>
          <Link className="nodecoration" to={"/Aboutus"}>AboutUs</Link>
          <Link className="nodecoration" to={"/Recipes"}>Recipes</Link>
          <Link className="nodecoration" to={"/Gallery"}>Gallery</Link>
        </ul>

        <div className="Nav3">
        <img className="telephone" src={telephone} alt="" />
        <p className="number">+1(909)235-9814</p>
        <div className="nav_button">
        <button className="navbutton1" onClick={handlebutton}>
            Sign in
          </button>
          <button className="navbutton2" onClick={Signbutton}>
            Sign Up
          </button>
          </div>
      </div>
      </div>
      
      <div className="Mobile">
        <div className="Logo-container">
          <img src={Logo} alt="logo" />
          <h1 style={{fontSize:"20px", color:"orangered"}}>Eatable</h1>
        </div>
        <div className="Hamburger">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div className={isOpen === true ? "Menu" : "Hide"}>
          <div>
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>

        
          <ul className="mobile_Link">
          <Link className="nodecoration" to={"/Home"}>Home</Link>
          <Link className="nodecoration" to={"/Aboutus"}>AboutUs</Link>
          <Link className="nodecoration" to={"/Recipes"}>Recipes</Link>
          <Link className="nodecoration" to={"/Gallery"}>Gallery</Link>
        </ul>
        <div className="Nav3">
        {/* <img className="telephone" src={telephone} alt="" /> */}
        <p className="number">+1(909)235-9814</p>
        <div className="nav_button">
        <button className="navbutton1" onClick={handlebutton}>
            Sign in
          </button>
          <button className="navbutton2" onClick={Signbutton}>
            Sign Up
          </button>
          </div>
      </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
