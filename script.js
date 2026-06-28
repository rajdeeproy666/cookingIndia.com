const recipes = [
  {
    name: { en: "Butter Chicken", bn: "বাটার চিকেন" },
    category: ["non-veg", "curry"],
    image:
      "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=80",
    ingredients: {
      en: [
        "500g chicken",
        "2 tomatoes",
        "1 onion",
        "2 tbsp butter",
        "1/2 cup cream",
        "Ginger-garlic paste",
        "Spices (garam masala, chili, turmeric)",
      ],
      bn: [
        "৫০০ গ্রাম মুরগির মাংস",
        "২টি টমেটো",
        "১টি পেঁয়াজ",
        "২ টেবিল চামচ মাখন",
        "১/২ কাপ ক্রিম",
        "আদা-রসুন বাটা",
        "মসলা (গরম মসলা, মরিচ, হলুদ)",
      ],
    },
    steps: {
      en: [
        "Marinate chicken with yogurt, ginger-garlic paste, and spices for 30 minutes.",
        "Cook marinated chicken in a pan until lightly browned.",
        "In another pan, sauté onion and tomato, then blend into smooth gravy.",
        "Add butter, spices, chicken, and simmer for 10 minutes.",
        "Add cream and cook for 2-3 minutes. Serve hot.",
      ],
      bn: [
        "মুর���ি দই, আদা-রসুন বাটা ও মসলা দিয়ে ৩০ মিনিট মেরিনেট করুন।",
        "প্যানে মুরগি হালকা বাদামি হওয়া পর্যন্ত ভাজুন।",
        "আলাদা প্যানে পেঁয়াজ-টমেটো ভেজে মিহি করে ব্লেন্ড করুন।",
        "মাখন, মসলা ও মুরগি দিয়ে ১০ মিনিট সিমার করুন।",
        "শেষে ক্রিম দিয়ে ২-৩ মিনিট রান্না করে পরিবেশন করুন।",
      ],
    },
  },
  {
    name: { en: "Chole Bhature", bn: "ছোলে ভাটুরে" },
    category: ["veg", "curry", "bread"],
    image:
      "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=1000&q=80",
    ingredients: {
      en: ["2 cups chickpeas", "2 onions", "2 tomatoes", "Chole masala", "Flour for bhature", "Yogurt", "Oil for frying"],
      bn: ["২ কাপ ছোলা", "২টি পেঁয়াজ", "২টি টমেটো", "ছোলে মসলা", "ভাটুরের জন্য ময়দা", "দই", "ভাজার জন্য তেল"],
    },
    steps: {
      en: [
        "Soak chickpeas overnight and pressure cook until soft.",
        "Prepare masala with onion, tomato, and spices.",
        "Add chickpeas and simmer 15 minutes.",
        "Knead flour with yogurt and rest dough for 2 hours.",
        "Roll and deep-fry bhature until puffed. Serve with chole.",
      ],
      bn: [
        "ছোলা সারা রাত ভিজিয়ে প্রেসার কুকারে সিদ্ধ করুন।",
        "পেঁয়াজ, টমেটো ও মসলা দিয়ে ঝোল তৈরি করুন।",
        "ছোলা দিয়ে ১৫ মিনিট সিমার করুন।",
        "ময়দা ও দই মিশিয়ে ডো বানিয়ে ২ ঘণ্টা ঢেকে রাখুন।",
        "বেলে ডিপ ফ্রাই করে ভাটুরে বানিয়ে ছোলার সাথে পরিবেশন করুন।",
      ],
    },
  },
  {
    name: { en: "Aloo Paratha", bn: "আলু পরোটা" },
    category: ["veg", "bread"],
    image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=1000&q=80",
    ingredients: {
      en: ["2 cups wheat flour", "3 boiled potatoes", "Green chili", "Coriander", "Ajwain", "Salt", "Ghee"],
      bn: ["২ কাপ আটা", "৩টি সেদ্ধ আলু", "কাঁচা মরিচ", "ধনেপাতা", "জোয়ান", "লবণ", "ঘি"],
    },
    steps: {
      en: [
        "Knead soft dough with flour and water.",
        "Mash potatoes and mix with chili, coriander, ajwain, and salt.",
        "Stuff dough balls with potato filling.",
        "Roll gently and roast on tawa with ghee until golden.",
        "Serve with curd, pickle, or butter.",
      ],
      bn: [
        "আটা ও পানি দিয়ে নরম ডো তৈরি করুন।",
        "সেদ্ধ আলু মেখে মরিচ, ধনেপাতা, জোয়ান ও লবণ মেশান।",
        "ডোর মধ্যে আলুর পুর ভরে নিন।",
        "বেলে তাওয়ায় ঘি দিয়ে সোনালি করে সেঁকুন।",
        "দই, আচার বা মাখনের সাথে পরিবেশন করুন।",
      ],
    },
  },
  {
    name: { en: "Palak Paneer", bn: "পালক পনির" },
    category: ["veg", "curry"],
    image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1000&q=80",
    ingredients: {
      en: ["250g paneer", "2 bunches spinach", "1 onion", "2 garlic cloves", "1 tomato", "Cream", "Spices"],
      bn: ["২৫০ গ্রাম পনির", "২ আঁটি পালং শাক", "১টি পেঁয়াজ", "২ কোয়া রসুন", "১টি টমেটো", "ক্রিম", "মসলা"],
    },
    steps: {
      en: ["Blanch spinach and blend into puree.", "Sauté onion, garlic, and tomato with spices.", "Add spinach puree and simmer.", "Add paneer cubes and cook 5 minutes.", "Finish with cream and serve."],
      bn: ["পালং শাক ব্লাঞ্চ করে পেস্ট করুন।", "পেঁয়াজ, রসুন, টমেটো ও মসলা ভাজুন।", "পালং পেস্ট দিয়ে সিমার করুন।", "পনির কিউব দিয়ে ৫ মিনিট রান্না করুন।", "শেষে ক্রিম দিয়ে পরিবেশন করুন।"],
    },
  },
  {
    name: { en: "Jeera Rice", bn: "জিরা ভাত" },
    category: ["veg", "rice"],
    image: "https://images.unsplash.com/photo-1512058564366-c9e3e0467d1f?auto=format&fit=crop&w=1000&q=80",
    ingredients: {
      en: ["1 cup basmati rice", "2 tsp cumin seeds", "1 tbsp ghee", "Salt", "Water"],
      bn: ["১ কাপ বাসমতি চাল", "২ চা চামচ জিরা", "১ টেবিল চামচ ঘি", "লবণ", "পানি"],
    },
    steps: {
      en: ["Wash and soak rice for 20 minutes.", "Heat ghee, add cumin seeds until fragrant.", "Add rice, water, and salt.", "Cook until rice is fluffy."],
      bn: ["চাল ধুয়ে ২০ মিনিট ভিজিয়ে রাখুন।", "ঘি গরম করে জিরা দিন।", "চাল, পানি ও লবণ দিন।", "ভাত ফুলে গেলে নামিয়ে নিন।"],
    },
  },
];

