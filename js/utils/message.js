export function errorMessage(status, message) {
  const messageContainer = document.querySelector(".message__container");

  messageContainer.innerHTML = message;

  if (status === "error") {
    messageContainer.style.color = "red";
  }
}
