import React from "react";
import styles from "./RecipeCard.module.css";
import imgPlaceHolder from "../../assets/no-image-placeholder.png";
const RecipeCard = ({ title, imgSrc }) => {
  return (
    <div
      data-testid="main-wrapper"
      className={styles.mainWrapper}
      onClick={() => console.log("test")}
    >
      <div data-testid="image-test" className={styles.imageWrapper}>
        <img src={imgSrc ?? imgPlaceHolder} alt={`Still of ${title}`} />
      </div>

      <div data-testid="info-test" className={styles.infoWrapper}>
        <p data-testid="title-test">{title}</p>
      </div>
    </div>
  );
};

export default RecipeCard;
