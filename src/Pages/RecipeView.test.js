import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";

import RecipeView from "./RecipeView";

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
    console.log(wrapper.debug());
  });
});
