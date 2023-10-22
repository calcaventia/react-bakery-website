import React from "react";

function MenuPage() {
  const pastries = [
    { name: "Pastry 1", image: "pastry1.jpg" },
    { name: "Pastry 2", image: "pastry2.jpg" },
    { name: "Pastry 3", image: "pastry3.jpg" },
    { name: "Pastry 4", image: "pastry4.jpg" },
    { name: "Pastry 5", image: "pastry5.jpg" },
  ];

  return (
    <div>
      <h1>Menu</h1>
      <ul>
        {pastries.map((pastry, index) => (
          <li key={index}>
            <img src={pastry.image} alt={pastry.name} />
            <p>{pastry.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MenuPage;
