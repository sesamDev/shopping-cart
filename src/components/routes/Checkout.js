import "../../styles/Checkout.css";

import React, { useEffect, useState } from "react";

export const createRenderReadyCart = (cart) => {
  // Get the types of items in cart
  let itemsArray = cart.map((item) => item.item);

  // reduce to uniqe items
  let uniqeItemsArray = itemsArray.reduce((acc, curr) => {
    if (!acc.includes(curr)) {
      acc.push(curr);
    }
    return acc;
  }, []);

  let summarizedCart = uniqeItemsArray.map((curr) => {
    let nObj = {
      item: curr,
      price: 0,
      quantity: 0,
      img: "",
    };
    for (const obj of cart) {
      if (obj.item === curr) nObj.quantity++;
    }
    for (const obj of cart) {
      if (obj.item === curr && nObj.price === 0) nObj.price = obj.price;
    }

    for (const obj of cart) {
      if (obj.item === curr) nObj.img = obj.img;
    }

    return nObj;
  });

  return summarizedCart;
};

const sumOfCart = (cart) => {
  return cart.reduce((sum, curr) => {
    return (sum += curr.price * curr.quantity);
  }, 0);
};

const Checkout = (props) => {
  const [renderCart, setRenderCart] = useState([]);
  useEffect(() => {
    setRenderCart(createRenderReadyCart(props.cart));
    return () => {
      //
    };
  }, [props.cart]);
  return (
    <div data-testid="checkout" className="checkout">
      <div className="checkoutOverview">
        {renderCart.map((item) => {
          return (
            <div key={item.item} className="c-card">
              <img src={item.img} alt={"Cart Item"} />
              <p className="c-item">{item.item}</p>
              <p className="c-price">Price: {item.price}$</p>
              <p className="c-quantity">Quantity: {item.quantity}</p>
            </div>
          );
        })}
        <div className="cartTotal">
          <h3>Cart</h3>
          <div className="line"></div>
          <p>{"Total sum: " + sumOfCart(renderCart) + "$"}</p>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
