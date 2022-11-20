import "../../styles/Catalog.css";

import ProductCategoriesList from "../ProductCategoriesList";
import React from "react";

const Catalog = () => {
  return (
    <div data-testid="catalog" className="catalog">
      <ProductCategoriesList />
    </div>
  );
};

export default Catalog;
