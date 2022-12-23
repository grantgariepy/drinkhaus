<script lang="ts">
  const categories = 
    {"drinks":[
      {
        "strCategory":"Ordinary Drink",
        "strCategoryThumb":"https://images.unsplash.com/photo-1609951651556-5334e2706168?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "urlName":"ordinary_drink",
        "by":"https://unsplash.com/@norevisions"
      },
      {
        "strCategory":"Cocktail",
        "strCategoryThumb":"https://images.unsplash.com/photo-1470337458703-46ad1756a187?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
        "urlName":"cocktail",
        "by":"https://unsplash.com/@arobj"
      },
      {
        "strCategory":"Shake",
        "strCategoryThumb":"https://images.unsplash.com/photo-1615478503562-ec2d8aa0e24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "urlName":"shake",
        "by":"https://unsplash.com/@sarahjulia"
      },
      {
        "strCategory":"Other \/ Unknown",
        "strCategoryThumb":"https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "urlName":"other_unknown",
        "by":"https://unsplash.com/@olivier_twwli"
      },
      {
        "strCategory":"Cocoa",
        "strCategoryThumb":"https://images.unsplash.com/photo-1523529733369-8c9cf7593bdc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "urlName":"cocoa",
        "by":"https://unsplash.com/@moniqa"
      },
      {
        "strCategory":"Shot",
        "strCategoryThumb":"https://images.unsplash.com/photo-1608635360956-5ebde7952ed6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "urlName":"shot",
        "by":"https://unsplash.com/@iam_os"
      },
      {
        "strCategory":"Coffee \/ Tea",
        "strCategoryThumb":"https://images.unsplash.com/photo-1497515114629-f71d768fd07c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1484&q=80",
        "urlName":"coffee_tea",
        "by":"https://unsplash.com/@asthetik"
      },
      {
        "strCategory":"Homemade Liqueur",
        "strCategoryThumb":"https://images.unsplash.com/photo-1631728208318-3346ceba020b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "urlName":"homemade_liqueur",
        "by":"https://unsplash.com/@taylor65s"
      },
      {
        "strCategory":"Punch \/ Party Drink",
        "strCategoryThumb":"https://images.unsplash.com/photo-1530077636681-452044839b73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        "urlName":"punch_party_drink",
        "by":"https://unsplash.com/@terasproductions"
      },
      {
        "strCategory":"Beer",
        "strCategoryThumb":"https://images.unsplash.com/photo-1600788886242-5c96aabe3757?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        "urlName":"beer",
        "by":"https://unsplash.com/@teofromrio"
      },
      {
        "strCategory":"Soft Drink",
        "strCategoryThumb":"https://images.unsplash.com/photo-1581636625402-29b2a704ef13?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80",
        "urlName":"soft_drink",
        "by":"https://unsplash.com/@phototastyfood"
        }]}
</script>

<div>
  <div class='bg-white py-6 sm:py-8 lg:py-12'>
    <div class='max-w-screen-2xl px-4 md:px-8 mx-auto'>
      <div class='flex justify-between items-end gap-4 mb-6'>
        <h2 class='text-gray-800 text-2xl lg:text-3xl font-bold'>Categories</h2>
      </div>
      <div class='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 md:gap-x-6 gap-y-8'>
        <!-- product - start  -->
        {#each categories.drinks as drink}
        <div>
          <a
            href={`categories/${drink.urlName}`}
            class='group h-80 block bg-gray-100 rounded-lg overflow-hidden relative mb-2 lg:mb-3'
          >
            <img
              src={drink.strCategoryThumb}
              alt='drinks'
              class='w-full h-full object-cover object-center group-hover:scale-110 transition duration-200'
              loading='lazy'
            />
          </a>
          <div>
            <div class='flex items-end gap-2'>
              <span class='text-gray-800 lg:text-lg font-bold'>{drink.strCategory}</span>
            </div>
          </div>
        </div>
        {/each}
        <!-- product end  -->
      </div>
    </div>
  </div>
</div>