// import { useEffect } from "react";
import "./App.css";
import Feed from "./components/Feed";
import Header from "./components/ui/Header";
import RecipeCard from "./components/ui/RecipeCard";
import recipeMock from "./mock/recipeMock";

function App() {
  const baseApiRecipe = recipeMock.results[0];

  return (
    <div className="App">
      <Header />
      <Feed items={recipeMock.results} quantity={10} />
    </div>
  );
}

export default App;
