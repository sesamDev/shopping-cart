import "../../styles/Home.css";

import Card from "../Card";
import React from "react";
import { products } from "../../data/products";

const Home = () => {
  return (
    <div data-testid="home" className="home">
      <div className="welcome-message">
        <h1>Fake Store</h1>
        <h2>The #1 place for computer hardware</h2>
      </div>
      <div className="popular-categories">
        <h2>Visit our most popular categories</h2>
        <div>
          {products.map((item) => {
            return <Card key={item.id} title={item.category} img={item.img} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
