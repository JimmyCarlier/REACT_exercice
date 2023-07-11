import { useState } from "react";
import UniqueCoworking from "./UniqueCoworking";

const ButtonSelection = ({ coworkings }) => {
  const [changeAdress, setchangeAdress] = useState("reset");

  let handleClickFilter = (element) => {
    setchangeAdress(element.target.value);
  };

  let filterAdress = coworkings.filter((element) => {
    if (changeAdress === "reset") {
      return true;
    }

    return element.address === changeAdress;
  });

  let uniqueItem = [...new Set(coworkings.map((element) => element.address))];

  return (
    <>
      {uniqueItem.map((element) => (
        <button value={element} onClick={handleClickFilter}>
          {element}
        </button>
      ))}

      <button value="reset" onClick={handleClickFilter}>
        Tous
      </button>

      {filterAdress.map((element) => {
        return <UniqueCoworking element={element} />;
      })}
    </>
  );
};

export default ButtonSelection;
