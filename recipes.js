// Recipe Data (JSON-like)
const recipes = [
  {
    name: "Avocado Toast",
    category: "Breakfast",
    image: "Images/avocado.jpg",
    description: "Healthy avocado spread on whole-grain bread.",
    ingredients: ["1 avocado", "2 slices whole-grain bread", "Salt & Pepper", "Lemon juice"],
    steps: ["Toast the bread.", "Mash the avocado with lemon juice, salt, and pepper.", "Spread on toast.", "Serve immediately."],
    nutrition: {Calories: "250 kcal", Protein: "6 g", Carbs: "30 g", Fat: "14 g"}
  },
  {
    name: "Quinoa Salad",
    category: "Lunch",
    image: "Images/quinoa.jpg",
    description: "A protein-packed salad with fresh veggies.",
    ingredients: ["1 cup cooked quinoa", "1/2 cup cherry tomatoes", "1/2 cup cucumber", "1/4 cup feta cheese", "Olive oil", "Lemon juice"],
    steps: ["Cook quinoa.", "Chop vegetables.", "Mix all ingredients with olive oil and lemon juice.", "Serve chilled."],
    nutrition: {Calories: "350 kcal", Protein: "10 g", Carbs: "40 g", Fat: "15 g"}
  },
  {
    name: "Grilled Salmon with Veggies",
    category: "Dinner",
    image: "Images/salmon.jpg",
    description: "Omega-3 rich salmon served with roasted vegetables.",
    ingredients: ["1 salmon fillet", "1 cup broccoli", "1 cup carrots", "1 tbsp olive oil", "Salt & pepper"],
    steps: ["Season salmon with salt, pepper, olive oil.", "Grill salmon 3–4 minutes per side.", "Roast broccoli and carrots for 15 mins.", "Serve together."],
    nutrition: {Calories: "480 kcal", Protein: "35 g", Carbs: "20 g", Fat: "28 g"}
  },
  {
    name: "Greek Yogurt Parfait",
    category: "Snack",
    image: "Images/yogurt.jpg",
    description: "A layered snack with yogurt, fruits, and granola.",
    ingredients: ["1 cup Greek yogurt", "1/2 cup mixed berries", "1/4 cup granola", "1 tbsp honey"],
    steps: ["Spoon yogurt into glass.", "Add a layer of berries.", "Top with granola.", "Drizzle honey and serve."],
    nutrition: {Calories: "280 kcal", Protein: "12 g", Carbs: "40 g", Fat: "8 g"}
  },
  {
    name: "Veggie Omelette",
    category: "Breakfast",
    image: "Images/veggie.jpg",
    description: "A fluffy omelette packed with vegetables.",
    ingredients: ["3 eggs", "1/4 cup spinach", "1/4 cup mushrooms", "1/4 cup onions", "1 tbsp olive oil", "Salt & pepper"],
    steps: ["Whisk eggs with salt and pepper.", "Sauté veggies in olive oil.", "Pour eggs over veggies.", "Cook until firm and fold omelette."],
    nutrition: {Calories: "320 kcal", Protein: "22 g", Carbs: "8 g", Fat: "24 g"}
  },
  {
    name: "Green Detox Juice",
    category: "Drink",
    image: "Images/juice.jpg",
    description: "A refreshing juice packed with vitamins and detoxifying greens.",
    ingredients: ["1 cucumber", "2 celery stalks", "1 green apple", "1/2 lemon", "A small piece of ginger", "1 cup water"],
    steps: ["Wash and chop all ingredients.", "Blend cucumber, celery, apple, lemon, ginger, and water until smooth.", "Strain if desired and serve chilled."],
    nutrition: {Calories: "90 kcal", Protein: "2 g", Carbs: "22 g", Fat: "0 g"}
}
  // Add more recipes here...
];

const recipeCards = document.getElementById("recipeCards");
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("categoryFilter");
const modal = document.getElementById("recipeModal");
const modalTitle = document.getElementById("modalTitle");
const modalImage = document.getElementById("modalImage");
const modalIngredients = document.getElementById("modalIngredients");
const modalSteps = document.getElementById("modalSteps");
const modalNutrition = document.getElementById("modalNutrition");
const closeBtn = document.querySelector(".close");

// Function to display recipes
function displayRecipes(list) {
  recipeCards.innerHTML = "";
  list.forEach(recipe => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}">
      <div class="card-content">
        <h3>${recipe.name}</h3>
        <p>${recipe.description}</p>
      </div>
    `;
    card.addEventListener("click", () => openModal(recipe));
    recipeCards.appendChild(card);
  });
}

// Open modal with recipe details
function openModal(recipe) {
  modalTitle.textContent = recipe.name;
  modalImage.src = recipe.image;
  modalIngredients.innerHTML = recipe.ingredients.map(i => `<li>${i}</li>`).join("");
  modalSteps.innerHTML = recipe.steps.map(s => `<li>${s}</li>`).join("");
  modalNutrition.innerHTML = "<tr><th>Type</th><th>Amount</th></tr>" +
    Object.entries(recipe.nutrition).map(([type, amount]) => `<tr><td>${type}</td><td>${amount}</td></tr>`).join("");
  modal.style.display = "block";
}

// Close modal
closeBtn.addEventListener("click", () => modal.style.display = "none");
window.addEventListener("click", e => {
  if (e.target === modal) modal.style.display = "none";
});

// Filter recipes
function filterRecipes() {
  const searchText = searchInput.value.toLowerCase();
  const category = categoryFilter.value;
  const filtered = recipes.filter(recipe => {
    return (recipe.name.toLowerCase().includes(searchText) || searchText === "") &&
           (recipe.category === category || category === "all");
  });
  displayRecipes(filtered);
}

// Event listeners
searchInput.addEventListener("input", filterRecipes);
categoryFilter.addEventListener("change", filterRecipes);

// Initial display
displayRecipes(recipes);

window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.add('fade');   // start hidden
  setTimeout(() => {
    document.body.classList.add('loaded'); // fade in
  }, 10); // slight delay so transition runs
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");

  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100; // how far from bottom before triggering

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("active");
    } else {
      el.classList.remove("active"); // remove if you want to re-trigger
    }
  });
}

window.addEventListener("scroll", revealOnScroll);



