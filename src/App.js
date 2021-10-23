import "./App.css";
import recipeApi from "./api/recipeApi";

function App() {
  const test = async () => {
    const test = await recipeApi.getSearchedRecipes();
    console.log(test);
  };

  // test();

  return <div className="App"></div>;
}

export default App;
