function App() {
  const mealsListResponseFromFakeApi = [
    {
      id: 1,
      title: "Poulet au légumes",
      image: "https://picsum.photos/200/300",
      description: "Un bon poulet avec des légumes",
    },
    {
      id: 2,
      title: "Boeuf bourguignon",
      image: "https://picsum.photos/200/300",
      description: "Un bon boeuf bourguignon",
    },
    {
      id: 3,
      title: "Poisson aux légumes",
      image: "https://picsum.photos/200/300",
      description: "Un bon poisson avec des légumes",
    },
  ];
  return mealsListResponseFromFakeApi.map((element) => (
    <div class="boxOfFood">
      <h1>{element.title}</h1>
      <img src={element.image} alt=""></img>
      <p>{element.description}</p>
    </div>
  ));
}

export default App;
