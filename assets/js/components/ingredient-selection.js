import { displayRecipes } from "./display.js"
import { tagSelected } from "./filters.js"
/**
 * This function launches the receipes display according to the user request
 * @param {*} e 
 */
function ingredientSearched(e) {
    // ingredientDropdownDisplay(ingredientSearchAlgorithm(ingredientSet, e.target.value.toLowerCase()))
    displayIngredientFilter(ingredientSearchAlgorithm(ingredientSet, e.target.value.toLowerCase()))
}

/** 
 * Those functions display every ingredient, appliance & ustensils inside the nav buttons
 * @param {*} ingredient
 */
function ingredientSearchAlgorithm(ingredientSet, searchInput) {
    if (searchInput.length == 0) {
        return ingredientSet
    }

    const ingredientResultSet = new Set()


    ingredientSet.forEach(ingredient => {

        if ((ingredient.toLowerCase()).includes(searchInput)) {
            ingredientResultSet.add(ingredient)
        }
    })
    return ingredientResultSet
}

export function displayIngredientFilter(ingredientSet) {
    document.querySelector(".dropdown-input").addEventListener("keydown", (e) => ingredientSearched(e))
    document.querySelector("#dropdown-ingredients-container").innerHTML = ""
    ingredientSet?.forEach(ingredient => {
        let ingredientHTML = document.createElement("a")
        ingredientHTML.innerText = ingredient
        ingredientHTML.classList.add("c_dropdown-item")
        ingredientHTML.setAttribute("href", "#")
        ingredientHTML.setAttribute("s_key", ingredient)
        document.querySelector("#dropdown-ingredients-container").appendChild(ingredientHTML)
        ingredientHTML.addEventListener("click", e => {
            e.preventDefault()
            tagSelected(e)
            let tagId = "selected-ingredient-container-" + ingredient
            var element = document.getElementById(tagId);
            if (typeof (element) == 'undefined' || element == null) {
                let selectedIngredientContainer = document.createElement("div")
                selectedIngredientContainer.id = "selected-ingredient-container-" + ingredient
                selectedIngredientContainer.classList.add("selected-ingredient-container")
                selectedIngredientContainer.innerHTML = ingredient
                let removeIngredientBtn = document.createElement("i")
                removeIngredientBtn.classList.add("far", "fa-times-circle", "remove-selected-ingredient")
                removeIngredientBtn.addEventListener("click", e => {
                    selectedIngredientContainer.remove()
                    displayRecipes(recipes)
                })
                selectedIngredientContainer.appendChild(removeIngredientBtn)
                document.querySelector("#selected-container").appendChild(selectedIngredientContainer)
            }
        })
    })
}


