import React from "react";
import { shallow } from "enzyme";
import App from "./App";

let wrapper;

beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
  };
  wrapper = shallow(<App {...mockProps} />);
});

it("renders without crashing", () => {
  expect(wrapper).toMatchSnapshot();
});

it("fileters Robots", () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "a",
  };
  wrapper = shallow(<App {...mockProps} />);
  expect(wrapper.instance().filterRobots()).toEqual([]);
});

// it("fileters Robots correctly", () => {
//   const filteredRobots = [
//     {
//       id: 1,
//       name: "Leanne Graham",
//       username: "Bret",
//       email: "Sincere@april.biz",
//     },
//   ];
//   const mockProps = {
//     // onRequestRobots: jest.fn(),
//     robots: [
//       {
//         id: 1,
//         name: "Leanne Graham",
//         username: "Bret",
//         email: "Sincere@april.biz",
//       },
//     ],
//     searchField: "Leanne",
//   };
//   wrapper = shallow(<App {...mockProps} />);
//   console.log(wrapper.instance().filterRobots());
//   expect(wrapper.instance().filterRobots()).toEqual(filteredRobots);
// });

it("fileters Robots correctly 2", () => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
      },
    ],
    searchField: "Xavier",
    isPending: false,
  };
  wrapper = shallow(<App {...mockProps} />);
  expect(wrapper.instance().filterRobots()).toEqual([]);
});
