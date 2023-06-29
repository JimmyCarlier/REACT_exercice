const MainCoktail = ({ cocktailsFromApi }) => {

  let table = [];
  cocktailsFromApi.map((element) => {
    element.isPublished && table.push(element);
    return table;
  });

  const resultTable = table[Math.floor(Math.random() * table.length)]
  
  return (
    <div className="mainCocktail">
      <h2>Cocktail du Jour</h2>
      <p>{resultTable.name}</p>
      <p className="leftOfBox">Prix :{resultTable.price}€</p>
      <p className="leftOfBox">Composition du cocktail: {resultTable.ingredients}</p>
    </div>
  );
};

export default MainCoktail;