const translations = {
  en: {
    navHome: "Home", navRecipes: "Recipes", navAddRecipe: "Add Recipe", navSearch: "Recipe Search", navHistory: "Recipe History", navFavorites: "Favorites", navAbout: "About", navContact: "Contact",
    homeTitle: "Welcome to Cooking India", homeDesc: "Discover delicious North Indian dishes from classic curries to comforting breads and festive sweets.",
    recipesTitle: "Recipe Page", addRecipeTitle: "Add Your Recipe", addRecipeSub: "Share your recipe with name, photo, ingredients, and cooking process.", searchTitle: "Recipe Search", historyTitle: "Recipe History", historySubtitle: "Recently viewed recipes:",
    favTitle: "Favorite Recipes", favSubtitle: "Your saved favorite recipes:",
    aboutTitle: "About", aboutDesc1: "Cooking India celebrates the richness of North Indian cuisine. This website helps home cooks discover authentic recipes with easy, step-by-step instructions.",
    aboutDesc2: "From creamy paneer dishes to hearty dals and festive breads, our goal is to make Indian cooking simple and enjoyable.",
    contactTitle: "Contact", contactSub: "We’d love to hear from you!", labelName: "Name", labelEmail: "Email", labelMessage: "Message", sendBtn: "Send Message",
    labelRecipeName: "Recipe Name", labelRecipePhoto: "Recipe Photo (Image URL)", labelRecipeIngredients: "Ingredients (one per line)", labelRecipeProcess: "Cooking Process / Steps (one step per line)", labelRecipeCategory: "Category", addRecipeBtn: "Add Recipe",
    footerText: "Made with ❤️ for North Indian food lovers", searchPlaceholder: "Search by recipe name or ingredient...",
    filterAll: "All", filterVeg: "Veg", filterNonVeg: "Non-Veg", filterCurry: "Curry", filterBread: "Bread", filterRice: "Rice",
    ingredients: "Ingredients", howToCook: "How to Cook", markViewed: "Mark as Viewed", addFav: "Add to Favorites", removeFav: "Remove Favorite",
    noRecipes: "No recipes found.", startSearch: "Start typing to search recipes...", noHistory: "No recipes viewed yet.", noFav: "No favorites yet.",
    viewedAdded: "added to history!", favAdded: "added to favorites!", favRemoved: "removed from favorites.", contactThanks: "Thank you! Your message has been received.",
    addRecipeSuccess: "Recipe added successfully!", invalidPhotoUrl: "Please enter a valid image URL (jpg, jpeg, png, webp, gif, svg).",
    darkOn: "🌙 Dark Mode", darkOff: "☀️ Light Mode"
  },
  bn: {
    navHome: "হোম", navRecipes: "রেসিপি", navAddRecipe: "রেসিপি যোগ করুন", navSearch: "রেসিপি খোঁজ", navHistory: "রেসিপি হিস্টরি", navFavorites: "ফেভারিট", navAbout: "সম্পর্কে", navContact: "যোগাযোগ",
    homeTitle: "কুকিং ইন্ডিয়াতে স্বাগতম", homeDesc: "ক্লাসিক কারি থেকে আরামদায়ক রুটি ও উৎসবের মিষ্টি—সুস্বাদু উত্তর ভারতীয় রান্না আবিষ্কার করুন।",
    recipesTitle: "রেসিপি পেজ", addRecipeTitle: "আপনার রেসিপি যোগ করুন", addRecipeSub: "রেসিপির নাম, ছবি, উপকরণ এবং রান্নার ধাপ শেয়ার করুন।", searchTitle: "রেসিপি খোঁজ", historyTitle: "রেসিপি হিস্টরি", historySubtitle: "সম্প্র��ি দেখা রেসিপি:",
    favTitle: "প্রিয় রেসিপি", favSubtitle: "আপনার সংরক্ষিত প্রিয় রেসিপি:",
    aboutTitle: "সম্পর্কে", aboutDesc1: "কুকিং ইন্ডিয়া উত্তর ভারতীয় রান্নার সমৃদ্ধিকে উদযাপন করে। সহজ ধাপে আসল রেসিপি শিখতে এই সাইটটি সহায়তা করে।",
    aboutDesc2: "ক্রিমি পনির ডিশ থেকে পুষ্টিকর ডাল ও রুটি—আমাদের লক্ষ্য ভারতীয় রান্না সহজ ও আনন্দদায়ক করা।",
    contactTitle: "যোগাযোগ", contactSub: "আমরা আপনার কথা শুনতে চাই!", labelName: "নাম", labelEmail: "ইমেইল", labelMessage: "বার্তা", sendBtn: "বার্তা পাঠান",
    labelRecipeName: "রেসিপির নাম", labelRecipePhoto: "রেসিপির ছবি (ইমেজ URL)", labelRecipeIngredients: "উপকরণ (প্রতি লাইনে একটি)", labelRecipeProcess: "রান্নার ধাপ (প্রতি লাইনে একটি ধাপ)", labelRecipeCategory: "ক্যাটাগরি", addRecipeBtn: "রেসিপি যোগ করুন",
    footerText: "উত্তর ভারতীয় খাবারপ্রেমীদের জন্য ভালোবাসা দিয়ে তৈরি", searchPlaceholder: "রেসিপির নাম বা উপকরণ দিয়ে খুঁজুন...",
    filterAll: "সব", filterVeg: "ভেজ", filterNonVeg: "নন-ভেজ", filterCurry: "কারি", filterBread: "রুটি", filterRice: "ভাত",
    ingredients: "উপকরণ", howToCook: "রান্নার ধাপ", markViewed: "হিস্টরিতে যোগ করুন", addFav: "ফেভারিটে যোগ করুন", removeFav: "ফেভারিট সরান",
    noRecipes: "কোনো রেসিপি পাওয়া যায়নি।", startSearch: "রেসিপি খুঁজতে টাইপ করুন...", noHistory: "এখনও কোনো রেসিপি দেখা হয়নি।", noFav: "এখনও কোনো ফেভারিট নেই।",
    viewedAdded: "হিস্টরিতে যোগ হয়েছে!", favAdded: "ফেভারিটে যোগ হয়েছে!", favRemoved: "ফেভারিট থেকে সরানো হয়েছে।", contactThanks: "ধন্যবাদ! আপনার বার্তা গ্রহণ করা হয়েছে।",
    addRecipeSuccess: "রেসিপি সফলভাবে যোগ হয়েছে!", invalidPhotoUrl: "একটি সঠিক ইমেজ URL দিন (jpg, jpeg, png, webp, gif, svg)।",
    darkOn: "🌙 ডার্ক মোড", darkOff: "☀️ লাইট মোড"
  }
};

