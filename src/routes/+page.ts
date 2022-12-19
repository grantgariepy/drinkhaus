import { PUBLIC_DRINKDB_API } from "$env/static/public";

export async function load({ fetch, setHeaders }) {
  const url = `https://www.thecocktaildb.com/api/json/v2/${PUBLIC_DRINKDB_API}/popular.php`;
  const response = await fetch(url);
 
  setHeaders({
    age: response.headers.get('age'),
    'cache-control': 'public, max-age=3600'
  });
 
  return response.json();
}