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
  return removeDollarSign;
};

function App() {
  const [cart, setCart] = useState([]);
  console.log(cart);

  // Functions for adding items to cart
  const handleBuyButton = (e) => {
    const price = e.target.previousSibling.textContent;
    const item = e.target.parentNode.parentNode.dataset.id;
    const formattedPrice = formatPrice(price);
    return setCart((prev) => [].concat(prev, { item: item, price: formattedPrice, quantity: 1 }));
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
