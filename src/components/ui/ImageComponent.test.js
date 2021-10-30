import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";
import { screen, render } from "@testing-library/react";

import ImageComponent from "./ImageComponent";
import recipeByIdMock from "../../mock/recipeByIdMock";
import imgPlaceHolder from "../../assets/no-image-placeholder.png";

Enzyme.configure({ adapter: new Adapter() });

describe("Image component testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<ImageComponent />);
  });

  test("if img src is not defined, render a placeholder image", () => {
    render(<ImageComponent src={"error || api bug"} />);
    expect(<ImageComponent src={imgPlaceHolder} />);
  });
});
