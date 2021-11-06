import { screen } from "@testing-library/react";
import Enzyme, { shallow, render, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";

import customRender from "../utility/test-utils";
import MealTime from "../components/MealTime";
import RecipeView from "./RecipeView";

import recipeMock from "../mock/recipeByIdMock";
import { MemoryRouter } from "react-router";

Enzyme.configure({ adapter: new Adapter() });

describe("RecipeView Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter initialEntries={["/"]}>
        <RecipeView />
      </MemoryRouter>
    );
  });

  test("it renders title", () => {
    // console.log(wrapper.debug());
    expect(wrapper.find(RecipeView).find("#title-test")).toBeDefined();
  });
});
