import "../styles/Card.css";

import React from "react";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="Card" />
      <h3>{props.title}</h3>
    </div>
  );
};

export default Card;
