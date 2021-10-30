// import { useEffect } from "react";
import "./App.css";
import Header from "./components/ui/Header";
import RecipeCard from "./components/ui/RecipeCard";
import recipeMock from "./mock/recipeMock";

function App() {
  const baseApiRecipe = recipeMock.results[0];

  return (
    <div className="App">
      <Header />
      {/* <RecipeCard title={baseApiRecipe.title} imgSrc={baseApiRecipe.image} /> */}
    </div>
  );
}

export default App;
