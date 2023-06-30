import SingleCocktail from "./SingleCocktail";

const MainCoktail = ({ publishedCocktails }) => {
  
const Cocktail = publishedCocktails[Math.floor(Math.random()*publishedCocktails.length)]

  return (
    <div>
      <SingleCocktail Cocktail={Cocktail}/>
    </div>
  );
};

export default MainCoktail;
