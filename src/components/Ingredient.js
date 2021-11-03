import React from "react";
import styles from "./Ingredient.module.css";

const Ingredient = ({ name }) => {
  return (
    <div className={styles.mainWrapper}>
      <p>{name}</p>
    </div>
  );
};

export default Ingredient;
