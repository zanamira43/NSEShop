<script setup>
 import PencilBoxMultipleOutline from 'vue-material-design-icons/PencilBoxMultipleOutline.vue'
 import DeleteEmptyOutline from 'vue-material-design-icons/DeleteEmptyOutline.vue'
 import Eye from 'vue-material-design-icons/Eye.vue'

  const props  = defineProps({
    categories: Array,
    ComponentTitle: String,
  })
</script>
<template>
  <div class="w-full my-2">
    <div class="flex justify-start py-2">
      <h1 class="text-2xl text-gray-600">{{ ComponentTitle }}</h1>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
      <div class="shadow rounded px-2 py-1 border border-grey-200" 
      v-for="category in categories" :key="category.id">
        <NuxtLink :to="`#`">
          <img
            :src="category.image"
            :alt="category.name"
            class="rounded w-full h-[300px]"
          />
        </NuxtLink>
        <div class="px-2">
          <!-- content title -->
          <h3 class="mt-5 text-gray-800 font-semibold">{{ category.name }}</h3>

          <!-- option button -->
          <div class="flex flex-row justify-between space-x-5 mt-5">
            <div>
              <NuxtLink :to="`/manage/categories/${category.id}`" class="text-blue-400 md:text-lg text-sm hover:text-blue-200">
              <Eye />
            </NuxtLink>
            </div>
            <div class="space-x-5 flex">
              <NuxtLink :to="`#`" class="text-green-400 md:text-lg text-sm hover:text-green-200">
              <PencilBoxMultipleOutline />
            </NuxtLink>
            <NuxtLink :to="`#`" class="text-red-400 md:text-lg text-sm hover:text-red-200">
              <DeleteEmptyOutline />
            </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>