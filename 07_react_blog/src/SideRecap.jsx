const SideRecap = ({cartFromApi}) => {
    const date = new Date(cartFromApi.createdAt)
  return (
    <>
      {cartFromApi.items.map((element) => {
        return (
          <>
            <p>{element.product}</p>
            <p>{element.amount}</p>
            <p>{element.quantity}</p>
          </>
        );
      })}
      <ul>
        <li>{cartFromApi.totalAmount}</li>
        <li>{date.toDateString()}</li>
        <li>{cartFromApi.user}</li>
      </ul>
    </>
  );
};

export default SideRecap
