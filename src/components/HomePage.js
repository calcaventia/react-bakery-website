import React from "react";
import "../App.css";
import Navigation from "./Navigation";
import "../img/croissants.jpg";

function HomePage() {
  return (
    <div class="background-container">
      <Navigation />
      <h1 class="main-heading">Welcome to Vaal Bakes</h1>
      <p>Vaal's No.1 bakery</p>
    </div>
  );
}

export default HomePage;
