import { render, screen } from "@testing-library/react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-17-updated";

Enzyme.configure({ adapter: new Adapter() });
