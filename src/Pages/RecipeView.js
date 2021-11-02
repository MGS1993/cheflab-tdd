import React, { useEffect } from "react";
import styles from "./RecipeView.module.css";
import { useParams } from "react-router";

import data from "../mock/recipeByIdMock";
import ImageComponent from "../components/ImageComponent";
import IngredientList from "../components/IngredientList";
import MealTime from "../components/MealTime";
// import recipeById from "../api/recipeById";
//mocked api call
// import useApi from "../hooks/useApi";

const RecipeView = () => {
  // const { itemId } = useParams();
  // console.log(itemId);

  // const { data, error, loading, request } = useApi(recipeById);

  // console.log(data);
  // useEffect(() => {
  //   request(itemId);
  //   console.log("use effect ran and api called");
  // }, []);
  // console.log(data);
  return data ? (
    <div className={styles.mainWrapper}>
      <ImageComponent
        id="img"
        src={data.image}
        alt={`Still of ${data.title}`}
      />
      <div className={styles.titleWrap}>
        <p data-testid="title-test">{data.title}</p>
      </div>
      <MealTime servings={data.servings} mealTime={data.readyInMinutes} />
      <IngredientList data={data} />
    </div>
  ) : (
    <div></div>
  );
};

export default RecipeView;
