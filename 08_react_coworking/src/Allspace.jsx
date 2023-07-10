import Coworking from "./Coworking";
import { useState } from "react";

const Allspace = ({ coworkingsFromFakeApi }) => {
  const [displayCoworking, setDisplayCoworking] = useState(false);

  const onClickAppear = () => {
    setDisplayCoworking(!displayCoworking);
  };

  return (
    <>
      <button onClick={onClickAppear} className="boutton">
        {displayCoworking ? 'Masquer les coworking' : 'Afficher les coworking'}
      </button>
      {displayCoworking && (
        <div className="allArticle">
          {coworkingsFromFakeApi.map((element) => (
            <Coworking element={element} />
          ))}
        </div>
      )}
    </>
  );
};

export default Allspace;
