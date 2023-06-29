const LatestCocktail = ({ cocktailsFromApi }) => {
  return (
    <div class="latestCock">
      {cocktailsFromApi.map((element) => {
        return (
          element.id >= 2 && element.isPublished && (
            <div className="contentCock">
            <h2>Nos dernier cocktails</h2>
              <p class="latest">{element.name}</p>
              <p class="latest">Prix :{element.price}</p>
              <p class="latest">Composition :{element.ingredients}</p>
            </div>
          )
        );
      })}
    </div>
  );
};
export default LatestCocktail;
