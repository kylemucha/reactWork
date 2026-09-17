import React from "react";
export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);

  const ingredientsList = ingredients.map((ing) => <li key={ing}>{ing}</li>);

  // Handles getting form data from user input to add new ingredient to array of ingredients
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredient) => [...prevIngredient, newIngredient]);
  }

  // form action really helpful here to getting form data

  return (
    <div className="main-content">
      <form action={addIngredient}>
        <input
          name="ingredient"
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
        />
        <button className="add-ingredient-button" type="submit">
          + Add Ingredient
        </button>
      </form>
      <h2>Ingredients on Hand:</h2>
      <ul>{ingredientsList}</ul>
      {ingredients.length > 0 ? <section>
        <p>Ready for a recipe?</p>
        <p>Generate a recipe from your list of ingredients.</p>
        <button>Generate a recipe</button>
      </section> : null}
    </div>
  );
}
