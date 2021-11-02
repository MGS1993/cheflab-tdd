import React from "react";
import styles from "./RecipeStep.module.css";

import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const RecipeStep = ({ currentStep, stepInstructions }) => {
  return (
    <div className={styles.mainWrapper} data-testid="main-wrapper">
      <div className={styles.stepText}>
        <span className={styles.spanWrapper}>
          <IoIosCheckmarkCircleOutline />
        </span>
        {`Step ${currentStep}`}
      </div>
      <div className={styles.instructions}>{stepInstructions}</div>
    </div>
  );
};

export default RecipeStep;
