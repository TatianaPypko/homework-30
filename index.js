import { goods } from "./goods.js";

const categories = document.querySelector(".categories");
const goodsContainer = document.querySelector(".goods");
const cardContainer = document.querySelector(".card");

categories.addEventListener("click", (event) => {
  goodsContainer.replaceChildren();
  cardContainer.replaceChildren();

  const { target } = event;

  let filterCategories = goods.filter((good) => {
    if (target.name === good.category) return good;
  });

  filterCategories.map((good) => {
    const card = document.createElement("div");
    card.className = "good-card";
    card.setAttribute("data-id", good.id);
    card.textContent = good.name;
    goodsContainer.appendChild(card);
  });
});

goodsContainer.addEventListener("click", (event) => {
  cardContainer.replaceChildren();
  const { target } = event;

  const chosenGoodId = target.dataset.id;
  let chosenGood = goods.filter((good) => {
    if (good.id == chosenGoodId) return good;
  });

  const { name, weight, price, category, image } = chosenGood[0];

  const titleContainer = document.createElement("h1");
  titleContainer.textContent = name;

  const weightContainer = document.createElement("span");
  weightContainer.innerHTML = weight;

  const categoryContainer = document.createElement("span");
  categoryContainer.innerText = category;

  const priceContainer = document.createElement("span");
  priceContainer.textContent = price;

  const picture = document.createElement("img");
  picture.setAttribute("src", image);

  const containerForImage = document.createElement("div");
  containerForImage.className = "image-card";
  containerForImage.appendChild(picture);

  const button = document.createElement("button");
  button.className = "button-buy";
  button.innerText = "Купити";

  cardContainer.prepend(
    titleContainer,
    containerForImage,
    categoryContainer,
    weightContainer,
    priceContainer,
    button
  );
  const buttonBuy = document.querySelector(".button-buy");

  buttonBuy.addEventListener("click", (event) => {
    const messageContainer = document.querySelector(".message");
    const message = document.createElement("span");
    message.innerText = "Ви купили цей товар!";
    messageContainer.appendChild(message);
    goodsContainer.replaceChildren();
    cardContainer.replaceChildren();
    setTimeout(() => {
      message.remove();
    }, 2000);
  });
});
