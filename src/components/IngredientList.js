import React from "react";
import styles from "./IngredientList.module.css";

import Ingredient from "./Ingredient";
import RecipeStep from "./RecipeStep";

const IngredientList = ({ data }) => {
  const ingredients = data?.extendedIngredients.map((item, index) => {
    return <Ingredient key={index + "a"} name={item.name} />;
  });
  const steps = data?.analyzedInstructions[0].steps.map((item, index) => {
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
      <div className={styles.ingredientContainer}>{ingredients}</div>
      <div id="ingredient-step">{steps}</div>
    </div>
  );
};

export default IngredientList;
