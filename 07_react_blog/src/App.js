
import './App.css';
import Header from './Header';
import PublishedAll from './PublishedAll';
import ShowAllArticle from './ShowAllArticle';
import SideRecap from './SideRecap';
import Footer from './Footer';


function App() {
  const productsFromApi = [
    {
      name: "Chaise",
      price: 100,
      description: "Une chaise",
      publishedAt: "2023-07-14T10:00:00.000Z",
      category: "meuble",
    },
    {
      name: "Table",
      price: 200,
      description: "Une table",
      publishedAt: "2022-01-01T10:00:00.000Z",
      category: "meuble",
    },
    {
      name: "Canapé",
      price: 300,
      description: "Un canapé",
      publishedAt: "2021-09-24T10:00:00.000Z",
      category: "meuble",
    },
    {
      name: "Télé",
      price: 400,
      description: "Une télé",
      publishedAt: "2021-12-01T10:00:00.000Z",
      category: "électroménager",
    },
    {
      name: "Frigo",
      price: 500,
      description: "Un frigo",
      publishedAt: "2021-09-01T10:00:00.000Z",
      category: "électroménager",
    },
    {
      name: "Four",
      price: 600,
      description: "Un four",
      publishedAt: "2021-09-13T10:00:00.000Z",
      category: "électroménager",
    },
  ];

  const cartFromApi = {
    items: [
      {
        product: "Chaise",
        amount: 200,
        quantity: 2,
      },
    ],
    totalAmount: 400,
    createdAt: "2021-09-01T10:00:00.000Z",
    user: "John Doe",
  }; 

  return (
   <>
   <Header cartFromApi={cartFromApi}/>
   <PublishedAll productsFromApi={productsFromApi}/>
   <ShowAllArticle productsFromApi={productsFromApi}/>
   <SideRecap cartFromApi={cartFromApi}/>
   <Footer/>
   </>
  );
}

export default App;
