import { recipes as orginalRecipeList } from "../data/data.js"
import { displayIngredientFilter } from "./ingredient-selection.js"
import { displayApplianceFilter } from "./appliance-selection.js"
import { displayUstensilsFilter } from "./ustensils-selection.js"
import { displayDropdown } from "./display.js"
import { displayRecipes } from "./display.js"
import { setupInputSearch_firstAlgorithm } from "./search.js"
import { setupInputSearch_secondAlgorithm } from "./search.js"
import { searchAlgorithmMapping } from "./search.js"
// import { setupTag } from "./filters.js"

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

// export function applianceDropdownDisplay(applianceSet) {
//     applianceSet?.forEach(appliance => {
//         let applianceHTML = document.createElement("a")
//         applianceHTML.innerText = appliance
//         applianceHTML.classList.add("c_dropdown-item")
//         applianceHTML.setAttribute("href", "#")
//         applianceHTML.setAttribute("s_key", appliance)
//         document.querySelector("#dropdown-appliance-container").appendChild(applianceHTML)
//         applianceHTML.addEventListener("click", e => {
//             tagSelected(e)
//             let tagId = "selected-appliance-container-" + appliance
//             var element = document.getElementById(tagId);
//             if (typeof (element) == 'undefined' || element == null) {
//                 let selectedApplianceContainer = document.createElement("div")
//                 selectedApplianceContainer.id = "selected-appliance-container-" + appliance
//                 selectedApplianceContainer.classList.add("selected-appliance-container")
//                 selectedApplianceContainer.innerHTML = appliance

//                 let removeApplianceBtn = document.createElement("i")
//                 removeApplianceBtn.classList.add("far", "fa-times-circle", "remove-selected-appliance")
//                 removeApplianceBtn.addEventListener("click", e => {
//                     selectedApplianceContainer.remove()
//                     displayRecipes(recipes)
//                 })
//                 selectedApplianceContainer.appendChild(removeApplianceBtn)
//                 document.querySelector("#selected-container").appendChild(selectedApplianceContainer)
//             }
//         })
//     })
// }


// export function ustensilsDropdownDisplay(ustensilsSet) {
//     ustensilsSet?.forEach(ustensils => {
//         let ustensilsHTML = document.createElement("a")
//         ustensilsHTML.innerText = ustensils
//         ustensilsHTML.classList.add("c_dropdown-item")
//         ustensilsHTML.setAttribute("href", "#")
//         ustensilsHTML.setAttribute("s_key", ustensils)
//         document.querySelector("#dropdown-ustensils-container").appendChild(ustensilsHTML)
//         ustensilsHTML.addEventListener("click", e => {
//             tagSelected(e)
//             let tagId = "selected-ustensils-container-" + ustensils
//             var element = document.getElementById(tagId);
//             if (typeof (element) == 'undefined' || element == null) {
//                 let selectedUstensilsContainer = document.createElement("div")
//                 selectedUstensilsContainer.id = "selected-ustensils-container-" + ustensils
//                 selectedUstensilsContainer.classList.add("selected-ustensils-container")
//                 selectedUstensilsContainer.innerHTML = ustensils

//                 let removeUstensilsBtn = document.createElement("i")
//                 removeUstensilsBtn.classList.add("far", "fa-times-circle", "remove-selected-appliance")
//                 removeUstensilsBtn.addEventListener("click", e => {
//                     selectedUstensilsContainer.remove()
//                     displayRecipes(recipes)
//                 })
//                 selectedUstensilsContainer.appendChild(removeUstensilsBtn)
//                 document.querySelector("#selected-container").appendChild(selectedUstensilsContainer)
//             }
//         })
//     })
// }




function init() {
    generateFilters(orginalRecipeList)
    displayDropdown()
    displayRecipes(orginalRecipeList)
    const searchMap = searchAlgorithmMapping(orginalRecipeList)
    setupInputSearch_firstAlgorithm(searchMap)
    // setupInputSearch_secondAlgorithm()
    // setupTag()
}

init()


