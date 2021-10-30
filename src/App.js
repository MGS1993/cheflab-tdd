import "./App.css";

import Feed from "./components/Feed";
import Header from "./components/ui/Header";
import recipeMock from "./mock/recipeMock";
import ReactRouter from "./ReactRoutes";

function App() {
  // const baseApiRecipe = recipeMock.results[0];

  return (
    <div className="App">
      <Header />
      <ReactRouter />
    </div>
  );
}

export default App;
