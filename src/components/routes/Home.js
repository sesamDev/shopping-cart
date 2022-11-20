import "../../styles/Home.css";

import Card from "../Card";
import React from "react";
import { products } from "../../data/products";

const Home = () => {
  console.log(products.category.processors.img);
  return (
    <div data-testid="home" className="home">
      <div className="welcome-message">
        <h1>Fake Store</h1>
        <h2>The #1 place for computer hardware</h2>
      </div>
      <div className="popular-categories">
        <h2>Visit our most popular categories</h2>
        <div>
          <Card img={products.category.apple.img} title={products.category.apple.title} />
          <Card img={products.category.graphicsCards.img} title={products.category.graphicsCards.title} />
          <Card img={products.category.processors.img} title={products.category.processors.title} />
          <Card img={products.category.keyboards.img} title={products.category.keyboards.title} />
        </div>
      </div>
    </div>
  );
};

export default Home;
