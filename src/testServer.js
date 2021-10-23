import { rest } from "msw";
import { setupServer } from "msw/node";

import recipeMock from "../mock/recipeMock";

const server = setupServer(
  rest.get(
    "https://api.spoonacular.com/recipes/complexSearch",
    (req, res, ctx) => {
      return res(ctx.status(200), ctx.json(recipeMock));
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

export { server, rest };
