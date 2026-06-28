const recipes = [
  {
    name: "Butter Chicken",
    ingredients: [
      "500g chicken",
      "2 tomatoes",
      "1 onion",
      "2 tbsp butter",
      "1/2 cup cream",
      "Ginger-garlic paste",
      "Spices (garam masala, chili, turmeric)",
    ],
    steps: [
      "Marinate chicken with yogurt, ginger-garlic paste, and spices for 30 minutes.",
      "Cook marinated chicken in a pan until lightly browned.",
      "In another pan, sauté onion and tomato, then blend into smooth gravy.",
      "Add butter, spices, chicken, and simmer for 10 minutes.",
      "Add cream and cook for 2-3 minutes. Serve hot.",
    ],
  },
  {
    name: "Chole Bhature",
    ingredients: [
      "2 cups chickpeas",
      "2 onions",
      "2 tomatoes",
      "Chole masala",
      "Flour for bhature",
      "Yogurt",
      "Oil for frying",
    ],
    steps: [
      "Soak chickpeas overnight and pressure cook until soft.",
      "Prepare masala with onion, tomato, and spices.",
      "Add chickpeas and simmer 15 minutes.",
      "Knead flour with yogurt and rest dough for 2 hours.",
      "Roll and deep-fry bhature until puffed. Serve with chole.",
    ],
  },
  {
    name: "Aloo Paratha",
    ingredients: [
      "2 cups wheat flour",
      "3 boiled potatoes",
      "Green chili",
      "Coriander",
      "Ajwain",
      "Salt",
      "Ghee",
    ],
    steps: [
      "Knead soft dough with flour and water.",
      "Mash potatoes and mix with chili, coriander, ajwain, and salt.",
      "Stuff dough balls with potato filling.",
      "Roll gently and roast on tawa with ghee until golden.",
      "Serve with curd, pickle, or butter.",
    ],
  },
  {
    name: "Palak Paneer",
    ingredients: [
      "250g paneer",
      "2 bunches spinach",
      "1 onion",
      "2 garlic cloves",
      "1 tomato",
      "Cream",
      "Spices",
    ],
    steps: [
      "Blanch spinach and blend into puree.",
      "Sauté onion, garlic, and tomato with spices.",
      "Add spinach puree and simmer.",
      "Add paneer cubes and cook 5 minutes.",
      "Finish with cream and serve.",
    ],
  },
  {
    name: "Dal Makhani",
    ingredients: [
      "1 cup whole urad dal",
      "1/4 cup rajma",
      "2 tomatoes",
      "1 onion",
      "Butter",
      "Cream",
      "Spices",
    ],
    steps: [
      "Soak dal and rajma overnight and pressure cook.",
      "Prepare masala with onion, tomato, and spices.",
      "Add cooked dal and simmer on low heat for 30-40 minutes.",
      "Add butter and cream, cook 5 more minutes.",
      "Serve with naan or rice.",
    ],
  },
  {
    name: "Rajma Masala",
    ingredients: [
      "2 cups rajma",
      "2 onions",
      "2 tomatoes",
      "Ginger-garlic paste",
      "Spices",
      "Coriander leaves",
    ],
    steps: [
      "Soak rajma overnight and pressure cook.",
      "Cook onion-tomato masala with spices.",
      "Add rajma and simmer 20 minutes.",
      "Garnish with coriander and serve with rice.",
    ],
  },
  {
    name: "Paneer Butter Masala",
    ingredients: [
      "250g paneer",
      "2 tomatoes",
      "1 onion",
      "Butter",
      "Cream",
      "Cashews",
      "Spices",
    ],
    steps: [
      "Cook onions, tomatoes, and cashews; blend into smooth paste.",
      "Heat butter, add paste and spices.",
      "Add paneer cubes and simmer.",
      "Finish with cream and serve hot.",
    ],
  },
  {
    name: "Baingan Bharta",
    ingredients: [
      "1 large eggplant",
      "1 onion",
      "2 tomatoes",
      "Green chili",
      "Garlic",
      "Mustard oil",
      "Spices",
    ],
    steps: [
      "Roast eggplant until charred; peel and mash.",
      "Sauté onions, garlic, chili, and tomatoes.",
      "Add mashed eggplant and spices.",
      "Cook 10 minutes and serve.",
    ],
  },
  {
    name: "Kadhai Paneer",
    ingredients: [
      "250g paneer",
      "Capsicum",
      "Onion",
      "Tomatoes",
      "Kadhai masala",
      "Oil",
      "Coriander",
    ],
    steps: [
      "Sauté onion and capsicum in oil.",
      "Add tomato puree and kadhai masala.",
      "Add paneer and cook 8-10 minutes.",
      "Garnish and serve.",
    ],
  },
  {
    name: "Jeera Rice",
    ingredients: [
      "1 cup basmati rice",
      "2 tsp cumin seeds",
      "1 tbsp ghee",
      "Salt",
      "Water",
    ],
    steps: [
      "Wash and soak rice for 20 minutes.",
      "Heat ghee, add cumin seeds until fragrant.",
      "Add rice, water, and salt.",
      "Cook until rice is fluffy.",
    ],
  },
];

