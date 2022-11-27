<script setup>
const womens = ref([
  { title: "V Neck Tassel Cape", img: "product5.png" },
  { title: "Printed Wrap Dress", img: "product2.png" },
  { title: "Blue Denim Dress", img: "product3.png" },
  { title: "High Waist Denim Skirt", img: "product4.png" },
]);
</script>
<template>
  <!-- Women Collection Component -->
  <div class="my-20">
    <!-- title -->
    <div class="flex flex-row justify-between my-2">
      <h2 class="text-3xl">WonMen's Collection</h2>
      <a href="#" class="flex flex-row justify-between">
        <span> View All</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-7 h-5 mt-[2px]"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
          />
        </svg>
      </a>
    </div>

    <!-- image && detail content of men's collection -->
    <div
      class="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2"
    >
      <div class="shadow-lg rounded-lg" v-for="women in womens" :key="women">
        <a href="#">
          <img
            :src="`/products/women/${women.img}`"
            alt=""
            class="rounded-tl-lg rounded-tr-lg"
          />
        </a>
        <div class="p-3">
          <!-- content title -->
          <h3>
            <a href="#">{{ women.title }}</a>
          </h3>
          <!-- content color -->
          <div class="flex flex-row space-x-1 my-3">
            <div class="bg-black w-5 h-5 rounded-full shadow-md mr-2"></div>
            <div class="bg-blue-800 w-5 h-5 rounded-full shadow-md mr-2"></div>
            <div class="bg-white w-5 h-5 rounded-full shadow-md mr-2"></div>
            <div class="bg-red-700 w-5 h-5 rounded-full shadow-md mr-2"></div>
            <div class="bg-green-800 w-5 h-5 rounded-full shadow-md mr-2"></div>
          </div>
          <!-- contnet size -->
          <div class="flex flex-row space-x-1">
            <div
              class="border-2 border-gray-300 text-gray-400 text-sm rounded-md px-2 py-1 mr-2"
            >
              XL
            </div>
            <div
              class="border-2 border-gray-300 text-gray-400 text-sm rounded-md px-2 py-1 mr-2"
            >
              XXL
            </div>
            <div
              class="border-2 border-gray-300 text-gray-400 text-sm rounded-md px-2 py-1 mr-2"
            >
              L
            </div>
            <div
              class="border-2 border-gray-300 text-gray-400 text-sm rounded-md px-2 py-1 mr-2"
            >
              M
            </div>
            <div
              class="border-2 border-gray-300 text-gray-400 text-sm rounded-md px-2 py-1 mr-2"
            >
              S
            </div>
          </div>
          <!-- option button -->
          <div class="flex flex-col xl:flex-row justify-between my-3">
            <a
              href="#"
              class="bg-gradient-to-r from-red-600 to-pink-500 px-4 py-2 rounded-full text-gray-50 hover:from-pink-600 hover:to-pink-600 flex flex-row justify-center text-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span> Add ToCard</span>
            </a>

            <a
              href="#"
              class="bg-purple-600 px-4 py-2 rounded-full text-gray-50 hover:bg-purple-700 flex flex-row justify-center text-sm mt-2 md:mt-0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>

              <span> View Details</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
