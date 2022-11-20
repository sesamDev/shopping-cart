import "../styles/ProductCategoriesList.css";

import React from "react";

const ListItem = (product) => {
  return (
    <div
      className="listItem"
      data-testid="listItem"
      onClick={(e) => {
        product.handleClick(e);
      }}
    >
      {product.category}
    </div>
  );
};

const renderListItems = (products, handleClick) => {
  return products.map((item) => {
    return <ListItem category={item.category} key={item.id} handleClick={handleClick} />;
  });
};

const ProductCategoriesList = (props) => {
  return (
    <div className="productCategoriesList" data-testid="productCategoriesList">
      <h2>{props.activeCategory === "" ? "Category" : "Category // " + props.activeCategory}</h2>
      <div className="line"></div>
      {renderListItems(props.products, props.handleClick)}
    </div>
  );
};

export default ProductCategoriesList;
