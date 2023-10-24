import React from "react";
import "./MenuPage.css";
import bread from "../img/bread.jpg";
import cupcakes from "../img/cupcake.jpg";
import tarts from "../img/tart.jpg";
import cookies from "../img/cookies.jpg";
import croissants from "../img/croissants.jpg";
import brownies from "../img/brownies.jpg";
import churros2 from "../img/churros-menu.jpg";
import doughnuts from "../img/donuts2.jpg";
import cakes from "../img/cake-slice3.jpg";
import desserts from "../img/desserts6.jpg";
import Card from "./Card.js";
import Navigation from "./Navigation.js";

function MenuPage() {
  const pastries = [
    { name: "Breads", image: bread },
    { name: "Cupcakes", image: cupcakes },
    { name: "Tarts", image: tarts },
    { name: "Cookies", image: cookies },
    { name: "Croissants", image: croissants },
    { name: "Brownies", image: brownies },
    { name: "Churros", image: churros2 },
    { name: "Doughnuts", image: doughnuts },
    { name: "Cakes", image: cakes },
    { name: "Desserts", image: desserts },
  ];

  const pastryGroups = [];
  for (let i = 0; i < pastries.length; i += 5) {
    pastryGroups.push(pastries.slice(i, i + 5));
  }

  return (
    <div>
      <Navigation />
      <h1>Menu</h1>
      <div className="card-container">
        {pastryGroups.map((group, groupIndex) => (
          <ul key={groupIndex}>
            {group.map((pastry, index) => (
              <li key={index}>
                <Card
                  imageUrl={pastry.image}
                  altText={pastry.name}
                  title={pastry.name}
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

export default MenuPage;
