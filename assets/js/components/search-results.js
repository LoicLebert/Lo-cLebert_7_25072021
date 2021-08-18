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
        for (let i = 2; i < (recipe.name.toLowerCase()).length; i++) {
            if (searchMap.get((recipe.name.toLowerCase()).substring(0, i))) {
                searchMap.get((recipe.name.toLowerCase()).substring(0, i)).push(recipe)
            } else {
                searchMap.set((recipe.name.toLowerCase()).substring(0, i), [recipe])
            }
        }
        for (let i = 2; i < (recipe.appliance.toLowerCase()).length; i++) {
            if (searchMap.get((recipe.appliance.toLowerCase()).substring(0, i))) {
                searchMap.get((recipe.appliance.toLowerCase()).substring(0, i)).push(recipe)
            } else {
                searchMap.set((recipe.appliance.toLowerCase()).substring(0, i), [recipe])
            }
        }
        recipe.ingredients.forEach(ingredient => {
            for (let i = 2; i < (ingredient.ingredient.toLowerCase()).length; i++) {
                if (searchMap.get((ingredient.ingredient.toLowerCase()).substring(0, i))) {
                    searchMap.get((ingredient.ingredient.toLowerCase()).substring(0, i)).push(recipe)
                } else {
                    searchMap.set((ingredient.ingredient.toLowerCase()).substring(0, i), [recipe])
                }
            }
        })
        recipe.ustensils.forEach(ustensils => {
            for (let i = 2; i < (ustensils.toLowerCase()).length; i++) {
                if (searchMap.get((ustensils.toLowerCase()).substring(0, i))) {
                    searchMap.get((ustensils.toLowerCase()).substring(0, i)).push(recipe)
                } else {
                    searchMap.set((ustensils.toLowerCase()).substring(0, i), [recipe])
                }
            }
        })
    })
    console.log(searchMap)
    return searchMap
}
