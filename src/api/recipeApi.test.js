import recipeApi from "./recipeApi";
import { server, rest } from "../testServer";

test("it calls api successfully", async () => {
  const recipes = await recipeApi.getSearchedRecipes();
  expect(recipes.results).toHaveLength(10);
});
