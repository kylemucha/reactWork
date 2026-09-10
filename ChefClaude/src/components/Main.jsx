export default function Main () {

    const ingredients = ["banana", "apple"]

    const ingredientsList = ingredients.map((ing) => 
        <li key={ing}>{ing}</li>
    )

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient") //matches name of input on form
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