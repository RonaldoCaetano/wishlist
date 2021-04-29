import React from "react";
import { render, screen } from "@testing-library/react";

import { BrowserRouter } from "react-router-dom";

import Breadcrumb from ".";

describe("<Breadcrumb />", () => {
  it("should render breadcrumb", () => {
    render(
      <BrowserRouter>
        <Breadcrumb />
      </BrowserRouter>
    );
    const children = screen.getByTestId("breadcrumb-list");
    expect(children).toBeInTheDocument();
  });
});
