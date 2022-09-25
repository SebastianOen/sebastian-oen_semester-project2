const tokenKey = "token";
const userKey = "user";

export function saveToken(token) {
  saveToLocal(tokenKey, token);
}

export function getToken() {
  return loadFromLocal(tokenKey);
}

export function saveUser(user) {
  saveToLocal(userKey, user);
}

function saveToLocal(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function loadFromLocal(key) {
  const value = localStorage.getItem(key);
  console.log(key, value);

  if (!value) {
    return [];
  }

  return JSON.parse(value);
}
