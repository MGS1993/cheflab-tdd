import React, { useEffect } from "react";
import styles from "./RecipeView.module.css";
import { useParams } from "react-router";

import recipeById from "../api/recipeById";
//mocked api call
import data from "../mock/recipeByIdMock";
import useApi from "../hooks/useApi";

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
      <div className={styles.titleWrap}>
        <p data-testid="title-test">{data.title}</p>
      </div>
    </div>
  );
};

export default RecipeView;
