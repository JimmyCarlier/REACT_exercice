
import Allspace from './Allspace';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import CoworkingLowRate from './CoworkingLowRate';

const coworkingsFromFakeApi = [
  {
    id: 1,
    name: "Coworking 1",
    address: "Adresse 1",
    city: "Ville 1",
    image: "https://picsum.photos/200/300",
    rating: 4,
  },
  {
    id: 2,
    name: "Coworking 2",
    address: "Adresse 2",
    city: "Ville 2",
    image: "https://picsum.photos/200/300",
    rating: 3,
  },
  {
    id: 3,
    name: "Coworking 3",
    address: "Adresse 3",
    city: "Ville 3",
    image: "https://picsum.photos/200/300",
    rating: 5,
  },
  {
    id: 4,
    name: "Coworking 4",
    address: "Adresse 4",
    city: "Ville 4",
    image: "https://picsum.photos/200/300",
    rating: 2,
  },
];
function App() {
  return (
    <>
    <Header/>
    <div class="custom-shape-divider-top-1688986073">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
    </svg>
</div>
    <Allspace coworkingsFromFakeApi={coworkingsFromFakeApi}/>
    <CoworkingLowRate coworkingsFromFakeApi={coworkingsFromFakeApi}/>
    <Footer/>
    </>
  );
}

export default App;
