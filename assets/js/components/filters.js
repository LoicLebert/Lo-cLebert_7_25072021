import { recipes } from "../data/data.js"
/**
 * Creates an array that filters ingredients, appliance and ustensils
 */
const selectedIngredientFilters = new Set([])
const selectedApplianceFilters = new Set([])
const selectedUstensilsFilters = new Set([])

export function removeIngredientFilter(ingredient) {
    selectedIngredientFilters.delete(ingredient.toLowerCase())
}

export function removeApplianceFilter(appliance) {
    selectedApplianceFilters.delete(appliance.toLowerCase())
}

export function removeUstensilsFilter(ustensils) {
    selectedUstensilsFilters.delete(ustensils.toLowerCase())
}
/**
 * This function pushes 
 */
export function ingredientTagSelected(ingredient) {
    recipes.forEach(recipe => {
        recipe.ingredients.forEach(recipeIngredient => {
            if (ingredient === recipeIngredient.ingredient) {
                selectedIngredientFilters.add(ingredient.toLowerCase())
            }
        })
    })
}

export function applianceTagSelected(appliance) {
    recipes.forEach(recipe => {
        if (appliance === recipe.appliance) {
            selectedApplianceFilters.add(appliance.toLowerCase())
        }
    })
}

export function ustensilsTagSelected(ustensils) {
    recipes.forEach(recipe => {
        recipe.ustensils.forEach(recipeUstensils => {
            if (ustensils === recipeUstensils) {
                selectedUstensilsFilters.add(ustensils.toLowerCase())
            }
        })
    })
}


/**
 * This function changes the value of "recipe" according to the filters
 */
export function searchFilters(recipes) {
    recipes = filterByIngredient(recipes)
    recipes = filterByAppliance(recipes)
    recipes = filterByUstensils(recipes)
    return recipes
}

/**
 * Those functions filter ingredients, appliance and ustensils by pushing them to the array
 */
function filterByIngredient(recipes) {
    const filters = Array.from(selectedIngredientFilters)
    for (let i = 0; i < filters.length; i++) {
        recipes = recipes.filter(recipe => recipe.ingredients.find(ingredient => ingredient.ingredient.toLowerCase() == filters[i]));
    }
    return recipes
}

function filterByAppliance(recipes) {
    const filters = Array.from(selectedApplianceFilters)
    for (let i = 0; i < filters.length; i++) {
        recipes = recipes.filter(recipe => recipe.appliance.toLowerCase() == filters[i]);
    }
    return recipes
}

function filterByUstensils(recipes) {
    const filters = Array.from(selectedUstensilsFilters)
    for (let i = 0; i < filters.length; i++) {
        recipes = recipes.filter(recipe => recipe.ustensils.find(ustensils => ustensils.toLowerCase() == filters[i]));
    }
    return recipes
}
