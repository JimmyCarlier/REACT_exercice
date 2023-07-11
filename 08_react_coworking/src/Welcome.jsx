import { useState } from "react";

const Welcome = () => {
  const [displayMessage, setDisplayMessage] = useState(false);

  const Show = () => {
    setDisplayMessage(!displayMessage);
  };
  return (
    <>
      <button className="boutton" onClick={Show}>
        {displayMessage ? "Masquer le message" : "Voir le message"}
      </button>
      {displayMessage && (
        <>
          <h1>Welcome !</h1>
        </>
      )}
    </>
  );
};

export default Welcome;
