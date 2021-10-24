import React from "react";
import styles from "./RecipeCard.module.css";

const RecipeCard = ({ title, imgSrc }) => {
  return (
    <div data-testid="main-wrapper" className={styles.mainWrapper}>
      <div data-testid="image-test" className={styles.imageWrapper}>
        <img src={imgSrc} alt={`Still of ${title}`} />
      </div>
      <div data-testid="info-test"></div>
    </div>
  );
};

export default RecipeCard;
