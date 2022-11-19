import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import App from "../App";
import userEvent from "@testing-library/user-event";

describe("Renders all components", () => {
  it("renders home page", () => {
    render(<App />);
    expect(screen.getByTestId("home")).toBeInTheDocument();
  });
  it("renders navbar", () => {
    render(<App />);
    expect(screen.getByTestId("nav")).toBeInTheDocument();
  });
});
