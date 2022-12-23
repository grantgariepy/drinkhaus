import { PUBLIC_DRINKDB_API } from "$env/static/public";

export async function load({ fetch }) {
  const url = `https://www.thecocktaildb.com/api/json/v2/${PUBLIC_DRINKDB_API}/list.php?i=list`;
  const response = await fetch(url);
 
  return response.json();
}