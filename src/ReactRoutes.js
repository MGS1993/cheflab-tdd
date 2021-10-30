import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Pages/Home";
import RecipeView from "./Pages/RecipeView";

const ReactRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/recipeView/:itemId" component={RecipeView} />
      </Switch>
    </BrowserRouter>
  );
};

export default ReactRouter;
