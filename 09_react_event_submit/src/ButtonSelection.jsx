import { useState } from "react";
import UniqueCoworking from "./UniqueCoworking";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import UpdateCoworking from "./UpdateCoworking";

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
      <div className="btnCard">
        {uniqueItem.map((element) => (
          <button
            value={element}
            className="btnForCard"
            onClick={handleClickFilter}
          >
            {element}
          </button>
        ))}
      </div>
      <button value="reset" className="resetBtn" onClick={handleClickFilter}>
        Tous
      </button>
      <div className="allCard">
        {filterAdress.length === 0 ? (
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        ) : (
          filterAdress.map((element) => {
            return (
              <>
                <UniqueCoworking element={element} />
                <UpdateCoworking coworking={element} />
              </>
            );
          })
        )}
      </div>
    </>
  );
};

export default ButtonSelection;
