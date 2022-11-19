import "../styles/Nav.css";

import { Link } from "react-router-dom";
import React from "react";

const Nav = () => {
  return (
    <nav className="Nav" data-testid="nav">
      <h1>Fake Store</h1>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/catalog">
          <li>Catalog</li>
        </Link>
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/checkout">
          <li>Checkout</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