const recipesContainer = document.getElementById("recipesContainer");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const historyList = document.getElementById("historyList");

function createRecipeCard(recipe) {
  const card = document.createElement("article");
  card.className = "recipe-card";

  const ingredientsList = recipe.ingredients
    .map((ingredient) => `<li>${ingredient}</li>`)
    .join("");
  const stepsList = recipe.steps.map((step) => `<li>${step}</li>`).join("");

  card.innerHTML = `
    <h3>${recipe.name}</h3>
    <h4>Ingredients</h4>
    <ul>${ingredientsList}</ul>
    <h4>How to Cook</h4>
    <ol>${stepsList}</ol>
    <button class="view-btn">Mark as Viewed</button>
  `;

  card.querySelector(".view-btn").addEventListener("click", () => {
    saveHistory(recipe.name);
    renderHistory();
    alert(`${recipe.name} added to history!`);
  });

  return card;
}

function renderRecipes(list, target) {
  target.innerHTML = "";
  if (!list.length) {
    target.innerHTML = "<p>No recipes found.</p>";
    return;
  }
  list.forEach((recipe) => target.appendChild(createRecipeCard(recipe)));
}

function saveHistory(recipeName) {
  const history = JSON.parse(localStorage.getItem("recipeHistory") || "[]");
  const updated = [recipeName, ...history.filter((name) => name !== recipeName)].slice(0, 10);
  localStorage.setItem("recipeHistory", JSON.stringify(updated));
}

function renderHistory() {
  const history = JSON.parse(localStorage.getItem("recipeHistory") || "[]");
  historyList.innerHTML = "";

  if (!history.length) {
    historyList.innerHTML = "<li>No recipes viewed yet.</li>";
    return;
  }

  history.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    historyList.appendChild(li);
  });
}

searchInput.addEventListener("input", (event) => {
  const query = event.target.value.trim().toLowerCase();
  if (!query) {
    searchResults.innerHTML = "<p>Start typing to search recipes...</p>";
    return;
  }

  const filtered = recipes.filter((recipe) => {
    const inName = recipe.name.toLowerCase().includes(query);
    const inIngredients = recipe.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(query)
    );
    return inName || inIngredients;
  });

  renderRecipes(filtered, searchResults);
});

function setupNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((btn) => btn.classList.remove("active"));
      pages.forEach((page) => page.classList.remove("active"));

      link.classList.add("active");
      const target = document.getElementById(link.dataset.target);
      target.classList.add("active");
    });
  });
}

renderRecipes(recipes, recipesContainer);
searchResults.innerHTML = "<p>Start typing to search recipes...</p>";
renderHistory();
setupNavigation();
