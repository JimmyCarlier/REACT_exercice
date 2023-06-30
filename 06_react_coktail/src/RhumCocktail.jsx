import SingleCocktail from "./SingleCocktail"

const RhumCocktail = ({publishedCocktails}) =>{

    return(
        <div>
            {publishedCocktails.map( Cocktail => Cocktail.ingredients.includes("Rhum") &&(
            <SingleCocktail Cocktail={Cocktail}/>))}
        </div>
    )
}

export default RhumCocktail