let currentLang = localStorage.getItem("lang") || "en";
let currentFilter = "all";
let filteredRecipes = recipes;

const recipesContainer = document.getElementById("recipesContainer");
const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const historyList = document.getElementById("historyList");
const favoritesList = document.getElementById("favoritesList");
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");
const darkModeToggle = document.getElementById("darkModeToggle");
const langToggle = document.getElementById("langToggle");
const addRecipeForm = document.getElementById("addRecipeForm");
const addRecipeMsg = document.getElementById("addRecipeMsg");

function t(key) { return translations[currentLang][key] || key; }

function getFavorites() { return JSON.parse(localStorage.getItem("favorites") || "[]"); }
function saveFavorites(favs) { localStorage.setItem("favorites", JSON.stringify(favs)); }

function isValidImageUrl(url) {
  return /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif|svg)(\?.*)?$/i.test(url.trim());
}

function createRecipeCard(recipe) {
  const card = document.createElement("article");
  card.className = "recipe-card";

  const isFav = getFavorites().includes(recipe.name.en);
  const ingredientsList = recipe.ingredients[currentLang].map((x) => `<li>${x}</li>`).join("");
  const stepsList = recipe.steps[currentLang].map((x) => `<li>${x}</li>`).join("");

  card.innerHTML = `
    <img class="recipe-image" src="${recipe.image}" alt="${recipe.name[currentLang]}" />
    <h3>${recipe.name[currentLang]}</h3>
    <h4>${t("ingredients")}</h4>
    <ul>${ingredientsList}</ul>
    <h4>${t("howToCook")}</h4>
    <ol>${stepsList}</ol>
    <div class="card-actions">
      <button class="view-btn">${t("markViewed")}</button>
      <button class="fav-btn ${isFav ? "saved" : ""}">${isFav ? t("removeFav") : t("addFav")}</button>
    </div>
  `;

  card.querySelector(".view-btn").addEventListener("click", () => {
    saveHistory(recipe.name[currentLang]);
    renderHistory();
    alert(`${recipe.name[currentLang]} ${t("viewedAdded")}`);
  });

  card.querySelector(".fav-btn").addEventListener("click", (e) => {
    toggleFavorite(recipe.name.en);
    renderRecipes(filteredRecipes, recipesContainer);
    renderSearchResults();
    renderFavorites();
    const added = !e.target.classList.contains("saved");
    alert(`${recipe.name[currentLang]} ${added ? t("favAdded") : t("favRemoved")}`);
  });

  return card;
}

