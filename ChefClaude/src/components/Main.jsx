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
      {ingredients.length > 0 ? <div>
        <h2>Ingredients on Hand:</h2>
        <ul>{ingredientsList}</ul>
      </div> : null}
      {ingredients.length > 3 ? (
        <section className="generate-recipe-section">
          <div className="generate-recipe-text">
            <p className="generate-recipe-toptext">Ready for a recipe?</p>
            <p className="generate-recipe-bottomtext">
              Generate a recipe from your list of ingredients.
            </p>
          </div>
          <button className="generate-recipe-button">Get a recipe</button>
        </section>
      ) : null}
    </div>
  );
}
