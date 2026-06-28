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
        "মুরগি দই, আদা-রসুন বাটা ও মসলা দিয়ে ৩০ মিনিট মেরিনেট করুন।",
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
      bn: ["পালং শাক ব্লাঞ্চ করে পেস্ট করুন।", "পেঁয়াজ, রসুন, টমেটো ও মসলা ভাজুন।", "শাকের পেস্ট দিয়ে সিমার করুন।", "পনির দিয়ে ৫ মিনিট রান্না করুন।", "শেষে ক্রিম দিয়ে পরিবেশন করুন।"],
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
      bn: ["চাল ধুয়ে ২০ মিনিট ভিজিয়ে রাখুন।", "ঘি গরম করে জিরা দিন।", "চাল, পানি ও লবণ দিন।", "ভাত ঝরঝরে হওয়া পর্যন্ত রান্না করুন।"],
    },
  },
];

const additionalRecipeSeeds = [
  { en: "Dal Makhani", bn: "ডাল মাখনি", category: ["veg", "curry"], image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80" },
  { en: "Rajma Masala", bn: "রাজমা মসালা", category: ["veg", "curry"], image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=1000&q=80" },
  { en: "Kadhi Pakora", bn: "কড়ি পাকোড়া", category: ["veg", "curry"], image: "https://images.unsplash.com/photo-1512058564366-c9e3e0467d1f?auto=format&fit=crop&w=1000&q=80" },
  { en: "Shahi Paneer", bn: "শাহী পনির", category: ["veg", "curry"], image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1000&q=80" },
  { en: "Kadai Paneer", bn: "কড়াই পনির", category: ["veg", "curry"], image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=80" },
  { en: "Matar Paneer", bn: "মটর পনির", category: ["veg", "curry"], image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1000&q=80" },
  { en: "Paneer Butter Masala", bn: "পনির বাটার মসালা", category: ["veg", "curry"], image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=1000&q=80" },
  { en: "Baingan Bharta", bn: "বেগুন ভর্তা", category: ["veg", "curry"], image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80" },
  { en: "Aloo Gobi", bn: "আলু গোবি", category: ["veg", "curry"], image: "https://images.unsplash.com/photo-1604908176997-4312ee0f0bb3?auto=format&fit=crop&w=1000&q=80" },
  { en: "Bhindi Masala", bn: "ঢেঁড়স মসালা", category: ["veg", "curry"], image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1000&q=80" },
  { en: "Malai Kofta", bn: "মালাই কোফতা", category: ["veg", "curry"], image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?auto=format&fit=crop&w=1000&q=80" },
  { en: "Dum Aloo", bn: "দম আলু", category: ["veg", "curry"], image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&w=1000&q=80" },
  { en: "Chana Masala", bn: "ছানা মসালা", category: ["veg", "curry"], image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=1000&q=80" },
  { en: "Tandoori Roti", bn: "তন্দুরি রুটি", category: ["veg", "bread"], image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=1000&q=80" },
  { en: "Butter Naan", bn: "বাটার নান", category: ["veg", "bread"], image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1000&q=80" },
  { en: "Garlic Naan", bn: "গার্লিক নান", category: ["veg", "bread"], image: "https://images.unsplash.com/photo-1574653853027-79d28f6269de?auto=format&fit=crop&w=1000&q=80" },
  { en: "Missi Roti", bn: "মিসসি রুটি", category: ["veg", "bread"], image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=1000&q=80" },
  { en: "Lachha Paratha", bn: "লাছা পরোটা", category: ["veg", "bread"], image: "https://images.unsplash.com/photo-1627662168809-efa1b91f7a6b?auto=format&fit=crop&w=1000&q=80" },
  { en: "Puri", bn: "পুরি", category: ["veg", "bread"], image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=1000&q=80" },
  { en: "Roomali Roti", bn: "রুমালি রুটি", category: ["veg", "bread"], image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b7?auto=format&fit=crop&w=1000&q=80" },
  { en: "Veg Pulao", bn: "ভেজ পোলাও", category: ["veg", "rice"], image: "https://images.unsplash.com/photo-1512058564366-c9e3e0467d1f?auto=format&fit=crop&w=1000&q=80" },
  { en: "Peas Pulao", bn: "মটর পোলাও", category: ["veg", "rice"], image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=1000&q=80" },
  { en: "Lemon Rice", bn: "লেবু ভাত", category: ["veg", "rice"], image: "https://images.unsplash.com/photo-1604908176997-4312ee0f0bb3?auto=format&fit=crop&w=1000&q=80" },
  { en: "Kashmiri Pulao", bn: "কাশ্মীরি পোলাও", category: ["veg", "rice"], image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=1000&q=80" },
  { en: "Chicken Curry", bn: "চিকেন কারি", category: ["non-veg", "curry"], image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=1000&q=80" },
  { en: "Chicken Korma", bn: "চিকেন কোরমা", category: ["non-veg", "curry"], image: "https://images.unsplash.com/photo-1604908554027-3ea8f695d0de?auto=format&fit=crop&w=1000&q=80" },
  { en: "Kadai Chicken", bn: "কড়াই চিকেন", category: ["non-veg", "curry"], image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?auto=format&fit=crop&w=1000&q=80" },
  { en: "Chicken Tikka Masala", bn: "চিকেন টিক্কা মসালা", category: ["non-veg", "curry"], image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=1000&q=80" },
  { en: "Mutton Rogan Josh", bn: "মাটন রোগান জোশ", category: ["non-veg", "curry"], image: "https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?auto=format&fit=crop&w=1000&q=80" },
  { en: "Keema Matar", bn: "কিমা মটর", category: ["non-veg", "curry"], image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80" },
  { en: "Fish Curry", bn: "ফিশ কারি", category: ["non-veg", "curry"], image: "https://images.unsplash.com/photo-1604908554087-8293f2f0a21e?auto=format&fit=crop&w=1000&q=80" },
  { en: "Egg Curry", bn: "ডিম কারি", category: ["non-veg", "curry"], image: "https://images.unsplash.com/photo-1604908177225-6f89e2b0f9ad?auto=format&fit=crop&w=1000&q=80" },
  { en: "Amritsari Chole", bn: "অমৃতসরি ছোলে", category: ["veg", "curry"], image: "https://images.unsplash.com/photo-1626132647523-66f5bf380027?auto=format&fit=crop&w=1000&q=80" },
  { en: "Sarson Ka Saag", bn: "সরষে শাক", category: ["veg", "curry"], image: "https://images.unsplash.com/photo-1626132646998-104fcb8fdb40?auto=format&fit=crop&w=1000&q=80" },
  { en: "Makki Di Roti", bn: "মক্কি দি রুটি", category: ["veg", "bread"], image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?auto=format&fit=crop&w=1000&q=80" },
  { en: "Paneer Tikka", bn: "পনির টিক্কা", category: ["veg", "curry"], image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=1000&q=80" },
  { en: "Tandoori Chicken", bn: "তন্দুরি চিকেন", category: ["non-veg", "curry"], image: "https://images.unsplash.com/photo-1603893662172-99ed0cea2a08?auto=format&fit=crop&w=1000&q=80" },
  { en: "Seekh Kebab", bn: "শিখ কাবাব", category: ["non-veg", "curry"], image: "https://images.unsplash.com/photo-1529563021893-cc83c992d75d?auto=format&fit=crop&w=1000&q=80" },
  { en: "Hara Bhara Kebab", bn: "হারা ভারা কাবাব", category: ["veg", "curry"], image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80" },
  { en: "Navratan Korma", bn: "নবরত্ন কোরমা", category: ["veg", "curry"], image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=1000&q=80" },
  { en: "Vegetable Korma", bn: "ভেজিটেবল কোরমা", category: ["veg", "curry"], image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1000&q=80" },
  { en: "Jeera Aloo", bn: "জিরা আলু", category: ["veg", "curry"], image: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?auto=format&fit=crop&w=1000&q=80" },
  { en: "Gobi Manchurian", bn: "গোবি মাঞ্চুরিয়ান", category: ["veg", "curry"], image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1000&q=80" },
  { en: "Dal Tadka", bn: "ডাল তড়কা", category: ["veg", "curry"], image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1000&q=80" },
  { en: "Moong Dal Khichdi", bn: "মুগ ডাল খিচুড়ি", category: ["veg", "rice"], image: "https://images.unsplash.com/photo-1512058564366-c9e3e0467d1f?auto=format&fit=crop&w=1000&q=80" },
  { en: "Veg Biryani", bn: "ভেজ বিরিয়ানি", category: ["veg", "rice"], image: "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=1000&q=80" },
  { en: "Chicken Biryani", bn: "চিকেন বিরিয়ানি", category: ["non-veg", "rice"], image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?auto=format&fit=crop&w=1000&q=80" },
  { en: "Mutton Biryani", bn: "মাটন বিরিয়ানি", category: ["non-veg", "rice"], image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?auto=format&fit=crop&w=1000&q=80" },
  { en: "Prawn Curry", bn: "চিংড়ি কারি", category: ["non-veg", "curry"], image: "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=1000&q=80" },
  { en: "Soya Chaap Curry", bn: "সয়া চাপ কারি", category: ["veg", "curry"], image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=1000&q=80" },
];

function createQuickRecipe(seed) {
  const isRice = seed.category.includes("rice");
  const isBread = seed.category.includes("bread");
  return {
    name: { en: seed.en, bn: seed.bn },
    category: seed.category,
    image: seed.image,
    ingredients: {
      en: isRice
        ? ["1 cup basmati rice", "2 tbsp oil or ghee", "1 onion", "Mixed spices", "Salt", "Water"]
        : isBread
          ? ["2 cups flour", "1 tbsp oil or ghee", "Salt", "Warm water", "Optional herbs/spices"]
          : ["Main ingredient", "1 onion", "2 tomatoes", "Ginger-garlic paste", "Spices", "Oil or ghee", "Salt"],
      bn: isRice
        ? ["১ কাপ বাসমতি চাল", "২ টেবিল চামচ তেল বা ঘি", "১টি পেঁয়াজ", "মিশ্র মসলা", "লবণ", "পানি"]
        : isBread
          ? ["২ কাপ আটা/ময়দা", "১ টেবিল চামচ তেল বা ঘি", "লবণ", "গরম পানি", "ঐচ্ছিক হার্বস/মসলা"]
          : ["মূল উপকরণ", "১টি পেঁয়াজ", "২টি টমেটো", "আদা-রসুন বাটা", "মসলা", "তেল বা ঘি", "লবণ"],
    },
    steps: {
      en: isRice
        ? ["Wash and soak rice for 20 minutes.", "Sauté onion and whole spices in ghee.", "Add rice, water, and salt.", "Cook covered until fluffy and serve hot."]
        : isBread
          ? ["Combine flour, salt, and oil; add water to knead soft dough.", "Rest dough for 20 minutes.", "Divide, roll, and cook on hot tawa or tandoor.", "Brush with ghee and serve warm."]
          : ["Heat oil and sauté onion until golden.", "Add ginger-garlic paste, tomato, and spices; cook masala well.", "Add main ingredient and mix evenly.", "Pour water as needed and simmer until cooked.", "Garnish and serve hot."],
      bn: isRice
        ? ["চাল ধুয়ে ২০ মিনিট ভিজিয়ে রাখুন।", "ঘি গরম করে পেঁয়াজ ও গোটা মসলা ভাজুন।", "চাল, পানি ও লবণ যোগ করুন।", "ঢেকে ঝরঝরে হওয়া পর্যন্ত রান্না করে পরিবেশন করুন।"]
        : isBread
          ? ["আটা/ময়দা, লবণ ও তেল মিশিয়ে পানি দিয়ে নরম ডো বানান।", "ডো ২০ মিনিট ঢেকে রাখুন।", "লেচি কেটে বেলে তাওয়া/তন্দুরে সেঁকুন।", "ঘি মেখে গরম গরম পরিবেশন করুন।"]
          : ["তেল গরম করে পেঁয়াজ সোনালি হওয়া পর্যন্ত ভাজুন।", "আদা-রসুন বাটা, টমেটো ও মসলা দিয়ে কষান।", "মূল উপকরণ দিয়ে ভালোভাবে মেশান।", "প্রয়োজনমতো পানি দিয়ে ঢেকে সিদ্ধ করুন।", "গার্নিশ করে গরম পরিবেশন করুন।"],
    },
  };
}

recipes.push(...additionalRecipeSeeds.map(createQuickRecipe));

const translations = {
  en: {
    navHome: "Home", navRecipes: "Recipes", navSearch: "Recipe Search", navHistory: "Recipe History", navFavorites: "Favorites", navAbout: "About", navContact: "Contact",
    homeTitle: "Welcome to Cooking India", homeDesc: "Discover delicious North Indian dishes from classic curries to comforting breads and festive sweets.",
    recipesTitle: "Recipe Page", searchTitle: "Recipe Search", historyTitle: "Recipe History", historySubtitle: "Recently viewed recipes:",
    favTitle: "Favorite Recipes", favSubtitle: "Your saved favorite recipes:",
    aboutTitle: "About", aboutDesc1: "Cooking India celebrates the richness of North Indian cuisine. This website helps home cooks discover authentic recipes with easy, step-by-step instructions.",
    aboutDesc2: "From creamy paneer dishes to hearty dals and festive breads, our goal is to make Indian cooking simple and enjoyable.",
    contactTitle: "Contact", contactSub: "We’d love to hear from you!", labelName: "Name", labelEmail: "Email", labelMessage: "Message", sendBtn: "Send Message",
    footerText: "Made with ❤️ for North Indian food lovers", searchPlaceholder: "Search by recipe name or ingredient...",
    filterAll: "All", filterVeg: "Veg", filterNonVeg: "Non-Veg", filterCurry: "Curry", filterBread: "Bread", filterRice: "Rice",
    ingredients: "Ingredients", howToCook: "How to Cook", markViewed: "Mark as Viewed", addFav: "Add to Favorites", removeFav: "Remove Favorite",
    noRecipes: "No recipes found.", startSearch: "Start typing to search recipes...", noHistory: "No recipes viewed yet.", noFav: "No favorites yet.",
    viewedAdded: "added to history!", favAdded: "added to favorites!", favRemoved: "removed from favorites.", contactThanks: "Thank you! Your message has been received.",
    darkOn: "🌙 Dark Mode", darkOff: "☀️ Light Mode"
  },
  bn: {
    navHome: "হোম", navRecipes: "রেসিপি", navSearch: "রেসিপি খোঁজ", navHistory: "রেসিপি হিস্টরি", navFavorites: "ফেভারিট", navAbout: "সম্পর্কে", navContact: "যোগাযোগ",
    homeTitle: "কুকিং ইন্ডিয়াতে স্বাগতম", homeDesc: "ক্লাসিক কারি থেকে আরামদায়ক রুটি ও উৎসবের মিষ্টি—দারুণ সব উত্তর ভারতীয় খাবার আবিষ্কার করুন।",
    recipesTitle: "রেসিপি পেজ", searchTitle: "রেসিপি খোঁজ", historyTitle: "রেসিপি হিস্টরি", historySubtitle: "সম্প্রতি দেখা রেসিপি:",
    favTitle: "প্রিয় রেসিপি", favSubtitle: "আপনার সংরক্ষিত প্রিয় রেসিপি:",
    aboutTitle: "সম্পর্কে", aboutDesc1: "কুকিং ইন্ডিয়া উত্তর ভারতীয় রান্নার সমৃদ্ধিকে উদযাপন করে। সহজ ধাপে ধাপে নির্দেশনায় আসল রেসিপি শিখতে সাহায্য করে।",
    aboutDesc2: "ক্রিমি পনির ডিশ থেকে পুষ্টিকর ডাল ও রুটি—আমাদের লক্ষ্য ভারতীয় রান্নাকে সহজ ও আনন্দদায়ক করা।",
    contactTitle: "যোগাযোগ", contactSub: "আমরা আপনার কথা শুনতে চাই!", labelName: "নাম", labelEmail: "ইমেইল", labelMessage: "বার্তা", sendBtn: "বার্তা পাঠান",
    footerText: "উত্তর ভারতীয় খাবারপ্রেমীদের জন্য ভালোবাসা দিয়ে তৈরি", searchPlaceholder: "রেসিপির নাম বা উপকরণ দিয়ে খুঁজুন...",
    filterAll: "সব", filterVeg: "ভেজ", filterNonVeg: "নন-ভেজ", filterCurry: "কারি", filterBread: "রুটি", filterRice: "ভাত",
    ingredients: "উপকরণ", howToCook: "রান্নার ধাপ", markViewed: "হিস্টরিতে যোগ করুন", addFav: "ফেভারিটে যোগ করুন", removeFav: "ফেভারিট থেকে সরান",
    noRecipes: "কোনো রেসিপি পাওয়া যায়নি।", startSearch: "রেসিপি খুঁজতে টাইপ করুন...", noHistory: "এখনও কোনো রেসিপি দেখা হয়নি।", noFav: "এখনও কোনো ফেভারিট নেই।",
    viewedAdded: "হিস্টরিতে যোগ হয়েছে!", favAdded: "ফেভারিটে যোগ হয়েছে!", favRemoved: "ফেভারিট থেকে সরানো হয়েছে।", contactThanks: "ধন্যবাদ! আপনার বার্তা আমরা পেয়েছি।",
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

function t(key) { return translations[currentLang][key] || key; }

function getFavorites() { return JSON.parse(localStorage.getItem("favorites") || "[]"); }
function saveFavorites(favs) { localStorage.setItem("favorites", JSON.stringify(favs)); }

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
applyFilter("all");
renderSearchResults();
renderHistory();
renderFavorites();
