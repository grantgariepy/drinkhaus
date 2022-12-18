<script lang="ts">
  import { PUBLIC_DRINKDB_API } from "$env/static/public";
  export let data:any;
  
  const categoryName = data.category
  async function fetchCategory(categoryName:string){
    const res = await fetch(`https://www.thecocktaildb.com/api/json/v2/${PUBLIC_DRINKDB_API}/filter.php?c=${categoryName}`)
    const categoryData = await res.json();
    // console.log(categoryData)
    return categoryData
  }
</script>

{#await fetchCategory(categoryName)}
<h1>loading</h1>
  {:then categoryData}
    <div class='bg-white py-6 sm:py-8 lg:py-12'>
      <div class='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <div class='flex justify-between items-end gap-4 mb-6'>
          <h2 class='text-gray-800 text-2xl lg:text-3xl font-bold'>{categoryName}s</h2>
        </div>
        <div class='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8'>
          {#each categoryData.drinks as drink}
            <div>
              <a
                href={`categories/${drink.idDrink}`}
                class='group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3'
              >
                <img
                  src={drink.strDrinkThumb}
                  alt='drinks'
                  class='w-full h-full object-cover object-center group-hover:scale-110 transition duration-200'
                  loading='lazy'
                />
              </a>
              <div>
                <div class='flex items-end gap-2'>
                  <span class='text-gray-800 lg:text-lg font-bold'>{drink.strDrink}</span>
                </div>
              </div>
            </div>
          {/each}
      </div>
    </div>
    </div>
    {/await}