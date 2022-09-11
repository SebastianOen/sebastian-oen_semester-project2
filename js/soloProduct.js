import { baseUrl } from "./data.js";
import { saveToLocalStorage } from "./localStorage/saveLocal.js";
import { getLocalStorageData } from "./localStorage/localStorageData.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

async function getPost() {
  try {
    const respond = await fetch(`${baseUrl}products/${id}`);
    const facts = await respond.json();

    const productTitle = document.querySelector(".title");
    const productImageContainer = document.querySelector(".image-container");
    const productTextContainer = document.querySelector(".product-text");
    const productPriceContainer = document.querySelector(".product-price");
    const addToCartBtn = document.querySelector(".add-cart");

    const selectedProductTitle = facts.title;
    const selectedProductPrice = facts.price;
    const selectedProductId = facts.id;
    const selectedProductImageUrl = facts.image.formats.small.url;

    const selectedItem = {
      id: selectedProductId,
      title: selectedProductTitle,
      price: selectedProductPrice,
      image: selectedProductImageUrl,
    };

    productTitle.innerHTML = facts.title;
    productImageContainer.innerHTML = `<div class="product__image" style="background-image: url('${facts.image.formats.small.url}')"></div>`;
    productTextContainer.innerHTML = facts.description;
    productPriceContainer.innerHTML = facts.price + ",-";
    addToCartBtn.addEventListener("click", () => {
      console.log("click");
      const newList = getLocalStorageData();
      newList.push(selectedItem);
      saveToLocalStorage(newList);
    });
  } catch (error) {}
}

getPost();
