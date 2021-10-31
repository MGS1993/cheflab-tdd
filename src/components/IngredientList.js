import React from "react";
import styles from "./IngredientList.module.css";

import RecipeStep from "./RecipeStep";

const IngredientList = ({ data }) => {
  const steps = data?.map((item, index) => {
    return (
      <RecipeStep
        key={index}
        currentStep={item.number}
        stepInstructions={item.step}
      />
    );
  });
  // console.log(steps);

  return <div id="ingredient-list">{steps}</div>;
};

export default IngredientList;
