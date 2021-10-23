import { rest } from "msw";
import { setupServer } from "msw/node";
import recipeApi from "./recipeApi";

const server = setupServer(
  rest.get(
    "https://api.spoonacular.com/recipes/complexSearch",
    (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          results: [
            {
              id: 660861,
              title:
                'Spanish Gazpacho Soup In The Raw With Broiled "Cheese" Toast',
              image: "https://spoonacular.com/recipeImages/660861-312x231.jpg",
              imageType: "jpg",
            },
            {
              id: 660861,
              title:
                'Spanish Gazpacho Soup In The Raw With Broiled "Cheese" Toast',
              image: "https://spoonacular.com/recipeImages/660861-312x231.jpg",
              imageType: "jpg",
            },
            {
              id: 660861,
              title:
                'Spanish Gazpacho Soup In The Raw With Broiled "Cheese" Toast',
              image: "https://spoonacular.com/recipeImages/660861-312x231.jpg",
              imageType: "jpg",
            },
          ],
        })
      );
    }
  )
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

test("it calls api successfully", async () => {
  const recipes = await recipeApi.getSearchedRecipes();
  console.log(recipes);
  expect(recipes).toHaveLength(3);
});

// test("it handles failure", () => {});
