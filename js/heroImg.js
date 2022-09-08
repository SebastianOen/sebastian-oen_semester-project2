import { baseUrl } from "./data.js";

const heroContainer = document.querySelector(".hero-img");

export async function getHero() {
  try {
    const respond = await fetch(baseUrl + "home");

    const facts = await respond.json();

    heroContainer.innerHTML = `<img src="${facts.hero_banner.formats.large.url}" alt=GuitarGarage Hero Banner/>`;

    console.log(facts);
  } catch (error) {}
}
