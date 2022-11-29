<script setup>
const menus = ref([
  { name: "Home" },
  { name: "Shop" },
  { name: "Blog" },
  { name: "Contact" },
]);
const opensidebar = ref(false);
</script>
<template>
  <div class="fixed w-full bg-gray-50 md:bg-white">
    <!-- navbar content -->
    <div class="container mx-auto px-3 py-3 md:py-5">
      <!-- navbar component template -->
      <div class="md:flex md:flex-row md:justify-between text-center">
        <div class="flex flex-row md:justify-center justify-between">
          <!-- side bar menu button -->
          <div class="block md:hidden">
            <button @click="opensidebar = !opensidebar">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
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
          <div
            class="bg-gradient-to-r from-purple-500 to-red-400 h-10 w-10 rounded-lg flex flex-col justify-center"
          >
            <h1 class="text-gray-50 text-sm">Logo</h1>
          </div>
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
            >
              <a href="#">{{ menu.name }}</a>
            </li>
            <li class="my-2">
              <a
                href="#"
                class="bg-purple-700 text-gray-50 hover:bg-purple-500 p-3 px-5 rounded-full"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6 inline-block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>

                Cart (0)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- sidebar menu panel for mobile version -->
    <!-- <div class="top-0 left-0 z-10">sidebar</div> -->
  </div>
</template>
