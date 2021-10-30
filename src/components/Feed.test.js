import { screen, render } from "@testing-library/react";

import Feed from "./Feed";
import recipeMock from "../mock/recipeMock";

test("it renders", () => {
  render(<Feed items={recipeMock.results} quantity={3} />);
  const item = screen.queryByRole("list");
  expect(item).toBeDefined();
});
