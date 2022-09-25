import { baseUrl } from "./data.js";

const productList = document.querySelector(".product-list");

const search = document.querySelector(".form-control");

let results = [];

if (search === null) {
  search === "disabled";
} else {
  search.addEventListener("keyup", (e) => {
    const searchValue = e.target.value.toLowerCase();

    const filteredProducts = results.filter((product) => {
      return product.title.toLowerCase().includes(searchValue);
    });
    createProducts(filteredProducts);
  });
}

const getProducts = async () => {
  try {
    const url = `${baseUrl}products`;
    const respond = await fetch(url);
    results = await respond.json();
    const productList = document.querySelector(".product-list");

    createProducts(results);
  } catch (err) {
    console.error(err);
  }
};

const createProducts = (products) => {
  const htmlContent = products
    .map((product) => {
      return `<div class="col"> <a href="../product.html?id=${product.id}" class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem">
      <div class="card__image" style="background-image: url('${product.image_url}')"></div>
      
      <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">
         ${product.price},-
        </p>
      </div>
    </a>
    </div>`;
    })
    .join("");
  if (!productList) {
    productList === "disabled";
  } else {
    productList.innerHTML = htmlContent;
  }
};

getProducts();
