import "../../styles/Catalog.css";

import ProductCategoriesList from "../ProductCategoriesList";
import React from "react";
import { products } from "../../data/products";

const handleCategoryClick = () => {
  return console.log("Category selected");
};
const Catalog = () => {
  return (
    <div data-testid="catalog" className="catalog">
      <ProductCategoriesList products={products} handleCategoryClick={handleCategoryClick} />
    </div>
  );
};

export default Catalog;
