const meals = [
  {
    idMeal: '52973',
    strMeal: 'Leblebi Soup',
    strDrinkAlternate: null,
    strCategory: 'Vegetarian',
    strArea: 'Tunisian',
    strInstructions:
      'Heat the oil in a large pot. Add the onion and cook until translucent.\r\nDrain the soaked chickpeas and add them to the pot together with the vegetable stock. Bring to the boil, then reduce the heat and cover. Simmer for 30 minutes.\r\nIn the meantime toast the cumin in a small ungreased frying pan, then grind them in a mortar. Add the garlic and salt and pound to a fine paste.\r\nAdd the paste and the harissa to the soup and simmer until the chickpeas are tender, about 30 minutes.\r\nSeason to taste with salt, pepper and lemon juice and serve hot.',
    strMealThumb:
      'https://www.themealdb.com/images/media/meals/x2fw9e1560460636.jpg',
    strTags: 'Soup',
    strYoutube: 'https://www.youtube.com/watch?v=BgRifcCwinY',
    strIngredient1: 'Olive Oil',
    strIngredient2: 'Onion',
    strIngredient3: 'Chickpeas',
    strIngredient4: 'Vegetable Stock',
    strIngredient5: 'Cumin',
    strIngredient6: 'Garlic',
    strIngredient7: 'Salt',
    strIngredient8: 'Harissa Spice',
    strIngredient9: 'Pepper',
    strIngredient10: 'Lime',
    strIngredient11: '',
    strIngredient12: '',
    strIngredient13: '',
    strIngredient14: '',
    strIngredient15: '',
    strIngredient16: '',
    strIngredient17: '',
    strIngredient18: '',
    strIngredient19: '',
    strIngredient20: '',
    strMeasure1: '2 tbs',
    strMeasure2: '1 medium finely diced',
    strMeasure3: '250g',
    strMeasure4: '1.5L',
    strMeasure5: '1 tsp ',
    strMeasure6: '5 cloves',
    strMeasure7: '1/2 tsp',
    strMeasure8: '1 tsp ',
    strMeasure9: 'Pinch',
    strMeasure10: '1/2 ',
    strMeasure11: ' ',
    strMeasure12: ' ',
    strMeasure13: ' ',
    strMeasure14: ' ',
    strMeasure15: ' ',
    strMeasure16: ' ',
    strMeasure17: ' ',
    strMeasure18: ' ',
    strMeasure19: ' ',
    strMeasure20: ' ',
    strSource:
      'http://allrecipes.co.uk/recipe/43419/leblebi--tunisian-chickpea-soup-.aspx',
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null,
  },
];

const recipeContainer = document.querySelector('#recipes');
const recipeModal = document.querySelector('#recipeModal');
// const openModalEl = document.querySelector('#open-modal');
const closeModal = document.querySelector('#close-modal');
const recipeDetailContainer = document.querySelector('#recipe-detail');
const form = document.querySelector('.search');
const searchInput = document.querySelector('#search-input');

const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php';
const searchMealUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';

const getRandomMeal = async () => {
  let controller = new AbortController();
  let { signal } = controller;

  try {
    const response = await fetch(randomMealUrl, { signal });
    const data = await response.json();
    const singleMeal = data.meals[0];
    addMealToDOM(singleMeal);
    addMealDetailToDOM(singleMeal);
  } catch (e) {
    console.error(e);
  }
};

const getSearchMeal = async (searchTerm) => {
  let controller = new AbortController();
  let { signal } = controller;

  try {
    const response = await fetch(`${searchMealUrl}${searchTerm}`, { signal });
    const data = await response.json();
    const meals = data.meals;
    addSearchedMealsToDOM(meals);
  } catch (err) {
    console.error(err);
  }
};

const addSearchedMealsToDOM = (meals) => {
  recipeContainer.innerHTML = meals
    .map((meal) => {
      return `
    <div data-id=${meal.idMeal} class="recipe">
    <div class="tag">${meal.strMeal}</div>
    <div id="open-modal" class="recipe__image">
      <img class='recipe__image-img' src=${meal.strMealThumb} alt=${meal.strMeal} />
    </div>
    <div class="recipe__name">${meal.strMeal}</div>
  </div>
    `;
    })
    .join(' ');

  // populate the modal with the meal details
  recipeContainer.addEventListener('click', (e) => {
    console.log(e.target.parentElement.parentElement);
    const mealId = e.target.parentElement.parentElement.dataset.id;
    const meal = meals.find((meal) => meal.idMeal === mealId);
    addMealDetailToDOM(meal);
  });
};

const addMealDetailToDOM = (meal) => {
  let ingredients = [];

  for (let i = 1; i <= 20; i++) {
    if ((meal[`strIngredient${i}`] && meal[`strMeasure${i}`]) === '') {
      break;
    }
    ingredients.push(
      `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
    );
  }

  recipeDetailContainer.innerHTML = `
    <div class="recipe__image single-recipe-img">
      <img src=${meal.strMealThumb} alt=${meal.strMeal} />
    </div>
    <div class="recipe__name">${meal.strMeal}</div>
    <p class="recipe__instructions">
      ${meal.strInstructions}
    </p>
    <ul class="recipe_ingredients">
      ${ingredients
        .map((ingredient) => `<li class="recipe_ingredient">${ingredient}</li>`)
        .join('')}
    </ul>
  `;
};

const addMealToDOM = (meal) => {
  recipeContainer.innerHTML = `
  <div class="recipe">
    <div class="tag">Random Recipe</div>
    <div id="open-modal" class="recipe__image">
      <img class='recipe__image-img' src=${meal.strMealThumb} alt=${meal.strMeal} />
    </div>
    <div class="recipe__name">${meal.strMeal}</div>
  </div>`;
};

getRandomMeal();

// Event listeners

// Open Modal When clicked on recipe
recipeContainer.addEventListener('click', (e) => {
  if (e.target.classList.contains('recipe__image-img')) {
    recipeModal.classList.add('active-modal');
  }
});

// Close Modal when clicked on button
closeModal.addEventListener('click', (e) => {
  recipeModal.classList.remove('active-modal');
});

// Close modal if clicked outside the modal
window.addEventListener('click', (e) => {
  if (e.target === recipeModal) {
    recipeModal.classList.remove('active-modal');
  }
});

// Run Listener when form is submitted
form.addEventListener('submit', (e) => {
  e.preventDefault();
  getSearchMeal(searchInput.value);
});

// End Event listeners
