import "./App.css";
import ButtonSelection from "./ButtonSelection";
import ContactForm from "./ContactForm";
import Formulaire from "./CreateCoworking";
import { useState } from "react";

function App() {
  const [coworkings, setCoworkings] = useState([]);

  const fetchApi = async () => {
    if (coworkings.length === 0) {
      setTimeout(async () => {
        const urlResponse = await fetch("/coworkingApi.json");
        setCoworkings(await urlResponse.json());
      }, 2000);
    }
  };

  fetchApi();

  return (
    <>
      <Formulaire coworkings={coworkings} setCoworkings={setCoworkings} />
      {/* <ButtonSelection coworkings={coworkings} /> */}
      {/* <ContactForm /> */}
    </>
  );
}

export default App;
