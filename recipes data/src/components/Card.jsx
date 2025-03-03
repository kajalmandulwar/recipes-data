import React from "react";
import "../style.css";
 import Rating from "./Rating";
const Card = ({image,name,difficulty,cuisine}) => {
  return (
    <a href="about.html" className="card">
      <img
        src={image}
        alt={name}
      />

      <div className="head">
        <h2>{name}</h2>

        <Rating/>
      </div>
      <p className="para-desc">{difficulty} </p>
      <p className="cuisine">{cuisine} </p>
   </a>
  );
};

export default Card;