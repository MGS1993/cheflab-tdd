import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";

import MealTime from "../components/ui/MealTime";
import RecipeView from "./RecipeView";

import recipeMock from "../mock/recipeByIdMock";

Enzyme.configure({ adapter: new Adapter() });

describe("RecipeView Testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<RecipeView />);
  });

  test("it renders title", () => {
    expect(wrapper.find("p").text()).toBeDefined();
  });

  test("render recipe image", () => {
    expect(wrapper.find("#img").prop("src")).toBeDefined();
    // console.log(wrapper.debug());
  });

  test("it has a div with serving size amount and meal time", () => {
    const wrapper = shallow(<MealTime />);
    expect(wrapper.find("#serving-time").children()).toHaveLength(2);
  });
});
