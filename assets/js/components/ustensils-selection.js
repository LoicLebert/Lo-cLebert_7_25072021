import { ustensilsDropdownDisplay } from "./index.js"
import { ustensilsSet } from "./index.js"
import { displayRecipes } from "./index.js"
import { recipes } from "../data/data.js"

// SEARCH INPUT //

/**
 * This function launches the algorithm when the ingredient search is used
 */
export function setupUstensilsSearch() {
    document.querySelector(".dropdown-input").addEventListener("keydown", (e) => ustensilSearched(e))
}

/**
 * This function launches the receipes display according to the user request
 * @param {*} e 
 */
function ustensilSearched(e) {
    ustensilsDropdownDisplay(ustensilsSearchAlgorithm(ustensilsSet, e.target.value.toLowerCase()))
}

export function ustensilsSearchAlgorithm(ustensilsSet, searchInput) {
    if (searchInput.length == 0) {
        return ustensilsSet
    }

    const ustensilsResultSet = new Set()


    ustensilsSet.forEach(ustensils => {

        if ((ustensils.toLowerCase()).substring(0, searchInput.length) === searchInput)
            ustensilsResultSet.add(ustensils)
    })
    return ustensilsResultSet
}