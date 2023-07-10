import Coworking from "./Coworking";

const CoworkingLowRate = ({ coworkingsFromFakeApi }) => {
  
  const result = coworkingsFromFakeApi.filter(element => element.rating >= 4);

  console.log(result)

  return (
    <div className="lowRate">
      {coworkingsFromFakeApi.map(
        (element) => element.rating >= 4 && <Coworking element={element} />
      )}
    </div>
  );
};

export default CoworkingLowRate;
