<script setup>
const opensidebar = ref(false);
const menus = ref([
  { name: "Home", link: "/", show: true },
  { name: "Shop", link: "/products", show: true },
  {name: "manage", link: "/manage/categories", show: true},
  { name: "Contact", link: "#", show: true },
]);
</script>
<template>
  <div class="fixed w-full bg-gray-50 md:bg-white z-40 border-b border-gray-100">
    <!-- navbar content -->
    <div class="container mx-auto px-3 py-3 md:py-5">
      <!-- navbar component template -->
      <div class="md:flex md:flex-row md:justify-between justify-center text-center">
        <div class="flex flex-row md:justify-center justify-between">
          <!-- side bar menu button -->
          <div class="block mt-2 md:hidden z-10">
            <button @click="opensidebar = !opensidebar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-8 h-8"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>

          <!-- logo -->
          <NuxtLink to="/"
            class="bg-gradient-to-r from-purple-500 to-red-400 h-10 w-10 rounded-lg flex flex-col justify-center"
          >
            <h1 class="text-gray-50 text-sm">Logo</h1>
          </NuxtLink>
        </div>

        <!-- search bar -->
        <div class="md:mt-2 md:ml-0 ml-32 -mt-10 relative flex items-center text-gray-400 focus-within:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute ml-3 pointer-events-none">
              <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input 
            type="text"
            placeholder="Search" 
            class="pr-3 pl-10 py-2 font-semibold placeholder-gray-500 text-black rounded-2xl border-none ring-2 ring-gray-300 focus:ring-gray-500 focus:ring-2 focus:outline-none" />
        </div>

        
          
        <!-- menu list for desktop & mobile  size -->
        <div>
          <ul
            class="md:flex md:flex-row md:items-center md:static absolute md:w-auto md:bg-white bg-gray-50 w-[80%] top-10 duration-700 ease-in h-[100vh] md:h-auto"
            :class="[opensidebar ? 'left-0' : 'left-[-100%]']"
          >
            <li
              v-for="(menu, index) in menus"
              :key="index"
              class="text-gray-600 hover:text-purple-500 p-3 md:px-5"
              :class="`${menu.show ? '': 'hidden'}`"
            >
              <NuxtLink :to="menu.link">{{ menu.name }}</NuxtLink>
            </li>
            <!-- <li class="my-1">
              <button
                class="bg-purple-700 text-gray-50 hover:bg-purple-500 py-2 px-5 rounded-full"
              >
                Logout
              </button>
            </li> -->
            <!-- <li class="my-1">
              <NuxtLink
                href="/login"
                class="bg-purple-700 text-gray-50 hover:bg-purple-500 py-2 px-5 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-5 h-5 inline-block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                  />
                </svg>

                Login
              </NuxtLink>
            </li> -->
          </ul>
        </div>
      </div>
    </div>

    <!-- sidebar menu panel for mobile version -->
    <!-- <div class="top-0 left-0 z-10">sidebar</div> -->
  </div>
</template>
