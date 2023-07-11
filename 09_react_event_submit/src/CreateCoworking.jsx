import Card from "./Card";
import { useState } from "react";

const Formulaire = () => {
  const [coworking, setCoworking] = useState({
    title: "",
    commentaire: "",
    addresse: "",
  });

  const hundleSubmit = (event) => {
    event.preventDefault();

    setCoworking({
      title: event.target.titre.value,
      commentaire: event.target.commentaire.value,
      addresse: event.target.address.value,
    });
    event.target.reset();
  };

  return (
    <>
      <form onSubmit={hundleSubmit}>
        <label htmlFor="titre">Titre</label>
        <input type="text" name="titre"></input>

        <label htmlFor="commentaire">Commentaire</label>
        <textarea name="commentaire"></textarea>

        <label htmlFor="address">Adresse</label>
        <input type="text" name="address"></input>

        <button>Envoyer</button>
      </form>

      <h1>{coworking.title}</h1>
      <p>{coworking.commentaire}</p>
      <p>{coworking.addresse}</p>
    </>
  );
};

export default Formulaire;
