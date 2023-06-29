const LatestCocktail = ({ cocktailsFromApi }) => {
  const table = [];
  cocktailsFromApi.map((element) => {
    element.isPublished && table.push(element);
    return table;
  });

  const tableSlice = table.slice(1, 4);

  return (
    <div class="latestCock">
      {tableSlice.map((element) => (
        <div className="contentCock">
          <h2>Nos dernier cocktails</h2>
          <p class="latest">{element.name}</p>
          <p class="latest">Prix :{element.price}</p>
          <p class="latest">Composition :{element.ingredients}</p>
        </div>
      ))}
    </div>
  );
};
export default LatestCocktail;
