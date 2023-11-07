<script setup>
  const props  = defineProps({
    categories: Array,
    ComponentTitle: String
  })
</script>
<template>
  <div class="w-full">

    <div class="flex justify-center py-5">
      <h1 class="md:text-4xl text-2xl text-gray-400">{{ ComponentTitle }}</h1>
    </div>

    <div class="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1">
      <div class="shadow rounded-lg px-2 py-1" v-for="category in categories" :key="category.id">
        <NuxtLink :to="`/subcategory/${category.slug}`">
          <img
            :src="category.image"
            :alt="category.name"
            class="rounded-lg w-full h-[300px]"
          />
        </NuxtLink>
        <div class="p-1">
          <!-- content title -->
          <h3 class="mt-2 text-gray-500">{{ category.name }}</h3>

          <!-- option button -->
          <div class="flex flex-row justify-end my-3">
            <NuxtLink :to="`/subcategory/${category.slug}`" class="text-blue-400 md:text-lg text-sm hover:text-blue-200">
              <span>Show</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>