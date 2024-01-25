function generateRecipe(event) {
  event.preventDefault();

  new Typewriter("#recipe-container", {
    strings: "This is a recipe",
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}

let recipeFormElemet = document.querySelector("#search-form");
recipeFormElemet.addEventListener("submit", generateRecipe);
