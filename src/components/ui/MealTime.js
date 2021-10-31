import React from "react";

const MealTime = ({ servings, mealTime, id = "serving-time" }) => {
  return (
    <div id={id}>
      <div id="serving">{servings}</div>
      <div id="time">{mealTime}</div>
    </div>
  );
};

export default MealTime;
