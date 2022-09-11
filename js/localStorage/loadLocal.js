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
    <div class="cart-item">
    <div class="cart-title">
    ${item.title}
    </div>
    <div class="cart-image" style="background-image: url('${item.image}')"></div>
   <div class="cart-price">
   ${item.price},-
   </div> 
    </div>
    </li>`;
  });
}