function renderRecipes(list, target) {
  target.innerHTML = "";
  if (!list.length) {
    target.innerHTML = `<p>${t("noRecipes")}</p>`;
    return;
  }
  list.forEach((recipe) => target.appendChild(createRecipeCard(recipe)));
}

function saveHistory(recipeName) {
  const history = JSON.parse(localStorage.getItem("recipeHistory") || "[]");
  const updated = [recipeName, ...history.filter((x) => x !== recipeName)].slice(0, 10);
  localStorage.setItem("recipeHistory", JSON.stringify(updated));
}

function renderHistory() {
  const history = JSON.parse(localStorage.getItem("recipeHistory") || "[]");
  historyList.innerHTML = "";
  if (!history.length) {
    historyList.innerHTML = `<li>${t("noHistory")}</li>`;
    return;
  }
  history.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    historyList.appendChild(li);
  });
}

function toggleFavorite(recipeNameEn) {
  const favs = getFavorites();
  const index = favs.indexOf(recipeNameEn);
  if (index >= 0) favs.splice(index, 1);
  else favs.push(recipeNameEn);
  saveFavorites(favs);
}

function renderFavorites() {
  const favs = getFavorites();
  favoritesList.innerHTML = "";
  if (!favs.length) {
    favoritesList.innerHTML = `<li>${t("noFav")}</li>`;
    return;
  }
  favs.forEach((fav) => {
    const rec = recipes.find((r) => r.name.en === fav);
    if (rec) {
      const li = document.createElement("li");
      li.textContent = rec.name[currentLang];
      favoritesList.appendChild(li);
    }
  });
}

