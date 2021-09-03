/**
 * This algorithm use mapping for a faster search result. ALGO V1
 * @param {*} recipes
 * @param {*} ingredientSet 
 * @param {*} applianceSet
 * @param {*} ustensilSet
 * @returns 
 */
export function searchAlgorithmMapping(recipes) {
    const searchMap = new Map();

    recipes.forEach(recipe => {
        let nameLower = recipe.name.toLowerCase()
        let applianceLower = recipe.appliance.toLowerCase()
        let descriptionLower = recipe.description.toLowerCase()

        for (let i = 2; i < (recipe.name).length; i++) {
            if (searchMap.get((nameLower).substring(0, i))) {
                searchMap.get((nameLower).substring(0, i)).push(recipe)
            } else {
                searchMap.set((nameLower).substring(0, i), [recipe])
            }
        }

        for (let i = 2; i < (recipe.appliance).length; i++) {
            if (searchMap.get((applianceLower).substring(0, i))) {
                searchMap.get((applianceLower).substring(0, i)).push(recipe)
            } else {
                searchMap.set((applianceLower).substring(0, i), [recipe])
            }
        }

        for (let i = 2; i < (recipe.description).length; i++) {
            if (searchMap.get((descriptionLower).substring(0, i))) {
                searchMap.get((descriptionLower).substring(0, i)).push(recipe)
            } else {
                searchMap.set((descriptionLower).substring(0, i), [recipe])
            }
        }

        recipe.ingredients.forEach(ingredient => {
            let ingredientLower = ingredient.ingredient.toLowerCase()
            for (let i = 2; i < (ingredient.ingredient).length; i++) {
                if (searchMap.get((ingredientLower).substring(0, i))) {
                    searchMap.get((ingredientLower).substring(0, i)).push(recipe)
                } else {
                    searchMap.set((ingredientLower).substring(0, i), [recipe])
                }
            }
        })
        recipe.ustensils.forEach(ustensils => {
            let ustenstilsLower = ustensils.toLowerCase()
            for (let i = 2; i < (ustensils).length; i++) {
                if (searchMap.get((ustenstilsLower).substring(0, i))) {
                    searchMap.get((ustenstilsLower).substring(0, i)).push(recipe)
                } else {
                    searchMap.set((ustenstilsLower).substring(0, i), [recipe])
                }
            }
        })
    })
    console.log(searchMap)
    return searchMap
}

/**
 * START OF THE SECOND ALGORITHM PART
 * ===========================================================================================
 */

/**
 * This algorithm loops on each recipe for every user research. ALGO V2
 * @param {*} recipes
 * @param {*} searchInput
 * @param {*} filters
 * @returns
 */
export function directSearchAlgorithm(recipes, searchInput) {
    if (searchInput.length < 3) {
        return recipes
    }

    const recipesResultSet = new Set()

    recipes.forEach(recipe => {

        if ((recipe.name.toLowerCase()).substring(0, searchInput.length) === searchInput) {
            recipesResultSet.add(recipe)
        }

        else if ((recipe.appliance.toLowerCase()).substring(0, searchInput.length) === searchInput)
            recipesResultSet.add(recipe)

        else if ((recipe.description.toLowerCase()).substring(0, searchInput.length) === searchInput)
            recipesResultSet.add(recipe)

        recipe.ingredients.forEach(ingredient => {
            if ((ingredient.ingredient.toLowerCase()).substring(0, searchInput.length) === searchInput)
                recipesResultSet.add(recipe)
        })

        recipe.ustensils.forEach(ustensils => {
            if ((ustensils.toLowerCase()).substring(0, searchInput.length) === searchInput)
                recipesResultSet.add(recipe)
        })
    })
    return recipesResultSet
}

/**
 * END OF THE SECOND ALGORITHM PART
 * ===========================================================================================
 */
