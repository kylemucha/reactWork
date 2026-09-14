import React from "react"
export default function Main () {

    const [ingredients, setIngredients] = React.useState(["banana", "apple", "jacks"])

    const ingredientsList = ingredients.map(ing => (
        <li key={ing}>{ing}</li>
    ))


    //handles getting form data from user input to add new ingredient to array of ingredients
    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredient => [...prevIngredient, newIngredient])
    }

    return (
        <div className="main-content">
            <form action={addIngredient}>
                <input 
                    name="ingredient" 
                    type="text"
                    placeholder="e.g. oregano" 
                    aria-label="Add ingredient"
                />
                <button className="add-ingredient-button" type="submit">+ Add Ingredient</button> 
            </form>
            <h2>Ingredients on Hand:</h2>
            <ul>
                {ingredientsList}
            </ul>
        </div>
    )
}