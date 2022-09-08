import { baseUrl } from "./data.js";

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

    productTitle.innerHTML = facts.title;
    productImageContainer.innerHTML = `<div class="product__image" style="background-image: url('${facts.image.formats.small.url}')"></div>`;
    productTextContainer.innerHTML = facts.description;
    console.log(facts);
  } catch (error) {}
}

getPost();
