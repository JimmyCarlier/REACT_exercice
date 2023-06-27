// On récupère la div Root 
const divRoot = document.querySelector("#root");

// const contactFormComposent = () => {
//   const formElement = createNodeElement("form");
//   const inputText = createNodeElement("input", {
//     type: "texte",
//     class: "contact-text",
//   });
//   formElement.appendChild(inputText);

//   const submitElementBtn = createNodeElement(
//     "button",
//     {
//       type: "submit",
//       class: "contact-submit",
//     },
//     "Valider"
//   );
//   formElement.appendChild(submitElementBtn);
//   divRoot.appendChild(formElement);
// };
// On appelle l'API afin de récupérer ses donnée pour les afficher sur notre page Html
const mealListComposent = async () => {
  const responseJson = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s"
  );
  const responseJavascript = await responseJson.json();
  // On créee une boucle pour cibler toutes les catégories de l'API et les afficher sur notre page Html via la fonction createNodeElement
  responseJavascript.meals.forEach((meal) => {
    const mealTitleElement = createNodeElement(
      "h2",
      {
        class: "meal-title",
      },
      meal.strMeal
    );
      // La div Root va prendre comme enfant mealTitleElement
    divRoot.appendChild(mealTitleElement);
    // On stock les images de l'API dans la constante
    const mealImgElement = createNodeElement("img", {
      src: meal.strMealThumb,
    });

    divRoot.appendChild(mealImgElement);
  });
};
// Même cas que le fetch au dessus
const categoryListComponent = async () => {
  const returnJson = await fetch(
    " https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  const returnJavaS = await returnJson.json();

  returnJavaS.categories.forEach((element) => {
    const divElement = createNodeElement("div", {
      class: "mealList",
    });
    divRoot.appendChild(divElement);

    const listCategory = createNodeElement(
      "h2",
      {
        class: "listCate",
      },
      element.strCategory
    );
    divElement.appendChild(listCategory);

    const imgCategory = createNodeElement("img", {
      class: "img-api",
      src: element.strCategoryThumb,
    });
    divElement.appendChild(imgCategory);
  });
};
// On créée une constante qui va créée des balises en fonction des informations récupérer sur l'API (type de balise, classe/source etc.., et on ajotue une option de texteContent qui de base sera initialiser vide)
const createNodeElement = (tagType, attributes, text = "") => {
  const nodeElement = document.createElement(tagType);

  for (const property in attributes) {
    nodeElement.setAttribute(property, attributes[property]);
  }

  nodeElement.textContent = text;

  return nodeElement;
};

// contactFormComposent();
// On appelle les fonction a l'initialisation de la page
categoryListComponent();
mealListComposent();

// data.meals.forEach((element) => {
//   const mealTitle = element.strMeal;
//   const mealTitleElement = createNodeElement("h2", { class: "meal-title" }, mealTitle);
//   console.log(mealTitleElement);
//   divRoot.appendChild(mealTitleElement);
// });
