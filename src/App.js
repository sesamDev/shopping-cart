import "./styles/App.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { useState } from "react";

import Catalog from "./components/routes/Catalog";
import Checkout from "./components/routes/Checkout";
import Contact from "./components/routes/Contact";
import Home from "./components/routes/Home";
import Nav from "./components/Nav";

const formatPrice = (price) => {
  const removeDollarSign = [...price].slice(0, -1).join("");
  return Number(removeDollarSign);
};

const createCartItem = (product, image, formattedPrice) => {
  return { item: product, price: formattedPrice, quantity: 1, img: image };
};

function App() {
  const [cart, setCart] = useState([]);

  // Functions for adding items to cart
  const handleBuyButton = (e) => {
    const price = e.target.previousSibling.textContent;
    let item = e.target.parentNode.parentNode.dataset.id;
    let img = e.target.parentNode.parentNode.querySelector("img").src;
    const formattedPrice = formatPrice(price);
    item = createCartItem(item, img, formattedPrice);
    return setCart((prev) => [].concat(prev, item));
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog handleBuyButton={handleBuyButton} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/checkout" element={<Checkout cart={cart} setCart={setCart} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
