import SingleCocktail from "./SingleCocktail";

const AllCocktails = ({ publishedCocktails }) => {
  return (
    <div className="allCocktails">
      {publishedCocktails.map((Cocktail) => {
        return (
            <SingleCocktail Cocktail={Cocktail}/>

        );
      })}
    </div>
  );
};

export default AllCocktails;
