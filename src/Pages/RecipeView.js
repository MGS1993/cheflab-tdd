import React, { useEffect } from "react";
import styles from "./RecipeView.module.css";
import { useParams } from "react-router";

import data from "../mock/recipeByIdMock";
import ImageComponent from "../components/ui/ImageComponent";
import MealTime from "../components/ui/MealTime";
// import recipeById from "../api/recipeById";
//mocked api call
// import useApi from "../hooks/useApi";

const RecipeView = () => {
  // const { itemId } = useParams();

  // const { data, error, loading, request } = useApi(recipeById);

  // useEffect(() => {
  //   request(itemId);
  //   console.log("use effect ran and api called");
  // }, []);
  // console.log(data);
  return (
    <div className={styles.mainWrapper}>
      <ImageComponent
        id="img"
        src={data.image}
        alt={`Still of ${data.title}`}
      />
      <div className={styles.titleWrap}>
        <p data-testid="title-test">{data.title}</p>
      </div>
      <MealTime />
    </div>
  );
};

export default RecipeView;
