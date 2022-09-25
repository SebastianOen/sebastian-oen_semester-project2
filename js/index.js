import { baseUrl } from "./data.js";
import { getHero } from "./heroImg.js";
import * as productManagement from "./products.js";
import * as productSingular from "./soloProduct.js";
import { getFeaturedProducts } from "./featured.js";
import { showLocalStorage, totalCalculator } from "./localStorage/loadLocal.js";
import { getToken } from "./localStorage/tokenManagement.js";

getHero();
getFeaturedProducts();
showLocalStorage();

totalCalculator();

console.log("h1 mom");

function checkForLogin() {
  const loggedStatus = document.querySelector(".logged-status");

  const tokenExists = localStorage.getItem("token");
  const adminRights = document.querySelector(".admin__rights");
  if (!adminRights) {
    return;
  }

  if (tokenExists) {
    loggedStatus.innerHTML = "Logout";
  } else {
    loggedStatus.innerHTML = "Login";
    adminRights.classList.add("disabled");
    adminRights.style.display = "none";
  }
}

checkForLogin();
const cartEmpty = document.querySelector(".cart__empty");

const cartListExists = localStorage.getItem("localList");

if (!cartListExists) {
  cartEmpty.innerHTML = "Your cart is empty";
}
