import React from "react";
import styles from "./RecipeView.module.css";
import { useParams } from "react-router";

const RecipeView = () => {
  const { itemId } = useParams();

  return <div className={styles.mainWrapper}></div>;
};

export default RecipeView;
