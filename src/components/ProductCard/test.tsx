import React from "react";
import { getByTestId, render, screen } from "@testing-library/react";

import productsListMocked from "../../__mocks__/productsList";
import ProductCard from "./index";

describe("<ProductCard />", () => {
  test("should render product card", () => {
    const getProductOnWishlist = () => {
      return productsListMocked[1];
    };

    render(
      <ProductCard
        productData={productsListMocked[0]}
        getProductOnWishlist={getProductOnWishlist}
      />
    );

    const productImage = screen.getByTestId("product-card-image");
    const productName = screen.getByTestId("product-card-name");
    const productPrice = screen.getByTestId("product-card-price");

    expect(productImage).toHaveAttribute("src", productsListMocked[0].image);
    expect(productName).toHaveTextContent(productsListMocked[0].title);
    expect(productPrice).toHaveTextContent(`${productsListMocked[0].price}`);
  });
});
