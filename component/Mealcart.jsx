import React from "react";
import "./Mealcart.css";
import { useNavigate } from "react-router-dom";

function Mealcart({ img, name, desc, cat, data }) {
  const navigate = useNavigate();
  return (
    <div className="image-container" onClick={() => navigate("/Details", {state:{item:data}})}>
      <img className="img" src={img} alt="" />
      <h2>{name}</h2>
      <p>{desc.length > 150 ? desc.slice(0, 150) + "..." : desc}</p>

      <h3>Category{cat}</h3>
    </div>
  );
}

export default Mealcart;
