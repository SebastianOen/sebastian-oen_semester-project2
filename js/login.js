import {
  saveToken,
  getToken,
  saveUser,
} from "./localStorage/tokenManagement.js";
import { errorMessage } from "./utils/message.js";

const url = "http://localhost:1337/auth/local/";

const form = document.querySelector("form");
const username = document.querySelector("#inputEmail3");
const password = document.querySelector("#inputPassword3");
const messageContainer = document.querySelector(".message__container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  messageContainer.innerHTML = "";

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  if (usernameValue.length === 0 || passwordValue.length === 0) {
    console.log("no value");
    errorMessage("error", "Enter user info");
  } else {
    doLogin(usernameValue, passwordValue);
  }
}

async function doLogin(username, password) {
  const myForm = document.getElementById("form__id");
  const body = new FormData(myForm);

  const data = JSON.stringify({ identifier: username, password: password });

  const options = {
    method: "POST",
    body,
    header: {
      /*"Content-Type": "application/json",*/
    },
  };
  try {
    const response = await fetch(url, options);
    const result = await response.json();

    if (result.user) {
      messageContainer.innerHTML = "";
      saveToken(result.jwt);
      saveUser(result.user);

      location.href = "../index.html";
    }

    if (result.error) {
      errorMessage("error", "Invalid login information");
    }

    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
