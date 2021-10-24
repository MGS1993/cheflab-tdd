import { screen, render } from "@testing-library/react";

import RecipeCard from "./RecipeCard";
import recipeMock from "../../mock/recipeMock";

import imgPlaceHolder from "../../assets/no-image-placeholder.png";

const baseApiRecipe = recipeMock.results[0];
// console.log(baseApiRecipe);

test("it renders into the dom", () => {
  render(<RecipeCard />);
  const item = screen.queryByTestId("main-wrapper");
  expect(item).toBeDefined();
});

test("it renders two children", () => {
  render(<RecipeCard />);
  const item = screen.queryByTestId("main-wrapper");
  const image = screen.queryByTestId("image-test");
  const info = screen.queryByTestId("info-test");
  expect(item).toContainElement(image);
  expect(item).toContainElement(info);
});

test("it renders an image", () => {
  render(
    <RecipeCard title={baseApiRecipe.title} imgSrc={baseApiRecipe.image} />
  );
  const image = screen.getByRole("img");
  // console.log(image);
  expect(image).toHaveAttribute("src", baseApiRecipe.image);
});

test("if no image or api image error, render placeholder", () => {
  render(
    <RecipeCard title={baseApiRecipe.title} imgSrc={"error || api bug"} />
  );
  expect(<RecipeCard title={baseApiRecipe.title} imgSrc={imgPlaceHolder} />);
});
