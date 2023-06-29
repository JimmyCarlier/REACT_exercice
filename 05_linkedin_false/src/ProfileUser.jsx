const ProfileUser = ({userInfosFromFakeApi}) => {

  return (
    <div className="userAccount">
      <img src="./img/user.jpg" alt="" />
      <div className="informationUser">
        <p>
          Identité :{" "}
          {userInfosFromFakeApi.firstName + userInfosFromFakeApi.lastName}
        </p>
        <p>Age : {userInfosFromFakeApi.age}</p>
        <p>E-mail : {userInfosFromFakeApi.email}</p>
        <p>Téléphone : {userInfosFromFakeApi.phone}</p>
        <p>Adresse : {userInfosFromFakeApi.adress}</p>
        <p>Ville : {userInfosFromFakeApi.city}</p>
        <p>Code Postal : {userInfosFromFakeApi.zipCode}</p>
        <p>Pays : {userInfosFromFakeApi.country}</p>
        <p>Métier : {userInfosFromFakeApi.job}</p>
      </div>
    </div>
  );
};

export default ProfileUser;
