import { getToken } from "./localStorage/tokenManagement.js";

const url = "http://localhost:1337/products";

const bearerToken = getToken();
console.log(bearerToken);

const form = document.querySelector("form");

form.addEventListener("submit", doPost);

async function doPost(event) {
  event.preventDefault();

  const titleValue = document.querySelector("#product__title");
  const priceValue = document.querySelector("#product__price");
  const descriptionValue = document.querySelector("#product__description");
  const imageValue = document.querySelector("#product__image");

  const data = JSON.stringify({
    title: titleValue.value,
    price: priceValue.value,
    description: descriptionValue.value,
    image_url: imageValue.value,
  });

  console.log(data);

  const options = {
    method: "POST",
    body: data,
    header: {
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();

    if (result.error) {
      console.log(error);
    }

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
