import React from "react";
import "./Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.imageUrl} alt={props.altText} />
      <div className="card-content">
        <h2 className="menu-heading">{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default Card;
