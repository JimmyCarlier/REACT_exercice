function App() {
  const mealsListResponseFromFakeApi = [
    {
      id: 1,
      title: "Poulet au légumes",
      image: "https://picsum.photos/200/300",
      description: "Un bon poulet avec des légumes",
      isPublished: true,
    },
    {
      id: 2,
      title: "Boeuf bourguignon",
      image: "https://picsum.photos/200/300",
      description: "Un bon boeuf bourguignon",
      isPublished: true,
    },
    {
      id: 3,
      title: "Poisson aux légumes",
      image: "https://picsum.photos/200/300",
      description: "Un bon poisson avec des légumes",
      isPublished: false,
    },
  ];
  return (
    <section className="contentOfFood">
      {mealsListResponseFromFakeApi.map((element) =>
        element.isPublished === false ? (
          false
        ) : (
          <div className="boxOfFood">
            <h1>{element.title}</h1>
            <img src={element.image} alt=""></img>
            <p>{element.description}</p>
          </div>
        )
      )}
    </section>
  );

  // return (
  //   <div>
  //     {mealsListResponseFromFakeApi.map((meal) => {
  //         meal.isPublished &&(
  //           <div className="boxOfFood">
  //             <h1>{element.title}</h1>
  //             <img src={element.image} alt=""></img>
  //             <p>{element.description}</p>
  //           </div>
  //         )
  //         })};
  //   </div>
  // )
}

export default App;
