const SingleCocktail = ({Cocktail}) =>{
    return(
        <div>
      <h1>{Cocktail.name}</h1>
      <ul>
        <li>Prix : {Cocktail.price}</li>
        <li>Ingrédients : {Cocktail.ingredients}</li>
      </ul>
    </div>
  );
}

export default SingleCocktail
