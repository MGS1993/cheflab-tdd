const apiKey = "9fa8dd3b19244df2adee6c9d771d7dd4";

const recipeById = async (id) => {
  try {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`
    );

    return await response.json();
  } catch (error) {
    console.log(error);
  }
};

export default recipeById;
