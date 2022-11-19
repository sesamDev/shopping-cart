import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import App from "../App";
import userEvent from "@testing-library/user-event";

describe("Does links work", () => {
  it("home button loads home component", () => {
    render(<App />);
    const homeButton = screen.getByRole("link", { name: "Home" });

    userEvent.click(homeButton);
    expect(screen.getByTestId("home")).toBeInTheDocument();
  });

  it("catalog button loads catalog component", () => {
    render(<App />);
    const catalogButton = screen.getByRole("link", { name: "Catalog" });

    userEvent.click(catalogButton);
    expect(screen.getByTestId("catalog")).toBeInTheDocument();
  });

  it("contact button loads contact component", () => {
    render(<App />);
    const contactButton = screen.getByRole("link", { name: "Contact" });

    userEvent.click(contactButton);
    expect(screen.getByTestId("contact")).toBeInTheDocument();
  });

  it("checkout button loads checkout component", () => {
    render(<App />);
    const checkoutButton = screen.getByRole("link", { name: "Checkout" });

    userEvent.click(checkoutButton);
    expect(screen.getByTestId("checkout")).toBeInTheDocument();
  });
});
