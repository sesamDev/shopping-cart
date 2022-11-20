import "../../styles/Catalog.css";

import React, { useEffect, useState } from "react";

import Card from "../Card";
import ProductCategoriesList from "../ProductCategoriesList";
import { products } from "../../data/products";

const renderProducts = (activeCategory, products) => {
  const filteredProducts = products.filter((category) => category.category === activeCategory);
  let productList = products;

  if (activeCategory !== "All") {
    productList = filteredProducts;
  }
  return productList.map((category) => {
    return category.items.map((item) => {
      return <Card img={item.img} title={item.title} price={item.price} key={item.id} />;
    });
  });
};

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleCategoryClick = (e) => {
    return setActiveCategory(e.target.innerText);
  };

  useEffect(() => {
    //
    return () => {
      //
    };
  }, [activeCategory]);

  return (
    <div data-testid="catalog" className="catalog">
      <ProductCategoriesList products={products} handleClick={handleCategoryClick} activeCategory={activeCategory} />
      <div className="catalogOverview">{renderProducts(activeCategory, products)}</div>
    </div>
  );
};

export default Catalog;
