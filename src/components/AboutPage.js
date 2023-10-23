import React from "react";
import "./AboutPage.css";
import bakeryImage from "../img/brownies.jpg";
import Navigation from "./Navigation.js";

const AboutPage = () => {
  return (
    <div>
      <Navigation />
      <h1>Vaal Bakes</h1>

      <div className="about-us-container">
        <div className="text-column">
          <h2>About Us</h2>
          <p>
            Welcome to Rusty's Bakery, where we bake with love and tradition.
            Our story began in a small kitchen, and now we serve our community
            with the finest, handcrafted pastries and bread.
          </p>
        </div>
        <div className="image-column">
          <img src={bakeryImage} alt="Bakery Interior" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
