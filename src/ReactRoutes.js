import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./Containers/Home";

const ReactRouter = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact patch="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default ReactRouter;
