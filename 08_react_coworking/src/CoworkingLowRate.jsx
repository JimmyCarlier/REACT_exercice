import Coworking from "./Coworking";

const CoworkingLowRate = ({ coworkingsFromFakeApi }) => {
  return (
    <div className="lowRate">
      {coworkingsFromFakeApi.map(
        (element) => element.rating >= 4 && <Coworking element={element} />
      )}
    </div>
  );
};

export default CoworkingLowRate;
