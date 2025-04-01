import React from "react";
import { useLocation } from "react-router-dom";
import "../App.css";

function Details() {
  const nav_data = useLocation();
  //   console.log(nav_data);
  const data = nav_data.state.item;
  console.log(data.strInstructions)
  return (
    <div className="detailsdiv">
      <div className="detailsdiv1">
        <img className="detailsdivimg" src={data.strMealThumb} alt="" />
      </div>
      <div className="detailsdiv2">
        <h1>{data.strMeal}</h1>
        <p className="instruction">{data.strInstructions}</p>
        <h3>Category:{data.strCategory}</h3>
        <h3>Category:{data.strArea}</h3>
        <h3>Category:{data.strTags}</h3>
  
      </div>
    <div>
        <button></button>
        <button></button>
    </div>
    </div>
    
  );
}

export default Details;
