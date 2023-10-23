import React from "react";
import "../App.css";
import "./HomePage.css";
import Navigation from "./Navigation";
import "../img/croissants.jpg";

function HomePage() {
  return (
    <div class="background-container">
      <Navigation />

      <div className="content-container">
        <h1 className="main-heading">Welcome to Vaal Bakes</h1>
        <p className="description">Vaal's No.1 Bakery Store</p>
        <button className="menu-btn">Explore The Menu</button>
      </div>
    </div>
  );
}

export default HomePage;
