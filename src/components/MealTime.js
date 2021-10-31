import React from "react";
import { BsClock, BsPerson } from "react-icons/bs";

const MealTime = ({ servings, mealTime, id = "serving-time" }) => {
  return (
    <div id={id} style={mainWrapper}>
      <div id="serving" style={light}>
        <BsPerson style={{ padding: "0px 8px" }} />
        {`${servings} servings`}
      </div>
      <div style={light}>
        <BsClock style={{ padding: "0px 8px" }} />
        {/* TODO add a function to calculate minutes and add 'hours' if needed */}
        <p id="time"> {`${mealTime} minutes`}</p>
      </div>
    </div>
  );
};

const mainWrapper = {
  display: "flex",
  justifyContent: "space-evenly",
  margin: "10px 10vw",
};

const light = {
  alignContent: "center",
  color: "grey",
  display: "flex",
  justifyContent: "center",
};

export default MealTime;
