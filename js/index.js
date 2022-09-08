import { baseUrl } from "./data.js";
import { getHero } from "./heroImg.js";
import * as productManagement from "./products.js";
import * as productSingular from "./soloProduct.js";
import { getFeaturedProducts } from "./featured.js";

/*async function getPost() {
  try {
    const respond = await fetch();

    const facts = await respond.json();

    console.log(facts);
  } catch (error) {}
}*/

getHero();
getFeaturedProducts();
