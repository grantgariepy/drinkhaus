<script lang="ts">
  export let data:any;
</script>

{#if data.data.drinks == "None Found"}
<div>
  <div>
    <div class='bg-white py-6 sm:py-8 lg:py-12'>
      <div class='max-w-screen-2xl px-4 md:px-8 mx-auto'>
        <div class='flex justify-between items-end gap-4 mb-6'>
          <h2 class='text-gray-800 text-2xl lg:text-3xl font-bold'>{data.ingredient} Drinks</h2>
        </div>
        <h4 class='text-gray-800 text-xl lg:text-2xl font-bold'>
          No {data.ingredient} Drinks Found
        </h4>
      </div>
    </div>
  </div>
</div>
{:else}
<div>
  <div class='bg-white py-6 sm:py-8 lg:py-12'>
    <div class='max-w-screen-2xl px-4 md:px-8 mx-auto'>
      <div class='flex justify-between items-end gap-4 mb-6'>
        <h2 class='text-gray-800 text-2xl lg:text-3xl font-bold'>{data.ingredient} Drinks</h2>
      </div>
      <div class='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8'>
        {#each data.data.drinks as drink}
          <div>
            <a
              href={`../recipes/${drink.idDrink}`}
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
</div>
{/if}