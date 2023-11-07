<script setup>
const props = defineProps({
  product: Object
})
</script>
<template>
  <ManageProductModal>
     <div class="grid grid-cols-1 md:grid-cols-2">
        <div>
          <img
          :src="`${product.image}`"
          alt=""
          class=" rounded-lg object-cover w-full h-[450px]"
        />
        </div>
        <div class="p-3">
          <div class="flex flex-col justify-center items-center space-y-5">
            <h1 class="md:text-3xl text-xl font-bold text-gray-500">{{ product.title }}</h1>
            <p class="md:font-normal md:text-lg text-gray-600 px-3">{{ product.description }}</p>
          </div>
        </div>
      </div>
  </ManageProductModal>
</template>