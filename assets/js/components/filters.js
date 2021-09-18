/**
 * 
 */

import { recipes } from "../data/data.js"

const selectedIngredientFilters = []
const selectedApplianceFilters = []
const selectedUstensilsFilters = []

export function tagSelected(e) {
    recipes.forEach(recipe => {
        recipe.ingredients.forEach(ingredient => {
            if (e.target.text === ingredient.ingredient) {
                selectedIngredientFilters.push(e.target.text.toLowerCase())
            }
        })
    })
    console.log(e.target.text)
    console.log(selectedIngredientFilters)
}

function tagAlgorithm(recipes, selectedFilter) {
    const tagResultSet = new Set()

    recipes.forEach(recipe => {
        if ((recipe.appliance.toLowerCase()) === selectedFilter)
            tagResultSet.add(recipe)

        recipe.ustensils.forEach(ustensils => {
            if ((ustensils.toLowerCase()) === selectedFilter)
                tagResultSet.add(recipe)
        })

        recipe.ingredients.forEach(ingredient => {
            if ((ingredient.ingredient.toLowerCase()) === selectedFilter)
                tagResultSet.add(recipe)
        })
    })
    return tagResultSet
}

export function searchFilters(recipes) {
    recipes = filterByIngredient(recipes)
    recipes = filterByAppliance(recipes)
    recipes = filterByUstensils(recipes)
    return recipes
}

function filterByIngredient(recipes) {
    let filteredRecipes
    if (selectedIngredientFilters > 0) {
        for (let i = 0; i < selectedIngredientFilters.length; i++) {
            filteredRecipes = recipes.filter(recipe => recipe.ingredients.find(ingredient => ingredient.ingredient == selectedIngredientFilters[i]));
        }
    }
    else {
        filteredRecipes = recipes
    }
    return filteredRecipes
}

function filterByAppliance(recipes) {
    let filteredRecipes
    if (selectedApplianceFilters < 0) {
        for (let i = 0; i < selectedApplianceFilters.length; i++) {
            filteredRecipes = recipes.filter(recipe => recipe.appliance.find(appliance == selectedApplianceFilters[i]));
        }
    }
    else {
        filteredRecipes = recipes
    }
    return filteredRecipes
}
function filterByUstensils(recipes) {
    let filteredRecipes
    if (selectedUstensilsFilters < 0) {
        for (let i = 0; i < selectedUstensilsFilters.length; i++) {
            filteredRecipes = recipes.filter(recipe => recipe.ustensils.find(ustensils => ustensils == selectedUstensilsFilters[i]));
        }
    }
    else {
        filteredRecipes = recipes
    }
    return filteredRecipes
}