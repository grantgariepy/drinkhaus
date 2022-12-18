<script>
  import "../app.css";

  let navbarStatus = false;

  function navbarToggle(){
    navbarStatus = !navbarStatus;
  }
  const navbarOpen =
    'absolute outline outline-1 outline-gray-200 fixed top-14 right-3 max-h-full overflow-hidden z-10 bg-white w-max  rounded-md px-2 md:top-20 md:right-6';
  const navbarClosed = 'fixed  bottom-0 max-h-full overflow-hidden z-10 bg-gray w-0';

</script>

<div class='bg-white pb-1 sm:pb-2 lg:pb-3'>
  <div class='max-w-screen-2xl px-4 md:px-8 mx-auto'>
    <header class='flex justify-between items-center py-4 md:py-8 mb-4 md:mb-6 xl:mb-8'>
      <!-- logo - start  -->
      <a
        href='/'
        class='hover:text-orange-500 active:text-orange-700 inline-flex items-center text-black-800 text-2xl md:text-3xl font-bold gap-2.5'
        aria-label='logo'
      >
        DrinkHaus
      </a>
      <!-- logo - end -->

      <!-- nav - start -->
      <nav class='hidden lg:flex gap-12'>
        <a
          href='/categories'
          class='text-gray-600 hover:text-orange-500 active:text-orange-700 text-lg font-semibold transition duration-100'
        >
          Categories
        </a>
        <a
          href='/area'
          class='text-gray-600 hover:text-orange-500 active:text-orange-700 text-lg font-semibold transition duration-100'
        >
          Locations
        </a>

        <a
          href='/random'
          class='text-gray-600 hover:text-orange-500 active:text-orange-700 text-lg font-semibold transition duration-100'
        >
          Random
        </a>
      </nav>
      <!-- nav - end -->
      <!-- search start -->

      <!-- search end -->
      <!-- buttons - start -->
      {#if navbarStatus}
      <button
        on:click={navbarToggle} 
        type='button'
        class='z-20 inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-orange-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2'
      >
       <svg
         xmlns='http://www.w3.org/2000/svg'
         width='24'
         height='24'
         viewBox='0 0 24 24'
         fill='currentColor'
       >
         <path d='M23 20.168l-8.185-8.187 8.185-8.174-2.832-2.807-8.182 8.179-8.176-8.179-2.81 2.81 8.186 8.196-8.186 8.184 2.81 2.81 8.203-8.192 8.18 8.192z' />
       </svg>
      
        Menu
      </button>
    {:else}
    <button
        on:click={navbarToggle} 
        type='button'
        class='z-20 inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-orange-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2'
      >
     
      <svg
      xmlns='http://www.w3.org/2000/svg'
      class='h-6 w-6'
      viewBox='0 0 20 20'
      fill='currentColor'>
      <path
        fill-rule='evenodd'
        d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
        clip-rule='evenodd'
      />
      </svg>
      
        Menu
      </button>
      {/if}
      <ul class={navbarStatus ? navbarOpen : navbarClosed}>
        <li>
          <div class='border-b'>
            <a
              on:click={navbarToggle} 
              href='/'
            >
              <div class='flex justify-between text-black hover:text-orange-500 active:text-orange-600 cursor-pointer gap-2 py-4'>
                <span class='md:text-lg font-semibold transition duration-100'>
                  Home
                </span>
              </div>
            </a>
          </div>
        </li>
        <li>
          <div class='border-b'>
            <a
              on:click={navbarToggle} 
              href='/categories'
            >
            <div class='flex justify-between text-black hover:text-orange-500 active:text-orange-600 cursor-pointer gap-2 py-4'>
              <span class='md:text-lg font-semibold transition duration-100'>
                  Categories
                </span>
              </div>
            </a>
          </div>
        </li>
        <li>
          <div class='border-b'>
            <a
              on:click={navbarToggle} 
              href='/area'
            >
            <div class='flex justify-between text-black hover:text-orange-500 active:text-orange-600 cursor-pointer gap-2 py-4'>
              <span class='md:text-lg font-semibold transition duration-100'>
                  Locations
                </span>
              </div>
            </a>
          </div>
        </li>
        <li>
          <div class=''>
            <a
              on:click={navbarToggle} 
              href='/random'
            >
            <div class='flex justify-between text-black hover:text-orange-500 active:text-orange-600 cursor-pointer gap-2 py-4'>
              <span class='md:text-lg font-semibold transition duration-100'>
                  Random
                </span>
              </div>
            </a>
          </div>
        </li>
      </ul>
      <!-- buttons - end -->
    </header>
  </div>
</div>
<slot/>
<div class='bg-white pt-4 sm:pt-10 lg:pt-12'>
  <footer class='max-w-screen-2xl px-4 md:px-8 mx-auto'>
    <div class='flex flex-col items-center border-t pt-6'>
       <!-- social - start -->
      <div class='flex gap-4'>
        <a
          rel="noreferrer"
          href='https://github.com/grantgariepy'
          target='_blank'
          class='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
          aria-label='Github'
        >
          <svg
            class='w-5 h-5'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
          </svg>
        </a>
        <a
          rel="noreferrer"
          href='https://grantgariepy.com'
          target='_blank'
          class='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
          aria-label='Portfolio'
        >
          <svg
            class='w-5 h-5'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M17.133 16.202l1.596.923c-1.508 2.055-3.606 3.548-5.729 3.875v-12.102c0-2.39 2-2.619 2-4.898 0-1.654-1.346-3-3-3s-3 1.346-3 3c0 2.297 2 2.487 2 4.898v12.102c-2.123-.327-4.221-1.799-5.729-3.854l1.596-.944-4.867-2.811v5.621l1.5-.908c2.178 3.077 5.203 4.896 8.5 4.896s6.282-1.798 8.458-4.875l1.542.887v-5.621l-4.867 2.811zm-6.134-12.202c0-.551.449-1 1.001-1s1 .449 1 1-.449 1-1 1-1.001-.449-1.001-1z' />
          </svg>
        </a>
        <a
          rel="noreferrer"
          href='https://www.linkedin.com/in/grantgariepy/'
          target='_blank'
          class='text-gray-400 hover:text-gray-500 active:text-gray-600 transition duration-100'
          aria-label='LinkedIn'
        >
          <svg
            class='w-5 h-5'
            width={24}
            height={24}
            viewBox='0 0 24 24'
            fill='currentColor'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z' />
          </svg>
        </a>
      </div>
      <!-- social - end  -->
    </div>
    <div class='text-gray-400 text-sm text-center py-8'>
      © 2022 - Grant Gariepy. All rights reserved.
    </div>
  </footer>
</div>