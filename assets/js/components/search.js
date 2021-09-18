import { recipes as orginalRecipeList } from "../data/data.js"
import { searchFilters } from "./filters.js"
import { displayRecipes } from "./display.js"
/** START OF THE FIRST ALGORITHM PART
 * ===========================================================================================
 */

/**
 * This function launches the algorithm when user search a receipe name in the input bar
 * @param {*} searchMap 
 */

export function setupInputSearch_firstAlgorithm(searchMap) {
    document.querySelector("#search-input").addEventListener("keyup", (e) => searchAlgorithmV1(e, searchMap))
}
/**
 * This function launches the receipes display according to the user request
 * @param {*} e 
 * @param {*} searchMap 
 */
function searchAlgorithmV1(e, searchMap) {
    const searchResults = searchMap.get(e.target.value.toLowerCase()) || orginalRecipeList
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

export function setupInputSearch_secondAlgorithm() {
    document.querySelector("#search-input").addEventListener("keydown", (e) => searchAlgorithmV2(e))
}

/**
 * This function launches the receipes display according to the user request
 * @param {*} e 
 */
function searchAlgorithmV2(e) {
    const searchResults =
    const filteredResults = searchFilters(searchResults)
    displayRecipes(filteredResults)
    displayRecipes(directSearchAlgorithm(recipes, e.target.value.toLowerCase()))
}

/** END OF THE SECOND ALGORITHM PART 
 * ===========================================================================================
 */

/**
 * This algorithm use mapping for a faster search result. ALGO V1
 * @param {*} recipes
 * @param {*} ingredientSet 
 * @param {*} applianceSet
 * @param {*} ustensilSet
 * @returns 
 */
export function searchAlgorithmMapping(recipes) {
    const searchMap = new Map();

    recipes.forEach(recipe => {

        for (let i = 2; i < (recipe.name).length + 1; i++) {
            if (searchMap.get((recipe.name.toLowerCase()).substring(0, i))) {
                searchMap.get((recipe.name.toLowerCase()).substring(0, i)).push(recipe)
            } else {
                searchMap.set((recipe.name.toLowerCase()).substring(0, i), [recipe])
            }
        }

        for (let i = 2; i < (recipe.appliance).length + 1; i++) {
            if (searchMap.get((recipe.appliance.toLowerCase()).substring(0, i))) {
                searchMap.get((recipe.appliance.toLowerCase()).substring(0, i)).push(recipe)
            } else {
                searchMap.set((recipe.appliance.toLowerCase()).substring(0, i), [recipe])
            }
        }

        for (let i = 2; i < (recipe.description).length + 1; i++) {
            if (searchMap.get((recipe.description.toLowerCase()).substring(0, i))) {
                searchMap.get((recipe.description.toLowerCase()).substring(0, i)).push(recipe)
            } else {
                searchMap.set((recipe.description.toLowerCase()).substring(0, i), [recipe])
            }
        }

        recipe.ingredients.forEach(ingredient => {
            for (let i = 2; i < (ingredient.ingredient).length + 1; i++) {
                if (searchMap.get((ingredient.ingredient.toLowerCase()).substring(0, i))) {
                    searchMap.get((ingredient.ingredient.toLowerCase()).substring(0, i)).push(recipe)
                } else {
                    searchMap.set((ingredient.ingredient.toLowerCase()).substring(0, i), [recipe])
                }
            }
        })
        recipe.ustensils.forEach(ustensils => {
            for (let i = 2; i < (ustensils).length + 1; i++) {
                if (searchMap.get((ustensils.toLowerCase()).substring(0, i))) {
                    searchMap.get((ustensils.toLowerCase()).substring(0, i)).push(recipe)
                } else {
                    searchMap.set((ustensils.toLowerCase()).substring(0, i), [recipe])
                }
            }
        })
    })
    console.log(searchMap)
    return searchMap
}

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

        if ((nameToLower).substring(0, searchInput.length) === searchInput) {
            recipesResultSet.add(recipe)
        }

        else if ((applianceToLower).substring(0, searchInput.length) === searchInput)
            recipesResultSet.add(recipe)

        else if ((descriptionToLower).substring(0, searchInput.length) === searchInput)
            recipesResultSet.add(recipe)

        recipe.ingredients.forEach(ingredient => {
            if ((ingredientToLower).substring(0, searchInput.length) === searchInput)
                recipesResultSet.add(recipe)
        })

        recipe.ustensils.forEach(ustensils => {
            if ((ustensilsToLower).substring(0, searchInput.length) === searchInput)
                recipesResultSet.add(recipe)
        })
    })
    return recipesResultSet
}

/**
 * END OF THE SECOND ALGORITHM PART
 * ===========================================================================================
 */
