import Card from "./UniqueCoworking";
import { useState } from "react";
import UniqueCoworking from "./UniqueCoworking";

const Formulaire = ({ coworkings, setCoworkings }) => {
  const [coworking, setCoworking] = useState({
    name: "",
    phone: "",
    address: "",
  });

  const hundleSubmit = (event) => {
    event.preventDefault();

    setCoworking({
      name: event.target.name.value,
      phone: event.target.phone.value,
      address: event.target.address.value,
    });
    // event.target.reset();

    const newCoworkings = [
      ...coworkings,
      {
        name: event.target.name.value,
        phone: event.target.phone.value,
        address: event.target.address.value,
      },
    ];

    setCoworkings(newCoworkings);

    console.log(coworkings);
  };

  return (
    <>
      {coworkings.map((element) => {
        return <p>{element.name}</p>;
      })}

      <form onSubmit={hundleSubmit} className="formHeader">
        <label htmlFor="name">name</label>
        <input type="text" name="name"></input>

        <label htmlFor="address">Adresse</label>
        <input type="text" name="address"></input>

        <label htmlFor="phone">phone</label>
        <input type="text" name="phone"></input>

        <button className="send">Envoyer</button>
      </form>

      <h1>{coworking.name}</h1>
      <p>{coworking.phone}</p>
      <p>{coworking.address}</p>
    </>
  );
};

export default Formulaire;
