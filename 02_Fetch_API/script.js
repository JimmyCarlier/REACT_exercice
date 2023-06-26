const button = document.querySelector("button");

// au click sur le bouton
button.addEventListener("click", async () => {
  const divRoot = document.querySelector("#root");

  // je fais un appel fetch (asynchrone) vers l'url de l'api
  const responseJson = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s");
  // quand j'ai le résultat, je converti le json récupéré en Javascript
  const responseJavascript = await responseJson.json();

  //  j'utilise foreach pour faire une boucle sur le résultat
  // et pour chaque élément (recette), j'affiche le titre et l'image
  responseJavascript.meals.forEach((meal) => {
    // j'utilise ma fonction createNodeElement pour créer un h2
    // avec en valeur le titre de la recette de l'api
    const mealTitleElement = createNodeElement(
      "h2",
      {
        class: "meal-title",
      },
      meal.strMeal
    );

    // j'insère le titre dans ma div root
    divRoot.appendChild(mealTitleElement);

    // j'utilise ma fonction createNodeElement pour créer une image
    // avec en valeur l'image de la recette de l'api
    const mealImgElement = createNodeElement("img", {
      src: meal.strMealThumb,
    });

    // j'insère l'image dans ma div root
    divRoot.appendChild(mealImgElement);
  });
});

const createNodeElement = (tagType, attributes, text = "") => {
  const nodeElement = document.createElement(tagType);

  for (const property in attributes) {
    nodeElement.setAttribute(property, attributes[property]);
  }

  nodeElement.textContent = text;

  return nodeElement;
};

// data.meals.forEach((element) => {
//   const mealTitle = element.strMeal;
//   const mealTitleElement = createNodeElement("h2", { class: "meal-title" }, mealTitle);
//   console.log(mealTitleElement);
//   divRoot.appendChild(mealTitleElement);
// });