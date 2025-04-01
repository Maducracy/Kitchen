import React from "react";
import { useState, useEffect } from "react";
import Mealcart from "../../component/Mealcart";
import "../../component/Mealcart.css";
import Lottie from "lottie-react";
import Foodloader from "../assets/Foodloader.json";

function Home() {
  const [food, setfood] = useState([]);
  const [search, setsearch] = useState("");
  const [loading, setloading] = useState(false);
  const data = async () => {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${
        search === "" ? "b" : search
      }`
    );
    const data2 = await response.json();
    console.log(data2);
    setfood(data2.meals);
  };
  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
      data();
    }, 3000);
  }, []);
  //
  useEffect(() => {
    data();
  }, [search]);

  console.log(food);
  return (
    <div className="input-container">
      <input
        className="input-search"
        type="text"
        placeholder="Search your favourite food"
        onChange={(e) => setsearch(e.target.value)}
      />

      <div className="container">
        {loading === false ? (
          food.map((item, key) => {
            return (
              <Mealcart
                key={key}
                img={item.strMealThumb}
                name={item.strMeal}
                desc={item.strInstructions}
                cat={item.strCategory}
                data={item}
              />
            );
          })
        ) : (
          <Lottie animationData={Foodloader} loop={true} />
        )}
      </div>
    </div>
  );
}


export default Home;
