import "../../styles/Catalog.css";

import Card from "../Card";
import ProductCategoriesList from "../ProductCategoriesList";
import React from "react";
import { products } from "../../data/products";

const handleCategoryClick = () => {
  return console.log("Category selected");
};

const appendAllProducts = (products) => {
  const allItems = Object.keys(products.category).map((c) => {
    return Object.keys(products.category[c].items).map((i) => {
      return products.category[c].items[i];
    });
  });
  return allItems.map((category) => {
    return category.map((item) => {
      return <Card img={item.img} title={item.title} price={item.price} key={item.title} />;
    });
  });
};

const Catalog = () => {
  return (
    <div data-testid="catalog" className="catalog">
      <ProductCategoriesList products={products} handleCategoryClick={handleCategoryClick} />
      {appendAllProducts(products)}
    </div>
  );
};

export default Catalog;
