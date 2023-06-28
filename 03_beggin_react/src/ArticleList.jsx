const ArticleList = () => {
  let article = [
    {
      title: "Voyage au Caraïbe",
      picture: `/img/ilescaraibes.png`,
      description: "Petite description",
    },
    {
      title: "Voyage au Japon",
      picture: `/img/japon.jpg`,
      description: "Petite description",
    },
    {
      title: "Voyage en Thaïlande",
      picture: `/img/thailande.jpg`,
      description: "Petite description",
    },
  ];

  return article.map((element) => (
    <div>
      <article class="blogVoyage">
        <h2>{element.title}</h2>
        <img src={element.picture} alt="" />
        <p>{element.description}</p>
      </article>
    </div>
  ));
};

export default ArticleList;
