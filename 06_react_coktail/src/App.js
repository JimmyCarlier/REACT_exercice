import AllCocktails from './AllCocktails';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import LateralBar from './LateralBar';
import LatestCocktail from './LatestCoktail';
import MainCoktail from './MainCoktail';
import RhumCocktail from './RhumCocktail';

function App() {

  const userFromApi= {
    firstName: "John",
    lastName: "Doe",
    age: 42,
    email: "contact@johndoe.fr",
    phone: "0123456789",
    adress: "1 rue de la Paix",
    city: "Paris",
    zipCode: "75000",
    country: "France",
    job: "Développeur web",
    birthDate: "1990-09-01T12:00:00.000Z"
  };

  const cocktailsFromApi = [
    {
      id: 1,
      name: "Mojito",
      price: 8,
      ingredients: ["Rhum", "Menthe", "Citron vert", "Eau gazeuse"],
      isPublished: true,
    },
    {
      id: 2,
      name: "Margarita",
      price: 10,
      ingredients: ["Tequila", "Triple sec", "Citron vert"],
      isPublished: true,
    },
    {
      id: 3,
      name: "Sangria",
      price: 6,
      ingredients: ["Vin rouge", "Fruits", "Sucre"],
      isPublished: false,
    },
    {
      id: 4,
      name: "Pina colada",
      price: 12,
      ingredients: ["Rhum", "Lait de coco", "Jus d'ananas"],
      isPublished: true,
    }, {
      id: 5,
      name: "Bloody Mary",
      price: 8,
      ingredients: ["Vodka", "Jus de tomate", "Sauce Worcestershire"],
      isPublished: true,
    }, {
      id: 6,
      name: "Ti punch",
      price: 8,
      ingredients: ["Rhum", "Citron vert", "Sirop de canne"],
      isPublished: true,
    }
  ];
  const publishedCocktails = cocktailsFromApi.filter(cocktail => cocktail.isPublished);
  return (
    <div>
      <Header userFromApi={userFromApi}/>
      <MainCoktail publishedCocktails = {publishedCocktails}/>
      <LatestCocktail publishedCocktails = {publishedCocktails}/>
      <AllCocktails publishedCocktails={publishedCocktails}/>
      <LateralBar userFromApi={userFromApi}/>
      <RhumCocktail publishedCocktails={publishedCocktails}/>
      <Footer/>
    </div>
  );
}

export default App;
