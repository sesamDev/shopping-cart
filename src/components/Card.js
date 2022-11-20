import "../styles/Card.css";

import React from "react";
import { useLocation } from "react-router-dom";

const hasPrice = (price) => {
  return price !== undefined;
};

const isInCatalog = (location) => {
  return location === "/catalog";
};

const Card = (props) => {
  const location = useLocation();
  return (
    <div className="card">
      {isInCatalog(location.pathname)}
      <img src={props.img} alt="Card" />
      {isInCatalog(location.pathname) ? <p>{props.title}</p> : <h3>{props.title}</h3>}
      {hasPrice(props.price) ? <p>{props.price + "$"}</p> : ""}
    </div>
  );
};

export default Card;
