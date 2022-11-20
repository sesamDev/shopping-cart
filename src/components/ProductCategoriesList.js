import "../styles/ProductCategoriesList.css";

import React from "react";

const ListItem = (props) => {
  return (
    <div className="listItem">
      <p>{props.title}</p>
    </div>
  );
};

const ProductCategoriesList = () => {
  return (
    <div className="productCategoriesList">
      <h2>Categories</h2>
      <div className="line"></div>
      <ListItem title="Test Category" />
      <ListItem title="Test Category" />
      <ListItem title="Test Category" />
      <ListItem title="Test Category" />
      <ListItem title="Test Category" />
      <ListItem title="Test Category" />
      <ListItem title="Test Category" />
      <ListItem title="Test Category" />
      <ListItem title="Test Category" />
    </div>
  );
};

export default ProductCategoriesList;
