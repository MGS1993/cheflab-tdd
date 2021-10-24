import React from "react";
import styles from "./RecipeCard.module.css";
import imgPlaceHolder from "../../assets/no-image-placeholder.png";
const RecipeCard = ({ title, imgSrc }) => {
  return (
    <div data-testid="main-wrapper" className={styles.mainWrapper}>
      <div data-testid="image-test" className={styles.imageWrapper}>
        <img src={imgSrc ?? imgPlaceHolder} alt={`Still of ${title}`} />
      </div>

      <div data-testid="info-test"></div>
    </div>
  );
};

export default RecipeCard;
