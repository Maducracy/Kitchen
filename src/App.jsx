import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Contact from "./Pages/Contact";
import Aboutus from "./Pages/Aboutus";
import Recipes from "./Pages/Recipes";
import Food from "./Pages/Food";
import Page1 from "./Pages/Page1";
import Details from "./Pages/Details";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import Counter from "./Pages/Counter";
import Screen from "./Pages/Screen";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Details" element={<Details />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Recipes" element={<Recipes />} />
          <Route path="/Aboutus" element={<Aboutus />} />
          <Route path="/Food" element={<Food />}></Route>
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Counter" element={<Counter />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Screen" element={<Screen />} />

          {/* <Route path="/Page1" element={<Page1/>}></Route> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
