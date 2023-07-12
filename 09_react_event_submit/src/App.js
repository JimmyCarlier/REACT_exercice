import "./App.css";
import ButtonSelection from "./ButtonSelection";
import ContactForm from "./ContactForm";
import Formulaire from "./CreateCoworking";
import { useState } from "react";

function App() {
  const [coworkings, setCoworkings] = useState([]);

  const fetchApi = async () => {
    if (coworkings.length === 0) {
      const urlResponse = await fetch("/coworkingApi.json");
      setCoworkings(await urlResponse.json());
    }
  };

  fetchApi();
  
  return (
    <>
      <Formulaire />
      <ButtonSelection coworkings={coworkings} />
      <ContactForm />
    </>
  );
}

export default App;
