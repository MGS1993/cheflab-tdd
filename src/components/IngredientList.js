import React from "react";
import styles from "./IngredientList.module.css";

import RecipeStep from "./RecipeStep";

const IngredientList = ({ data }) => {
  // console.log("data in IngredientList", data);
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

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.ingredientContainer}></div>
      <div id="ingredient-step">{steps}</div>
    </div>
  );
};

export default IngredientList;
