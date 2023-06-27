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

const mealListComposent = async () => {
  const responseJson = await fetch(
    "https://www.themealdb.com/api/json/v1/1/search.php?s"
  );
  const responseJavascript = await responseJson.json();

  responseJavascript.meals.forEach((meal) => {
    const mealTitleElement = createNodeElement(
      "h2",
      {
        class: "meal-title",
      },
      meal.strMeal
    );

    divRoot.appendChild(mealTitleElement);

    const mealImgElement = createNodeElement("img", {
      src: meal.strMealThumb,
    });

    divRoot.appendChild(mealImgElement);
  });
};

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

const createNodeElement = (tagType, attributes, text = "") => {
  const nodeElement = document.createElement(tagType);

  for (const property in attributes) {
    nodeElement.setAttribute(property, attributes[property]);
  }

  nodeElement.textContent = text;

  return nodeElement;
};

// contactFormComposent();
categoryListComponent();
mealListComposent();

// data.meals.forEach((element) => {
//   const mealTitle = element.strMeal;
//   const mealTitleElement = createNodeElement("h2", { class: "meal-title" }, mealTitle);
//   console.log(mealTitleElement);
//   divRoot.appendChild(mealTitleElement);
// });
