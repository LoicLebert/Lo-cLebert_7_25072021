import { recipes } from "..//data/data.js"

/** This part sorts ingredients, appliances and ustensils inside sets to prevent them from repeating themselves
 * @param (recipe)
 * @param (ingredients)
 * @param (appliance)
 * @param (ustensils)
 */
const ingredientSet = new Set([])
const applianceSet = new Set([])
const ustensilSet = new Set([])

recipes?.forEach(recipe => recipe.ingredients?.forEach(ingredient => ingredientSet.add(ingredient.ingredient)))
recipes?.forEach(appliance => applianceSet.add(appliance.appliance))
recipes?.forEach(recipe => recipe.ustensils?.forEach(ustensils => ustensilSet.add(ustensils)))

/** Those functions display every ingredient, appliance & ustensils inside the nav buttons
 * @param (ingredient)
 * @param (appliance)
 * @param (ustensils)
 */
ingredientSet?.forEach(ingredient => {
    let ingredientHTML = document.createElement("a")
    ingredientHTML.innerText = ingredient
    ingredientHTML.classList.add("c_dropdown-item")
    ingredientHTML.setAttribute("href", "#")
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

/** This code maps ingredients, appliance & ustensils for a better sorting
 * @param (recipe)
 */

const ingredientMap = new Map([])
const ObjectKey = {}

recipes?.forEach(recipe => recipe.ingredients?.forEach(ingredient => ingredientMap.set(ObjectKey, ingredient)))
console.log(ingredientMap)

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


