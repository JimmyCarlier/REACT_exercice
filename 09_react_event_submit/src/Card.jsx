const Card = ({ element }) => {
  return (
    <div>
      <h1>{element.name}</h1>
      <p>{element.address}</p>
      <p>{element.phone}</p>
      <img src={element.img} alt="" />
    </div>
  );
};

export default Card;
