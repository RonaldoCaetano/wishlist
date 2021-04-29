import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";

import productsListMocked from "../../__mocks__/productsList";
import ProductList from "./index";

describe("<ProductList />", () => {
  test("should render a products list", () => {
    const component = render(<ProductList products={productsListMocked} />);
    expect(component).toBeTruthy();
  });

  test("should render a products cards", () => {
    render(<ProductList products={productsListMocked} />);
    const productsCards = screen.getByTestId("products-list").children;
    expect(productsCards).toHaveLength(productsListMocked.length);
  });
});
