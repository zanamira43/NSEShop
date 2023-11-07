<script setup>
  import Eye from 'vue-material-design-icons/Eye.vue'

  const props  = defineProps({
    categories: Array,
    ComponentTitle: String
  })
</script>
<template>
  <div class="w-full my-20">
    <div class="flex justify-center py-2 mb-5">
      <h1 class="md:text-5xl text-3xl text-gray-600">{{ ComponentTitle }}</h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      <div class="shadow rounded px-2 py-1 border border-grey-200" 
      v-for="category in categories" :key="category.id">
        <NuxtLink :to="`/category/${category.slug}`">
          <img
            :src="category.image"
            :alt="category.name"
            class="rounded w-full h-[300px]"
          />
        </NuxtLink>
        <div class="px-2">
          <!-- content title -->
          <div class="mt-[10px] mb-[20px] flex justify-center">
            <h3 class="text-gray-800 font-semibold">{{ category.name }}</h3>
          </div>
          

          <!-- option button -->
          <div class="flex flex-row justify-center items-center mb-2">
            <NuxtLink :to="`/category/${category.slug}`">
              <div class="flex justify-center text-center text-gray-500 border px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white">
                <Eye />
                <span class="ml-[2px]">
                  View Details
                </span>
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>