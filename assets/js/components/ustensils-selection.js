import { ustensilsTagSelected } from "./filters.js"
import { searchAlgorithmV1 } from "./search.js"
import { searchMap } from "./searchMapInitialisation.js"
import { removeUstensilsFilter } from "./filters.js"

/**
 * This function launches the receipes display according to the user request
 * @param {*} e 
 */
function ustensilsSearched(e) {
    displayUstensilsFilter(ustensilsSearchAlgorithm(ustensilsSet, e.target.value.toLowerCase()))
}

/** 
 * Those functions display every ustensils, ustensils & ustensils inside the nav buttons
 * @param {*} ustensils
 */
function ustensilsSearchAlgorithm(ustensilsSet, searchInput) {
    if (searchInput.length == 0) {
        return ustensilsSet
    }

    const ustensilsResultSet = new Set()


    ustensilsSet.forEach(ustensils => {

        if ((ustensils.toLowerCase()).includes(searchInput)) {
            ustensilsResultSet.add(ustensils)
        }
    })
    return ustensilsResultSet
}

export function displayUstensilsFilter(ustensilsSet) {
    document.querySelector(".dropdown-input").addEventListener("keydown", (e) => ustensilsSearched(e))
    document.querySelector("#dropdown-ustensils-container").innerHTML = ""
    ustensilsSet?.forEach(ustensils => {
        let ustensilsHTML = document.createElement("a")
        ustensilsHTML.innerText = ustensils
        ustensilsHTML.classList.add("c_dropdown-item")
        ustensilsHTML.setAttribute("href", "#")
        ustensilsHTML.setAttribute("s_key", ustensils)
        document.querySelector("#dropdown-ustensils-container").appendChild(ustensilsHTML)
        ustensilsHTML.addEventListener("click", e => {
            e.preventDefault()
            ustensilsTagSelected(ustensils)
            let searchQuery = document.querySelector("#search-input").text
            searchAlgorithmV1(searchQuery, searchMap)
            let tagId = "selected-ustensils-container-" + ustensils
            var element = document.getElementById(tagId);
            if (typeof (element) == 'undefined' || element == null) {
                let selectedUstensilsContainer = document.createElement("div")
                selectedUstensilsContainer.id = "selected-ustensils-container-" + ustensils
                selectedUstensilsContainer.classList.add("selected-ustensils-container")
                selectedUstensilsContainer.innerHTML = ustensils
                let removeUstensilsBtn = document.createElement("i")
                removeUstensilsBtn.classList.add("far", "fa-times-circle", "remove-selected-ustensils")
                removeUstensilsBtn.addEventListener("click", e => {
                    removeUstensilsFilter(ustensils)
                    selectedUstensilsContainer.remove()
                    let searchQuery = document.querySelector("#search-input").text
                    searchAlgorithmV1(searchQuery, searchMap)
                    // searchAlgorithmV2(e, recipes)
                })
                selectedUstensilsContainer.appendChild(removeUstensilsBtn)
                document.querySelector("#selected-container").appendChild(selectedUstensilsContainer)
            }
        })
    })
}