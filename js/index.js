import { baseUrl } from "./data";

const url = "https://sebastian-oen-semester-project.herokuapp.com/";

async function getPost() {
  try {
    const respond = await fetch(url);

    const facts = await respond.json();

    console.log(facts);
  } catch (error) {}
}
