import "./App.css";

import Header from "./components/ui/Header";
import ReactRouter from "./ReactRoutes";
import recipeMock from "./mock/recipeMock";

import RecipeView from "./Pages/RecipeView";

function App() {
  const baseApiRecipe = recipeMock.results[0];

  return (
    <div className="App">
      <Header />
      <ReactRouter />
      {/* <RecipeView /> */}
    </div>
  );
}

export default App;
