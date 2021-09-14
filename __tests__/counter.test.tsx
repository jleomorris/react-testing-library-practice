import React, { Component } from "react";
import Counter from "../pages/counter";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Counter", () => {
  it("header renders with correct text", () => {
    // First way
    render(<Counter />);
    const heading = screen.getByRole("heading", {
      name: "Counter Practice",
    });
    expect(heading).toBeInTheDocument();

    // Alternative way
    // const {getByTestId} = render(<Counter />);
    // const headerEl = getByTestId("header");
    // expect(headerEl.textContent).toBe("Counter Practice");
  });
});
