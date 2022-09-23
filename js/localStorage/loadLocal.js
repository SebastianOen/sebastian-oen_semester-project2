import { getLocalStorageData } from "./localStorageData.js";

export function showLocalStorage() {
  const localStorageContainer = document.querySelector(
    ".local-storage-container"
  );
  const localData = getLocalStorageData();

  localStorageContainer.innerHTML = "";

  localData.forEach((item) => {
    localStorageContainer.innerHTML += `
    <li>
    <a href="../product.html?id=${item.id}">
    <div class="cart-item">
    <div class="cart-title">
    ${item.title}
    </div>
    <div class="cart-image" style="background-image: url('${item.image}')"></div>
   <div class="cart-price">
   ${item.price},-
   </div> 
    </div>
    </a>
    </li>
   
    `;
  });
}

export function totalCalculator() {
  const storageIndividualPrice = JSON.parse(localStorage.getItem("localList"));

  const totalPriceContainer = document.querySelector(".total-price");

  let total = 0;

  console.log(total);
  for (let i = 0; i < storageIndividualPrice.length; i++) {
    total += storageIndividualPrice[i].price;
  }
  totalPriceContainer.innerHTML = total;
}

const totalPriceContainer = document.querySelector(".total-price");

if (totalPriceContainer === null) {
} else {
  totalCalculator();
}
