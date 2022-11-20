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
      <h2>
        Category //<br></br>
        {props.activeCategory}
      </h2>
      <div className="line"></div>
      <ListItem category={"All"} key={"All"} handleClick={props.handleClick} />
      {renderListItems(props.products, props.handleClick)}
    </div>
  );
};

export default ProductCategoriesList;
