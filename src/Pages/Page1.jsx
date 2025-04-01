import React from "react";
import Logo from "../Pages/Logo.svg";
import "./Page1.css";
import Banner from "../Pages/Banner.png";
import featureOne from "../Pages/featureOne.svg";
import featureTwo from "../Pages/featureTwo.svg";
import Cook from "../Pages/Cook.png";
import burger from "../Pages/burger.png";
import featureFour from "../Pages/featureFour.svg";
import featureThree from "../Pages/featureThree.svg";
import Photoslide from "./Photoslide";
import foodone from "../Pages/foodone.jpg";
import foodtwo from "../Pages/foodtwo.jpg";
import foodthree from "../Pages/foodthree.jpg";
import foodfour from "../Pages/foodfour.jpg";
import { useNavigate } from "react-router-dom";
import Soup1 from "../Pages/Soup1.svg";
import onion from "../Pages/onion.svg";
import Hamburger from "hamburger-react";
import { useState } from "react";
import facebook from "../Pages/facebook.png";
import X from "../Pages/X.png";
import instagram from "../Pages/instagram.png";
import Nav from "../../component/nav";

function Page1() {
  const navigate = useNavigate();
  const handlebutton = () => {
    navigate("/Signin");
  };
  const Signbutton = () => {
    navigate("/Signup");
  };

  return (
    <div>
     
      <Nav/>

      <div className="hero-section">
        <div className=" main-hero-sec-ctn">
          <h1 className="hero-sec-description">
            Cook anything with the experts
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. At
            sapiente adipisci labore rem unde nisi numquam.
          </p>

          <div className="hero-sec-button">
            <button className="button-desc1"> Let Cook</button>
            <button className="button-desc2">Explore Now</button>
          </div>
        </div>
        <div className="hero-sec-image-ctn">
          <img className="hero-sec-img" src={Banner} alt="" />
        </div>
      </div>
      <section className=" Features-ctn">
        <h3 className="features">Features</h3>
        <h2 className="features-desc">
          Get a many of interesting <br /> features.
        </h2>
        <div className="feacture-desc-display">
          <div className="desc-display">
            <img src={featureOne} alt="" />
          </div>
          <div className="image1">
            <img src={featureTwo} alt="" />
            {/* <h6>Menu Variation</h6> */}
          </div>
          <div>
            <img src={featureFour} alt="" />
          </div>
          <div>
            <img src={featureThree} alt="" />
          </div>
        </div>
        <div className="expert-ctn">
          <div>
            <img className="cook" src={Cook} alt="" />
          </div>
          <div className="expert-div1">
            <h5 className="Cook-expert-desc1"> Cook With Us</h5>
            <p className="Cook-expert-word">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
              reiciendis ab omnis soluta dolore? Illum numquam eos nostrum!
              eaque fuga id explicabo, nam, officia amet architecto odio error
              atque molestias repellat alias? dolor sit, amet consectetur
              adipisicing elit. Quod a, dolor nostrum fuga voluptatum vero
              libero cupiditate qui molestias commodi distinctio eveniet sed
              cumque? Earum ad saepe ipsam repellat quis?
            </p>
            <button className="expert-btn">Learn More</button>
          </div>
        </div>
      </section>
      <section className="Expert-team-ctn">
        <div className="expert-div">
          <h3 className="expert-name">Expert Chef</h3>
          <h1 className="expert-meet">Lets meet the Expert</h1>
        </div>
        <img className="burger" src={burger} alt="" />
        {/* <img src={girl} alt="" /> */}
      </section>
      <Photoslide />
      <section className="Gallery-ctn">
        <h3 className="Gallery-name">Our Gallery Title</h3>
        <h1 className="galleryname1">Gallery Of Our Cooked Food</h1>
        <div className="image-Gallery-ctn">
          <img className="foodone" src={foodone} alt="" />
          <img className="foodtwo" src={foodtwo} alt="" />
          <img className="foodthree" src={foodthree} alt="" />
          <img className="foodfour" src={foodfour} alt="" />
        </div>
      </section>
      <div className="Newletter-ctn">
        <div>
          <h2 className="news-letter">News Letter</h2>
          <h1 className="subcribe">Subscribe our newsletter. </h1>
          <input
            className="input-ctn"
            type="text"
            placeholder=" @enter your email-address"
          />
        </div>
        <div>
          <img className="soup1" src={Soup1} alt="" />
        </div>
        <div>
          <img className="onion" src={onion} alt="" />
        </div>
      </div>
      <div className="Footer">
        <footer
          style={{
            backgroundColor: "black",
            color: "white",
            padding: "40px 20px",
            fontFamily: "Arial, Helvetica, sans-serif",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "1", minWidth: "200px", marginBottom: "20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <img
                  src={Logo}
                  alt="Chef's Kitchen Logo"
                  style={{ width: "40px", marginRight: "10px" }}
                />
                <span style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                  Chef's Kitchen.
                </span>
              </div>
              <p style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
                Open an account in minutes, get full financial control for much
                longer.
              </p>
              
            </div>
           

            <div style={{ flex: "1", minWidth: "150px", marginBottom: "20px" }}>
              <h4 style={{ marginBottom: "15px", fontWeight: "bold" }}>
                Company
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Mobile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    How we work?
                  </a>
                </li>
              </ul>
            </div>

            <div style={{ flex: "1", minWidth: "150px", marginBottom: "20px" }}>
              <h4 style={{ marginBottom: "15px", fontWeight: "bold" }}>
                Information
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Help/FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Press
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Affiliates
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Hotel owners
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Partners
                  </a>
                </li>
              </ul>
            </div>

            <div style={{ flex: "1", minWidth: "150px", marginBottom: "20px" }}>
              <h4 style={{ marginBottom: "15px", fontWeight: "bold" }}>More</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Recipe
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    style={{
                      color: "white",
                      textDecoration: "none",
                      fontWeight: "bold",
                    }}
                  >
                    Gallery
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              fontSize: "0.8rem",
              marginTop: "20px",
              color: "white",
            }}
          >
             <div className="image_container">
                <img style={{width: "30px"}} src={facebook} alt="" />
                <img style={{ background: "white", width: "30px" }} src={X} alt="" />
                <img style={{width:"30px"}} src={instagram} alt="" />
              </div>
            &copy; 2025 - Chef's Kitchen. Distributed By{" "}
            <a
              href="https://themewagon.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              ThemeWagon
            </a>{" "}
            and Developed by{" "}
            <a
              href="https://getnextjstemplates.com/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              GetNextjsTemplates
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Page1;
