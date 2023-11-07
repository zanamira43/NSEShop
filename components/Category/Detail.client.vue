<script setup>
const props = defineProps({
  category: Object
})
</script>
<template>
  <div class="flex flex-col justify-start mt-20 space-y-2">
    <h1 class="md:text-5xl text-3xl text-neutral-600 font-normal">
      {{ category.name }}
    </h1>
    <p class="md:text-lg text-sm font-normal text-neutral-500">
      {{ category.description }}
    </p>
  </div>
</template>
