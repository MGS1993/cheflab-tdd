let recipeByIdMock = {
  vegetarian: false,
  vegan: false,
  glutenFree: false,
  dairyFree: true,
  veryHealthy: false,
  cheap: false,
  veryPopular: false,
  sustainable: false,
  weightWatcherSmartPoints: 8,
  gaps: "no",
  lowFodmap: false,
  aggregateLikes: 1,
  spoonacularScore: 51,
  healthScore: 12,
  creditsText: "Foodista.com – The Cooking Encyclopedia Everyone Can Edit",
  license: "CC BY 3.0",
  sourceName: "Foodista",
  pricePerServing: 210.98,
  extendedIngredients: [
    {
      id: 2048,
      aisle: "Oil, Vinegar, Salad Dressing",
      image: "apple-cider-vinegar.jpg",
      consistency: "liquid",
      name: "apple cider vinegar",
      nameClean: "apple cider vinegar",
      original: "3 tablespoons apple cider vinegar",
      originalString: "3 tablespoons apple cider vinegar",
      originalName: "apple cider vinegar",
      amount: 3,
      unit: "tablespoons",
      meta: [],
      metaInformation: [],
      measures: {
        us: { amount: 3, unitShort: "Tbsps", unitLong: "Tbsps" },
        metric: { amount: 3, unitShort: "Tbsps", unitLong: "Tbsps" },
      },
    },
    {
      id: 11206,
      aisle: "Produce",
      image: "cucumber.jpg",
      consistency: "solid",
      name: "cucumber",
      nameClean: "cucumber",
      original: "3/4 of an English cucumber, peeled and seeded",
      originalString: "3/4 of an English cucumber, peeled and seeded",
      originalName: "an English cucumber, peeled and seeded",
      amount: 0.75,
      unit: "",
      meta: ["english", "peeled", "seeded"],
      metaInformation: ["english", "peeled", "seeded"],
      measures: {
        us: { amount: 0.75, unitShort: "", unitLong: "" },
        metric: { amount: 0.75, unitShort: "", unitLong: "" },
      },
    },
    {
      id: 2029,
      aisle: "Spices and Seasonings",
      image: "dried-parsley.png",
      consistency: "solid",
      name: "dried parsley",
      nameClean: "dried parsley",
      original: "2 teaspoons dried parsley",
      originalString: "2 teaspoons dried parsley",
      originalName: "dried parsley",
      amount: 2,
      unit: "teaspoons",
      meta: ["dried"],
      metaInformation: ["dried"],
      measures: {
        us: { amount: 2, unitShort: "tsps", unitLong: "teaspoons" },
        metric: { amount: 2, unitShort: "tsps", unitLong: "teaspoons" },
      },
    },
    {
      id: 1034053,
      aisle: "Oil, Vinegar, Salad Dressing",
      image: "olive-oil.jpg",
      consistency: "liquid",
      name: "extra virgin olive oil",
      nameClean: "extra virgin olive oil",
      original: "4 tablespoons extra virgin olive oil",
      originalString: "4 tablespoons extra virgin olive oil",
      originalName: "extra virgin olive oil",
      amount: 4,
      unit: "tablespoons",
      meta: [],
      metaInformation: [],
      measures: {
        us: { amount: 4, unitShort: "Tbsps", unitLong: "Tbsps" },
        metric: { amount: 4, unitShort: "Tbsps", unitLong: "Tbsps" },
      },
    },
    {
      id: 11215,
      aisle: "Produce",
      image: "garlic.png",
      consistency: "solid",
      name: "garlic cloves",
      nameClean: "garlic",
      original: "3 garlic cloves",
      originalString: "3 garlic cloves",
      originalName: "garlic cloves",
      amount: 3,
      unit: "",
      meta: [],
      metaInformation: [],
      measures: {
        us: { amount: 3, unitShort: "", unitLong: "" },
        metric: { amount: 3, unitShort: "", unitLong: "" },
      },
    },
    {
      id: 10111529,
      aisle: "Produce",
      image: "cherry-tomatoes.png",
      consistency: "solid",
      name: "grape tomatoes",
      nameClean: "grape tomato",
      original: "1 1/2 cups grape tomatoes",
      originalString: "1 1/2 cups grape tomatoes",
      originalName: "grape tomatoes",
      amount: 1.5,
      unit: "cups",
      meta: [],
      metaInformation: [],
      measures: {
        us: { amount: 1.5, unitShort: "cups", unitLong: "cups" },
        metric: { amount: 354.882, unitShort: "ml", unitLong: "milliliters" },
      },
    },
    {
      id: 10011821,
      aisle: "Produce",
      image: "bell-pepper-orange.png",
      consistency: "solid",
      name: "orange bell pepper",
      nameClean: "orange pepper",
      original: "1/4 orange bell pepper, diced",
      originalString: "1/4 orange bell pepper, diced",
      originalName: "orange bell pepper, diced",
      amount: 0.25,
      unit: "",
      meta: ["diced"],
      metaInformation: ["diced"],
      measures: {
        us: { amount: 0.25, unitShort: "", unitLong: "" },
        metric: { amount: 0.25, unitShort: "", unitLong: "" },
      },
    },
    {
      id: 10018079,
      aisle: "Bakery/Bread;Ethnic Foods;Oil, Vinegar, Salad Dressing;Baking",
      image: "panko.jpg",
      consistency: "solid",
      name: "panko bread crumbs",
      nameClean: "panko",
      original: "4 tablespoons Panko bread crumbs",
      originalString: "4 tablespoons Panko bread crumbs",
      originalName: "Panko bread crumbs",
      amount: 4,
      unit: "tablespoons",
      meta: [],
      metaInformation: [],
      measures: {
        us: { amount: 4, unitShort: "Tbsps", unitLong: "Tbsps" },
        metric: { amount: 4, unitShort: "Tbsps", unitLong: "Tbsps" },
      },
    },
    {
      id: 10011282,
      aisle: "Produce",
      image: "red-onion.png",
      consistency: "solid",
      name: "red onion",
      nameClean: "red onion",
      original: "1/2 red onion, diced",
      originalString: "1/2 red onion, diced",
      originalName: "red onion, diced",
      amount: 0.5,
      unit: "",
      meta: ["diced", "red"],
      metaInformation: ["diced", "red"],
      measures: {
        us: { amount: 0.5, unitShort: "", unitLong: "" },
        metric: { amount: 0.5, unitShort: "", unitLong: "" },
      },
    },
    {
      id: 18060,
      aisle: "Bakery/Bread",
      image: "rye-bread.jpg",
      consistency: "solid",
      name: "rye bread",
      nameClean: "rye bread",
      original: "2 slices rye bread",
      originalString: "2 slices rye bread",
      originalName: "rye bread",
      amount: 2,
      unit: "slices",
      meta: [],
      metaInformation: [],
      measures: {
        us: { amount: 2, unitShort: "slice", unitLong: "slices" },
        metric: { amount: 2, unitShort: "slice", unitLong: "slices" },
      },
    },
    {
      id: 2047,
      aisle: "Spices and Seasonings",
      image: "salt.jpg",
      consistency: "solid",
      name: "salt",
      nameClean: "salt",
      original: "1/8 teaspoon salt",
      originalString: "1/8 teaspoon salt",
      originalName: "salt",
      amount: 0.125,
      unit: "teaspoon",
      meta: [],
      metaInformation: [],
      measures: {
        us: { amount: 0.125, unitShort: "tsps", unitLong: "teaspoons" },
        metric: { amount: 0.125, unitShort: "tsps", unitLong: "teaspoons" },
      },
    },
    {
      id: 1012047,
      aisle: "Spices and Seasonings",
      image: "salt.jpg",
      consistency: "solid",
      name: "sea salt",
      nameClean: "coarse sea salt",
      original: "2 teaspoons fine sea salt",
      originalString: "2 teaspoons fine sea salt",
      originalName: "fine sea salt",
      amount: 2,
      unit: "teaspoons",
      meta: ["fine"],
      metaInformation: ["fine"],
      measures: {
        us: { amount: 2, unitShort: "tsps", unitLong: "teaspoons" },
        metric: { amount: 2, unitShort: "tsps", unitLong: "teaspoons" },
      },
    },
    {
      id: 10193701,
      aisle: "Cheese;Health Foods",
      image: "cheddar-cheese.png",
      consistency: "solid",
      name: "vegan cheddar cheese",
      nameClean: "vegan cheddar cheese",
      original: "1/2 cup Daiya vegan cheddar crumbles",
      originalString: "1/2 cup Daiya vegan cheddar crumbles",
      originalName: "Daiya vegan cheddar crumbles",
      amount: 0.5,
      unit: "cup",
      meta: [],
      metaInformation: [],
      measures: {
        us: { amount: 0.5, unitShort: "cups", unitLong: "cups" },
        metric: { amount: 118.294, unitShort: "ml", unitLong: "milliliters" },
      },
    },
    {
      id: 11529,
      aisle: "Produce",
      image: "tomato.png",
      consistency: "solid",
      name: "vine ripened tomatoes",
      nameClean: "tomato",
      original: "3 ripe on the vine tomatoes, cored",
      originalString: "3 ripe on the vine tomatoes, cored",
      originalName: "ripe on the vine tomatoes, cored",
      amount: 3,
      unit: "",
      meta: ["cored", "ripe"],
      metaInformation: ["cored", "ripe"],
      measures: {
        us: { amount: 3, unitShort: "", unitLong: "" },
        metric: { amount: 3, unitShort: "", unitLong: "" },
      },
    },
    {
      id: 14412,
      aisle: "Beverages",
      image: "water.png",
      consistency: "liquid",
      name: "water",
      nameClean: "water",
      original: "1/4 cup water",
      originalString: "1/4 cup water",
      originalName: "water",
      amount: 0.25,
      unit: "cup",
      meta: [],
      metaInformation: [],
      measures: {
        us: { amount: 0.25, unitShort: "cups", unitLong: "cups" },
        metric: { amount: 59.147, unitShort: "ml", unitLong: "milliliters" },
      },
    },
  ],
  id: 660861,
  title: 'Spanish Gazpacho Soup In The Raw With Broiled "Cheese" Toast',
  readyInMinutes: 45,
  servings: 4,
  sourceUrl:
    "http://www.foodista.com/recipe/K7VQ8VNM/spanish-gazpacho-soup-in-the-raw-with-broiled-cheese-toast",
  image: "https://spoonacular.com/recipeImages/660861-556x370.jpg",
  imageType: "jpg",
  summary:
    'Spanish Gazpacho Soup In The Raw With Broiled "Cheese" Toast might be just the soup you are searching for. Watching your figure? This dairy free recipe has <b>297 calories</b>, <b>5g of protein</b>, and <b>18g of fat</b> per serving. For <b>$2.11 per serving</b>, this recipe <b>covers 13%</b> of your daily requirements of vitamins and minerals. Not a lot of people made this recipe, and 1 would say it hit the spot. From preparation to the plate, this recipe takes around <b>45 minutes</b>. It can be enjoyed any time, but it is especially good for <b>Summer</b>. This recipe is typical of European cuisine. Head to the store and pick up apple cider vinegar, on the vine tomatoes, daiya vegan cheddar crumbles, and a few other things to make it today. All things considered, we decided this recipe <b>deserves a spoonacular score of 53%</b>. This score is solid. Try <a href="https://spoonacular.com/recipes/spanish-gazpacho-cold-summer-soup-603393">Spanish Gazpacho {Cold Summer Soup}</a>, <a href="https://spoonacular.com/recipes/gazpacho-soup-cold-spanish-soup-226261">Gazpacho Soup (Cold Spanish Soup)</a>, and <a href="https://spoonacular.com/recipes/broiled-apricot-and-cheese-toast-124607">Broiled Apricot and Cheese Toast</a> for similar recipes.',
  cuisines: ["Spanish", "European"],
  dishTypes: ["soup"],
  diets: ["dairy free"],
  occasions: ["fall", "winter", "summer"],
  winePairing: {
    pairedWines: ["tempranillo", "albarino", "grenache"],
    pairingText:
      "Spanish on the menu? Try pairing with Tempranillo, Albarino, and Grenache. When pairing wine with Spanish dishes, why not follow the rule 'what grows together goes together'? We recommend albariño for white wine and garnachan and tempranillo for red. The Verdad Santa Ynez Valley Tempranillo with a 4.3 out of 5 star rating seems like a good match. It costs about 21 dollars per bottle.",
    productMatches: [
      {
        id: 464793,
        title: "Verdad Santa Ynez Valley Tempranillo",
        description:
          "The wine is medium-full bodied and has a very pretty aromatic profile with sour cherry and rose petals and spice. On the palate there are tart cherries, tobacco, hard spice and cocoa. I love the unique focused flavors this wine has and I have loved the Tempranillo in barrel from the beginning. Blend: 75% Tempranillo, 17% Syrah, 8% Graciano",
        price: "$20.99",
        imageUrl: "https://spoonacular.com/productImages/464793-312x231.jpg",
        averageRating: 0.86,
        ratingCount: 6,
        score: 0.8073684210526315,
        link: "https://click.linksynergy.com/deeplink?id=*QCiIS6t4gA&mid=2025&murl=https%3A%2F%2Fwww.wine.com%2Fproduct%2Fverdad-santa-ynez-valley-tempranillo-2014%2F155059",
      },
    ],
  },
  instructions:
    '<ol><li>Spanish Gazpacho Soup</li><li>Place all ingredients in a blender or Vitamix and blend well until smooth for about 3 minutes.</li><li>Refrigerate for 1 to 2 hours before serving.</li><li>Garnish with organic crunchy onions and chopped parsley (or dried).</li><li>Prepare "cheese" toasts.</li><li>Broiled "Cheese" Toast</li><li>Postition oven rack to second to highest rack from the top. Turn oven to broil.</li><li>On baking sheet , lay out bread and split "cheese" between both slices.</li><li>Sprinkle parsley and salt and place in oven rack.</li><li>Broil until slightly browned and cheese is broiled. Slice in half once toast is somewhat cool.</li></ol>',
  analyzedInstructions: [
    {
      name: "",
      steps: [
        {
          number: 1,
          step: "Spanish Gazpacho Soup",
          ingredients: [
            { id: 0, name: "gazpacho", localizedName: "gazpacho", image: "" },
            { id: 0, name: "soup", localizedName: "soup", image: "" },
          ],
          equipment: [],
        },
        {
          number: 2,
          step: "Place all ingredients in a blender or Vitamix and blend well until smooth for about 3 minutes.Refrigerate for 1 to 2 hours before serving.",
          ingredients: [],
          equipment: [
            {
              id: 404726,
              name: "blender",
              localizedName: "blender",
              image: "blender.png",
            },
          ],
          length: { number: 123, unit: "minutes" },
        },
        {
          number: 3,
          step: 'Garnish with organic crunchy onions and chopped parsley (or dried).Prepare "cheese" toasts.Broiled "Cheese" Toast',
          ingredients: [
            {
              id: 11297,
              name: "parsley",
              localizedName: "parsley",
              image: "parsley.jpg",
            },
            {
              id: 1041009,
              name: "cheese",
              localizedName: "cheese",
              image: "cheddar-cheese.png",
            },
            {
              id: 11282,
              name: "onion",
              localizedName: "onion",
              image: "brown-onion.png",
            },
            {
              id: 18070,
              name: "toast",
              localizedName: "toast",
              image: "toast",
            },
          ],
          equipment: [],
        },
        {
          number: 4,
          step: 'Postition oven rack to second to highest rack from the top. Turn oven to broil.On baking sheet , lay out bread and split "cheese" between both slices.',
          ingredients: [
            {
              id: 1041009,
              name: "cheese",
              localizedName: "cheese",
              image: "cheddar-cheese.png",
            },
            {
              id: 18064,
              name: "bread",
              localizedName: "bread",
              image: "white-bread.jpg",
            },
          ],
          equipment: [
            {
              id: 404727,
              name: "baking sheet",
              localizedName: "baking sheet",
              image: "baking-sheet.jpg",
            },
            {
              id: 404784,
              name: "oven",
              localizedName: "oven",
              image: "oven.jpg",
            },
          ],
        },
        {
          number: 5,
          step: "Sprinkle parsley and salt and place in oven rack.Broil until slightly browned and cheese is broiled. Slice in half once toast is somewhat cool.",
          ingredients: [
            {
              id: 11297,
              name: "parsley",
              localizedName: "parsley",
              image: "parsley.jpg",
            },
            {
              id: 1041009,
              name: "cheese",
              localizedName: "cheese",
              image: "cheddar-cheese.png",
            },
            {
              id: 18070,
              name: "toast",
              localizedName: "toast",
              image: "toast",
            },
            {
              id: 2047,
              name: "salt",
              localizedName: "salt",
              image: "salt.jpg",
            },
          ],
          equipment: [
            {
              id: 404784,
              name: "oven",
              localizedName: "oven",
              image: "oven.jpg",
            },
          ],
        },
      ],
    },
  ],
  originalId: null,
  spoonacularSourceUrl:
    "https://spoonacular.com/spanish-gazpacho-soup-in-the-raw-with-broiled-cheese-toast-660861",
};

export default recipeByIdMock;
