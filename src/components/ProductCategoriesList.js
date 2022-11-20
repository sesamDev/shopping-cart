import "../styles/ProductCategoriesList.css";

import React from "react";

const ListItem = (props) => {
  return (
    <div className="listItem" data-testid="listItem">
      {props.category.title}
    </div>
  );
};

const appendListItems = (products) => {
  return Object.keys(products.category).map((product) => {
    return <ListItem category={products.category[product]} key={products.category[product].id} />;
  });
};

const ProductCategoriesList = (props) => {
  return (
    <div className="productCategoriesList" data-testid="productCategoriesList">
      <h2>Categories</h2>
      <div className="line"></div>
      {appendListItems(props.products)}
    </div>
  );
};

export default ProductCategoriesList;
