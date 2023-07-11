import { useState } from "react";
import Card from "./Card";

const ButtonSelection = ({ coworkings }) => {
  const [changeCard, setChangeCard] = useState(true);

  let myFilter = coworkings;

  const btnBordeaux = () => {
    setChangeCard("Bordeaux");
  };

  const btnMerignac = () => {
    setChangeCard("Merignac");
  };
  const btnLormont = () => {
    setChangeCard("Lormont");
  };
  const btnEysines = () => {
    setChangeCard("Eysines");
  };

  myFilter = coworkings.filter((element) => {
    return element.address === changeCard;
  });
  return (
    <>
      <button onClick={btnBordeaux}>Bordeaux</button>
      <button onClick={btnMerignac}>Mérignac</button>
      <button onClick={btnLormont}>Lormont</button>
      <button onClick={btnEysines}>Eysines</button>

      {myFilter.map((element) => {
        return <Card element={element} />;
      })}
    </>
  );
};

export default ButtonSelection;
