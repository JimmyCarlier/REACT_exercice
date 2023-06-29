const AllCocktails = ({ cocktailsFromApi }) => {
  return (
    <div className="allCocktails">
      {cocktailsFromApi.map((element) => {
        return (
          element.isPublished && (
            <div className="cocktails">
              <h2>{element.name}</h2>
              <p>Prix : {element.price}</p>
              <p>Les ingrédients :{element.ingredients}</p>
            </div>
          )
        );
      })}
    </div>
  );
};

export default AllCocktails;
