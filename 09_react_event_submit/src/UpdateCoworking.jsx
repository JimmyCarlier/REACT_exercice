const UpdateCoworking = ({ coworking }) => {
  const handleSubmitUpdate = (event) => {
    event.preventDefault();
    const updateCoworkingData = {
      nom: event.target.name.value,
      phone: event.target.phone.value,
      address: event.target.address.value,
    };
    return console.log(updateCoworkingData);
  };
  return (
    <>
      <form onSubmit={handleSubmitUpdate}>
        <label htmlFor="name">Nom :</label>
        <input type="text" defaultValue={coworking.name} name="name" />
        <label htmlFor="phone">Phone :</label>
        <input type="number" defaultValue={coworking.phone} name="phone" />
        <label htmlFor="address">Address :</label>
        <input type="text" defaultValue={coworking.address} name="address" />
        <button>Submit</button>
      </form>
    </>
  );
};

export default UpdateCoworking;
