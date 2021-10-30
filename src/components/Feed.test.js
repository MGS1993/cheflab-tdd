import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Feed from "./Feed";
import recipeMock from "../mock/recipeMock";

test("it renders", () => {
  render(
    <BrowserRouter>
      <Feed items={recipeMock.results} quantity={3} />
    </BrowserRouter>
  );
  const item = screen.queryByRole("list");
  expect(item).toBeDefined();
});
