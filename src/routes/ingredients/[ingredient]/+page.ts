import { PUBLIC_DRINKDB_API } from "$env/static/public";

export async function load({ fetch, params }) {
  const url = `https://www.thecocktaildb.com/api/json/v2/${PUBLIC_DRINKDB_API}/filter.php?i=${params.ingredient}`;
  const response = await fetch(url);
 
  return {
    ingredient : params.ingredient,
    data: response.json(),
  }
}