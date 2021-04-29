import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

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
