const UserExperience = ({experiencesFromFakeApi}) => {
  
  return (
    <div className="contentOfExperience">
      {experiencesFromFakeApi.map((element) => (
        <div className="boxContent">
          <h1>Rôle : {element.title}</h1>
          <ul>
            <li>Entreprise : {element.company}</li>
            <li>Description du poste : {element.description}</li>
            <li>
              A commencé le : {element.startDate} Et terminé le :
              {element.isCurrent ? <p className="notFinish">Pas terminé</p> : element.endDate}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UserExperience;
