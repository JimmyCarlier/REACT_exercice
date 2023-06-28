const UserExperience = () => {
  const experiencesFromFakeApi = [
    {
      id: 1,
      title: "Développeur front",
      company: "Company 1",
      description: "Développement d'une application web front",
      startDate: "2021-01-01",
      endDate: "2021-02-01",
      isCurrent: false,
    },
    {
      id: 2,
      title: "Développeur back",
      company: "Company 2",
      description: "Développement d'une application web back",
      startDate: "2022-02-01",
      endDate: "2022-03-01",
      isCurrent: false,
    },
    {
      id: 3,
      title: "Développeur fullstack",
      company: "Company 3",
      description: "Développement d'une application web fullstack",
      startDate: "2023-03-01",
      endDate: null,
      isCurrent: true,
    },
  ];

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
              {element.isCurrent ? <p className="notFinish">"Pas terminé</p> : element.endDate}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UserExperience;
