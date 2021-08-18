import { recipes } from "../data/data.js"
import { searchAlgorithmMapping } from "./search-results.js"

/** 
 * This part sorts ingredients, appliances and ustensils inside sets to prevent them from repeating themselves
 * @param {*} recipe
 * @param {*} ingredients
 * @param {*} appliance
 * @param {*} ustensils
 */
const ingredientSet = new Set([])
const applianceSet = new Set([])
const ustensilSet = new Set([])

function setCreation() {
    recipes?.forEach(recipe => recipe.ingredients?.forEach(ingredient => ingredientSet.add(ingredient.ingredient)))
    recipes?.forEach(appliance => applianceSet.add(appliance.appliance))
    recipes?.forEach(recipe => recipe.ustensils?.forEach(ustensils => ustensilSet.add(ustensils)))
}

/** 
 * Those functions display every ingredient, appliance & ustensils inside the nav buttons
 * @param {*} ingredient
 * @param {*} appliance
 * @param {*} ustensils
 */
function navSelection() {
    ingredientSet?.forEach(ingredient => {
        let ingredientHTML = document.createElement("a")
        ingredientHTML.innerText = ingredient
        ingredientHTML.classList.add("c_dropdown-item")
        ingredientHTML.setAttribute("href", "#")
        ingredientHTML.setAttribute("s_key", ingredient)
        document.querySelector("#first-text-container").appendChild(ingredientHTML)
        ingredientHTML.addEventListener("click", e => {
            let selectedIngredientContainer = document.createElement("div")
            selectedIngredientContainer.id = "selected-ingredient-container"
            selectedIngredientContainer.classList.add("active")
            selectedIngredientContainer.innerHTML = ingredient + `<i class="far fa-times-circle remove-selected-ingredient"></i>`
            document.querySelector("#selected-container").appendChild(selectedIngredientContainer)
            let removeIngredientBtn = document.querySelector(".remove-selected-ingredient")
            removeIngredientBtn.addEventListener("click", removeIngredient)
            function removeIngredient() {
                document.querySelector("#selected-ingredient-container").classList.remove("active")
                selectedIngredientContainer.remove()
            }
        })
    })

    applianceSet?.forEach(appliance => {
        let applianceHTML = document.createElement("a")
        applianceHTML.innerText = appliance
        applianceHTML.classList.add("c_dropdown-item")
        applianceHTML.setAttribute("href", "#")
        applianceHTML.setAttribute("s_key", appliance)
        document.querySelector("#second-text-container").appendChild(applianceHTML)
        applianceHTML.addEventListener("click", e => {
            let selectedApplianceContainer = document.createElement("div")
            selectedApplianceContainer.id = "selected-appliance-container"
            selectedApplianceContainer.classList.add("active")
            selectedApplianceContainer.innerHTML = appliance + `<i class="far fa-times-circle remove-selected-appliance"></i>`
            document.querySelector("#selected-container").appendChild(selectedApplianceContainer)
            let removeApplianceBtn = document.querySelector(".remove-selected-appliance")
            removeApplianceBtn.addEventListener("click", removeAppliance)
            function removeAppliance() {
                document.querySelector("#selected-appliance-container").remove("active")
            }
        })
    })

    ustensilSet?.forEach(ustensils => {
        let ustensilsHTML = document.createElement("a")
        ustensilsHTML.innerText = ustensils
        ustensilsHTML.classList.add("c_dropdown-item")
        ustensilsHTML.setAttribute("href", "#")
        ustensilsHTML.setAttribute("s_key", ustensils)
        document.querySelector("#third-text-container").appendChild(ustensilsHTML)
        ustensilsHTML.addEventListener("click", e => {
            let selectedUstensilsContainer = document.createElement("div")
            selectedUstensilsContainer.id = "selected-ustensils-container"
            selectedUstensilsContainer.classList.add("active")
            selectedUstensilsContainer.innerHTML = ustensils + `<i class="far fa-times-circle remove-selected-ustensils"></i>`
            document.querySelector("#selected-container").appendChild(selectedUstensilsContainer)
            let removeUstensilsBtn = document.querySelector(".remove-selected-ustensils")
            removeUstensilsBtn.addEventListener("click", removeUstensils)
            function removeUstensils() {
                document.querySelector("#selected-ustensils-container").classList.remove("active")
            }
        })
    })
}

/** 
 * This function displays the dropdown items on click
 * @param {*} recipe
 */
function displayDropdown(searchMap) {
    document.querySelector("#btn-blue").addEventListener("click", e => {
        document.querySelector("#first-dropdown").classList.add("active")
        document.querySelector("#btn-blue").style.display = "none"
        displayRecipes(searchMap.get(e.target.value) || recipes)
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

function displayRecipes(recipes) {
    document.querySelector("#recipes-section").innerHTML = ""
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

/**
 * This function launches the algorithm when user search a receipe name in the input bar
 * @param {*} searchMap 
 */

function setupInputSearch(searchMap) {
    document.querySelector("#search-input").addEventListener("change", (e) => searchAlgorithm(e, searchMap))
}

/**
 * This function launches the receipes display according to the user request
 * @param {*} e 
 * @param {*} searchMap 
 */
function searchAlgorithm(e, searchMap) {
    displayRecipes(searchMap.get(e.target.value.toLowerCase()) || recipes)
}

/** 
 * This function displays the dropdown items on click
 * @param {*} ingredientSet
 */
function init() {
    setCreation()
    navSelection()
    const searchMap = searchAlgorithmMapping(recipes, ingredientSet, applianceSet, ustensilSet)
    displayDropdown(searchMap)
    displayRecipes(recipes)
    setupInputSearch(searchMap)
}

init()


