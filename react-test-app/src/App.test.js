import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("the counter starts at 0", () => {
  render(<App />);
  //screen object를 이용해서 원하는 Element 접근
  const counterElement = screen.getByTestId("counter");
  //id가 counter인 element의 텍스트가 0인지 테스트
  expect(counterElement).toHaveTextContent(0);
});

test("minus buttom has correct test", () => {
  render(<App />);
  const minusbtnEl = screen.getByTestId("minus-btn");
  expect(minusbtnEl).toHaveTextContent("-");
});
test("plus buttom has correct test", () => {
  render(<App />);
  const plusbtnEl = screen.getByTestId("plus-btn");
  expect(plusbtnEl).toHaveTextContent("+");
});

test("When the + button is pressed, the counter change to 1", () => {
  render(<App />);
  const btnEle = screen.getByTestId("plus-btn");
  fireEvent.click(btnEle);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(1);
});

test("When the - button is pressed, the counter change to -1", () => {
  render(<App />);
  const btnEle = screen.getByTestId("minus-btn");
  fireEvent.click(btnEle);
  const counterElement = screen.getByTestId("counter");
  expect(counterElement).toHaveTextContent(-1);
});

test("on/off button has blue color", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("on/off-button");
  expect(buttonElement).toHaveStyle({ backgroundColor: "blue" });
});

test("Prevent the -/+ button from beging pressed when the the on/off button", () => {
  render(<App />);
  const buttonElement = screen.getByTestId("on/off-button");
  fireEvent.click(buttonElement);
  const plusButton = screen.getByTestId("plus-btn");
  expect(plusButton).toBeDisabled();
  // const minusButton = screen.getByTestId("minus-button");
});
