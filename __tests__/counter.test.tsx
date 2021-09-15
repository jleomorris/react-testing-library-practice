import React, { Component } from "react";
import Counter from "../pages/counter";
import { render, screen, fireEvent } from "@testing-library/react";
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
    // const addBtn = getByTestId("add-btn");
    // expect(addBtn.textContent).toBe("+");
  });

  it("subtract button renders with -", () => {
    render(<Counter />);
    const subtractBtn = screen.getByTestId("subtract-btn");
    expect(subtractBtn.textContent).toBe("-");

    // Alternative way
    // const { getByTestId } = render(<Counter />);
    // const subtractBtn = getByTestId("subtract-btn");
    // expect(subtractBtn.textContent).toBe("-");
  });

  it("changing value of input works correctly", () => {
    const { getByTestId } = render(<Counter />);
    const inputEl = getByTestId("input") as HTMLInputElement;

    expect(inputEl.value).toBe("1");

    fireEvent.change(inputEl, {
      target: {
        value: 5,
      },
    });

    expect(inputEl.value).toBe("5");
  });

  it("clicking on plus btn adds 1 to counter", () => {
    const { getByTestId } = render(<Counter />);
    const addBtnEl = getByTestId("add-btn");
    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0");

    fireEvent.click(addBtnEl);

    expect(counterEl.textContent).toBe("1");
  });

  it("clicking on subtract btn subtracts 1 from counter", () => {
    const { getByTestId } = render(<Counter />);
    const subtractBtnEl = getByTestId("subtract-btn");
    const counterEl = getByTestId("counter");

    expect(counterEl.textContent).toBe("0");

    fireEvent.click(subtractBtnEl);

    expect(counterEl.textContent).toBe("-1");
  });

  it("changing input value and clicking on plus btn increments counter correctly", () => {
    const { getByTestId } = render(<Counter />);
    const addBtnEl = getByTestId("add-btn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
      target: {
        value: "5",
      },
    });

    fireEvent.click(addBtnEl);

    expect(counterEl.textContent).toBe("5");
  });

  it("changing input value and clicking on subtract btn decrements counter correctly", () => {
    const { getByTestId } = render(<Counter />);
    const subtractBtnEl = getByTestId("subtract-btn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
      target: {
        value: "5",
      },
    });

    fireEvent.click(subtractBtnEl);

    expect(counterEl.textContent).toBe("-5");
  });

  it("Adding and subtracting combinations adjusts the counter correctly", () => {
    const { getByTestId } = render(<Counter />);
    const subtractBtnEl = getByTestId("subtract-btn");
    const addBtnEl = getByTestId("add-btn");
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");

    fireEvent.change(inputEl, {
      target: {
        value: "10",
      },
    });

    // + 10 * 4
    for (let i = 0; i < 4; i += 1) {
      fireEvent.click(addBtnEl);
    }

    // - 10 x 2
    for (let i = 0; i < 2; i += 1) {
      fireEvent.click(subtractBtnEl);
    }

    expect(counterEl.textContent).toBe("20");

    fireEvent.change(inputEl, {
      target: {
        value: "5",
      },
    });

    // + 1 * 5
    fireEvent.click(addBtnEl);

    // - 2 x 5
    for (let i = 0; i < 2; i += 1) {
      fireEvent.click(subtractBtnEl);
    }

    expect(counterEl.textContent).toBe("15");
  });

  it("Counter is correct color (has correct class name) ", () => {
    const { getByTestId } = render(<Counter />);
    const counterEl = getByTestId("counter");
    const inputEl = getByTestId("input");
    const subtractBtnEl = getByTestId("subtract-btn");
    const addBtnEl = getByTestId("add-btn");

    // Standard styling
    expect(counterEl.className).toBe("my-10 text-6xl font-bold  ");

    fireEvent.change(inputEl, {
      target: {
        value: "50",
      },
    });

    // +50
    fireEvent.click(addBtnEl);

    expect(counterEl.className).toBe("my-10 text-6xl font-bold  ");

    // +50
    fireEvent.click(addBtnEl);

    expect(counterEl.className).toBe(
      "my-10 text-6xl font-bold text-green-500 "
    );

    // +50
    fireEvent.click(addBtnEl);

    expect(counterEl.className).toBe(
      "my-10 text-6xl font-bold text-green-500 "
    );

    // - 2 x 50
    for (let i = 0; i < 2; i += 1) {
      fireEvent.click(subtractBtnEl);
    }

    expect(counterEl.className).toBe("my-10 text-6xl font-bold  ");

    // - 4 x 50
    for (let i = 0; i < 4; i += 1) {
      fireEvent.click(subtractBtnEl);
    }

    expect(counterEl.className).toBe("my-10 text-6xl font-bold  text-red-500");
  });
});
