import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";

import IngredientList from "./IngredientList";
import data from "../mock/recipeByIdMock";

Enzyme.configure({ adapter: new Adapter() });

describe("IngredientList render", () => {
  test("it renders component", () => {
    render(<IngredientList />);
    const list = screen.queryByRole("ingredient-list");
    expect(list).toBeDefined();
  });

  test("it renders the main component where the ingredients will be shown", () => {
    const wrapper = shallow(<IngredientList />);
    expect(wrapper.find(".ingredientContainer").exists()).toBeTruthy();
  });

  test("it renders each ingredient needed for recipe", () => {
    const wrapper = shallow(<IngredientList data={data} />);
    expect(wrapper.find(".ingredientContainer").children()).toHaveLength(
      data.extendedIngredients.length
    );
  });
});

describe("child components testing", () => {
  test("it renders all steps necessary for recipe", () => {
    const wrapper = shallow(<IngredientList data={data} />);
    console.log(wrapper.debug());
    expect(wrapper.find("#ingredient-step").children()).toHaveLength(
      data.analyzedInstructions[0].steps.length
    );
  });
});
