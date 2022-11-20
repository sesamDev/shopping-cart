import "@testing-library/jest-dom";

import Catalog, { appendListItems } from "../components/routes/Catalog";
import { render, screen } from "@testing-library/react";

import userEvent from "@testing-library/user-event";

describe("List of categories", () => {
  it("Does list component render?", () => {
    render(<Catalog />);

    expect(screen.getByTestId("productCategoriesList")).toBeInTheDocument();
  });
});
