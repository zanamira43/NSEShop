<script setup>
const props = defineProps({
  category: Object
})
</script>
<template>
  <div class="flex flex-row justify-between mt-20">
    <div class="flex flex-col justify-start space-y-2">
      <h1 class="md:text-5xl text-3xl text-neutral-600 font-normal">
        {{ category.name }}
      </h1>
      <p class="md:text-lg text-sm font-normal text-neutral-500">
        {{ category.description }}
      </p>
    </div>
    <div class="py-3" v-if="category.sub_category?.length">
      <NuxtLink :to="`/manage/categories/create`" class="text-blue-500 hover:text-blue-400">New Category</NuxtLink>
    </div>
  </div>  
</template>
