import SingleCocktail from "./SingleCocktail";

const LatestCocktail = ({ publishedCocktails }) => {
  return (
    <div class="latestCock">
      {publishedCocktails.map(
        (Cocktail, index) =>
          index >= publishedCocktails.length - 3 && (
              <SingleCocktail Cocktail={Cocktail} />
          )
      )}
    </div>
  );
};
export default LatestCocktail;
