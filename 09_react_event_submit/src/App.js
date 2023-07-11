import './App.css';
import ButtonSelection from './ButtonSelection';
import ContactForm from './ContactForm';
import Formulaire from './CreateCoworking';

const coworkings = [
  {
    id: 1,
    name: "Coworking 1",
    address: "Bordeaux",
    phone: "123456789",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 2,
    name: "Coworking 2",
    address: "Merignac",
    phone: "123456789",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 3,
    name: "Coworking 3",
    address: "Bordeaux",
    phone: "123456789",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 4,
    name: "Coworking 4",
    address: "Eysines",
    phone: "123456789",
    img: "https://picsum.photos/200/300",
  },
  {
    id: 5,
    name: "Coworking 5",
    address: "Lormont",
    phone: "123456789",
    img: "https://picsum.photos/200/300",
  },
];

function App() {
  return (
    <>
    <Formulaire/>
    <ButtonSelection coworkings={coworkings}/>
    <ContactForm />
    </>
  );
}

export default App;
