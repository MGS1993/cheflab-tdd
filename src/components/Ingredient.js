import React from "react";
import styles from "./Ingredient.module.css";

const Ingredient = ({ name }) => {
  return <div className={styles.mainWrapper}>{name}</div>;
};

export default Ingredient;
