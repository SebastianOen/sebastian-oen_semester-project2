import { baseUrl } from "./data.js";
import { getHero } from "./heroImg.js";
import * as productManagement from "./products.js";
import * as productSingular from "./soloProduct.js";
import { getFeaturedProducts } from "./featured.js";
import { showLocalStorage, totalCalculator } from "./localStorage/loadLocal.js";
import { getToken } from "./localStorage/tokenManagement.js";
import { deleteFromLocalStorage } from "./localStorage/deleteLocal.js";
import { deleteItem } from "./soloProduct.js";

getHero();
getFeaturedProducts();
showLocalStorage();

totalCalculator();

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

function checkCart() {
  const cartEmpty = document.querySelector(".cart__empty");

  if (!cartEmpty) {
    return;
  }

  const cartListExists = localStorage.getItem("localList");

  if (!cartListExists) {
    cartEmpty.innerHTML = "Your cart is empty";
  }
}

checkCart();

const loggedStatusContainer = document.querySelector(".logged-status");
