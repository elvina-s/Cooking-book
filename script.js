const inputField = document.querySelector("#search");
const recipes = document.querySelectorAll(".recipe");

inputField.addEventListener("keyup", function(event) {
    const word = event.target.value.toLowerCase();
    recipes.forEach(recipe => {
        recipe.querySelector("p").textContent.toLowerCase().includes(word) ? (recipe.style.display = "flex") : (recipe.style.display = "none");
    })
})