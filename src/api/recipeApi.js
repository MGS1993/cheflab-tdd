const apiKey = "9fa8dd3b19244df2adee6c9d771d7dd4";

const getSearchedRecipes = async () => {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?&query="cheese"&apiKey=${apiKey}`
    );
    const data = await response.json();
    // console.log(data);
    return data.results;
  } catch (error) {
    console.log(error);
  }
};

export default { getSearchedRecipes };
