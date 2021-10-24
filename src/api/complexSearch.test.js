import complexSearch from "./complexSearch";
import { server, rest } from "../testServer";

test("it calls api successfully", async () => {
  const recipes = await complexSearch();
  expect(recipes.results).toHaveLength(10);
});
