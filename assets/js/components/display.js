/** 
 * This function displays the dropdown items on click
 * @param {*} recipe
 */
export function displayDropdown() {
    document.querySelector("#btn-blue").addEventListener("click", e => {
        document.querySelector("#first-dropdown").classList.add("active")
        document.querySelector("#btn-blue").style.display = "none"
    })

    document.querySelector("#btn-green").addEventListener("click", e => {
        document.querySelector("#second-dropdown").classList.add("active")
        document.querySelector("#btn-green").style.display = "none"
    })

    document.querySelector("#btn-red").addEventListener("click", e => {
        document.querySelector("#third-dropdown").classList.add("active")
        document.querySelector("#btn-red").style.display = "none"
    })

    document.addEventListener("click", e => {
        if (!e.target.matches("#btn-blue") && !e.target.matches(".dropdown-input")) {
            document.querySelector("#first-dropdown").classList.remove("active")
            document.querySelector("#btn-blue").style.display = "flex"
        }
    })

    document.addEventListener("click", e => {
        if (!e.target.matches("#btn-green")) {
            document.querySelector("#second-dropdown").classList.remove("active")
            document.querySelector("#btn-green").style.display = "flex"
        }
    })

    document.addEventListener("click", e => {
        if (!e.target.matches("#btn-red")) {
            document.querySelector("#third-dropdown").classList.remove("active")
            document.querySelector("#btn-red").style.display = "flex"
        }
    })
}

/**
 * This function creates a card for each recipe that contains all recipe values
 * @param {*} recipes
 */

export function displayRecipes(recipes) {
    document.querySelector("#recipes-section").innerHTML = ""
    if (recipes.length == 0) {
        document.querySelector("#recipes-section").innerHTML = "ERROR"
    }
    recipes?.forEach(recipe => {
        let recipeContainer = document.createElement("div")
        recipeContainer.id = "recipe-container"
        document.querySelector("#recipes-section").appendChild(recipeContainer)
        let recipeDetails = document.createElement("span")
        recipeDetails.id = "recipe-details"
        recipeContainer.appendChild(recipeDetails)
        let titleAndTime = document.createElement("div")
        titleAndTime.id = "title-and-time-container"
        recipeDetails.appendChild(titleAndTime)
        let recipeTitle = document.createElement("h2")
        recipeTitle.innerHTML = recipe.name
        titleAndTime.appendChild(recipeTitle)
        let recipeDuration = document.createElement("span")
        recipeDuration.id = "recipe-duration"
        recipeDuration.innerHTML = `<i class="far fa-clock"></i>       ` + recipe.time + " min"
        titleAndTime.appendChild(recipeDuration)
        let ingredientsAndDescription = document.createElement("div")
        ingredientsAndDescription.id = "ingredients-and-description"
        recipeDetails.appendChild(ingredientsAndDescription)
        let ingredientsContainer = document.createElement("div")
        ingredientsContainer.id = "ingredients-container"
        ingredientsAndDescription.appendChild(ingredientsContainer)
        recipe.ingredients.forEach(ingredient => {
            let recipeIngredients = document.createElement("span")
            recipeIngredients.innerHTML = ingredient.ingredient
            ingredientsContainer.appendChild(recipeIngredients)
        })
        let recipeDescription = document.createElement("span")
        recipeDescription.id = "recipe-description"
        recipeDescription.innerHTML = recipe.description
        ingredientsAndDescription.appendChild(recipeDescription)
        let recipeUstensils = document.createElement("span")
        recipeUstensils.innerHTML = recipe.ustensils
        recipeUstensils.id = "recipe-ustensils"
        recipeDetails.appendChild(recipeUstensils)
    })
}