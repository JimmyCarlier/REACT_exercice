
const Profile = () => {
    const userInfo = {
        name : "Jimmy Carlier",
        job : "Développer",
        age : "28 ans"
    }
  return (
    <div class="containerOfProfile">
    <img src ="/img/image0.jpg" class="cat"></img>
      <p>Nom : {userInfo.name}</p>
      <p>Métier : {userInfo.job}</p>
      <p>Age : {userInfo.age}</p>
    </div>
    
  );
};

export default Profile;
