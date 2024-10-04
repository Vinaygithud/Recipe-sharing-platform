let recipes = [];

document.getElementById("add-recipe-btn").addEventListener("click", addRecipe);

function addRecipe() {
    const recipeNameInput = document.getElementById("recipe-name-input");
    const recipeDescriptionInput = document.getElementById("recipe-description-input");
    const recipeIngredientsInput = document.getElementById("recipe-ingredients-input");
    const recipeInstructionsInput = document.getElementById("recipe-instructions-input");

    const recipeName = recipeNameInput.value;
    const recipeDescription = recipeDescriptionInput.value;
    const recipeIngredients = recipeIngredientsInput.value;
    const recipeInstructions = recipeInstructionsInput.value;

    if (recipeName && recipeDescription && recipeIngredients && recipeInstructions) {
        const recipe = {
            name: recipeName,
            description: recipeDescription,
            ingredients: recipeIngredients,
            instructions: recipeInstructions
        };

        recipes.push(recipe);

        updateRecipeList();

        recipeNameInput.value = "";
        recipeDescriptionInput.value = "";
        recipeIngredientsInput.value = "";
        recipeInstructionsInput.value = "";
    }
}

function updateRecipeList() {
    const recipeList = document.getElementById("recipe-list");
    recipeList.innerHTML = "";

    recipes.forEach((recipe, index) => {
        const recipeListItem = document.createElement("li");
        recipeListItem.textContent = `${recipe.name} - ${recipe.description}`;
        recipeListItem.addEventListener("click", () => {
            displayRecipeDetails(recipe);
        });
        recipeList.appendChild(recipeListItem);
    });
}

function displayRecipeDetails(recipe) {
    const recipeDetailsModal = document.getElementById("recipe-details-modal");
    recipeDetailsModal.style.display = "block";

    const recipeNameElement = document.getElementById("recipe-name");
    const recipeDescriptionElement = document.getElementById("recipe-description");
    const recipeIngredientsElement = document.getElementById("recipe-ingredients");
    const recipeInstructionsElement = document.getElementById("recipe-instructions");

    recipeNameElement.textContent = recipe.name;
    recipeDescriptionElement.textContent = recipe.description;
    recipeIngredientsElement.textContent = recipe.ingredients;
    recipeInstructionsElement.textContent = recipe.instructions;
}

document.getElementById("close-modal-btn").addEventListener("click", () => {
    const recipeDetailsModal = document.getElementById("recipe-details-modal");
    recipeDetailsModal.style.display = "none";
});

// Add event listener to delete recipe button
document.getElementById("delete-recipe-btn").addEventListener("click", deleteRecipe);

function deleteRecipe() {
    const recipeName = document.getElementById("recipe-name").textContent;
    const recipeIndex = recipes.findIndex((recipe) => recipe.name === recipeName);
    if (recipeIndex !== -1) {
        recipes.splice(recipeIndex, 1);
        updateRecipeList();
    }
    const recipeDetailsModal = document.getElementById("recipe-details-modal");
    recipeDetailsModal.style.display = "none";
}