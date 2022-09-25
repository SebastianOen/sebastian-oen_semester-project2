import { baseUrl } from "./data.js";

export const getFeaturedProducts = async () => {
  try {
    const url = `${baseUrl}products`;
    const respond = await fetch(url);
    const results = await respond.json();
    const featuredProducts = document.querySelector(".featured-products");
    if (!featuredProducts) {
      return;
    }

    featuredProducts.innerHTML = "";
    for (let i = 0; i < results.length; i++) {
      if (results[i].featured === true) {
        featuredProducts.innerHTML += `<div class="col"><a href="../product.html?id=${results[i].id}" class="card shadow p-3 mb-5 bg-body rounded" style="width: 18rem">
          <div class="card__image" style="background-image: url('${results[i].image.formats.small.url}')"></div>
          
          <div class="card-body">
            <h5 class="card-title">${results[i].title}</h5>
            <p class="card-text">
             ${results[i].price},-
            </p>
          </div>
        </a>
        </div>`;
      }
    }
  } catch (err) {
    console.error(err);
  }
};
