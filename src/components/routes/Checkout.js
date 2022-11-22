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
    };
    for (const obj of cart) {
      if (obj.item === curr) nObj.quantity++;
    }
    for (const obj of cart) {
      if (obj.item === curr && nObj.price === 0) nObj.price = obj.price;
    }

    return nObj;
  });

  return summarizedCart;
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
    <div data-testid="checkout">
      Checkout
      <div>{console.log(renderCart)}</div>
    </div>
  );
};

export default Checkout;
