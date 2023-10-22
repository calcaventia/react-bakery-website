import React from "react";
import "../App.css";
import Navigation from "./Navigation";
import img1 from "../img/cupcakes.jpg";

function HomePage() {
  return (
    <div>
      <Navigation />
      <h1>Welcome to Our Bakery</h1>
      <img src={img1} alt="Bakery" class="home-image" />
    </div>
  );
}

export default HomePage;
