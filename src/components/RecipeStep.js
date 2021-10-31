import React from "react";
import styles from "./RecipeStep.module.css";

const RecipeStep = ({ currentStep, stepInstructions }) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.stepText}>{currentStep}</div>
      <div className={styles.instructions}>{stepInstructions}</div>
    </div>
  );
};

export default RecipeStep;
