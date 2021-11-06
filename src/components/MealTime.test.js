import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";

import MealTime from "./MealTime";

Enzyme.configure({ adapter: new Adapter() });

test("it has a div with serving size amount and meal time", () => {
  const wrapper = shallow(<MealTime />);
  expect(wrapper.find("#serving-time").children()).toHaveLength(2);
});
