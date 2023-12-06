<script setup>
  const props  = defineProps({
    categories: Array,
    ComponentTitle: String
  })
</script>
<template>
  <div class="w-full">
    <div class="flex justify-start p-2 ml-2">
      <h1 class="text-xl text-gray-600">{{ ComponentTitle }}</h1>
    </div>

    <hr class="w-[20%] border ml-4 mb-1">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2 p-4 z-20">
      <!-- category card -->
      <div class="category h-[400px] bg-white drop-shadow-2xl rounded border" 
            v-for="category in categories" :key="category.id">
        
        <NuxtImg :src="category.image"  alt="" class="w-full h-[70%] object-cover"/>
        <div class="m-2 h-[25%] flex flex-col justify-center items-center p-2 space-y-2 rounded border bg-gray-200">
          <h1 class="text-xl font-semibold">{{ category.name }}</h1>
          <p class="text-sm text-center">{{ category.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>