export function getLocalStorageData() {
  const data = localStorage.getItem("localList");

  if (data === null) {
    return [];
  } else {
    return JSON.parse(data);
  }
}
