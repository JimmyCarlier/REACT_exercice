// const text = document.querySelector(".myText");
// const btn = document.querySelector(".Letgo");

// btn.addEventListener("click", () => {
//   text.classList.contains("hidden")
//     ? text.classList.remove("hidden")
//     : text.classList.add("hidden");
// });

// ---------------------------------------------------------------

// On récupère les élément Html via un querySlector
const btn = document.querySelector(".Letgo");
const container = document.querySelector(".root");
const removeBtn = document.querySelector(".remove");
const input = document.querySelectorAll(".select");
const selecImg = document.querySelector(".selectImg");

// on Incrémente la variable pour éviter un surplus d'article
let count = 0;
// on initialise la variable qui va recuillire le lien de l'image
let imageUrl;

// On créée les éléments avec des arguments pour qu'ils soient plus facilement modifiable
const ElementNode = (tagType, attributes, text = "") => {
  const createElement = document.createElement(tagType);
  createElement.textContent = text;

  for (const property in attributes) {
    createElement.setAttribute(property, attributes[property]);
  }

  return createElement;
};

// On ajoute une fonctionne fléchez sur l'écouteur d'évenement
btn.addEventListener("click", () => {
  count++;
  // si la variable est déclarez vide, alors une alerte aparré
  if (!input[0].value || !input[1].value) {
    alert("Indiquez un text");
    return;
  }
  //   si la variable "count" dépasse la valeur de 3 alors tout est supprimé
  if (count > 3) {
    container.textContent = "";
    count = 0;
  }
  // On stock les containers qui vont être créee afin d'apportez une hiérarchisation dans le contenu html
  const containOfElement = document.createElement("div");
  containOfElement.classList.add("main");
  // On appelle la fonction en placant en argument les valeurs
  const createTitleElement = ElementNode(
    "h1",
    {
      class: "article",
    },
    input[0].value
  );
  const createImgElement = ElementNode(
    "img",
    {
      class: "article",
      src: imageUrl,
    },
    ""
  );
  const createParaElement = ElementNode(
    "div",
    {
      class: "article",
    },
    input[1].value
  );

  //   on place les relations parent enfant
  container.appendChild(containOfElement);
  containOfElement.append(
    createTitleElement,
    createImgElement,
    createParaElement
  );

  createImgElement.style.width = "300px";
});

// On initialise un écouteur d'événement sur le boutton qui va supprimez le contenu
removeBtn.addEventListener("click", () => {
  const all = document.querySelectorAll(".main");
  container.removeChild(all[all.length - 1]);

  input.forEach((element) => {
    element.value = "";
  });
});

// On stock le fichier uploader en créeant un URL temporaire proposer par JS
selecImg.addEventListener("change", (event) => {
  const file = event.target.files[0];
  imageUrl = URL.createObjectURL(file);
});