function applyFilter(filter) {
  currentFilter = filter;
  filteredRecipes = filter === "all" ? recipes : recipes.filter((r) => r.category.includes(filter));
  renderRecipes(filteredRecipes, recipesContainer);
}

function renderSearchResults() {
  const query = searchInput.value.trim().toLowerCase();
  if (!query) {
    searchResults.innerHTML = `<p>${t("startSearch")}</p>`;
    return;
  }

  const filtered = recipes.filter((recipe) => {
    const nameMatch = recipe.name[currentLang].toLowerCase().includes(query);
    const ingMatch = recipe.ingredients[currentLang].some((i) => i.toLowerCase().includes(query));
    return nameMatch || ingMatch;
  });

  renderRecipes(filtered, searchResults);
}

searchInput.addEventListener("input", renderSearchResults);

function setupNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const pages = document.querySelectorAll(".page");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.forEach((btn) => btn.classList.remove("active"));
      pages.forEach((page) => page.classList.remove("active"));

      link.classList.add("active");
      document.getElementById(link.dataset.target).classList.add("active");

      if (window.innerWidth <= 720) navbar.classList.remove("open");
    });
  });
}

function setupFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      applyFilter(btn.dataset.filter);
    });
  });
}

function setupAddRecipeForm() {
  addRecipeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("recipeNameInput").value.trim();
    const image = document.getElementById("recipePhotoInput").value.trim();
    const ingredientsRaw = document.getElementById("recipeIngredientsInput").value;
    const stepsRaw = document.getElementById("recipeStepsInput").value;
    const category = document.getElementById("recipeCategoryInput").value;

    if (!isValidImageUrl(image)) {
      addRecipeMsg.textContent = t("invalidPhotoUrl");
      addRecipeMsg.classList.add("error");
      return;
    }

    const ingredients = ingredientsRaw
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    const steps = stepsRaw
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);

    const newRecipe = {
      name: {
        en: name,
        bn: name,
      },
      category: [category],
      image,
      ingredients: {
        en: ingredients,
        bn: ingredients,
      },
      steps: {
        en: steps,
        bn: steps,
      },
    };

    recipes.unshift(newRecipe);
    applyFilter(currentFilter);
    renderSearchResults();

    addRecipeMsg.textContent = t("addRecipeSuccess");
    addRecipeMsg.classList.remove("error");
    addRecipeForm.reset();
  });
}

menuToggle.addEventListener("click", () => navbar.classList.toggle("open"));

darkModeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const isDark = document.body.classList.contains("dark");
  localStorage.setItem("darkMode", isDark ? "1" : "0");
  darkModeToggle.textContent = isDark ? t("darkOff") : t("darkOn");
});

langToggle.addEventListener("click", () => {
  currentLang = currentLang === "en" ? "bn" : "en";
  localStorage.setItem("lang", currentLang);
  applyTranslations();
  applyFilter(currentFilter);
  renderSearchResults();
  renderHistory();
  renderFavorites();
});

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  langToggle.textContent = currentLang === "en" ? "বাংলা" : "English";

  const isDark = document.body.classList.contains("dark");
  darkModeToggle.textContent = isDark ? t("darkOff") : t("darkOn");
}

const contactForm = document.getElementById("contactForm");
const contactMsg = document.getElementById("contactMsg");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  contactMsg.textContent = t("contactThanks");
  contactForm.reset();
});

if (localStorage.getItem("darkMode") === "1") {
  document.body.classList.add("dark");
}

applyTranslations();
setupNavigation();
setupFilters();
setupAddRecipeForm();
applyFilter("all");
renderSearchResults();
renderHistory();
renderFavorites();
