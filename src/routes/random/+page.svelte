<script lang="ts">
  export let data:any
</script>

<div class='bg-white py-6 sm:py-8 lg:py-12'>
  <div class='max-w-screen-xl px-4 md:px-8 mx-auto'>
    <div class='text-center pb-3 '>
      <a
        href='/random'
        class='inline-flex bg-orange-500 hover:bg-orange-600 active:bg-orange-700 focus-visible:ring ring-orange-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2'
      >
        Get New Random Recipe
      </a>
    </div>
    <br>
    <div class='grid md:grid-cols-2 gap-8 lg:gap-12'>
      <div>
        <div class='h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg'>
          <img
            src={data.drinks[0].strDrinkThumb}
            loading='lazy'
            alt='food'
            class='w-full h-full object-cover object-center'
          />
        </div>
      </div>
      <div class='md:pt-8'>
        <p class='text-orange-500 font-bold text-center md:text-left'>
          {data.drinks[0].strAlcoholic} - {data.drinks[0].strCategory}
        </p>
        <h1 class='text-gray-800 text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6'>
          {data.drinks[0].strDrink}
        </h1>
        <h2 class='text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4'>
          Ingredients and Measurements
        </h2>
        <ul class='text-gray-500 sm:text-lg mb-6 md:mb-8'>
          <li>
            {data.drinks[0].strIngredient1} - {data.drinks[0].strMeasure1}
          </li>
          <li>
            {data.drinks[0].strIngredient2} - {data.drinks[0].strMeasure2}
          </li>
          <li>
            {data.drinks[0].strIngredient3} - {data.drinks[0].strMeasure3}
          </li>
          <li>
            {data.drinks[0].strIngredient4} - {data.drinks[0].strMeasure4}
          </li>
          <li>
            {data.drinks[0].strIngredient5} - {data.drinks[0].strMeasure5}
          </li>
          <li>
            {data.drinks[0].strIngredient6} - {data.drinks[0].strMeasure6}
          </li>
          <li>
            {data.drinks[0].strIngredient7} - {data.drinks[0].strMeasure7}
          </li>
          <li>
            {data.drinks[0].strIngredient8} - {data.drinks[0].strMeasure8}
          </li>
          <li>
            {data.drinks[0].strIngredient9} - {data.drinks[0].strMeasure9}
          </li>
        </ul>
      </div>
    </div>
    <div class='pt-5'>
      <h2 class='text-gray-800 text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4'>
        Instructions
      </h2>
      <p class='text-gray-500 sm:text-lg mb-6 md:mb-8'>
        {data.drinks[0].strInstructions}
      </p>
    </div>
  </div>
</div>