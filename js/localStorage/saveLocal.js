export function saveToLocalStorage(content) {
  localStorage.setItem("localList", JSON.stringify(content));
}
