import { getToken } from "./localStorage/tokenManagement.js";

const url = "http://localhost:1337/products";

const bearerToken = getToken();
console.log(bearerToken);

const form = document.querySelector("form");

form.addEventListener("submit", doPost);

async function doPost(event) {
  const myForm = document.getElementById("form__id2");
  const body = new FormData(myForm);
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
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjY0MDMzMDgwLCJleHAiOjE2NjY2MjUwODB9.q2EmfLQ3f1NN5hBR_4slbtpwwtyovO241hxfHoMJfFQ`,
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();

    if (result.user) {
      location.href = "/index.html";
    }

    if (result.error) {
      console.log(error);
    }

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
