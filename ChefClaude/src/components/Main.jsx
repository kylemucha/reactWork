import React from "react"
import ClaudeRecipe from "./ClaudeRecipe"
import IngredientsList from "./IngredientsList";
export default function Main() {
  const [recipeShown, setRecipeShown] = React.useState(false);

  // Handles getting form data from user input to add new ingredient to array of ingredients

  //function handles flipping the boolean which handles showing the recipe (temporary before adding Anthropic API functionality)
  function generateRecipe() {
    setRecipeShown((prevRecipeShown) => !prevRecipeShown);
  }

  return (
    <div className="main-content">
      <IngredientsList generateRecipe={generateRecipe}/>
      {recipeShown ? (
        <section>
          <h2>Chef Claude Recommends:</h2>
          <ClaudeRecipe />
        </section>
      ) : undefined}
    </div>
  );
}
