import { applianceDropdownDisplay } from "./index.js"
import { applianceSet } from "./index.js"
import { displayRecipes } from "./index.js"
import { recipes } from "../data/data.js"

// SEARCH INPUT //

/**
 * This function launches the algorithm when the appliance search is used
 */
export function setupApplianceSearch() {
    document.querySelector(".dropdown-input").addEventListener("keydown", (e) => applianceSearched(e))
    // ajouter retour
}

/**
 * This function launches the receipes display according to the user request
 * @param {*} e 
 */
function applianceSearched(e) {
    applianceDropdownDisplay(applianceSearchAlgorithm(applianceSet, e.target.value.toLowerCase()))
}

export function applianceSearchAlgorithm(applianceSet, searchInput) {
    if (searchInput.length == 0) {
        return applianceSet
    }

    const applianceResultSet = new Set()


    applianceSet.forEach(appliance => {

        if ((appliance.toLowerCase()).substring(0, searchInput.length) === searchInput)
            applianceResultSet.add(appliance)
    })
    return applianceResultSet
}