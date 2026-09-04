export default function Main () {
    return (
    <>
        <form>
            <input 
                name="ingredient" 
                placeholder="e.g. oregano" 
                aria-label="Add ingredient"
            />
            <button className="add-ingredient-button" type="submit">+ Add Ingredient</button>
            
        </form>
    </>
    )
}