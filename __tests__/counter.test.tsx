import React, { Component } from "react";
import Counter from "../pages/counter";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("Counter", () => {
  it("header renders with correct text", () => {
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

  it("counter intialised with text of 0", () => {
    render(<Counter />);
    const counterEl = screen.getByTestId("counter");
    expect(counterEl.textContent).toBe("0");

    // Alternative way
    // const { getByTestId } = render(<Counter />);
    // const counterEl = getByTestId("counter");
    // expect(counterEl.textContent).toBe("0");
  });

  it("input initialised with value of 1", () => {
    render(<Counter />);
    const inputEl = screen.getByTestId("input") as HTMLInputElement;
    expect(inputEl.value).toBe("1");

    // Alternative way
    // const { getByTestId } = render(<Counter />);
    // const inputEl = getByTestId("input") as HTMLInputElement;
    // expect(inputEl.value).toBe("1");
  });

  it("add button renders with +", () => {
    render(<Counter />);
    const addBtn = screen.getByTestId("add-btn");
    expect(addBtn.textContent).toBe("+");

    // Alternative way
    // const { getByTestId } = render(<Counter />);
    // const addBtn = getByTestId("add-btn") as HTMLInputElement;
    // expect(addBtn.textContent).toBe("+");
  });

  it("subtract button renders with -", () => {
    render(<Counter />);
    const subtractBtn = screen.getByTestId("subtract-btn");
    expect(subtractBtn.textContent).toBe("-");

    // Alternative way
    // const { getByTestId } = render(<Counter />);
    // const subtractBtn = getByTestId("subtract-btn") as HTMLInputElement;
    // expect(subtractBtn.textContent).toBe("-");
  });
});
