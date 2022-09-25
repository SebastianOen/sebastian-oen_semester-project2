import { baseUrl } from "./data.js";
import { saveToLocalStorage } from "./localStorage/saveLocal.js";
import { getLocalStorageData } from "./localStorage/localStorageData.js";
import { getToken } from "./localStorage/tokenManagement.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const bearerToken = getToken();

async function getSoloProduct() {
  try {
    const id = params.get("id");
    if (!id) {
      return;
    }

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
    productImageContainer.innerHTML = `<div class="product__image" style="background-image: url('${facts.image_url}')"></div>`;
    productTextContainer.innerHTML = facts.description;
    productPriceContainer.innerHTML = facts.price + ",-";
    addToCartBtn.addEventListener("click", () => {
      const newList = getLocalStorageData();
      newList.push(selectedItem);
      saveToLocalStorage(newList);
      itemAdded();
    });
  } catch (error) {}
}

getSoloProduct();

function itemAdded() {
  const itemAddedMessage = document.querySelector(".item-added");

  itemAddedMessage.innerHTML = "Item added";
}

export async function deleteItem() {
  const id = params.get("id");
  const url = `${baseUrl}products/${id}`;

  const options = {
    method: "DELETE",
    header: {
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();

    location.href = "../products.html";

    if (result.error) {
      console.log(error);
    }

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

const deleteBtn = document.querySelector(".delete-btn");

if (deleteBtn) {
  deleteBtn.addEventListener("click", () => {
    deleteItem();
  });
}

const tokenExistsProduct = localStorage.getItem("token");

if (!tokenExistsProduct) {
  deleteBtn.classList.add("disabled");
  deleteBtn.style.display = "none";
}

const editBtn = document.querySelector(".edit-btn");

if (!tokenExistsProduct && editBtn) {
  editBtn.classList.add("disabled");
  editBtn.style.display = "none";
}

if (editBtn) {
  editBtn.addEventListener("click", () => {
    const id = params.get("id");
    location.href = `../edit-product.html?id=${id}`;
  });
}

async function editSoloProduct(event) {
  try {
    const id = params.get("id");

    if (!id) {
      return;
    }

    const respond = await fetch(`${baseUrl}products/${id}`);
    const facts = await respond.json();

    const titleValue = document.querySelector("#product__title");
    const priceValue = document.querySelector("#product__price");
    const descriptionValue = document.querySelector("#product__description");
    const imageValue = document.querySelector("#product__image");

    const selectedProductTitle = facts.title;
    const selectedProductPrice = facts.price;
    const selectedProductDescription = facts.description;
    const selectedProductImageUrl = facts.image_url;

    titleValue.value = selectedProductTitle;
    priceValue.value = selectedProductPrice;
    descriptionValue.value = selectedProductDescription;
    imageValue.value = selectedProductImageUrl;
  } catch (error) {}
}

editSoloProduct();

const id = params.get("id");

async function doEdit(event) {
  event.preventDefault();

  const titleValue = document.querySelector("#product__title");
  const priceValue = document.querySelector("#product__price");
  const descriptionValue = document.querySelector("#product__description");
  const imageValue = document.querySelector("#product__image");

  const data = JSON.stringify({
    title: titleValue.value,
    price: parseInt(priceValue.value),
    description: descriptionValue.value,
    image_url: imageValue.value,
    id: id,
  });

  console.log(data);

  const options = {
    method: "PUT",
    body: data,
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(`${baseUrl}products/${id}`, options);
    const result = await response.json();

    if (result.error) {
      console.log(error);
    }
    location.href = `../product.html?id=${id}`;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

const saveEditBtn = document.querySelector("#edit__save__button");

if (saveEditBtn) {
  saveEditBtn.addEventListener("click", doEdit);
}
