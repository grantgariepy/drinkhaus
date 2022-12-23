<script lang="ts">
  export let data:any;
  const ingredients = 
    {"ings":[
      {
        "strIng":"Vodka",
        "strIngThumb":"https://images.unsplash.com/photo-1633710317472-c1f19624f3ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "urlName":"vodka",
        "by":"https://unsplash.com/@liz_weddon"
      },
      {
        "strIng":"Gin",
        "strIngThumb":"https://images.unsplash.com/photo-1597960194480-fc6b5e3181fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "urlName":"gin",
        "by":"https://unsplash.com/@devinnn_b"
      },
      {
        "strIng":"Tequila",
        "strIngThumb":"https://images.unsplash.com/photo-1529671434436-8fbb37410056?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "urlName":"tequila",
        "by":"https://unsplash.com/@fgalarza"
      },
      {
        "strIng":"Rum",
        "strIngThumb":"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "urlName":"rum",
        "by":"https://unsplash.com/@badashproducts"
      }
      ]}
</script>

<div class='bg-white pb-6 sm:pb-8 lg:pb-12'>
  <div class='max-w-screen-2xl px-4 md:px-8 mx-auto'>
    <section class='flex flex-col lg:flex-row justify-between gap-6 sm:gap-10 md:gap-16'>
      <!-- content - start  -->
      <div class='xl:w-5/12 flex flex-col justify-center items-center lg:items-start sm:text-center lg:text-left lg:py-12 xl:py-24'>
        <h1 class='text-black-800 text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12'>
          Welcome to DrinkHaus.
        </h1>
        <p class='lg:w-4/5 text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12'>
          So many drinks to choose from! You can search by catergory, ingredients, or
          geographical area! Or if you're feeling lucky you can get a random recipe!
        </p>
        <form
          class='w-full md:max-w-md flex gap-2'
        >
          <input
            type='text'
            placeholder='Search by Drink Name'
            class='w-full flex-1 bg-gray-50 text-gray-800 placeholder-gray-500 border focus:ring ring-orange-300 rounded outline-none transition duration-100 px-3 py-2'
           
          />
          <a
            href='/'
            class='inline-block bg-orange-500 hover:bg-orange-600 active:bg-orange-700 focus-visible:ring ring-orange-300 text-white text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-2'
          >
            Search
          </a>
        </form>
      </div>
      <!-- content - end -->
      <!-- image - start  -->
      <div class='xl:w-5/12 h-48 lg:h-auto bg-gray-100 overflow-hidden shadow-lg rounded-lg'>
        <img
        src="https://images.unsplash.com/photo-1591243315780-978fd00ff9db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          alt='by Helena Yankovska
          https://unsplash.com/@helenayankovska'
          class='w-full h-full object-cover object-center'
        />
      </div>
      <!-- image - end  -->
    </section>
  </div>
</div>
<!-- popular drinks -->
<div>
  <div class='bg-white py-6 sm:py-8 lg:py-12'>
    <div class='max-w-screen-2xl px-4 md:px-8 mx-auto'>
      <!-- text - start  -->
      <div class='mb-10 md:mb-16'>
        <h2 class='text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6'>
          DrinkHaus Darlings
        </h2>
      </div>
      <!-- text - end  -->
      <div class='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {#each data.drinks.splice(0,8) as drink}
        <div>
          <a
            href={`/recipes/${drink.idDrink}`}
            class='group h-96 block bg-gray-100 rounded-t-lg overflow-hidden relative'
          >
            <img
              src={drink.strDrinkThumb}
              loading='lazy'
              alt='food :)'
              class='w-full h-full object-cover object-center group-hover:scale-110 transition duration-200'
            />
          </a>
          <div class='flex justify-between items-start bg-gray-100 rounded-b-lg gap-2 p-4'>
            <div class='flex flex-col'>
              <a
                href={`/recipes/${drink.idDrink}`}
                class='text-gray-800 hover:text-gray-500 lg:text-lg font-bold transition duration-100'
              >
                {drink.strDrink}
              </a>
              <span class='text-gray-500 text-sm lg:text-base'>
                {drink.strAlcoholic} - {drink.strCategory}
              </span>
            </div>
          </div>
        </div>
        {/each}
      </div>
    </div>
  </div>
</div>
<!-- popular ingredients -->
<div>
  <div class='bg-white py-6 sm:py-8 lg:py-12'>
    <div class='max-w-screen-2xl px-4 md:px-8 mx-auto'>
      <div class='flex justify-between items-end gap-4 mb-6'>
        <h2 class='text-gray-800 text-2xl lg:text-3xl font-bold'>Popular Ingredients</h2>
      </div>
      <div class='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8'>
        <!-- product - start  -->
        {#each ingredients.ings as ing}
        <div>
          <a
            href={`ingredients/${ing.urlName}`}
            class='group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3'
          >
            <img
              src={ing.strIngThumb}
              alt='drinks'
              class='w-full h-full object-cover object-center group-hover:scale-110 transition duration-200'
              loading='lazy'
            />
          </a>
          <div>
            <div class='flex items-end gap-2'>
              <span class='text-gray-800 lg:text-lg font-bold'>{ing.strIng}</span>
            </div>
          </div>
        </div>
        {/each}
        <!-- product end  -->
      </div>
    </div>
  </div>
</div>
<!-- call to action -->
<div class='bg-white py-6 sm:py-8 lg:py-12'>
  <div class='max-w-screen-2xl px-4 md:px-8 mx-auto'>
    <div class='md:h-80 flex flex-col sm:flex-row bg-gray-900 rounded-lg overflow-hidden'>
      <!-- content - start  -->
      <div class='w-full sm:w-1/2 lg:w-2/5 flex flex-col p-4 sm:p-8'>
        <h2 class='text-white text-xl md:text-2xl lg:text-4xl font-bold mb-4'>
          Can't Choose?
          <br />
          Let us choose for you!
        </h2>
        <p class='max-w-md text-gray-400 mb-8'>
          Click the button below and you will be taken to a random drink in our catalogue!
        </p>
        <div class='mt-auto'>
          <a
            href='/random'
            class='inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 text-gray-800 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3'
          >
            Random Recipe
          </a>
        </div>
      </div>
       <!-- content - end  -->
       <!-- image - start  -->
      <div class='w-full sm:w-1/2 lg:w-3/5 h-48 sm:h-auto order-first sm:order-none bg-gray-700'>
        <img
          src='https://images.unsplash.com/photo-1582106245687-cbb466a9f07f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
          loading='lazy'
          alt='by Moritz Mentges https://unsplash.com/@mphotographym'
          class='w-full h-full object-cover object-center'
        />
      </div>
      <!-- image - end  -->
    </div>
  </div>
</div>