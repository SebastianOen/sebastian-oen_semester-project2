import { baseUrl } from "./data.js";
import { getHero } from "./heroImg.js";
import * as productManagement from "./products.js";
import * as productSingular from "./soloProduct.js";
import { getFeaturedProducts } from "./featured.js";
import { showLocalStorage, totalCalculator } from "./localStorage/loadLocal.js";
import * as localKeyStorage from "./localStorage/tokenManagement.js";
/*async function getPost() {
  try {
    const respond = await fetch();

    const facts = await respond.json();

    console.log(facts);
  } catch (error) {}
}*/

getHero();

const featuredProducts = document.querySelector(".featured-products");
if (!featuredProducts) {
  const featuredProducts = "disabled";
} else {
  getFeaturedProducts();
}

let localStorageContainer = document.querySelector(".local-storage-container");
if (!localStorageContainer) {
  localStorageContainer = "disabled";
} else {
  localStorageContainer = document.querySelector(".local-storage-container");
}

showLocalStorage();

totalCalculator();

const loginLinkContainer = document.querySelector(".logged-status");

const tokenFound = getToken();

if (!tokenFound) {
  loginLinkContainer.innerHTML = "Login";
} else {
  loginLinkContainer.innerHTML = "Logout";
}
