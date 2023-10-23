import React from "react";
import "./AboutPage.css";
import bakeryImage from "../img/family.jpg";
import Navigation from "./Navigation.js";

const AboutPage = () => {
  return (
    <div class="background-container-about">
      <div className="background-overlay"></div>
      <Navigation />
      <div className="container">
        <div className="row about-page-container">
          <div className="col-md-6 text-column">
            <h2>About Us</h2>
            <p>
              Welcome to Vaal Bakes, where we bake with love and tradition. Our
              story began in our small family kitchen, and our love for bringing
              people together for celebrations with sweet treats has enabled us
              to serve our community with the finest, handcrafted pastries and
              bread.
            </p>
          </div>
          <div className="col-md-6 image-column">
            <img
              src={bakeryImage}
              alt="Bakery Interior"
              className="family-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
