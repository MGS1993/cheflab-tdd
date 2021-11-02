import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";

import RecipeStep from "./RecipeStep";

Enzyme.configure({ adapter: new Adapter() });

describe("recipeStep rendering", () => {
  test("It renders to page", () => {
    render(<RecipeStep />);
    const component = screen.getByTestId("main-wrapper");
    expect(component).toBeDefined();
  });

  test("it renders a check mark next to the step", () => {
    const wrapper = shallow(<RecipeStep />);
    expect(wrapper.find(".spanWrapper")).toHaveLength(1);
  });
});
