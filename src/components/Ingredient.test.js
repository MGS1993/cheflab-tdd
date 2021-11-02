import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";

import data from "../mock/recipeByIdMock";
import Ingredient from "./Ingredient";

Enzyme.configure({ adapter: new Adapter() });

describe("rendering tests", () => {
  test("it renders to screen", () => {
    const wrapper = shallow(<Ingredient data={data.extendedIngredients} />);
    expect(wrapper.find(".mainWrapper").exists()).toBeTruthy();
  });

  // test("it has two children. One for name and one for an image")
});
