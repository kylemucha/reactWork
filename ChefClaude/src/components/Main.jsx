import React from "react"
export default function Main () {

    const [ingredients, setIngredients] = React.useState(["banana", "apple", "jacks"])

    const ingredientsList = ingredients.map(ing => (
        <li key={ing}>{ing}</li>
    ))

    //function to add new ingredients to array of ingredients

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        event.target.reset();
    }

    return (
        <div className="main-content">
            <form onSubmit={handleSubmit}>
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