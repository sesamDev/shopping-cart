import Checkout, { createRenderReadyCart } from "../components/routes/Checkout";
import { render, screen } from "@testing-library/react";

describe("Shopping cart", () => {
  it("Summarize shopping cart state", () => {
    <Checkout />;
    const cart = [
      {
        item: "phone",
        price: 100,
        quantity: 1,
      },
      {
        item: "phone",
        price: 100,
        quantity: 1,
      },
      {
        item: "tv",
        price: 900,
        quantity: 1,
      },
      {
        item: "tv",
        price: 900,
        quantity: 1,
      },
      {
        item: "monitor",
        price: 200,
        quantity: 1,
      },
    ];

    createRenderReadyCart(cart);

    // expect(createRenderReadyCart(cart).length).toBe(3);
    expect(createRenderReadyCart(cart)[0].item).toBe("phone");
    expect(createRenderReadyCart(cart)[1].item).toBe("tv");
    expect(createRenderReadyCart(cart)[2].item).toBe("monitor");
    expect(createRenderReadyCart(cart)[0].price).toBe(100);
    expect(createRenderReadyCart(cart)[1].price).toBe(900);
    expect(createRenderReadyCart(cart)[2].price).toBe(200);
    expect(createRenderReadyCart(cart)[0].quantity).toBe(2);
    expect(createRenderReadyCart(cart)[1].quantity).toBe(2);
    expect(createRenderReadyCart(cart)[2].quantity).toBe(1);
  });
});
