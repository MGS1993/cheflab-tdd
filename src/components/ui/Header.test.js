import { screen, render } from "@testing-library/react";
import Header from "./Header";

test("it renders the header", () => {
  render(<Header />);
  const content = screen.queryByTestId("header");
  expect(content).toBeDefined();
});
