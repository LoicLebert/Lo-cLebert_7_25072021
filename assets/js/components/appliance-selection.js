/**
 * This function launches the receipes display according to the user request
 * @param {*} e 
 */
function applianceSearched(e) {
    displayApplianceFilter(applianceSearchAlgorithm(applianceSet, e.target.value.toLowerCase()))
}

/** 
 * Those functions display every appliance, appliance & ustensils inside the nav buttons
 * @param {*} appliance
 */
function applianceSearchAlgorithm(applianceSet, searchInput) {
    if (searchInput.length == 0) {
        return applianceSet
    }

    const applianceResultSet = new Set()


    applianceSet.forEach(appliance => {

        if ((appliance.toLowerCase()).includes(searchInput)) {
            applianceResultSet.add(appliance)
        }
    })
    return applianceResultSet
}

export function displayApplianceFilter(applianceSet) {
    document.querySelector(".dropdown-input").addEventListener("keydown", (e) => applianceSearched(e))
    document.querySelector("#dropdown-appliance-container").innerHTML = ""
    applianceSet?.forEach(appliance => {
        let applianceHTML = document.createElement("a")
        applianceHTML.innerText = appliance
        applianceHTML.classList.add("c_dropdown-item")
        applianceHTML.setAttribute("href", "#")
        applianceHTML.setAttribute("s_key", appliance)
        document.querySelector("#dropdown-appliance-container").appendChild(applianceHTML)
        applianceHTML.addEventListener("click", e => {
            e.preventDefault()
            tagSelected(e)
            let tagId = "selected-appliance-container-" + appliance
            var element = document.getElementById(tagId);
            if (typeof (element) == 'undefined' || element == null) {
                let selectedApplianceContainer = document.createElement("div")
                selectedApplianceContainer.id = "selected-appliance-container-" + appliance
                selectedApplianceContainer.classList.add("selected-appliance-container")
                selectedApplianceContainer.innerHTML = appliance

                let removeApplianceBtn = document.createElement("i")
                removeApplianceBtn.classList.add("far", "fa-times-circle", "remove-selected-appliance")
                removeApplianceBtn.addEventListener("click", e => {
                    selectedApplianceContainer.remove()
                    displayRecipes(recipes)
                })
                selectedApplianceContainer.appendChild(removeApplianceBtn)
                document.querySelector("#selected-container").appendChild(selectedApplianceContainer)
            }
        })
    })
}


