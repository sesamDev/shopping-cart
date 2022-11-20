import "../styles/Card.css";

import React from "react";

const hasPrice = (price) => {
  return price !== undefined;
};

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="Card" />
      <h3>{props.title}</h3>
      {hasPrice(props.price) ? <p>{props.price + "$"}</p> : ""}
    </div>
  );
};

export default Card;
