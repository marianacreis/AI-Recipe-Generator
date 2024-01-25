function displayRecipe(response) {
  new Typewriter("#recipe-container", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 1,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let ingredients = document.querySelector("#user-ingredients");
  let apiKey = "dd09922bof9dfbd100daf3a044cat44d";
  let prompt = `Write a recipe for lunch or dinner that uses the following ingredients : ${ingredients.value}. The recipe need to have those ingredients mandatorily, but it can also include more ingredients. Please write the answer using basic HTML.
The title of the recipe should be in the begining inside a <strong> element. It should be followed by a line break with the ingredients list and each ingredient should be separated by a <br/> element. After it should have a line break and the cooking instructions inside a <p> element. Please do not add anymore informations, besides the name of the dish, the ingredients and the instructions. `;
  let context =
    "You are a chef that can make delicious dishes with any list of ingredients. Your mission is to generate a delicious recipe using the ingredients provided by the user.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe-container");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class = "generating">Generating a recipe with ${ingredients.value}...</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElemet = document.querySelector("#search-form");
recipeFormElemet.addEventListener("submit", generateRecipe);
