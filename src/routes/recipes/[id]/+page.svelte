<script lang="ts">
  import { PUBLIC_DRINKDB_API } from "$env/static/public";
  export let data:any;

  let recipeID:string = data.id
  async function fetchRecipe(recipeID:string){
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v2/${PUBLIC_DRINKDB_API}/lookup.php?i=${recipeID}`)
    const recipeData = await res.json();
    return recipeData
    
  }
</script>

<div>
  {#await fetchRecipe(recipeID)}
  <h1>loading</h1>
  {:then recipeData}
  <div class='bg-white py-6 sm:py-8 lg:py-12'>
    <div class='max-w-screen-xl px-4 md:px-8 mx-auto'>
      <div class='grid md:grid-cols-2 gap-8 lg:gap-12'>
        <div>
          <div class='h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg'>
            <img
              src={recipeData.drinks[0].strDrinkThumb}
              loading='lazy'
              alt='food'
              class='w-full h-full object-cover object-center'
            />
          </div>
        </div>
        <div class='md:pt-8'>
          <p class='text-green-500 font-bold text-center md:text-left'>
            {recipeData.drinks[0].strAlcoholic} - {recipeData.drinks[0].strCategory}
          </p>
          <h1 class='text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6'>
            {recipeData.drinks[0].strDrink}
          </h1>
          <h2 class='text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4'>
            Ingredients and Measurements
          </h2>
          <ul class='text-gray-500 sm:text-lg mb-6 md:mb-8'>
            <li>
              {recipeData.drinks[0].strIngredient1} - {recipeData.drinks[0].strMeasure1}
            </li>
            <li>
              {recipeData.drinks[0].strIngredient2} - {recipeData.drinks[0].strMeasure2}
            </li>
            <li>
              {recipeData.drinks[0].strIngredient3} - {recipeData.drinks[0].strMeasure3}
            </li>
            <li>
              {recipeData.drinks[0].strIngredient4} - {recipeData.drinks[0].strMeasure4}
            </li>
            <li>
              {recipeData.drinks[0].strIngredient5} - {recipeData.drinks[0].strMeasure5}
            </li>
            <li>
              {recipeData.drinks[0].strIngredient6} - {recipeData.drinks[0].strMeasure6}
            </li>
            <li>
              {recipeData.drinks[0].strIngredient7} - {recipeData.drinks[0].strMeasure7}
            </li>
            <li>
              {recipeData.drinks[0].strIngredient8} - {recipeData.drinks[0].strMeasure8}
            </li>
            <li>
              {recipeData.drinks[0].strIngredient9} - {recipeData.drinks[0].strMeasure9}
            </li>
          </ul>
        </div>
      </div>
      <div class='pt-5'>
        <h2 class='text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4'>
          Instructions
        </h2>
        <p class='text-gray-500 sm:text-lg mb-6 md:mb-8'>{recipeData.drinks[0].strInstructions}</p>
      </div>
    </div>
  </div>
  {/await}
</div>