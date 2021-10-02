import { recipes as orginalRecipeList } from "../data/data.js"
import { searchFilters } from "./filters.js"
import { displayRecipes } from "./display.js"
import { searchMap } from "./searchMapInitialisation.js"
/** START OF THE FIRST ALGORITHM PART
 * ===========================================================================================
 */

/**
 * This function launches the algorithm when user search a receipe name in the input bar
 * @param {*} searchMap 
 */

export function setupInputSearch_firstAlgorithm(searchMap) {
    document.querySelector("#search-input").addEventListener("keyup", (e) => searchAlgorithmV1(e.target.value.toLowerCase(), searchMap))
}
/**
 * This function launches the receipes display according to the user request
 * @param {*} e 
 * @param {*} searchMap 
 */
export function searchAlgorithmV1(searchQuery, searchMap) {
    const searchResults = searchMap.get(searchQuery) || orginalRecipeList
    const filteredResults = searchFilters(searchResults)
    displayRecipes(filteredResults)
}

/** END OF THE FIRST ALGORITHM PART 
 * ===========================================================================================
 */

/** START OF THE SECOND ALGORITHM PART
 * ===========================================================================================
 */

/**
 * This function launches the algorithm when user uses the input search 
 */

export function setupInputSearch_secondAlgorithm(recipes) {
    document.querySelector("#search-input").addEventListener("keydown", (e) => searchAlgorithmV2(e.target.value.toLowerCase(), recipes))
}

/**
 * This function launches the receipes display according to the user request
 * @param {*} e 
 */
export function searchAlgorithmV2(searchQuery, recipes) {
    const searchResults = directSearchAlgorithm(recipes, searchQuery)
    const filteredResults = searchFilters(searchResults)
    displayRecipes(filteredResults)
}

/** END OF THE SECOND ALGORITHM PART 
 * ===========================================================================================
 */

/**
 * START OF THE SECOND ALGORITHM PART
 * ===========================================================================================
 */

/**
 * This algorithm loops on each recipe for every user research. ALGO V2
 * @param {*} recipes
 * @param {*} searchInput
 * @param {*} filters
 * @returns
 */
export function directSearchAlgorithm(recipes, searchInput) {
    if (searchInput.length < 3) {
        return recipes
    }

    const recipesResultSet = new Set()

    recipes.forEach(recipe => {

        if ((recipe.name.toLowerCase()).substring(0, searchInput.length) === searchInput) {
            recipesResultSet.add(recipe)
        }

        else if ((recipe.appliance.toLowerCase()).substring(0, searchInput.length) === searchInput)
            recipesResultSet.add(recipe)

        else if ((recipe.description.toLowerCase()).substring(0, searchInput.length) === searchInput)
            recipesResultSet.add(recipe)

        recipe.ingredients.forEach(ingredient => {
            if ((ingredient.ingredient.toLowerCase()).substring(0, searchInput.length) === searchInput)
                recipesResultSet.add(recipe)
        })

        recipe.ustensils.forEach(ustensils => {
            if ((ustensils.toLowerCase()).substring(0, searchInput.length) === searchInput)
                recipesResultSet.add(recipe)
        })
    })
    return recipesResultSet
}

/**
 * END OF THE SECOND ALGORITHM PART
 * ===========================================================================================
 */
