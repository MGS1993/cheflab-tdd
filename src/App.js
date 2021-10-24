import { useEffect } from "react";
import "./App.css";
import recipeApi from "./api/recipeApi";
import useApi from "./hooks/useApi";

function App() {
  // const { data, error, loading, request } = useApi(
  //   recipeApi.getSearchedRecipes
  // );

  // useEffect(() => {
  //   request("cheese");
  // }, []);

  return <div className="App">test2</div>;
}

export default App;
