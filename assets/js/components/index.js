import { recipes as orginalRecipeList } from "../data/data.js"
import { displayIngredientFilter } from "./ingredient-selection.js"
import { displayApplianceFilter } from "./appliance-selection.js"
import { displayUstensilsFilter } from "./ustensils-selection.js"
import { displayDropdown, displayRecipes } from "./display.js"
import { setupInputSearch_firstAlgorithm } from "./search.js"
import { searchMap, searchAlgorithmMapping } from "./searchMapInitialisation.js"

/** 
 * This part sorts ingredients, appliances and ustensils inside sets to prevent them from repeating themselves
 * @param {*} recipe
 * @param {*} ingredients
 * @param {*} appliance
 * @param {*} ustensils
 */
function generateFilters(recipes) {
    const ingredientSet = new Set([])
    const applianceSet = new Set([])
    const ustensilsSet = new Set([])
    recipes?.forEach(recipe => recipe.ingredients?.forEach(ingredient => ingredientSet.add(ingredient.ingredient)))
    recipes?.forEach(appliance => applianceSet.add(appliance.appliance))
    recipes?.forEach(recipe => recipe.ustensils?.forEach(ustensils => ustensilsSet.add(ustensils)))
    displayIngredientFilter(ingredientSet)
    displayApplianceFilter(applianceSet)
    displayUstensilsFilter(ustensilsSet)
}

function init() {
    generateFilters(orginalRecipeList)
    displayDropdown()
    displayRecipes(orginalRecipeList)
    searchAlgorithmMapping(orginalRecipeList)
    setupInputSearch_firstAlgorithm(searchMap)
}

init()


