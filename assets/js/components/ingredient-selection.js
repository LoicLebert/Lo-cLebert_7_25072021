import { ingredientDropdownDisplay } from "./index.js"
import { ingredientSet } from "./index.js"
import { displayRecipes } from "./index.js"
import { recipes } from "../data/data.js"

// SEARCH INPUT //

/**
 * This function launches the algorithm when the ingredient search is used
 */
export function setupIngredientSearch() {
    document.querySelector(".dropdown-input").addEventListener("keydown", (e) => ingredientSearched(e))
    // ajouter retour
}

/**
 * This function launches the receipes display according to the user request
 * @param {*} e 
 */
function ingredientSearched(e) {
    ingredientDropdownDisplay(ingredientSearchAlgorithm(ingredientSet, e.target.value.toLowerCase()))
}

export function ingredientSearchAlgorithm(ingredientSet, searchInput) {
    if (searchInput.length == 0) {
        return ingredientSet
    }

    const ingredientResultSet = new Set()


    ingredientSet.forEach(ingredient => {

        if ((ingredient.toLowerCase()).substring(0, searchInput.length) === searchInput) {
            ingredientResultSet.add(ingredient)
        }
    })
    return ingredientResultSet
}