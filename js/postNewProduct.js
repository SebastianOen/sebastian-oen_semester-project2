import { getToken } from "./localStorage/tokenManagement.js";

const url = "https://sebastian-oen-semester-project.herokuapp.com/products";

const bearerToken = getToken();

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
    price: parseInt(priceValue.value),
    description: descriptionValue.value,
    image_url: imageValue.value,
  });

  const options = {
    method: "POST",
    body: data,
    headers: {
      Authorization: `Bearer ${bearerToken}`,
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();
    location.href = `../products.html`;

    if (result.error) {
      console.log(error);
    }

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
