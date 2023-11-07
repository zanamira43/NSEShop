<script setup>
const props = defineProps({
  product: Object
})
const emit = defineEmits(['closeModal'])

const close = () => {
  emit('closeModal')
}
</script>
<template>
  <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div> 
    <div class="fixed inset-0 z-10 overflow-y-auto">
    <div class="container mx-auto mt-28 p-5 bg-white rounded-md w-[95%] md:w-full">
      <div class="flex justify-end px-5 mb-5">
          <button @click="close">X</button>
      </div>
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
    </div>
  </div>
</template>