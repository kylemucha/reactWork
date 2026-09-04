export default function Main () {

    const ingredients = ["Chicken", "Oregano", "Tomatoes"]

    const ingredientsList = ingredients.map((ing) => 
        <li key={ing}>{ing}</li>
    )

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient") //matches name of input on form
    }

    return (
    <>
        <form onSubmit={handleSubmit}>
            <input 
                name="ingredient" 
                type="text"
                placeholder="e.g. oregano" 
                aria-label="Add ingredient"
            />
            <button className="add-ingredient-button" type="submit">+ Add Ingredient</button>
            
        </form>
    </>
    )
}